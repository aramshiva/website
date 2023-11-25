
// pages/api/guestbook.js
import mysql from 'mysql2/promise';

// Function to create a database connection
async function connectToDatabase() {
  const connection = await mysql.createConnection({
    host: 'sql_host',
    user: 'sql_user',
    password: 'sql_password',
    database: 'sql_database'
  });
  return connection;
}

export default async function handler(req, res) {
  const connection = await connectToDatabase();

  try {
    // Handle GET request - Read data from the guestbook
    if (req.method === 'GET') {
      const [rows] = await connection.execute('SELECT * FROM guestbook');
      res.status(200).json(rows);
    } 
    // Handle POST request - Insert data into the guestbook
    else if (req.method === 'POST') {
      const { name, message } = req.body;
      if (!name || !message) {
        res.status(400).json({ message: 'Name and message are required' });
        return;
      }
      await connection.execute('INSERT INTO guestbook (name, message) VALUES (?, ?)', [name, message]);
      res.status(201).json({ message: 'Entry added to guestbook' });
    } 
    // Handle other methods
    else {
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  } finally {
    // Close the connection
    await connection.end();
  }
}

