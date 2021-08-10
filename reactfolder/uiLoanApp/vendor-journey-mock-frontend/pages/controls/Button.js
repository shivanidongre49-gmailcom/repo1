import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        color: "#800020",
        display:'center',
        paddingleft:'50%',
        alignItems: 'center',
    justifyContent: 'center',
    width:'25%'
    },
    label: {
        textTransform: 'none'

    }
}))

export default function Button(props) {

    const { text, size, color, variant, onClick, ...other } = props
    const classes = useStyles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size || "large"}
            color={color || "#800020"}
            onClick={onClick}
            {...other}
            classes={{ root: classes.root, label: classes.label }}>
            {text}
        </MuiButton>
    )
}