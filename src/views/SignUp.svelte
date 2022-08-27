<script>
    import Grid from "svelte-grid-responsive";
    import { Form, FormGroup, FormText, Input, Label } from 'sveltestrap';
  import { Button } from 'sveltestrap';
  import { FormValidator } from '../controller/form.vaildator';
</script>

<!-- <Grid container> -->
    <Form>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input Email</Label>
                <Input plaintext type="email" value="Some plain text/ static value"  invalid feedback="I could be wrong" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;"/>
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <FormGroup>
                <Label for="exampleEmail">Input Password</Label>
                <Input plaintext value="Some plain text/ static value"
                type="password" style="border-radius: 5px;
                border: solid 0.5px rgba(0, 0, 0, 0.1);
                background-color: #fafafa;" />
            </FormGroup>
        </Grid>
        <Grid xs={12} md={10} lg={4} lgOffset={4} mdOffset={1}>
            <Button color="primary" style="width:100%">Sign Up</Button>
        </Grid>
    </Form>

<!-- </Grid> -->