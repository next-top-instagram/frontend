<script>
    import Grid from "svelte-grid-responsive";
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { Button } from 'sveltestrap';
  import { FormValidator } from '../controller/form.vaildator';
  import * as yup from 'yup';
import {push} from 'svelte-spa-router'
  import axios from 'axios';
    const formValues = {
        password: '',
        passwordConfirm: '',
    }

    const formValidator = new FormValidator(
        {
            password: yup.string().required("Password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/, "Not valid password"),
            passwordConfirm: yup.string().required("Password is required").oneOf([yup.ref("password"), null], "Password not matched")
        }, formValues
    );

    let errors = {}

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            event.preventDefault();
            const result = await formValidator.validate();
            try {
                console.log('send');
                const axiosResult = await axios.put('/backend/api/account', formValues);
                console.log('ax', axiosResult)
                if (axiosResult.data.status) {
                    alert("Password changed")
                }
            } catch (axiosErr) {
                console.log('axErr', axiosErr);
                alert("Error! Try later")
            } finally {
                push("/")
                errors = {};
            }
        } catch (err) {
            console.log('err', err.errors, err.path);
            errors = formValidator.getErrors(err);
            console.log('errs', errors)
        }
    }
</script>

<!-- <Grid container> -->
    <Form on:submit={handleSubmit}>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input New Password</Label>
                <Input plaintext
                placeholder="특수, 영문 대소, 숫자 조합 8 ~ 10자리"
                type="password" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;" bind:value={formValues.password} invalid={errors.password} feedback={errors.password}/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input New Password Again</Label>
                <Input plaintext 
                placeholder="특수, 영문 대소, 숫자 조합 8 ~ 10자리"
                type="password" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;" bind:value={formValues.passwordConfirm} invalid={errors.passwordConfirm} feedback={errors.passwordConfirm}/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button block style="width:100%" type="submit">Submit</Button>
        </Grid>
    </Form>

<!-- </Grid> -->