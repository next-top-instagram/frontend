<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardComponent from '../components/card.component.svelte';
    import { Button } from 'sveltestrap';
</script>

<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <CardComponent></CardComponent>
</Grid>
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <CardComponent></CardComponent>
</Grid>
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <CardComponent></CardComponent>
</Grid>
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    <div style="height:20px"></div>
    <Button outline black block>Load more</Button>
    <div style="height:80px"></div>
</Grid>

<style>
</style>