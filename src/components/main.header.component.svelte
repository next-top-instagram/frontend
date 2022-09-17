<script>
	import { Navbar, NavbarBrand } from 'sveltestrap';
    import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlinePlusSquare from "svelte-icons-pack/ai/AiOutlinePlusSquare";
</script>

<Navbar
  light={true}
>
  <NavbarBrand href="/">Instagram</NavbarBrand> 
  <span>
	<span class="plus-btn-gap">
		<Icon src={AiOutlinePlusSquare} size="24"/>
	</span>
	<img class="profile-img" src="https://picsum.photos/200/200?t=1234" alt="profile">
  </span>
</Navbar>

<style>

.profile-img {
        width: 32px;
        height: 32px;
        border-radius: 32px;
    }
	.plus-btn-gap {
		margin-right: 32px;
		transition-timing-function: linear;
		transition-property: all;
		transition-duration: 0.5s;
	}

	@media (min-width: 768px) {
        .plus-btn-gap {
            margin-right: 64px;
        }
	}
</style>