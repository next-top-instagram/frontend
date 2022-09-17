<script>
	import { Navbar, NavbarBrand } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlinePlusSquare from "svelte-icons-pack/ai/AiOutlinePlusSquare";
    import AiOutlineHeart from "svelte-icons-pack/ai/AiOutlineHeart";

    import {push} from 'svelte-spa-router'
    // https://github.com/ItalyPaleAle/svelte-spa-router

    function onClickCreatePost() {
        push("/create")
    }

    function onClickGoToNotiView() {
        push("/noti")
        // https://github.com/EmilTholin/svelte-routing/blob/master/README.md
    }

    function onClickGoToProfile() {
        push("/profile/test@example.com")
        // https://github.com/EmilTholin/svelte-routing/blob/master/README.md
    }
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
	<span class="plus-btn-gap" on:click={onClickCreatePost}>
        <Icon src={AiOutlinePlusSquare} size="24"/>
	</span>
	<span class="plus-btn-gap" on:click={onClickGoToNotiView}>
        <Icon src={AiOutlineHeart} size="24"/>
	</span>
	<img class="profile-img" src="https://picsum.photos/200/200?t=1234" alt="profile" on:click={onClickGoToProfile}>
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

	@media (min-width: 768px) {
        .plus-btn-gap {
            margin-right: 64px;
        }
	}
</style>