import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {getCurrentUser} from "../../api/hipstagramService";
import Loader from "../../helpers/loader/Loader";
import {Card, Container} from "react-bootstrap";
import Feed from "../../components/feed/Feed";

const CurrentUser = observer(() => {
    const {hipsta} = useContext(Context)


    useEffect(() => {
        getCurrentUser()
            .then(data => hipsta.setCurrentUser(data))
        // eslint-disable-next-line
    }, [])


    console.log(hipsta.currentUser)
    return (
        <Container>
            {hipsta.currentUser === null ? <Loader/> : <div><Card className="bg-dark text-white" style={{minHeight:'25vh'}}>
                <Card.Img src={hipsta.currentUser.avatar} alt="Card image" />
                <Card.ImgOverlay>{hipsta.currentUser.email}
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                <Card.Body>
                    {hipsta.currentUser.posts.map((post) => {
                        return <Feed key={post._id} post={post}/>
                    })}
                </Card.Body>
                </Card.ImgOverlay>
            </Card>
            </div>}
        </Container>
    );
});

export default CurrentUser;