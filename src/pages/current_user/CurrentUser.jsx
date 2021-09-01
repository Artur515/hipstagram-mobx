import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getCurrentUser} from "../../api/hipstagramService";

const CurrentUser = observer(() => {
    const {hipsta} = useContext(Context)


    useEffect(() => {
        getCurrentUser()
            .then(data => hipsta.setCurrentUser(data))
        // eslint-disable-next-line
    }, [])


    return (
        <div>
            {hipsta.currentUser === null ? <div>Loading</div> : <div>{hipsta.currentUser.email}</div>}
        </div>
    );
});

export default CurrentUser;