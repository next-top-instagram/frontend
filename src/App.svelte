<script lang="ts">
	import { Styles } from 'sveltestrap';
    import Router from 'svelte-spa-router';
    import routes from './routes';
	export let name: string;
    import Grid from "svelte-grid-responsive";
</script>

<main>
	<Styles />
	<h1>Hello {name}!</h1>
	<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
	<Grid >
		<Router {routes} />
	</Grid>
		
	  <Grid container gutter={12}>
		<Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
		<Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
		<Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
		<Grid xs={12} md={4} lg={3}>xs=12 md=4 lg=3</Grid>
		<Grid xs={12} lg={6}>xs=12 lg=6</Grid>
		<Grid xs={12} lg={6}>xs=12 lg=6</Grid>
		<Grid lg={4}>lg=4</Grid>
		<Grid lg={4}>lg=4</Grid>
		<Grid lg={4}>lg=4</Grid>
	  </Grid>
</main>

<style>
	main {
		text-align: center;
		/* padding: 1em; */
		/* max-width: 240px; */
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>