import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/login.scss';
import axios from 'axios';
function Login() {
    const [state, setState] = useState({})
    function alick() {
        const { email,  password } = state
        if (!email || !password) {
            alert("Qatorlarni To'ldiring")
        }
        else {
            axios.post('https://62dbd85cd1d97b9e0c54faac.mockapi.io/api/user/login', state).then(() => {
                alert("Ro'yhatdan O'tdingiz")
            })
        }
    }

    return (
        <>
            <div className="main">
                <div className="creat">
                    <div className="loginin"><h1>Login <b>In.</b></h1></div>
                    <input type="email" placeholder='Email Adress' onChange={e => setState({ ...state, email: e.target.value })} value={state.email}  />
                    <input type="password" placeholder='Password' onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />
                    <Stack spacing={2} direction="row" className='btn'>
                        <Link to='register' ><Button variant="outlined">Back</Button></Link>
                        <Link><Button variant="outlined" onClick={()=>alick()}>Submit</Button></Link>
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default Login;