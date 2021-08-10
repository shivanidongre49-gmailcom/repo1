// import React from 'react'
// import { Paper, Card, Typography, makeStyles, Button } from '@material-ui/core'
// import AppBar from '@material-ui/core/AppBar';
// import Box from '@material-ui/core/Box';
// import Toolbar from '@material-ui/core/Toolbar';
// // import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// const useStyles = makeStyles(theme => ({
//     root: {
//         backgroundColor: '#97144d',
//         color:"#97144d"
//     },
//     pageHeader:{
//         padding:theme.spacing(2),
//         display:'flex',
//         marginBottom:theme.spacing(2),
//         color:"#ffffff"
//     },
//     pageIcon:{
//         display:'inline-block',
//         padding:theme.spacing(1),
//         color:'#fffff'
//     },
//     pageTitle:{
//         paddingLeft:theme.spacing(4),
//         paddingTop:theme.spacing(1.5),
//         '& .MuiTypography-subtitle2':{
//             opacity:'0.6'
//         }
//     }
// }))

// export default function PageHeader(props) {

//     const classes = useStyles();
//     const { title, subTitle, icon } = props;
//     return (
        
//         <Paper elevation={0} square className={classes.root}>
//             {/* <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static" className="Navbar" color="secondary">
          
//         <Toolbar >
//           <IconButton
//             size="large"
//             edge="start"
        
            
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             {/* <MenuIcon /> */}
//           {/* </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Axis
//           </Typography>
          
//         </Toolbar>
//       </AppBar>
//     </Box> */} 
//             <div className={classes.pageHeader}>
//                 <Card className={classes.pageIcon}>
//                     {icon}
//                 </Card>
//                 <div className={classes.pageTitle}>
//                     <Typography
//                         variant="h6"
//                         component="div">
//                         {title}</Typography>
//                     <Typography
//                         variant="subtitle2"
//                         component="div">
//                         {subTitle}</Typography>
//                 </div>
//             </div>
//         </Paper>
//     )
// }
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import Link from "next/link";
// #97144d;
export default function PageHeader() {
    return (
        <div>
        <AppBar style={{background:'#AE275F'}}>
          <Toolbar>
            {/* <Link href="/"> */}
                <img style={{height:'90px',  width:'250px'}} src="../AxisIcon.png"/>            
            {/* </Link> */}
          </Toolbar>
        </AppBar>
        </div>
    )
}