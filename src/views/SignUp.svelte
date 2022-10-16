<script>
    import Grid from "svelte-grid-responsive";
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { Button } from 'sveltestrap';
  import { FormValidator } from '../controller/form.vaildator';
  import * as yup from 'yup';
  import axios from 'axios';
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
        try {
            event.preventDefault();
            console.log('e', event, formValues);
            const result = await formValidator.validate();
            console.log('re', result)
            try {
                console.log('send');
                const axiosResult = await axios.post('/backend/api/account', formValues);
                console.log('ax', axiosResult)
                alert(axiosResult.data.message)
            } catch (axiosErr) {
                console.log('axErr', axiosErr);
            }
            errors = {};
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
                <Label for="exampleEmail">Input Email</Label>
                <!-- https://stackoverflow.com/a/59028650 -->
                <Input plaintext type="email" bind:value={formValues.email} invalid={errors.email} feedback={errors.email} 
                placeholder="로그인 할 이메일 주소"
                style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;"/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input Password</Label>
                <Input plaintext
                placeholder="특수, 영문 대소, 숫자 조합 8 ~ 10자리"
                type="password" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;" bind:value={formValues.password} invalid={errors.password} feedback={errors.password}/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input Password Again</Label>
                <Input plaintext 
                placeholder="특수, 영문 대소, 숫자 조합 8 ~ 10자리"
                type="password" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;" bind:value={formValues.passwordConfirm} invalid={errors.passwordConfirm} feedback={errors.passwordConfirm}/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button color="primary" style="width:100%" type="submit">Sign Up</Button>
        </Grid>
    </Form>

<!-- </Grid> -->