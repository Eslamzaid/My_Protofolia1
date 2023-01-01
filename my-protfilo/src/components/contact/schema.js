import * as yup from 'yup'


export const BasicSchema = yup.object().shape({
    firstName: yup.string().min(5).required("Required"),
    lastName: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid email").required("Required"),
})

