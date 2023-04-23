import { useEffect, useState } from 'react'
import React from 'react'
import useUserCrud from './hooks/useUserCrud'
import { UserCard } from './component/UserCard';
import { Header } from './component/Header';
import {FormUser} from './component/FormUser'; 
import './styles/app.css'

function App() {

    const [updateUser, setUpdateUser] = useState();
    const [formOpen, setFormOpen] = useState(false)

    const {
        users,
        createNewUser,
        deleteUserById,
        updateUserById,
        getAllUsers
    } = useUserCrud();

    useEffect(()=>{
        getAllUsers()
    }, []);

  return (
    <div className="App">
        
        <Header setFormOpen={setFormOpen} />

        <FormUser setFormOpen={setFormOpen} formOpen={formOpen} createNewUser={createNewUser} updateUser={updateUser} updateUserById={updateUserById} setUpdateUser={setUpdateUser}/>

        <main className='main'>
            {
                users?.map(user => (
                    <UserCard setFormOpen={setFormOpen} key={user.id} user={user} deleteUserById={deleteUserById} setUpdateUser={setUpdateUser}/>
                ))  
            }
        </main>

    </div>
  )
}

export default App
