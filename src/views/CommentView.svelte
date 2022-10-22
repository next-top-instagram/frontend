<script script="ts">
    import Grid from "svelte-grid-responsive";
    import ListItem from '../components/list.item.component.svelte';
    import { Form, FormGroup, FormText, Input, Label, Button } from 'sveltestrap';
    import { FormValidator } from '../controller/form.vaildator';
    import * as yup from 'yup';
    import { email } from '../store';
    import { onMount } from 'svelte';

  import axios from 'axios';

  export let params = {}
    const formValues = {
        body: '',
        postId: Number(params.id)
    }
    console.log(formValues, 'tes')

    const formValidator = new FormValidator(
        {
            body: yup.string().required("Body is required").matches(/^([\p{L}A-Za-z0-9\s\n]*)$/u, "Only you can type text"),
            postId: yup.number().required()
        }, formValues
    );
    let commentList = []

    let errors = {}
    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            event.preventDefault();
            const result = await formValidator.validate();
            errors = {};

        } catch (err) {
            console.log('err', err.errors, err.path);
            errors = formValidator.getErrors(err);
            console.log('errs', errors)
        }
    };
    let page = 0;
    async function loadCommentList(page) {
        try {
            const axiosResult = await axios.get(`/backend/api/comment/${params.id}?page=` + page);
            console.log('axios', axiosResult.data);
            // resList.forEach(post => {
            //     postList.push(post);
            // });
            const resList = (axiosResult.data || []).map(comment => {
                return {
                    writer: comment.email,
                    createDateTime: comment.comment_time,
                    body: comment.body,
                    profileImgUrl: 'https://picsum.photos/200/200?t=' + Math.random(),
                }
            });
            // resList.forEach(post => {
            //     postList.push(post);
            // });
            commentList = commentList.concat(resList);
            return true;
        } catch (err) {
            console.log('err', err);
        }
        finally {
        }
    }
    onMount(async () => {
        await loadCommentList(page);
	});
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