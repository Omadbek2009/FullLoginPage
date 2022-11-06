import { useEffect, useState } from "react";
import axios from 'axios';
import '../styles/get.scss';
function Get() {
    const[state, setState] = useState([])

    useEffect(()=>{
        axios.get('https://62dbd85cd1d97b9e0c54faac.mockapi.io/api/user/login').then(e=>console.log(setState(e.data)))
    })
    return ( 
        <>
            {
                state.map(e=>{
                    return(
                        <div className="user">
                            <div className="users">
                                <h3><b>Name:</b> {e.name}</h3>
                                <h3><b>SurName:</b> {e.surname}</h3>
                                <h3><b>Email:</b> {e.email}</h3>
                                <h3><b>Password:</b> {e.password}</h3>
                                <h3><b>Id:</b> {e.id}</h3>
                            </div>
                        </div>
                    )
                })
            }
        </>
     );
}

export default Get;