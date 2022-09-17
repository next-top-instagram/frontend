<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardComponent from '../components/card.component.svelte';
    import { Button } from 'sveltestrap';
    let postList = [
        {
            id: 1,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=1',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=1',
            postImgUrl: 'https://picsum.photos/200/200?t=1',
        },
        {
            id: 2,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer2',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=2',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=2',
            postImgUrl: 'https://picsum.photos/200/200?t=2',
        },
        {
            id: 3,
            body: 'joshua_l The game in Japan was amazing and I want to share some photos',
            writer: 'Post writer3',
            createDateTime: '2022-09-17 12:34:56',
            profileImgUrl: 'https://picsum.photos/200/200?t=3',
            thumbnailImgUrl: 'https://picsum.photos/200/200?t=3',
            postImgUrl: 'https://picsum.photos/200/200?t=3',
        }
    ]
</script>

{#each postList as post, i}
    <Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
        <CardComponent 
            id={post.id}
            body={post.body} 
            writer={post.writer} 
            createDateTime={post.createDateTime} 
            profileImgUrl={post.profileImgUrl}
            postImgUrl={post.postImgUrl}></CardComponent>
    </Grid>
{/each}
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <div style="height:20px"></div>
    <Button outline black block>Load more</Button>
    <div style="height:80px"></div>
</Grid>

<style>
</style>