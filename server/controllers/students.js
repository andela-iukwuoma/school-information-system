import Students from '../models/student';
import utils from '../utils';

export default {
    list(req, res) {
        let response = {
            message: 'Welcome to my web applications now'
        };
        res.status(200).send(response);
    }

}
