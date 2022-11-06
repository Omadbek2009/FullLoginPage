import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import '../styles/register.scss';
import { useState } from 'react';
import axios from 'axios';
function Register() {
    const [state, setState] = useState({})
    function app() {
        const { name, surname, email, password } = state
        if (!name || !surname || !email || !password) {
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
            <div className="home">
                <div className="login">
                    <div className="inp">
                        <div className="h1"><h1>Regis<b>ter.</b></h1></div>


                        <input type="text" placeholder='LastName'
                            onChange={e => setState({ ...state, name: e.target.value })} value={state.name} />


                        <input type="text" placeholder='FirstName'
                            onChange={e => setState({ ...state, surname: e.target.value })} value={state.surname} />


                        <input type="email" placeholder='Email Adress'
                            onChange={e => setState({ ...state, email: e.target.value })} value={state.email} />


                        <input type="password" placeholder='Password'
                            onChange={e => setState({ ...state, password: e.target.value })} value={state.password} />


                        <Stack spacing={2} direction="row">
                            <Link to="login"><Button variant="outlined">Login In</Button></Link>
                            <Link><Button variant="outlined" onClick={() => app()}>Submit</Button></Link>
                        </Stack>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;