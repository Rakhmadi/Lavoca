import {Model,DataTypes,db} from '../core/database___.ts'
export class Flight extends Model {
    static table = 'flights';
    static timestamps = true;
  
    static fields = {
      id: { primaryKey: true, autoIncrement: true },
      departure: DataTypes.STRING,
      destination: DataTypes.STRING,
      flightDuration: DataTypes.FLOAT,
    };
  
    static defaults = {
      flightDuration: 2.5,
    };
  }
  db.link([Flight]);
  await Flight.create({
    departure: 'Paris',
    destination: 'Tokyo',
  });
  

  console.log(await Flight.count());
  