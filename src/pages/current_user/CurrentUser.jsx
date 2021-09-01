import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getCurrentUser} from "../../api/hipstagramService";
import Loader from "../../helpers/loader/Loader";
import {Container} from "react-bootstrap";

const CurrentUser = observer(() => {
    const {hipsta} = useContext(Context)


    useEffect(() => {
        getCurrentUser()
            .then(data => hipsta.setCurrentUser(data))
        // eslint-disable-next-line
    }, [])


    return (
        <Container>
            {hipsta.currentUser === null ? <Loader/> : <div>{hipsta.currentUser.email}</div>}
        </Container>
    );
});

export default CurrentUser;