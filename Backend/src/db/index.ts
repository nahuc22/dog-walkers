import 'dotenv/config';
import { drizzle } from "drizzle-orm/mysql2";
import { usersTable } from './schema';

const db = drizzle(process.env.DATABASE_URL!);

async function insertUser() {
    try {
      await db.insert(usersTable).values({
        name: 'John',       
        lastname: 'Doe',    
        age: 30,            
        email: 'john.doe2@example.com', 
      });
  
      console.log('User inserted successfully!');
    } catch (error) {
      console.error('Error inserting user:', error);
    }
  }
  
  insertUser();