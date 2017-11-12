import db from '../models';
import utils from '../utils';

const Student = db.Student;

export default {
    create(req, res) {
        return Student
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                className: req.body.className
            })
            .then(student => res.status(201).json({
                message: 'New student was successfully created',
                student
            }))
            .catch(error => utils.handleError(error, res));
    },
    list(req, res) {
        return Student
            .findAndCountAll({
                order: [['id', 'ASC']]
            })
            .then((students) => {
                const response = {
                    students: students.rows,
                    message: `There are ${students.count} students`
                };
                res.status(200).send(response);
            })
            .catch(error => utils.handleError(error, res));
    },
    retrieve(req, res) {
        return Student
            .findById(req.params.studentId)
            .then((student) => {
                if (!student) {
                    return res.status(404).json({
                        message: 'Student not found'
                    });
                }

            return res.status(200).send(student);
            })
            .catch(error => generalUtils.handleError(error, res));
    },
    update(req, res) {
        return Student
            .findById(req.params.studentId)
            .then((studentToUpdate) => {
                if (!studentToUpdate) {
                    return res.status(404).json({
                        message: 'Student not found'
                    });
                }
                return studentToUpdate
                    .update(req.body, { fields: Object.keys(req.body) })
                    .then(student => res.status(200).json({
                        message: 'Student is successfully updated',
                        student
                    }))
                    .catch(error => utils.handleError(error, res));
            })
            .catch(error => utils.handleError(error, res));
    },
    destroy(req, res) {
        return Student
            .findById(req.params.studentId)
            .then((student) => {
                if (!student) {
                    return res.status(404).json({
                        message: 'Student not found'
                    });
                }
                return student
                    .destroy()
                    .then(() => res.status(204).send())
                    .catch(error => utils.handleError(error, res));
            })
            .catch(error => utils.handleError(error, res));
    }
}
