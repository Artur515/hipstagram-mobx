import React, {useContext, useState} from 'react';
import {Card, Container} from "react-bootstrap";
import poster from '../../image/post.jpg'
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {BsHeart, BsHeartFill} from "react-icons/bs";
import {likePost} from "../../api/hipstagramService";

const Feed = observer(({post, id}) => {
    const {hipsta} = useContext(Context)
    const [myLike, setMyLike] = useState(() => {
        let my = post.likes.filter(like => like._id === hipsta.currentUser?.id)
        return my.length ? 'liked' : 'unliked'
    })


    console.log(post)

    const handleLikePost = (id) => {
        likePost(id).then(response => response.data.status === 'liked' ?
            setMyLike('liked') : setMyLike('unliked'))
    }
    // console.log(myLike)

    return (
        <Container>
            <Card className='m-2'>
                <Card.Img variant="top" src={poster}/>
                <Card.Body>
                    <Card.Text>
                        {post.title}
                    </Card.Text>
                    <Card.Body>
                     {myLike === 'liked' ?
                        <BsHeartFill  className='cursor' onClick={() => handleLikePost(post._id)}/> :
                        <BsHeart  className='cursor' onClick={() => handleLikePost(post._id)}/>}
                    </Card.Body>
                </Card.Body>
            </Card>
        </Container>
    );
});

export default Feed;