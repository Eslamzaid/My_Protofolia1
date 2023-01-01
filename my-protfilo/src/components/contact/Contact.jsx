import {useFormik} from "formik"
import './Contact.css'
const Contact = (props) => {
    const { values, handleBlur, handleChange,} = useFormik({
        initialValues: {
            email: "",
            firstName: '',
            lastName: '',
            
        }
    })
    return(
        <article className='theFather'>
            <section className='mange'>
                <div className='title'>
                    <h2>Contact Me</h2>
                    {/* id='hideit' */}
                </div>
                <div className="theContactForm">
                    <form autoComplete="off">
                        <div className='FirstName names space'>
                            <label htmlFor='firstName'>First Name</label>
                            <input
                                 className="buttons"
                                 value={values.firstName}
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 id
                                 type='text'
                                 placeholder="Your first Name"
                                 >
                            </input><br/>
                                <label htmlFor='secondName'>Second Name</label>
                                <input
                                     className="buttons"
                                     value={values.lastName}
                                     onChange={handleChange}
                                     onBlur={handleBlur}
                                     type='text'
                                     id="lastName"
                                     placeholder="Your second Name"
                                     >
                                </input><br/>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                         className="buttons"
                                         value={values.email}
                                         onChange={handleChange}
                                         onBlur={handleBlur}
                                         id='email'
                                         type='email'
                                         placeholder="Enter your email"
                                         >
                                    </input><br/>
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
                    <button id='hideit' ref={props.over} ></button>
                </div>
            </section>
        </article>
    )
}

export default Contact