module.exports = (sequelize, DataTypes) => {
    
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING(100),
            img: DataTypes.STRING(100),
            n_likes: DataTypes.INTEGER
        }, 
        {
            tableName: "posts",
            timestamps: false
        }
    );

    //RELACIONAMENTO POST + USUARIO
    Post.associate = (models) => {
        //relação N:1 (vários posts de 1 usuario)
        Post.belongsTo(models.Usuario, { as: "usuario", foreignKey: "usuarios_id"});

        //RELACIONAMENTO POST + COMENTÁRIO
        Post.hasMany(models.Comentario, { as: "comentarios", foreignKey: "posts_id"});

        //Relacionamento Curtidas + post
        Post.belongsToMany(models.Usuario, { 
            as: "curtiu",  
            through: "curtidas",
            foreignKey: "posts_id",
            otherKey: "usuarios_id",
            timestamps: false
        })
    }

    return Post;
}
