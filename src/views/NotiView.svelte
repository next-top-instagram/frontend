<script script="ts">
    import Grid from "svelte-grid-responsive";
    import ListItem from '../components/list.item.component.svelte';

    let notiList = [
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
    {#each notiList as noti, i}
        <ListItem 
            writer={noti.writer}
            body={noti.body}
            createDateTime={noti.createDateTime}
            profileImgUrl={noti.profileImgUrl}>
        </ListItem>
    {/each}
</Grid>