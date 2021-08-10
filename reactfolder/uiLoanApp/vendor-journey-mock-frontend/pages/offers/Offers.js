import React ,{useState, useEffect} from 'react';
import axios from 'axios';
import { Paper } from '@material-ui/core';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid, Input, } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import FormControl from '@material-ui/core/FormControl';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: "#97144d",
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);


const useStyles = makeStyles((theme) => ({
  root: {

    '& .MuiFormControl-root':{
        width:'30%',
      display:'center',
      
        margin:theme.spacing(0),
  },
}}));
function Offers(){
    const classes = useStyles();
    
    
const url="http://localhost:9999/offerApi/9669935505/1998-09-29";
const [offerObject, setOfferObject]= useState(null)
const [emi, setEmi]= useState(null)
const [loanAmount, setLoanAmount]= useState(null)
const [processingFee, setprocessingFee]= useState(null)
const [stampDuty, setstampDuty]= useState(null)
const [rateOfInterest, setRateOfInterest]= useState(null)
const [tenure, setTenure]= useState(null)
const [netDisbursal, setNetDisbursal]= useState(null)

  
const rows = [useEffect(()=>{
    axios.get(url)
    
    .then(response=>{
        
        setEmi(response.data['emi'])
        setLoanAmount(response.data['loanAmount'])
        setprocessingFee(response.data['processingFee'])
    setstampDuty(response.data['stampDuty'])
        setRateOfInterest(response.data['rateOfInterest'])
        setTenure(response.data['tenure'])
        setNetDisbursal(response.data['netDisbursal'])
        console.log(response.data)
        
    })
}, [url])]

// if(offerObject)



return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
          <TableHead>
        <TableRow>
           
            
         

                <StyledTableCell>EMI</StyledTableCell>
                <StyledTableCell>Loan Ampunt</StyledTableCell>
                <StyledTableCell>Tenure</StyledTableCell>
                <StyledTableCell>Stamp Duty</StyledTableCell>
                <StyledTableCell>Processing Fees</StyledTableCell>
                <StyledTableCell>Net Disbrsal</StyledTableCell>
                <StyledTableCell>Rate Of Interest</StyledTableCell>
                </TableRow>
                </TableHead>
              
                    
                <TableBody>
                    <TableRow>
                <TableCell>{emi}</TableCell>
                <TableCell>{loanAmount}</TableCell>
                
                <TableCell>{tenure}</TableCell>
                <TableCell>{stampDuty}</TableCell>
                <TableCell>{processingFee}</TableCell>
                <TableCell>{netDisbursal}</TableCell>
                <TableCell>{rateOfInterest}</TableCell>
                </TableRow>
               

           
            



            {/* <StyledTableRow >
                {emi}
            </StyledTableRow> */}
            
            </TableBody>
          
        
            
            
        
        


      </Table>
    </TableContainer>
  );
{/* //     return(


//         <div>
// <Paper>
// <Grid container>
//     <Grid item xs={3}
//     alignItems='center'> */}
// {/* 
//     <form className={classes.root} noValidate autoComplete="off" contentEditable="false"> */}
//     <FormControl component="fieldset">
//     <FormLabel  component="center">EMI</FormLabel>
//     <TextField id="filled-basic" name="EMI" variant="filled" value={emi}/> 
//     </FormControl>
//     </Grid>
//     <Grid item xs={3}>
//     <FormControl component="fieldset">
//     <FormLabel  component="center">Loan Amount</FormLabel>
//      <TextField id="filled-basic" name="EMI" variant="filled" value={loanAmount}/>
     
//      </FormControl>
//      </Grid>
//      <Grid item xs={3}>
//      <FormControl component="fieldset">
//     <FormLabel  component="center">Processing Fee</FormLabel>
     
//      <TextField id="filled-basic" name="EMI" variant="filled" value={processingFee}/>
//      </FormControl>
//      </Grid>
//      <Grid item xs={3}>
//      <FormControl component="fieldset">
//     <FormLabel  component="center">Rate Of Interest</FormLabel>
//      <TextField id="filled-basic" name="EMI" variant="filled" value={rateOfInterest}/>
//     </FormControl>
//     </Grid>
//     <Grid item xs={4} alignItems='center'>
//      <FormControl component="fieldset">
//     <FormLabel  component="center">netDisbursal</FormLabel>
//      <TextField id="filled-basic" name="EMI" variant="filled" value={netDisbursal}/>
//      </FormControl>
//      </Grid>
//      <Grid item xs={4}>
//      <FormControl component="fieldset">
//     <FormLabel  component="center">Tenure</FormLabel>
//      <TextField id="filled-basic" name="EMI" variant="filled" value={tenure}/>
//      </FormControl>
//      </Grid>
//      <Grid item xs={4}>
//      <FormControl component="fieldset">
//     <FormLabel  component="center">Stamp Duty</FormLabel>
//      <TextField id="filled-basic" name="EMI" variant="filled" value={stampDuty}/>
//      </FormControl>
//      </Grid>
//      {/* </form> */}
//      </Grid>
//      <br/>
    
    
  
//    </Paper>
//         </div>
//     )
     
}
export default Offers