import { DataTypes, Database, Model } from 'https://deno.land/x/denodb/mod.ts';

const db = new Database('mysql', {
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'lavoca',
});

        await db.query('SELECT * FROM siswa')
