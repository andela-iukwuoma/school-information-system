import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';

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

    deleteStudent = () => {
        $.ajax({
            url: `/api/student/${this.props.params.id}`,
            type: 'DELETE',
            success: () => {
                browserHistory.push('/')
            }
        });
    };

    render() {
        const {student} = this.state;
        return(
            <div className="container">
                <h1>{student.lastName}, {student.firstName} ({student.className})</h1>
                <p>started school on {new Date(student.createdAt).toDateString()}</p>
                <Link to={`/student/${student.id}/edit`} className="btn btn-primary"> Update Student Detail</Link>
                <a className="btn btn-danger" onClick={this.deleteStudent}> Delete Student Detail</a>
            </div>
        );
    }
}

export default StudentDetail;