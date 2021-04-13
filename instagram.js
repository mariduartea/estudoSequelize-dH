const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require('sequelize');

// Usuario.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Post.findAll()
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()));
// });

// Comentario.findAll()
// .then((resultado) => {
//        console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll({
//     where: {
//         // usuarios_id: 1;
//         // texto: {[Op.like]: 'oi%'}
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(post => post.toJSON()))
// })

// Usuario.findAll({
//     where: {  
//         // nome: {[Op.like]: '%a%'}, //todos os nomes que contém a letra 'a' no nome
//         nome: {[Op.notLike]: '%a%'} //todos os nome que não contém a letra 'a' no nome

//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()))
// })

// Usuario.findAll({
//     where: {  
//         // nome: {[Op.like]: '%a%'}, //todos os nomes que contém a letra 'a' no nome
//         nome: {[Op.notLike]: '%a%'} //todos os nome que não contém a letra 'a' no nome
        
//     }
// })
// .then((resultado) => {
//     console.log(resultado.map(user => user.toJSON()))
// })

// Comentario.findAll({
//     order:[
//         ['id', 'ASC']  
//     ],
//     limit: 2, 
//     offset: 2
// })
// .then ((resultado) => {
//     console.table(resultado.map(user => user.toJSON())); 
// });

// Usuario.create({
//     nome: 'Bartolomeu',
//     email: 'barto@email.com',
//     senha: 'meumeu123'
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create({
//         texto: 'testando123',
//         usuarios_id: 6,
//         n_likes: 100
// }).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.update({
//     email: 'sergio@digitalhouse.com'
// }, {
//     where: {
//         id:2
//     }
// }).then((resultado) => {
//     console.log(resultado);
// });

// Usuario.destroy({
//     where: {
//         id: 3
//     }
// });

// Usuario.findAll().then((usuarios) => {
//     console.table(usuarios.map((usuario) => usuario.toJSON()));
// });

// Usuario.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((usuario) => {
//     console.table(usuario.posts.map((post) => post.toJSON()));
// })

//outro jeito

// Usuario.findByPk(1, {include:['posts']}).then(
//     usuario => {
//         console.log(usuario.toJSON());
//         sequelize.close(); //serve para fechar conexão.git s
//     }
// )

// Post.findByPk(1, {include:['comentarios']}).then(
//     Comentario => {
//         console.log(Comentario.toJSON());
//         sequelize.close(); //serve para fechar conexão.git s
//     }
// )

// Post.findByPk(1, {
//     include: [
//         {association: "posts"}
//     ]
// })
// .then((post) => {
//     console.table(posts.comentarios.map((post) => post.toJSON()));
// })


Post.findByPk(1, {include: ["curtiu"]}).then(
    post => {
        console.log(post.toJSON());
        sequelize.close();
    }
)