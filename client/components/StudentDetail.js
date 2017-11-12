import React, { Component } from 'react';
import { Link } from 'react-router';

class StudentDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            student: {}
        };
    }

    componentDidMount(){
        $.get(`/api/student/${this.props.params.id}`, (data) => {
            this.setState(state => ({ ...state, student: data}));
        });
    }

    render() {
        const {student} = this.state;
        return(
            <div className="container">
                <h1>{student.lastName}, {student.firstName}</h1>
                <p>in {student.className} started school on {new Date(student.createdAt).toDateString()}</p>
                <Link to={`/student/${student.id}/edit`} className="btn btn-primary"> Update Student Detail</Link>
            </div>
        );
    }
}

export default StudentDetail;