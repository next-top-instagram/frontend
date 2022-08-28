<script script="ts">
    import Grid from "svelte-grid-responsive";
	export let title = 'Index View'
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineNodeExpand from 'svelte-icons-pack/ai/AiOutlineNodeExpand';
</script>


<Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1} style="border: black solid 1px;">
    <Grid container gutter={12}>
        <Grid xs={2}>
            <img class="profile-img" src="https://picsum.photos/200/200?t=1234">
        </Grid>
        <Grid xs={8}>
            <Grid xs={12}>joshua_l</Grid>
            <Grid xs={12}>Tokyo, Japan</Grid>
        </Grid>
        <Grid xs={2}>...</Grid>
    </Grid>
</Grid>
<Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}  style="border: black solid 1px;">
    <div  class="post-img"></div>
</Grid>
<Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}  style="border: black solid 1px;">
<Icon src={AiOutlineNodeExpand} />
</Grid>
<Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}  style="border: black solid 1px;">
    joshua_l The game in Japan was amazing and I want to share some photos
</Grid>
<style>
    .profile-img {
        width: 32px;
        height: 32px;
        border-radius: 32px;
    }

    .post-img {
        width: 100%;
        height: 350px;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('https://picsum.photos/200/200?t=12');
    }
</style>