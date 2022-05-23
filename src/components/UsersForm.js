import axios from 'axios';
import React, {useEffect, useState} from 'react';

const UsersForm = ({getUsers, userSelected, deseletUser}) => {
    //Estados input formulario controlado
    const [first_name, setFirst_name] = useState("");
    const [last_name, setLast_name] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        console.log(userSelected)
        if(userSelected !== null){
            setFirst_name(userSelected.first_name)
            setLast_name(userSelected.last_name)
            setEmail(userSelected.email)
            setPassword(userSelected.password)
            setBirthday(userSelected.birthday)
        }else{
            setFirst_name("");
            setLast_name("");
            setEmail("");
            setPassword("");
            setBirthday("");
        }
    
    },[userSelected]);


    //Funcion del submit
    const submit =(e) => {
        e.preventDefault();
        const user ={
            first_name: first_name,
            last_name: last_name,
            email:email,
            password:password,
            birthday:birthday
        }
        if(userSelected !== null){
            alert("Editado")
            axios
            .put('https://users-crud1.herokuapp.com/users/',user
            )
            .then(() =>{
               getUsers();
               deseletUser();
            }); 
        }else{
            axios
            .post('https://users-crud1.herokuapp.com/users/', user)
            .then(() => getUsers())
            .catch(error => console.log(error.response));
        }

    }


    return (
        <div className='form-container'>
            <h1>New User</h1>
            <form onSubmit={submit}>
                <label htmlFor="first_name">Name</label>
                <input type="text"
                 name="first_name"
                 id="first_name"
                 onChange={e => setFirst_name(e.target.value)}
                 value={first_name}
                 placeholder='Primer nombre'
                 required     
                />

                <label htmlFor="last_name">Last name</label>
                <input type="text"
                 name="last-name"
                 id="last_name"
                 onChange={e => setLast_name(e.target.value)}
                 value={last_name}
                 placeholder='Segundo nombre'
                 require
                />

                <label htmlFor="email">Email</label>
                <input type="email"
                 name="email"
                 id="email"
                 onChange={e => setEmail(e.target.value)}
                 value={email}
                 placeholder='Correo'
                 required 
                />

                <label htmlFor="password">Password</label>
                <input type="password"
                 name="password"
                 id="password"
                 onChange={e => setPassword(e.target.value)}
                 value={password}
                 placeholder='Contraseña'
                 required 
                />

                <label for="birthday">Birthday</label>
                <input type="date"
                 name="birthday"
                 id="birthday"
                 onChange={e => setBirthday(e.target.value)}
                 value={birthday}
                 required
                />

                <button>Agregar nuevo usuario</button>
            </form>
        </div>
    );
};

export default UsersForm;