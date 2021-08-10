import React from 'react'
import Second from "../home/Home";
import First from '../secondpage/First';
import PageHeader from "../components/PageHeader";
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';
import { Paper,makeStyles } from '@material-ui/core';

import Offers from '../offers/Offers';
const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(9),
        padding: theme.spacing(4),
        display:'center',
        paddingLeft:'10%',
        width:'70%'
    }
}));

export default function FrontDetails() {

    const classes = useStyles();

    return (
        <>
            <PageHeader
                title="AXIS BANK"
               
                icon={<PeopleOutlineTwoToneIcon fontSize="large" />}
            />
           
            <Paper className={classes.pageContent}>
                <First/>
            </Paper>
        </>
    )

}