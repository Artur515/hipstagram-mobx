import React, {useContext} from 'react';
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import userImage from '../../image/user.png'
import style from './style.module.css'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getUserById} from "../../api/hipstagramService";
import {useHistory} from "react-router-dom";
import {USER_ID_ROUTE} from "../../utils/consts";

const User = observer(({login, email, id, avatar, isFollow, handleFollowUnFollowUser}) => {
    const {hipsta} = useContext(Context)
    const history = useHistory()

    const handleUserId = (id) => {
        getUserById(id)
            .then(data => hipsta.setUserById(data))
            .then(() => history.push(USER_ID_ROUTE + `/${id}`))
    }


    return (
        <Card className={style.card}>
            <Card.Img onClick={() => handleUserId(id)} className={style.card_img} variant="top"
                      src={avatar ? avatar : userImage}/>
            <Card.Body>
                <Card.Title>{login}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{email}</ListGroupItem>
                <Button className='m-auto' onClick={() => handleFollowUnFollowUser(id)}
                        variant={isFollow ? "outline-dark" : "outline-info"}>
                    {isFollow === false ? 'Follow' : 'Unfollow'}
                </Button>
            </ListGroup>
        </Card>
    );
});

export default User;