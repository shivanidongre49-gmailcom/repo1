import React, { Component }  from 'react';
import ReactDOM from 'react-dom'
// import { NavLink , Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button'
import FormLabel from '@material-ui/core/FormLabel';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import { Grid, Input, } from '@material-ui/core';
import Controls from "../controls/Control";
import { useForm, Form } from '../components/useForm';
import {makeStyles } from '@material-ui/core';
import * as employeeService from "../services/employeeService";
// import { useHistory, Link } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import Offers from '../offers/Offers';
import Second from '../home/Second';
import Link from 'next/link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}
const useStyles =makeStyles(theme=>({
  root:{
    '& .MuiFormControl-root':{
      width:'30%',
    display:'flex',
    
      margin:theme.spacing(1),
      color:"#800020"    
    }
  }
}))

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
  pan:'',
  cname:'',
  gender: 'male',

  hireDate: new Date()
}

export default function ButtonAppBar() {
  
//   const history = useHistory();
//    const navigateTo = () => history.push('/Second');//eg.history.push('/login');
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
  // const [value, setValue] = React.useState(null);
  // const history = useHistory();
  // const navigateTo = () => history.push('/Second');//eg.history.push('/login');
  return (
   
      <div>
        <div>
   
     </div> 
    <div>
<div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
          href="/"
          
        ><a>Home</a>
          {/* <HomeIcon sx={{ mr: 0.5 }} fontSize="large" /> */}
        
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
          href="/"
        
          target="_blank"
        ><a>Other Details</a>
          {/* <WhatshotIcon sx={{ mr: 4 }} fontSize="large" /> */}
          
        
        </Link>
        <Typography
        underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="secondary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="large" />
          Review and Submit
        </Typography>
      </Breadcrumbs>
    </div>
</div>
<br></br>

    
  <div>
 
  </div>
<div>
</div>
<Form onSubmit={handleSubmit}>
<div alignItems='center'>

 <Offers/> 
</div>

    <Grid container>
  
    <Grid item xs={6}
    alignItems='center'
    >
      
     <FormControl component="fieldset">
      
    <FormLabel  component="center">select your employement type</FormLabel>
    <br />
    <RadioGroup
    
      aria-label="type"
      defaultValue="salaried"
      display="center"
    
      name="radio-buttons-group"
      
    >
      <FormControlLabel value="female" control={<Radio />} label="salaried" />
      <FormControlLabel value="male" control={<Radio />} label="Bussiness" />
      <FormControlLabel value="other" control={<Radio />} label="Other" />
    </RadioGroup>
  </FormControl>
                   <Controls.Input
                        name="fullName"
                        label="Full Name"
                        value={values.fullName}
                        onChange={handleInputChange}
                        error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        value={values.email}
                        onChange={handleInputChange}
                        error={errors.email}
                    />  
                    <Controls.Input
                  
                        label="residential address"
                        name="radress"
                        value={values.address}
                        onChange={handleInputChange}
                        
                        
                    />
                   <Controls.Input
                        label="City"
                        name="city"
                        value={values.city}
                        onChange={handleInputChange}
                    />

                 <Grid item xs={2}>
                    <Controls.RadioGroup
                        name="gender"
                      
                        label="Gender"
                        
                        value={values.gender}
                        onChange={handleInputChange}
                        items={genderItems}
                    />   
                    </Grid>
                    <br/>
                    <br/>
     
                    
                    <div>
        
                            <Controls.Button
                            type="submit" 
                        //   onClick={navigateTo}
                            text="Submit"
                             >
                               <Link to='/'> </Link>
  
                               </Controls.Button>             
                        <Controls.Button
                            text="Reset"
                            color="default"

                            onClick={resetForm} />
                    </div>
                    </Grid>
                  
                    <Grid>
                     
                    <FormControl component="fieldset">
    <FormLabel  component="center">Your Current Residential status</FormLabel>
    <br />
    <RadioGroup
    
      aria-label=""
      defaultValue="Self-Owned"
      display="center"
    
      name="radio-buttons-group"
      
    >
      <FormControlLabel value="Self-owned" control={<Radio />} label="Self-owned" />
      <FormControlLabel value="Rented(With Family)" control={<Radio />} label="Rented(With Family)" />
      <FormControlLabel value="Rented(Self)" control={<Radio />} label="Rented(Self)" />
      <FormControlLabel value="Other" control={<Radio />} label="Other" />
    </RadioGroup>
  
  <br />

    <Controls.Input
                        label="PAN CARD"  
                        name="pan"
                        value={values.pan}
                        onChange={handleInputChange}
                     
    >
      
     
    </Controls.Input>
    
    <Controls.Input
                        label="Employer/Company Name"  
                        name="cname"
                        value={values.cname}
                        onChange={handleInputChange}
                     
    >
      
     
    </Controls.Input>
 
    <Controls.Input
                        label="Net Monthly Salary"  
                        name="salary"
                        value={values.salary}
                        onChange={handleInputChange}
                     
    >
      
     
    </Controls.Input>
    
  </FormControl>
                    
                    
                    </Grid>
                    </Grid>
        </Form>
  <br/>
  <br/>
</div>
  
  );
}
