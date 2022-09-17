<script script="ts">
    import Grid from "svelte-grid-responsive";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiOutlineMore from "svelte-icons-pack/ai/AiOutlineMore";
</script>

<Grid>
    <Grid container gutter={12}>
        <Grid xs={2} style="
        display: flex;
        align-items: center;
        justify-content: center;">
                <img class="profile-img" src="https://picsum.photos/200/200?t=1234" alt="profile">
        </Grid>
        <Grid xs={8}>
            <Grid xs={12}>joshua_l</Grid>
            <Grid xs={12}>Tokyo, Japan</Grid>
        </Grid>
        <Grid xs={2} style="
        display: flex;
        align-items: center;
        justify-content: center;">
            <Icon src={AiOutlineMore} size="24"/>
        </Grid>
    </Grid>
</Grid>

<style>
.profile-img {
        width: 32px;
        height: 32px;
        border-radius: 32px;
    }
</style>