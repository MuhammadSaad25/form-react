// import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import "./index.css";
// import { useState } from "react";
// import { FaRegEyeSlash, FaRegEye } from "react-icons/fa";

// const initialValues = {
// 	name: "",
// 	email: "",
// 	userPhoneNumber: "",
// 	adress:"",
// 	websiteURL:"",
// 	// name:"",
// 	password:"",
// 	repeat_password: "",
// };


function Signup() {

    //   const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({

    //function to show password
    // const [showPswIcon, setShowPswIcon] = useState("eyeOpen");
    // const pass1 = document.querySelector("#userPassword");
    // const show_password = () => {
    //     // console.log(pass1.type);
    //     if (pass1.type === "password") {
    //         pass1.type = "text";
    //         setShowPswIcon("eyeClose");
    //     } else {
    //         pass1.type = "password";
    //         setShowPswIcon("eyeOpen");
    //     }
    // };

    const fmrk = useFormik({
        initialValues: {
            age: "",
            adress: "",
            email: "",
            fname: "",
            lname: "",
            password: "",
            repeat_password: "",
            userPhoneNumber: "",
            websiteURL: "",
        },

        validationSchema: yup.object({
            email: yup
                .string("Enter your email")
                .email("Enter your email")
                .required("Email is required")
                .min(1)
                .max(25, "Please enter within 25 characters"),
            fname: yup
                .string("Enter your name")
                .required("First Name is required")
                .min(4, "Please enter more then 4 characters ")
                .max(15, "Please enter within 15 characters "),
            lname: yup
                .string("Enter your name")
                .required("Last name is required")
                .min(4, "Please enter more then 4 characters ")
                .max(15, "Please enter within 15 characters "),
            password: yup
                .string("Enter your Password")
                .required("Password is required")
                .min(6, "Please enter more then 6 characters ")
                .max(65, "Please enter within 65 characters "),
            repeat_password: yup
                .string("Enter your password again")
                .required("Please enter your password again")
                .min(6, "Please enter more then 6 characters ")
                .max(65, "Please enter within 65 characters ")
                .oneOf([yup.ref("password"), null], "Passwords must match"), //line to check if two passwords match
            userPhoneNumber: yup
                .string("Enter your Phone Number")
                .required("Phone Number is required")
                .min(10, "Please enter more then 10 characters ")
                .max(15, "Please enter within 15 characters "),

            createdOn: yup.date().default(() => new Date()),
        }),

        onSubmit: (values) => {
            console.log(values);
            //do something like there you can call API or send data to firebase
            //   if (errors) console.log("error is", errors);
        },
    });
    // console.log(Formik)
    // if (fmrk.errors) console.log("error is", fmrk.errors);


    return (
        <div>
            <form onSubmit={fmrk.handleSubmit}>
                <div className="segment">
                    <h1>Sign up</h1>
                    <button class="unit" type="button">
                        <i class="icon ion-md-bookmark"></i>
                    </button>
                </div>

                <div className="content">
                    <div className="left">
                        <label>
                            <input
                                className="input"
                                type="fname"
                                autoComplete="off"
                                id="userName"
                                placeholder="First Name"
                                name="fname"
                                value={fmrk.values.fname}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.fname && Boolean(fmrk.errors.fname) ? (
                            <p className="errorSpan">{fmrk.errors.fname}</p>
                        ) : null}

                        <label>
                            <input
                                className="input"
                                type="lname"
                                autoComplete="off"
                                id="userName"
                                placeholder="Last Name"
                                name="lname"
                                value={fmrk.values.lname}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.lname && Boolean(fmrk.errors.lname) ? (
                            <p className="errorSpan">{fmrk.errors.lname}</p>
                        ) : null}

                        <label>
                            <input
                                className="input"
                                type="tel"
                                autoComplete="off"
                                id="userPhoneNumber"
                                placeholder="Mobile Number "
                                name="userPhoneNumber"
                                value={fmrk.values.userPhoneNumber}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.userPhoneNumber &&
                            Boolean(fmrk.errors.userPhoneNumber) ? (
                            <p className="errorSpan">{fmrk.errors.userPhoneNumber}</p>
                        ) : null}
                    </div>

                    <div className="right">
                        <label>
                            <input
                                className="input"
                                id="email"
                                type="email"
                                placeholder="Email Address"
                                name="email"
                                value={fmrk.values.email}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.email && Boolean(fmrk.errors.email) ? (
                            <p className="errorSpan">{fmrk.errors.email}</p>
                        ) : null}

                        <label>
                            <input
                                id="userPassword"
                                className="input"
                                type="password"
                                placeholder="Password"
                                name="password"
                                value={fmrk.values.password}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.password && Boolean(fmrk.errors.password) ? (
                            <p className="errorSpan">{fmrk.errors.password}</p>
                        ) : null}
                        <br />

                        <label>
                            <input
                                id="repeat_password"
                                className="input"
                                type="password"
                                placeholder="Confirm Password"
                                name="repeat_password"
                                value={fmrk.values.repeat_password}
                                onChange={fmrk.handleChange}
                                onBlur={fmrk.handleBlur}
                            />
                        </label>
                        {fmrk.touched.repeat_password &&
                            Boolean(fmrk.errors.repeat_password) ? (
                            <span className="errorSpan">{fmrk.errors.repeat_password}</span>
                        ) : null}
                    </div>
                </div>

                <div className="mainBtn">
                    <button className="red" type="submit">
                        <i className="icon ion-md-lock"></i> SUBMIT
                    </button>
                </div>

                {/* <!-- <div class="segment">
                    <button class="unit" type="button">
                        <i class="icon ion-md-arrow-back"></i>
                    </button>
                    <button class="unit" type="button">
                        <i class="icon ion-md-bookmark"></i>
                    </button>
                    <button class="unit" type="button">
                        <i class="icon ion-md-settings"></i>
                    </button>
                </div> --> */}

            </form >
        </div >
    );
}

export default Signup;
