<script>
    import Grid from "svelte-grid-responsive";
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { Button } from 'sveltestrap';
  import { FormValidator } from '../controller/form.vaildator';
  import * as yup from 'yup';
  import axios from 'axios';
    import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";
import { push } from "svelte-spa-router";

    const formValues = {
        body: '',
        img: '',
        formFile: null
    }

    const formValidator = new FormValidator(
        {
            img: yup.string().required("Image is required"), 
            body: yup.string().required("Body is required").matches(/^([\p{L}A-Za-z0-9\s\n]*)$/u, "Only you can type text")
        }, formValues
    );

    let errors = {}

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            event.preventDefault();
            const result = await formValidator.validate();
            errors = {};

            const frm = new FormData()
            frm.append('body', formValues.body)
            frm.append('file', formValues.formFile)
            const axiosResult = await axios.post('http://localhost:8082/api/post', frm, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log('axios', axiosResult);
            if (axiosResult.status === 200) {
                alert("ok");
                formValues.body = '';
                formValues.img = '';
                formValues.formFile = null;
            }
        } catch (err) {
            console.log('err', err.errors, err.path);
            errors = formValidator.getErrors(err);
            console.log('errs', errors)
        }
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    function fileLoader(file) {
        formValues.formFile = file; 
        return new Promise((resolve) => {
            let loader = new FileReader();
            loader.onload = () => {
                resolve(loader.result);
            } 
            loader.readAsDataURL(file)
        });
        // https://stackoverflow.com/a/3814285
    }

    const handleDrop = async (event) => {
        event.preventDefault();
        console.log('e', event.dataTransfer.files);
        if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
            formValues.img = await fileLoader(event.dataTransfer.files[0]);
        }
    }

    const handleFileInputChange = async (event) => {
        console.log('e', event.target.files);
        if (event.target.files && event.target.files.length > 0) {
            formValues.img = await fileLoader(event.target.files[0]);
        }
    }
    let fileInput;
    // let img = null;
</script>

<!-- <Grid container> -->
    <Form on:submit={handleSubmit}>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <div style="border: dashed #6c757d 7px;width:100%; height:200px;margin: 15px auto;display: flex;border-radius: 15px;
            align-items: center;
            background-image: url({formValues.img});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            justify-content: center;" on:drop={handleDrop} on:dragover={handleDragOver} on:click={() => {fileInput.click()}}>
                <Icon src={AiOutlinePlus} size="24"/> 
            </div>
            <input type="file" id="image" bind:this={fileInput} on:change={handleFileInputChange}  name="myImage" accept="image/png, image/gif, image/jpeg" style="display: none;"/>
            
            {#if errors.img}
                <div style="color:#dc3545;margin-bottom: 5px">
                    {errors.img}
                </div>
            {/if}
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <!-- <Label for="exampleText">Text Area</Label> -->
                <Input type="textarea" name="text" id="exampleText" placeholder="무슨 일이 있었나요?" rows="4" style="border-radius: 15px"
                bind:value={formValues.body} invalid={errors.body} feedback={errors.body} />

            </FormGroup> 
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button block style="width:100%" type="submit">Submit</Button>
        </Grid>
    </Form>

<!-- </Grid> -->