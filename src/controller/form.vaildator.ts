import * as yup from "yup";
// import type ObjectSchema from "yup/lib/object";
// https://stackoverflow.com/a/69025645
import type { AssertsShape, ObjectShape } from "yup/lib/object";

export class FormValidator {
  schema: yup.ObjectSchema<any>;
  formValues: Object;

  constructor(shape: ObjectShape, formValues: Object) {
    this.schema = yup.object().shape(shape);
    this.formValues = formValues;
  }

  validate(): Promise<AssertsShape<any>> {
    return this.schema.validate(this.formValues, { abortEarly: false });
  }

  getKeybasedObj() {
    return Object.keys(this.formValues).reduce((acc: any, elem: string) => {
      acc[elem] = null;
      return acc;
    }, {});
  }

  getErrors(err: any) {
    return {
      ...this.getKeybasedObj(),
      ...err.inner.reduce((acc: any, err: { path: any; message: any }) => {
        return { ...acc, [err.path]: err.message };
      }, {}),
    };
  }
}
