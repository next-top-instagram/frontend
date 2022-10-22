<script script="ts">
    import Grid from "svelte-grid-responsive";
    import ListItem from '../components/list.item.component.svelte';
    import { Form, FormGroup, FormText, Input, Label, Button } from 'sveltestrap';
    import { FormValidator } from '../controller/form.vaildator';
    import * as yup from 'yup';
  import { params } from "svelte-spa-router";
    import { email } from '../store';

    const formValues = {
        body: '',
        postId: Number(params.id)
    }

    const formValidator = new FormValidator(
        {
            body: yup.string().required("Body is required").matches(/^([\p{L}A-Za-z0-9\s\n]*)$/u, "Only you can type text"),
            postId: yup.number().required()
        }, formValues
    );
    let commentList = [
        {
            writer: 'This is user name',
            body: 'asdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfafasdfasdfasdfasdfsafasfaf',
            createDateTime: '2 days ago',
            profileImgUrl: 'https://picsum.photos/200/200?t=1'
        },
    ]

    let errors = {}
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
</script>
{#if $email}
<Form on:submit={handleSubmit}>
    <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
        <FormGroup>
            <!-- <Label for="exampleText">Text Area</Label> -->
            <Input type="textarea" name="text" id="exampleText" placeholder="댓글을 남겨 주세요" rows="4" style="border-radius: 15px"
            bind:value={formValues.body} invalid={errors.body} feedback={errors.body} />

        </FormGroup> 
    </Grid>
    <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
        <Button block style="width:100%" type="submit">Submit</Button>
    </Grid>
</Form>
{/if}
<div style="height: 50px;"></div>
<Grid xs={12} md={8} lg={6} xl={4} xlOffset={4} lgOffset={3} mdOffset={2}>
    {#each commentList as comment, i}
        <ListItem 
            writer={comment.writer}
            body={comment.body}
            createDateTime={comment.createDateTime}
            profileImgUrl={comment.profileImgUrl}>
        </ListItem>
    {/each}
</Grid>