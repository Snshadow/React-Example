import React, { useState } from 'react';
import { useDispatch } from "react-redux";

export function AddPersonForm(props) {
    const [ person, setPerson ] = useState('');
    const dispatch = useDispatch();

    function handleChange(e) {
        setPerson(e.target.value);
    }

    function handleSubmit(e) {
        if(person.trim().length !== 0) {
            dispatch(props.atSubmit(person.trim().replace(/\s+/g, " ")));
            setPerson('');
        }
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text"
                   placeholder="Add new contact"
                   onChange={handleChange}
                   value={person} />
            <button type="submit">Add</button>
        </form>
    );
}
