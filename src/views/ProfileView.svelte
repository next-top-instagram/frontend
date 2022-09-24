<script script="ts">
    import Grid from "svelte-grid-responsive";
    import { Button } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineAppstore from "svelte-icons-pack/ai/AiOutlineAppstore";
    import AiOutlinePicture from "svelte-icons-pack/ai/AiOutlinePicture";
    import {push} from 'svelte-spa-router'
    export let params = {}
    // params.email

    let postList = [
        {
            id: 1,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=1',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=1'
        },
        {
            id: 2,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=2',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=2'
        },
        {
            id: 3,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=3',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=3'
        },
        {
            id: 4,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=4',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=4'
        },
        {
            id: 5,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=5',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=5'
        },
        {
            id: 6,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=6',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=6'
        },
        {
            id: 7,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=7',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=7'
        },
        {
            id: 8,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=8',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=8'
        },
        {
            id: 9,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=9',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=9'
        },
    ];
    import axios from 'axios';
    import { onMount } from 'svelte';
    onMount(async () => {
        try {
            const axiosResult = await axios.get('http://localhost:8082/api/post/' + params.email);
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

    function onLogOutBtnClicked() {
        push("/")
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
        <Grid container style="margin: 15px 0">
            <Grid xs={10} xsOffset={1} md={6} mdOffset={0} lg={5} style="margin:0 auto 15px; padding: 0 5px">
                <Button block on:click={() => push("/passwordchage")}>Update password</Button>
            </Grid>
            <Grid xs={10} xsOffset={1} md={6} mdOffset={0} lg={5}  style="margin:0 auto 15px; padding: 0 5px">
                <Button block on:click={() => onLogOutBtnClicked()}>Log-out</Button>
            </Grid> 
        </Grid>
        <Grid container style="margin: 15px 0">
            <Grid xs={6} style="border-bottom: 4px solid #6c757d; padding-bottom: 15px;cursor:pointer">
                <Icon src={AiOutlineAppstore} size="24"/>
            </Grid>
            <Grid xs={6} style="border-bottom: 0px solid #6c757d; padding-bottom: 15px;cursor:pointer">
                <Icon src={AiOutlinePicture} size="24"/>
            </Grid>
        </Grid>
        <Grid container>
            {#each postList as post, i}
                <Grid xs={4} style="padding:5px">
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