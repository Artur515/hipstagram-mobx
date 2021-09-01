import React from 'react';
import {Button, Card, ListGroup, ListGroupItem} from "react-bootstrap";
import userImage from '../../image/user.png'
import style from './style.module.css'
import {observer} from "mobx-react-lite";

const User = observer(({login, email, id, avatar, isFollow,handleFollowUnFollowUser}) => {



    return (
        <Card className={style.card}>
            <Card.Img className={style.card_img} variant="top" src={avatar ? avatar : userImage}/>
            <Card.Body>
                <Card.Title>{login}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{email}</ListGroupItem>
                <Button className='m-auto' onClick={()=>handleFollowUnFollowUser(id)}
                        variant={isFollow ? "outline-dark" : "outline-info"}>
                    {isFollow === false ? 'Follow' : 'Unfollow'}
                </Button>
            </ListGroup>
        </Card>
    );
});

export default User;