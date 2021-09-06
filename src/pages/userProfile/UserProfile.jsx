import React, {useContext} from 'react';
import {Card, Container, Image} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import user from '../../image/user.png'
import Loader from "../../helpers/loader/Loader";
import Feed from "../../components/feed/Feed";

const UserProfile = observer(() => {
    const {hipsta} = useContext(Context)


    return (
        <Container>
            {hipsta.userById === null ? <Loader/> :
                <Card className="text-center">
                    <Card.Header>{hipsta.userById.login}</Card.Header>
                    <Card.Body className='d-flex flex-wrap'>
                        <Image style={{maxWidth: 250}} src={hipsta.userById.avatar ? hipsta.userById.avatar : user}/>
                        <Card.Body>
                            <Card.Title>Email: {hipsta.userById.email}</Card.Title>
                            <Card.Text>
                                {hipsta.userById.firstName ? hipsta.userById.firstName : 'Name'}
                            </Card.Text>
                            <Card.Text>
                                {hipsta.userById.lastName ? hipsta.userById.lastName : 'Last Name'}
                            </Card.Text>
                            <Card.Body className='d-flex justify-content-around'>
                                <Card.Title>Followers: {hipsta.userById.followersCount}</Card.Title>
                                <Card.Title>Followings: {hipsta.userById.followingsCount}</Card.Title>
                            </Card.Body>
                        </Card.Body>
                    </Card.Body>
                    <Card.Footer className="text-muted">{hipsta.userById.id}</Card.Footer>
                    <Card.Body>
                        {hipsta.userById.posts.map((post) => {
                            return <Feed  key={post._id}  id={hipsta.userById.id} post={post}/>
                        })}
                    </Card.Body>
                </Card>
            }
        </Container>
    );
});

export default UserProfile;