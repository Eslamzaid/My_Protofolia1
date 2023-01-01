import {useFormik, validationSchema} from "formik"
import { BasicSchema  } from "./schema"
import './Contact.css'
const onSubmit = async (values, actions) => {
    console.log(values)
    console.log(actions)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()
}
const Contact = (props) => {


    const { values,errors,touched , isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: "",
            
        },
        validationSchema: BasicSchema,
        onSubmit,

    })
    // console.log(values)
    // console.log(errors)

    return(
        <article className='theFather'>
            <section className='mange'>
                <div className='title'>
                    <h2>Contact Me</h2>
                    {/* id='hideit' */}
                </div>
                <div className="theContactForm">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <div className='FirstName names space'>
                            <label htmlFor='firstName'>First Name</label><br/>
                            <input
                                 value={values.firstName}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id="firstName"
                                //  required
                                 type='text'
                                 className={errors.firstName && touched.firstName ? "inputError" : ""}
                                 placeholder="Your first Name"
                                 />
                                {  errors.firstName && touched.firstName ? <p className="error-inp">{errors.firstName}</p> : ""}
                                <br/>
                                <label htmlFor='secondName'>Second Name</label><br/>
                                <input
                                     value={values.lastName}
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     type='text'
                                    //  required
                                     id="lastName"
                                     placeholder="Your second Name"
                                     className={errors.lastName && touched.lastName ? "inputError" : ""}
                                     />
                                     {errors.lastName && touched.lastName ? <p className="error-inp">{errors.lastName}</p> : ""}
                                    <br/>
                                    <label htmlFor='email'>Email</label><br/>
                                    <input
                                         value={values.email}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         id='email'
                                         type='email'
                                         placeholder="Enter your email"
                                         className={errors.email && touched.email ? "inputError" : ""}
                                         />
                                         {errors.email && touched.email ? <p className="error-inp">{errors.email}</p>: null}<br/>
                        </div>
                        <div className='Enquiry space'>
                            <label>Type of enquiry:<br/>
                                <input id='buttons' list="browsers" name="myBrowser" /> 
                            </label><br/>
                            <datalist id="browsers">
                                <option value="I have a project" />
                                <option value="Just want to increase my network" />
                                <option value="I have a proposal" />
                                <option value="Have a job offer" />   
                            </datalist>
                        </div>
                        <div className='textArea space'>
                            <label>Your Message</label><br/>
                            <textarea rows="10"  cols="100"></textarea><br/>
                        </div>
                            <button id='buttons' type="submit">Submit</button>
                    </form>
                    <button disabled={isSubmitting}  id='hideit' ref={props.over} ></button>
                </div>
            </section>
        </article>
    )
}

export default Contact