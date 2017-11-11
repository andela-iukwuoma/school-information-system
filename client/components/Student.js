import React, {Component} from 'react';
import { Link } from 'react-router';

const Student = ({id, firstName, lastName, className, createdAt}) => (
    <tr>
        <td>{id}</td>
        <td>{firstName}</td>
        <td>{lastName}</td>
        <td>{className}</td>
        <td>{new Date(createdAt).toDateString()}</td>
        <td><Link to={`/student/${id}`}>More >></Link></td>
    </tr>

);

export default Student;