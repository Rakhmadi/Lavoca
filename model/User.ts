import {Model,DataTypes,db} from '../.core/database___.ts'
export default class User extends Model {

    static table = 'flights';
    static timestamps = true;
  
    static fields = {

      id: { primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      password: DataTypes.FLOAT,

    };
  
  }
  db.link([User]);
  db.sync();