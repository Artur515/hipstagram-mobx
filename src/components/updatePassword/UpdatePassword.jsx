import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";

const UpdatePassword = () => {
    return (
        <Container>
            <Card className='mt-4'>
                <Form className='text-lg-center m-4'>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Confirm Password"/>
                    </Form.Group>
                    <Button variant="outline-dark" type="submit">Update password</Button>
                </Form>
            </Card>
        </Container>
    );
};

export default UpdatePassword;