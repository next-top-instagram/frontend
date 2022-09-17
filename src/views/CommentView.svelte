<script script="ts">
    import Grid from "svelte-grid-responsive";
    import ListItem from '../components/list.item.component.svelte';

    let commentList = [
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=1'
        },
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=2'
        },
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=3'
        },
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=4'
        },
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=5'
        },
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=6'
        }
    ]
</script>

<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    {#each commentList as comment, i}
        <ListItem 
            writer={comment.writer}
            body={comment.body}
            createDateTime={comment.createDateTime}
            profileImgUrl={comment.profileImgUrl}>
        </ListItem>
    {/each}
</Grid>