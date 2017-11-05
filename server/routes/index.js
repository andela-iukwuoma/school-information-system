import students from '../controllers/students';

const Routes = (app) => {
    app.route('/students')
        .get(students.list)
        .post(students.create)

    app.route('/student/:studentId')
        .get(students.retrieve)
        .put(students.update)
        .delete(students.destroy);
};


export default Routes;
