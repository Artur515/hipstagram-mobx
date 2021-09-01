import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {followUser, getAllUsers} from "../../api/hipstagramService";
import {Container} from "react-bootstrap";
import Loader from "../../helpers/loader/Loader";
import User from "../user/User";

const Users = observer(() => {

    const {hipsta} = useContext(Context)

    useEffect(() => {
        getAllUsers().then((data) => hipsta.setUsers(data))
        // eslint-disable-next-line
    }, [])


    const handleFollowUnFollowUser = (id) => {
        followUser(id)
            .then((response) => response.status === 200 &&
                getAllUsers()
                    .then((data) => hipsta.setUsers(data)))
    }

    console.log(hipsta)
    return (
        <Container className='d-flex flex-wrap justify-content-around p-2'>
            {hipsta.users === null ? <Loader/> : hipsta.users.map((user) => {
                return <User key={user._id}
                             avatar={user.avatar}
                             login={user.login}
                             id={user._id}
                             email={user.email}
                             handleFollowUnFollowUser={handleFollowUnFollowUser}
                             isFollow={user.isFollow}/>
            })}
        </Container>
    );
});

export default Users;