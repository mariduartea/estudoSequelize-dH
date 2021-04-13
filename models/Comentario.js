module.exports = (sequelize, DataTypes) => {
    
    const Comentario = sequelize.define(
        'Comentario', {
            texto: DataTypes.STRING(100),
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER
        }, 
        {
            tableName: "comentarios",
            timestamps: false
        }
    );

    //RELACIONAMENTO COMENTÁRIO + POST
    Comentario.associate = (models) => {
        //relção N:1 (1 post tem vários comentários)
        Comentario.belongsTo(models.Post, {as:"posts", foreignKey: 'posts_id'});
    }
    return Comentario;
}