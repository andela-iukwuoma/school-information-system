export default {
    handleError(error, res) {
        return error.errors
            ? res.status(400).send({ message: error.errors[0].message })
            : res.status(400).send({ message: error.message });
    }
};
