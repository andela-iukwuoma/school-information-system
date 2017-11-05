let classes = ['Basic 1', 'Basic 2', 'Basic 3', 'Basic 4', 'Basic 5', 'Basic 6']

export default (sequelize, DataTypes) => {
    const Student = sequelize.define('Student', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: { args: true, msg: 'First name cannot be empty' } }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: { args: true, msg: 'Last name cannot be empty' } }
        },
        className: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: 'Basic 1',
            validate: { notEmpty: { msg: 'Class cannot be empty' },
                isIn: { args: [classes], msg: 'Select an option' } }
        }
    }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      }
    }
  });
  return Student;
};