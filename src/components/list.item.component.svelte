<script>
    import Grid from "svelte-grid-responsive";
</script>

<Grid container>
    <Grid xs={1}>
        <img class="profile-img" src="https://picsum.photos/200/200?t=1234" alt="profile">
    </Grid>
    <Grid xs={11} style="text-align:left">
        <span style="font-weight:bold;margin-right:5px">This is user name</span>
        <span style="    word-break: break-all;">asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf</span>
    </Grid>
    <Grid xs={11} xsOffset={1} style="text-align: left">2 days ago</Grid>
    <hr>
</Grid>

<style>

    .profile-img {
            width: 24px;
            height: 24px;
            border-radius: 24px;
        }
    </style>