<script script="ts">
    import Grid from "svelte-grid-responsive";
    import CardHeader from './card.header.component.svelte';
    import CardBody from './card.body.component.svelte';
</script>

<!-- https://getcssscan.com/css-box-shadow-examples -->
<Grid style="box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;">
    <CardHeader></CardHeader>
    <CardBody></CardBody>
</Grid>