import students from '../controllers/students';

const Routes = (app) => {
    app.route('/')
        .get(students.list)
};


export default Routes;
