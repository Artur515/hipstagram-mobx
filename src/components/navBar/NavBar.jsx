import React, {useContext} from 'react';
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {CURRENT_USER_ROUTE, SEARCH_USERS_ROUTE, UPDATE_CURRENT_USER_ROUTE} from "../../utils/consts";
import style from './style.module.css'
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {logOutCurrentUser} from "../../api/hipstagramService";

const NavBar = observer(() => {
    const {auth} = useContext(Context)
    const handleLogOut = () => {
        logOutCurrentUser()
        auth.setIsAuth(false)
    }

    return (
        <Navbar className={style.nav_bar} bg="light" variant="light">
            <Container>
                <NavLink to={CURRENT_USER_ROUTE}>Hipstagram</NavLink>
                {auth.isAuth ?
                    <Nav className='ml-auto'>
                        <NavLink className='ml-3' to={CURRENT_USER_ROUTE}>Profile</NavLink>
                        <NavLink className='ml-3' to={SEARCH_USERS_ROUTE}>Users</NavLink>
                        <NavLink className='ml-3' to={UPDATE_CURRENT_USER_ROUTE}>Setting</NavLink>
                        <Button className='ml-3' variant={"outline-dark"} onClick={handleLogOut}>Log Out</Button>
                    </Nav>
                    :
                    <Nav>
                        <Button className='ml-3' variant={"outline-dark"}>Authorization</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;