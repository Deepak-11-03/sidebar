import { Box, Button, TextField } from "@mui/material";
import React, {useEffect, useState} from "react"
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import {useParams} from "react-router-dom"

const Viewuser = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");




  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const {id} = useParams();
  console.log(id)
  useEffect(()=>{
    getList()
  },[])

  const [user,setUser]=useState({
    fname:'' , lname:'' , email:'', mobile_number:'' , password:'',date_of_birth:'' ,age:'' ,gender:'' ,Area:'', Block:'' ,Street:'' ,Avenue:'' ,House:'' ,status_of_the_plan:'' ,occupation:'',payment_method:'',date_of_subscription:"" , Governance : ""
 })
 
 let name ,value;
 const handleInput =(e)=>{
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value})
 }
 function getList(){
    fetch("http://localhost:4000/getuser/"+id).then((result)=>{result.json().then((resp)=>{
       // setPost(resp.data.)
       console.log(resp.data)
      setUser(resp.data)
    })
  })
  }
  
  
     function Saveuser(e){
       e.preventDefault();
       const   { fname, lname, email, password, date_of_birth, age,gender,Area,Block,Street,Avenue,House,status_of_the_plan,occupation,payment_method, Governance}  = user
   
       //console.warn( fname, lname, email, password,mobile_number, date_of_birth, age,gender,Area,Block,Street,Avenue,House,status_of_the_plan,occupation,payment_method)
       fetch("http://localhost:4000/user",{
         method : "POST",
         headers : {
           "Accept" : "application/json",
           "Content-Type" : "application/json",
         },
         body : JSON.stringify( { fname, lname, email, password, date_of_birth, age,gender,Governance,Area,Block,Street,Avenue,House,status_of_the_plan,occupation,payment_method}  )
       }).then((result) =>{
         result.json().then((resp) =>{
           console.warn("resp" , resp)
           if(resp.status === true){
            window.alert( resp.message );
            console.log(resp.message );
            //history.push("/blog")
              
          } else{
  
            window.alert( resp.message)
              console.log('invalid data', resp)
          }
        })
      })
      
    }
 
 
    
 
 
   return (
     <Box m="20px">
      
       <Header title="User Profile" subtitle="Change User Profile" />
 
       <Formik
       >
        
        <form >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                name="fname" value={user.fname} onChange={handleInput}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                value={user.lname} onChange={handleInput} name="lname"
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                name="email" value={user.email} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Contact Number"
                name="mobile_number" value={user.mobile_number} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
                />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Date of Birth"
                name="date_of_birth" value={user.date_of_birth} onChange={handleInput} 
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Age"
                name="age" value={user.age} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Gender"
                name="gender" value={user.gender} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />

              ///

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Registration Date"
                name="registration_date" value={user.registration_date} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
                />

<TextField
fullWidth
variant="filled"
type="text"
label="Date Of Subscription"
name="date_of_subscription" value={user.date_of_subscription} onChange={handleInput}
sx={{ gridColumn: "span 4" }}
/>

<TextField
fullWidth
variant="filled"
type="text"
label="subscription_plan"
name="subscription_plan" value={user.subscription_plan} onChange={handleInput}
sx={{ gridColumn: "span 4" }}
/>

<TextField
fullWidth
variant="filled"
type="text"
label="Last Renewal Date"
name="last_renewal_date" value={user.last_renewal_date} onChange={handleInput}
sx={{ gridColumn: "span 4" }}
/> 

<TextField
fullWidth
variant="filled"
type="text"
label="Date Of Expiration"
name="date_of_expiration" value={user.date_of_expiration} 
onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />  

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="interests"
                name="interests" value={user.interests} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              /> 


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Status Of the Plan"
                name="status_of_the_plan" value={user.status_of_the_plan} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              /> 


              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Payment Method"
                name="payment_method" value={user.payment_method} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              /> 

<TextField
                fullWidth
                variant="filled"
                type="text"
                label="Governance"
                name="Governance" value={user.address.Governance} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />

               <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Area"
                name="Area" value={user.address.Area || user.Area} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
                             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Block"
                name="Block" value={user.address.Block || user.Block} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
                             <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Street"
                name="Street" value={user.address.Street || user.Street} onChange={handleInput}
                sx={{ gridColumn: "span 4" }}
              />
