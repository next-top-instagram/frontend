<script>
    import Grid from "svelte-grid-responsive";
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { Button } from 'sveltestrap';
  import { FormValidator } from '../controller/form.vaildator';
  import * as yup from 'yup';
  import axios from 'axios';
    import Icon from 'svelte-icons-pack/Icon.svelte';
  import AiOutlinePlus from "svelte-icons-pack/ai/AiOutlinePlus";

    const formValues = {
        email: '',
        password: '',
        passwordConfirm: '',
    }

    const formValidator = new FormValidator(
        {
            email: yup.string().required("Email is required").matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Not valid email"),
            password: yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, "Not valid password"),
            passwordConfirm: yup.string().required("Password is required").oneOf([yup.ref("password"), null], "Password not matched")
        }, formValues
    );

    let errors = {}

    const handleSubmit = async (event) => {
    }

    const handleDragOver = (event) => {
        event.preventDefault();
    }

    function fileLoader(file) {
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
            img = await fileLoader(event.dataTransfer.files[0]);
        }
    }

    const handleFileInputChange = async (event) => {
        console.log('e', event.target.files);
        if (event.target.files && event.target.files.length > 0) {
            img = await fileLoader(event.target.files[0]);
        }
    }
    let fileInput;
    let img = null;
</script>

<!-- <Grid container> -->
    <Form on:submit={handleSubmit}>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <div style="border: dashed #6c757d 7px;width:100%; height:200px;margin: 15px auto;display: flex;border-radius: 15px;
            align-items: center;
            background-image: url({img});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            justify-content: center;" on:drop={handleDrop} on:dragover={handleDragOver} on:click={() => {fileInput.click()}}>
                <Icon src={AiOutlinePlus} size="24"/> 
            </div>
            <input type="file" id="image" bind:this={fileInput} on:change={handleFileInputChange} name="myImage" accept="image/png, image/gif, image/jpeg" style="display: none;"/>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <!-- <Label for="exampleText">Text Area</Label> -->
                <Input type="textarea" name="text" id="exampleText" placeholder="무슨 일이 있었나요?" rows="4" style="border-radius: 15px"/>
            </FormGroup> 
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button block style="width:100%" type="submit">Submit</Button>
        </Grid>
    </Form>

<!-- </Grid> -->