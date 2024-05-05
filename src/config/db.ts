import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './config.env' });

// For connection to hosted database
const DB = process.env.DATABASE!.replace(
    '<password>',
    process.env.DATABASE_PASSWORD!
);
// For connection to local database
//const DB: string = process.env.DATABASE!;

const db = async() => {
    try {
        const con = await mongoose.connect(DB);
        console.log(`Connected to database on ${con.connection.host}`)
    } catch (error) {
        console.error(error);
    }
}

export default db;