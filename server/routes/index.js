import students from '../controllers/students';

const Routes = (app) => {
    app.route('/')
        .get({title: 'Express'})
};

export default Routes;
