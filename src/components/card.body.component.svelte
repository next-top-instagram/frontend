<script script="ts">
    import Grid from "svelte-grid-responsive";
    import Icon from 'svelte-icons-pack/Icon.svelte';
    import AiFillHeart from "svelte-icons-pack/ai/AiFillHeart";
    import AiOutlineComment from "svelte-icons-pack/ai/AiOutlineComment";
    import AiOutlineSend from "svelte-icons-pack/ai/AiOutlineSend";
    // https://leshak.github.io/svelte-icons-pack/#/pack/ai
    import {push} from 'svelte-spa-router'
</script>

<Grid>
    <div  class="post-img"></div>
</Grid>
<Grid style="padding: 8px;text-align: left;">
    <span  class="icon-btn">
        <Icon src={AiFillHeart} size="24"/>
    </span>
    <span  class="icon-btn" on:click={() => push('/comment/1')}>
        <Icon src={AiOutlineComment} size="24" className="icon-btn"/>
    </span>
    <span  class="icon-btn">
        <Icon src={AiOutlineSend} size="24" className="icon-btn"/>
    </span>
</Grid>
<Grid style="padding:25px;margin-bottom: 40px">
    joshua_l The game in Japan was amazing and I want to share some photos
</Grid>

<style>
    .post-img {
        width: 100%;
        height: 350px;
        background-position:center;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url('https://picsum.photos/200/200?t=12');
    }
    .icon-btn {
        margin: 0 10px;
        cursor: pointer;
    }
</style>