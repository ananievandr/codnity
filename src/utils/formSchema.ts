import * as Yup from 'yup';

const validators = {
  email: Yup.string()
    .email('validation.email')
    .required('validation.required'),
  name: Yup.string()
    .min(2, 'validation.short')
    .max(255, 'validation.longName')
    .required('validation.required'),
  phone: Yup.string()
    .min(4, 'validation.medium')
    .max(255, 'validation.longPhone')
    .required('validation.required'),
  field: Yup.string().max(255, 'validation.fieldMax'),
  message: Yup.string().max(5000, 'validation.messageMax'),
};

export default validators;
