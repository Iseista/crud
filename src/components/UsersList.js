import React from 'react';

const UsersList = ({users, selectUser,removeUser}) => {
    return (
        <ul className='list-Container'>
            {
                users.map(user => (
                    <li key={user.id} className="list-group">
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h2>Correo</h2>
                        <p>Email{user.email}</p>
                        <h2>Cumpleaños</h2>
                        <p>{user.birthday}</p>
                        <button onClick={()=> selectUser(user)} className='bx bx-edit-alt'></button>
                        <button onClick={()=> removeUser(user.id)} className='bx bx-trash-alt'></button>
                    </li>
                ))
            }
        </ul>
    );
};

export default UsersList;