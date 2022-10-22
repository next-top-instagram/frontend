<script>
	import { Navbar, NavbarBrand } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlinePlusSquare from "svelte-icons-pack/ai/AiOutlinePlusSquare";
    import AiOutlineHeart from "svelte-icons-pack/ai/AiOutlineHeart";
    import AiOutlineLock from "svelte-icons-pack/ai/AiOutlineLock";

    import {push} from 'svelte-spa-router'
    // https://github.com/ItalyPaleAle/svelte-spa-router
    import { email } from '../store';

    export let profileImgUrl = 'https://picsum.photos/200/200?t=1234'
        // https://github.com/EmilTholin/svelte-routing/blob/master/README.md
</script>

<Navbar
  light={true}
  fixed="top"
  color="light"
>
<!-- https://getbootstrap.com/docs/5.0/components/navbar/ -->
<!-- https://github.com/bestguy/sveltestrap/blob/master/src/Navbar.svelte -->
  <NavbarBrand href="/">Instagram</NavbarBrand> 
  <span>
    {#if $email}
        <span class="plus-btn-gap" on:click={() => push('/create')}>
            <Icon src={AiOutlinePlusSquare} size="24"/>
        </span>
        <span class="plus-btn-gap" on:click={() => push('/noti')}>
            <Icon src={AiOutlineHeart} size="24"/>
        </span>
	    <img class="profile-img" src={profileImgUrl} alt="profile"  on:click={() => push(`/profile/${$email}`)}>
    {:else}
        <span class="plus-btn-gap2" on:click={() => push("/login")}>
            <Icon src={AiOutlineLock} size="24"/>
        </span>
    {/if}
  </span>
</Navbar>

<style>

.profile-img {
        width: 32px;
        height: 32px;
        border-radius: 32px;
        cursor: pointer;
    }
	.plus-btn-gap {
		margin-right: 32px;
		transition-timing-function: linear;
		transition-property: all;
		transition-duration: 0.5s;
        cursor: pointer;
	}

	.plus-btn-gap2 {
		margin-right: 4px;
		transition-timing-function: linear;
		transition-property: all;
		transition-duration: 0.5s;
        cursor: pointer;
	}

	@media (min-width: 768px) {
        .plus-btn-gap {
            margin-right: 64px;
        }
        .plus-btn-gap2 {
            margin-right: 8px;
        }
	}
</style>