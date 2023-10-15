const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  database: 'task_database',
  user: 'root',
  password: 'root',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + db.threadId);
});

module.exports = db;

