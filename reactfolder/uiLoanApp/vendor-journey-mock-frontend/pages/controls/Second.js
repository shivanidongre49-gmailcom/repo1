import React, { useState, useEffect } from 'react'
import { Grid, } from '@material-ui/core';
import Controls from "./controls/Control";
import { useForm, Form } from './components/useForm';
import {makeStyles } from '@material-ui/core';
import * as employeeService from "./services/employeeService";
import { useHistory, Link } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import First from './First';
const useStyles =makeStyles(theme=>({
  root:{
    '& .MuiFormControl-root':{
      width:'80%',
    display:'flex',
    paddingleft:'800px',
    alignItems:'center',
    margin:theme.spacing(5),
      color:"#800020"
      
      
    }
  }
}))
function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const genderItems = [
  { id: 'male', title: 'Male' },
  { id: 'female', title: 'Female' },
  { id: 'other', title: 'Other' },
]

// const history = useHistory();
//   const navigateTo = () => history.push('/First');//eg.history.push('/login');
const initialFValues = {

  fullName: '',
  email: '',
  mobile: '',
  city: '',
  gender: 'male',

  hireDate: new Date()
}

export default function Second(){
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('fullName' in fieldValues)
        temp.fullName = fieldValues.fullName ? "" : "This field is required."
    if ('email' in fieldValues)
        temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
        temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    

    setErrors({
        ...temp
    })

    if (fieldValues == values)
        return Object.values(temp).every(x => x == "")
}
const {
  values,
  setValues,
  errors,
  setErrors,
  handleInputChange,
  resetForm
} = useForm(initialFValues, true, validate);

const handleSubmit = e => {

  e.preventDefault()
  if (validate()){
      employeeService.insertEmployee(values)
      resetForm()
  }
}


  // const [values, setvalues]=useState(initialFValues);
  const classes=useStyles();
   const history = useHistory();
   const navigateTo = () => history.push('/First');//eg.history.push('/login');
  return(
    
    <Form onSubmit={handleSubmit}>
         
      <div role="presentation" onClick={handleClick}>
      {/* <Breadcrumbs aria-label="breadcrumb"> */}
        {/* <Link
          underline="hover"
          sx={{ display: 'block', alignItems: 'center' }}
          color="secondary"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="large" />
          Home
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
          href="/first"
          target="_blank"
           onClick={navigateTo}
        >
          <WhatshotIcon sx={{ mr: 4 }} fontSize="large" />
          Other Details
        
        </Link>
        <Typography
        underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="large" />
          Review and Submit
        </Typography> */}
      {/* </Breadcrumbs> */}
    </div>
            <Grid container>
                <Grid item xs={10}>
                    
          
                    <Controls.Input
                  
                        label="Mobile"
                        name="mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                        error={errors.mobile}
                        style={{width:"40%"}}
                    />
                   
                </Grid>
            
                    <br/>
                    <br/>
                    
                    <Controls.DatePicker
                        name="hireDate"
                        label="Hire Date"
                        value={values.hireDate}
                        onChange={handleInputChange}
                    />
                    
          
                    </Grid>
                    <div>
                        
                                
                                <Controls.Button
                            type="submit" 
                            // component={Link} href="/first" color="primary"
                            // onClick={navigateTo} 
                            text="Check Offer"
                             >
                                {/* <Link to='/First'> </Link> */}
                             {/* <a href="/" /> */}
                              
                               </Controls.Button> 
                              
                        <Controls.Button
                            text="Reset"
                            color="default"
                            onClick={resetForm} />
                    </div>
                    
                 
            {/* </Grid>  */}
        </Form>
                  
  
  )
}