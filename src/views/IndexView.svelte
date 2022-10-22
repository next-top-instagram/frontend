<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardComponent from '../components/card.component.svelte';
    import { Button } from 'sveltestrap';
  import axios from 'axios';
    let postList = []
    let page = 0;

    let isProcessing = false;
    import { onMount } from 'svelte';
    async function loadPostList(page) {
        isProcessing = true;
        try {
            console.log('/backend/api/post?page=' + page)
            const axiosResult = await axios.get('/backend/api/post?page=' + page);
            console.log('axios', axiosResult.data);
            const resList = (axiosResult.data || []).map(post => {
                return {
                    ...post,
                    profileImgUrl: 'https://picsum.photos/200/200?t=' + Math.random(),
                    thumbnailImgUrl: post.url.includes('https://picsum.photos/200/200') ? post.url : '/backend' + post.url,
                    postImgUrl: post.url.includes('https://picsum.photos/200/200') ? post.url : '/backend' + post.url
                }
            });
            // resList.forEach(post => {
            //     postList.push(post);
            // });
            postList = postList.concat(resList);
            console.log('post list', postList)
            return true;
        } catch (err) {
            console.log('err', err);
        }
        finally {
            isProcessing = false;
        }
    }
    onMount(async () => {
        await loadPostList(page);
	});
</script>

{#if !isProcessing}
{#each postList as post, i}
    <Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
        <CardComponent 
            id={post.id}
            body={post.body} 
            writer={post.email} 
            createDateTime={post.createTime} 
            profileImgUrl={post.profileImgUrl}
            postImgUrl={post.postImgUrl}></CardComponent>
    </Grid>
{/each}
{:else}
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    loading...
</Grid>
{/if}
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <div style="height:20px"></div>
    <Button outline black block on:click={async () => await loadPostList(++page)}>Load more</Button>
    <div style="height:80px"></div>
</Grid>

<style>
</style>