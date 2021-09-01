import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getAllUsers} from "../../api/hipstagramService";

const Users = observer(() => {
    const {hipsta} = useContext(Context)

    useEffect(() => {
        getAllUsers().then((data) => hipsta.setUsers(data))
        // eslint-disable-next-line
    }, [])

    console.log(hipsta)
    return (
        <div>
            Users
        </div>
    );
});

export default Users;