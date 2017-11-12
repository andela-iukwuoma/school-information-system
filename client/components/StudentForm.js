import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class StudentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            student: {
                firstName: '',
                lastName: '',
                className: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount(){
        if(this.props.location.pathname !== "/student/add") {
            $.get(`/api/student/${this.props.params.id}`, (data) => {
                this.setState(state => ({ ...state, student: data}));
            });
        }
    }

    handleChange(event) {
        const student = this.state.student;
        student[event.target.id] = event.target.value;
        this.setState({ student });

    }

    onSubmit = (event) => {
        event.preventDefault();
        if(this.props.location.pathname !== "/student/add") {
            $.ajax({
                url: `/api/student/${this.props.params.id}`,
                type: 'PUT',
                data: this.state.student,
                success: () => {
                    browserHistory.push('/')
                }
            });
        } else {
            $.post("/api/students", this.state.student)
                .then(() => {
                    browserHistory.push('/')
                })
        }
    };

    render() {
        const {student} = this.state;
        return (
            <div className="container">
                <h2>{this.props.location.pathname === "/student/add"
                    ? "Create A New Student" : "Update Student Information"}</h2>
                <form onSubmit={this.onSubmit} className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="firstName" className="col-sm-2 control-label">First Name</label>
                        <div className="col-sm-10">
                            <input
                                type="text"
                                className="form-control"
                                id="firstName"
                                placeholder="First Name"
                                onChange={this.handleChange}
                                value={student.firstName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName" className="col-sm-2 control-label">Last Name</label>
                        <div className="col-sm-10">
                            <input
                                type="lastName"
                                className="form-control"
                                id="lastName"
                                placeholder="Last Name"
                                onChange={this.handleChange}
                                value={student.lastName}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="className" className="col-sm-2 control-label">Class</label>
                        <div className="col-sm-10">
                            <input
                                type="className"
                                className="form-control"
                                id="className"
                                placeholder="Class"
                                onChange={this.handleChange}
                                value={student.className}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-default">
                                {this.props.location.pathname === "/student/add" ? "Register Student" : "Update Student"}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default StudentForm;