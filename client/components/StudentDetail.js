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
            console.log('Data', data)
            this.setState(state => ({ ...state, student: data}));
        });
    }

    render() {
        const {student} = this.state;
        console.log('Student', student)
        return(
            <div className="container">

            </div>
        );
    }
}

export default StudentDetail;