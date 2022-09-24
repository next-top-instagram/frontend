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
</script>

<!-- <Grid container> -->
    <Form on:submit={handleSubmit}>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <div style="border: dashed #6c757d 7px;width:100%; height:150px;margin: 15px auto;display: flex;
            align-items: center;
            justify-content: center;">
                <Icon src={AiOutlinePlus} size="24"/> 
            </div>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <!-- <Label for="exampleText">Text Area</Label> -->
                <Input type="textarea" name="text" id="exampleText" placeholder="무슨 일이 있었나요?" rows="4" />
            </FormGroup> 
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button block style="width:100%" type="submit">Submit</Button>
        </Grid>
    </Form>

<!-- </Grid> -->