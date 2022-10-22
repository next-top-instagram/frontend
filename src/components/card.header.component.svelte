<script script="ts">
    import Grid from "svelte-grid-responsive";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    // import AiOutlineMore from "svelte-icons-pack/ai/AiOutlineMore";
    import AiOutlineDelete from "svelte-icons-pack/ai/AiOutlineDelete";
    import { email } from '../store';

    export let writer = 'Post writer';
    export let createDateTime = '2022-09-17 12:34:56'
    export let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

</script>

<Grid>
    <Grid container gutter={12}>
        <Grid xs={2} style="
        display: flex;
        align-items: center;
        justify-content: center;">
                <img class="profile-img" src={profileImgUrl} alt="profile">
        </Grid>
        <Grid xs={8}>
            <Grid xs={12}>{writer}</Grid>
            <Grid xs={12}>{createDateTime}</Grid>
        </Grid>
        {#if $email == writer}
        <Grid xs={2} style="
        display: flex;
        cursor:pointer;
        align-items: center;
        justify-content: center;">
        <span on:click={() => dispatch('ondelete')}><Icon src={AiOutlineDelete} size="24"/></span>
            
        </Grid>
        {/if}
    </Grid>
</Grid>

<style>
.profile-img {
        width: 32px;
        height: 32px;
        border-radius: 32px;
    }
</style>