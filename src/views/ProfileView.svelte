<script script="ts">
    import Grid from "svelte-grid-responsive";
    import { Button } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineAppstore from "svelte-icons-pack/ai/AiOutlineAppstore";
    import AiOutlinePicture from "svelte-icons-pack/ai/AiOutlinePicture";
    export let params = {}
</script>

<Grid container gutter={12} >
    <Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
        <Grid container>
            <Grid xs={4}>
                <img class="profile-img" src="https://picsum.photos/200/200?t=1234" alt="profile">
            </Grid>
            <Grid xs={8} style="
            display: flex;
            align-items: center;
            justify-content: center;">
                <Grid container>
                    <Grid xs={12}>Post 25</Grid>
                    <Grid xs={12}>{params.email}</Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container style="margin: 15px 0">
            <Grid xs={10} xsOffset={1}>
                <Button block>Update password</Button>
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
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
            <Grid xs={4} style="padding:5px">
                <div class="img-grid-item"></div>
            </Grid>
        </Grid>
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