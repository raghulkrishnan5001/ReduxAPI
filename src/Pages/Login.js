import React, { useState } from "react";
import "./Login.scss";
import { Link,useNavigate,useHistory} from "react-router-dom";
import { Formik,Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from './TextField'; 
                              

export const Signup = () => {

  const validate = Yup.object({
    firstName: Yup.string()
      .max(5, 'Must be 5 characters or less')
      .required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
  } 
  );
  const navigate = useNavigate();


  const onSubmit=()=>{
    if(validate() === true){
      this.props.navigate('/Logout')
    }
  }
  

  return (
<Formik
initialValues={{
  firstName: '',
  password: '',
}}
validationSchema={validate}
onSubmit={values => {
  console.log(values)
}}
>
{formik => (
  <div className="Login">
    <h1 className="stepping_stones">STEPPING STONES</h1>
    <div className="sub_stones">
    <Form>
      <TextField label="First Name" name="firstName" type="text" />
      <TextField label="password" name="password" type="password" />
      <Link to={"/Logout"}>
      <button onClick={()=> onSubmit(validate)} className="btn btn-dark mt-3" type="submit">Login</button></Link>
      <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
      {/* <button onClick={()=>navigate("./Logout")}>click</button> */}
    </Form>
    </div>
  </div>
)}
</Formik>
)
}

export default Signup;
