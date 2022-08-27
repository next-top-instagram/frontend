import * as yup from "yup";
// import type ObjectSchema from "yup/lib/object";
import type { AssertsShape, ObjectShape } from "yup/lib/object";

export class FormValidator {
  schema: yup.ObjectSchema<any>;
  formValues: Object;

  constructor(shape: ObjectShape, formValues: Object) {
    this.schema = yup.object().shape(shape);
    this.formValues = formValues;
  }

  validate(): Promise<AssertsShape<any>> {
    return this.schema.validate(this.formValues);
  }
}
