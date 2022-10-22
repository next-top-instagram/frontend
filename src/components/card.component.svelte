<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardHeader from './card.header.component.svelte';
    import CardBody from './card.body.component.svelte';
    import axios from 'axios';

    export let id = 0
    export let body = 'joshua_l The game in Japan was amazing and I want to share some photos'
    export let writer = 'Post writer';
    export let createDateTime = '2022-09-17 12:34:56'
    export let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
    export let postImgUrl = 'https://picsum.photos/200/200?t=12'

    let isDeleted = false;
    async function deletePost() {
        console.log('del')
        if (!confirm('Confirm delete')) {
            return;
        }
        try {
            const result = await axios.delete(`/backend/api/post/${id}`);
            alert(result.data.message);
            isDeleted = true;
        } catch (err) {
            console.error(err);
            alert('Error! Try again later');
        }
    }
</script>

{#if !isDeleted}
<!-- https://getcssscan.com/css-box-shadow-examples -->
<Grid style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <CardHeader {writer} {createDateTime} {profileImgUrl} on:ondelete={() => deletePost()}></CardHeader>
    <CardBody {body} {postImgUrl} {id}></CardBody>
</Grid>
{/if}