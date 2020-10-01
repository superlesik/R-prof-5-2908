
import './style.css';
import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//useStyles()
export default props => {
    let { name } = props;
    return (
        <ListItem button>
            <ListItemText primary = { name } />
        </ListItem>
    )
}
