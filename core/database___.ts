import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mysql', {
  database: 'fn',
  host: '127.0.0.1',
  username: 'root',
  password: '',
  port: 3306, // optional
});

export {
     DataTypes,Database,Model,db
}