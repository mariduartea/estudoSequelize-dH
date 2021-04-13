module.exports = (sequelize, DataTypes) => {

    const Usuario = sequelize.define(
        "Usuario", {
            nome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING
        }, {
            tableName: "usuarios",
            timestamps: false
        }
    );

    //RELACIONAMENTO USUÁRIO + POST
    Usuario.associate = (models) => {
        //relção 1:N (usuario  tem varios posts)
        Usuario.hasMany(models.Post, {as:"posts", foreignKey: "usuarios_id"});

        Usuario.belongsToMany(models.Post, {
            //relação N:M (usuario curte varios posts)
            as: "curtiu", //alias da relação
            through: "curtidas", //tabela intermediaria
            foreignKey: "usuarios_id",
            otherKey: "posts_id",
            timestamps: false
        })
    }    
    return Usuario;
};
