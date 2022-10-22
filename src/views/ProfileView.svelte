<script script="ts">
    import Grid from "svelte-grid-responsive";
    import { Button } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineAppstore from "svelte-icons-pack/ai/AiOutlineAppstore";
    import AiOutlinePicture from "svelte-icons-pack/ai/AiOutlinePicture";
    import {push} from 'svelte-spa-router'
    export let params = {}
    import { emailLoggedIn, email } from '../store';
    // params.email

    let postList = [];
    import axios from 'axios';
    import { onMount } from 'svelte';
    onMount(async () => {
        try {
            const axiosResult = await axios.get('/backend/api/post/' + params.email);
            console.log('axios', axiosResult.data);
            postList = (axiosResult.data || []).map(post => {
                return {
                    ...post,
                    profileImgUrl: 'https://picsum.photos/200/200?t=9',
                    thumbnailImgUrl: post.url
                }
            });
        } catch (err) {
            console.log('err', err);
        }
	});
    let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
    let tab = 'grid'

    async function onLogOutBtnClicked() {
        try {
            await axios.delete('/backend/api/login')
            push("/")
        } catch (err) {
            console.error(`[ProfileView] [onLogOutBtnClicked] err`, err);
        } finally {
            document.cookie = 'INSTASESSIONID=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            emailLoggedIn('');
        }
    }
</script>

<Grid container gutter={12} >
    <Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
        <Grid container>
            <Grid xs={4}>
                <img class="profile-img" src={profileImgUrl} alt="profile">
            </Grid>
            <Grid xs={8} style="
            display: flex;
            align-items: center;
            justify-content: center;">
                <Grid container>
                    <Grid xs={12}>Post {postList.length}</Grid>
                    <Grid xs={12}>{params.email}</Grid>
                </Grid>
            </Grid>
        </Grid>

        {#if $email && params.email && $email == params.email}
        <Grid container style="margin: 15px 0">
            <Grid xs={10} xsOffset={1} md={6} mdOffset={0} lg={5} style="margin:0 auto 15px; padding: 0 5px">
                <Button block on:click={() => push("/passwordchage")}>Update password</Button>
            </Grid>
            <Grid xs={10} xsOffset={1} md={6} mdOffset={0} lg={5}  style="margin:0 auto 15px; padding: 0 5px">
                <Button block on:click={() => onLogOutBtnClicked()}>Log-out</Button>
            </Grid> 
        </Grid>
        {/if}
        <Grid container style="margin: 15px 0">
            <Grid xs={6} style="border-bottom: {tab === 'grid' ? 4 : 0}px solid #6c757d; padding-bottom: 15px;cursor:pointer">
                <div on:click={() => {tab = 'grid'}}>
                    <Icon src={AiOutlineAppstore} size="24"/>
                </div>
            </Grid>
            <Grid xs={6} style="border-bottom: {tab === 'row' ? 4 : 0}px solid #6c757d; padding-bottom: 15px;cursor:pointer">
                <div on:click={() => {tab = 'row'}}>
                    <Icon src={AiOutlinePicture} size="24"/>
                </div>
            </Grid>
        </Grid>
        <Grid container>
            {#each postList as post, i}
                <Grid xs={tab === 'grid' ? 4 : 0} style="padding:5px">
                    <div class="img-grid-item" 
                    style="background-image: url({post.thumbnailImgUrl});"
                    on:click={() => push(`/post/${post.id}`)}></div>
                </Grid>
            {/each}
        </Grid>
    </Grid>
    <Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
        <div style="height:20px"></div>
        <Button outline black block>Load more</Button>
        <div style="height:80px"></div>
    </Grid>
</Grid>

<style>

.profile-img {
        width: 128px;
        height: 128px;
        border-radius: 128px;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }

.img-grid-item {
    background-image: url(https://picsum.photos/200/200?t=1234);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:100%;
    height:180px;
    cursor: pointer;
}
</style>