<script>
    import Grid from "svelte-grid-responsive";

    export let writer = 'This is user name'
    export let body = 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf'
    export let createDateTime = '2 days ago'
    export let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
</script>

<Grid container>
    <Grid xs={1}>
        <img class="profile-img" src={profileImgUrl} alt="profile">
    </Grid>
    <Grid xs={11} style="text-align:left">
        <span style="font-weight:bold;margin-right:5px">{writer}</span>
        <span style="    word-break: break-all;">{body}</span>
    </Grid>
    <Grid xs={11} xsOffset={1} style="text-align: left">{createDateTime}</Grid>
    <hr>
</Grid>

<style>

    .profile-img {
            width: 24px;
            height: 24px;
            border-radius: 24px;
        }
    </style>