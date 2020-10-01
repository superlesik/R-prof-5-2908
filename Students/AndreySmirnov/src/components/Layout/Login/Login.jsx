import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/Button";

const Login = (props) => {
    const handleChange = evt => {
        if (evt.keyCode !== 13) {
            props.onUserNameChange(evt.target.value);
        } else {
            props.userName.length > 0 ? props.setUser() : alert('Введите имя пользователя');
        }
    }

    const sendUserName = () => {
        props.userName.length > 0 ? props.setUser() : alert('Введите имя пользователя');
    }

    return (
        <div>
            <TextField
                id="standard-full-width"
                style={{margin: 8}}
                placeholder="Введите имя пользователя"
                helperText="Введите имя пользователя"
                margin="normal"
                fullWidth
                InputLabelProps={{
                    shrink: true,
                }}
                value={props.userName}
                onChange={handleChange}
                onKeyDown={handleChange}
            />
            <Button
                variant="contained"
                color="primary"
                style={{float: 'right'}}
                onClick={sendUserName}
            >
                LogIn
            </Button>
        </div>

    );
}

export default Login