import React, { Component } from 'react';
import { Link } from 'react-router';
import Student from "./Student";

class Students extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: '',
            students: []
        };
    }

    componentDidMount(){
        $.get("/api/students", (data) => {
            this.setState(state => ({ ...state, students: data.students, message: data.message}));
        });
    }

    render() {
        const { students, message } = this.state;
        return (
            <div className="container students">
                <p>{message}</p>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Class</th>
                            <th>Start date</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {students && students.map(student =>
                            <Student
                                key={student.id}
                                id={student.id}
                                firstName={student.firstName}
                                lastName={student.lastName}
                                className={student.className}
                                createdAt={student.createdAt}
                            />
                        )}
                    </tbody>
                </table>
                <Link to="/student/add" className="btn btn-primary">Add Student</Link>
            </div>
        );
    }
}

export default Students;