import {Model,DataTypes,db} from '../.core/database___.ts'
export default class Siswa extends Model {

    static table = 'Siswa';
    static timestamps = true;
  
    static fields = {

      id: { primaryKey: true, autoIncrement: true },
      email: DataTypes.STRING,
      token: DataTypes.STRING,
      password: DataTypes.FLOAT,

    };
  
  }
  
  db.link([Siswa]); 
  db.sync()
  