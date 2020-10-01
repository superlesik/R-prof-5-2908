
import './style.css';
import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ListItemText from '@material-ui/core/ListItemText';
//useStyles()

export default props => {
    let { name, selected } = props;
    return (
        <ListItem button selected={ selected }>
            <PersonOutlineIcon />
            <ListItemText primary = { name } />
        </ListItem>
    )
}
