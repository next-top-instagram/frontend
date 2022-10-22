<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardComponent from '../components/card.component.svelte';

    export let params = {}
    let id = Number(params.id)
    let body = 'joshua_l The game in Japan was amazing and I want to share some photos'
    let writer = 'Post writer';
    let createDateTime = '2022-09-17 12:34:56'
    let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
    let postImgUrl = 'https://picsum.photos/200/200?t=12'

    import axios from 'axios';

    let isProcessing = false;
    import { onMount } from 'svelte';

    onMount(async () => {
        isProcessing = true;
        try {
            const axiosResult = await axios.get(`/backend/api/post/item/${id}`);
            console.log(axiosResult);
            if (axiosResult.data.data) {
                const data = axiosResult.data.data;
                id = data.id;
                body = data.body;
                writer = data.email;
                createDateTime = data.createTime;
                postImgUrl = data.url;
            }
        } catch (err) {
            console.error(err);
            alert('Error! Try again later')
        }
        finally {
            isProcessing = false;
        }
	});
</script>

<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    {#if !isProcessing}
    <CardComponent
        {id} {body} {writer} {createDateTime} {profileImgUrl} {postImgUrl}
    ></CardComponent>
    {:else}
    <span>Loading...</span>
    {/if}
</Grid>


<style>
</style>