import React, {useContext, useState} from 'react';
import {FormControl} from "react-bootstrap";
import {getUserByLogin} from "../../api/hipstagramService";
import {useDebounce} from "../../utils/useDebounce";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const Search = observer(() => {
    const {hipsta} = useContext(Context)

    const [inputSearch, setInputSearch] = useState('')
    const debouncedSearch = useDebounce(search, 500)


    function search(query) {
        getUserByLogin(query).then((data) => hipsta.setUsers(data))
    }


    const handleSearchUser = (event) => {
        setInputSearch(event.target.value)
        const {value} = event.target
        debouncedSearch(value)
    }


    return (
        <FormControl
            className='mt-2'
            placeholder="Search user"
            aria-label="Username"
            aria-describedby="basic-addon1"
            value={inputSearch}
            onChange={handleSearchUser}
        />
    )
        ;
});

export default Search;