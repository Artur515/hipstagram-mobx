import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import UpdatePassword from "../../components/updatePassword/UpdatePassword";

const Setting = () => {
    return (
        <Container>
            <Card className='m-3'>
            <Form  className='text-lg-center m-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>First name</Form.Label>
                    <Form.Control className='mt-4' placeholder="Enter your name"/>
                    <Form.Label>Last name</Form.Label>
                    <Form.Control className='mt-4' placeholder="Enter your last name"/>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control className='mt-4' type="email" placeholder="Enter email"/>
                    <Form.Text style={{color: 'red', position: 'relative'}}>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formFile" className="mb-4">
                    <Form.Label>Change file</Form.Label>
                    <Form.Control className='p-1' type="file"/>
                </Form.Group>
                <Button variant="outline-dark" type="submit">
                    Submit
                </Button>
            </Form>
            </Card>
            <UpdatePassword/>

        </Container>
    );
};

export default Setting;