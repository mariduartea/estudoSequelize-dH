const sequelize = require('sequelize');
const config = require('./config/config');
const conexaoDB = new sequelize(config);

conexaoDB.query('SELECT * FROM posts', sequelize.QueryTypes.SELECT)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
});