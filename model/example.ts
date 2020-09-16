
  import {Model,DataTypes,db} from '../.core/database___.ts'
  export default class example extends Model {
  
      static table = 'nametable'; //name table
      static timestamps = true;   //create_at & update_at
    
      static fields = { // field

        id: { primaryKey: true, autoIncrement: true },
        name: DataTypes.STRING,

      };
    
    }

db.link([example]);



db.sync()