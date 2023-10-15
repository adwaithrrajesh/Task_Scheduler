const db = require('../database/config');


const insertTask = (data, callback) => {
  const { imageUrl, taskName, description, selectedDate, selectedTime, priority } = data;
  const query = 'INSERT INTO tasks (imageUrl, taskName, description, selectedDate, selectedTime, priority) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [imageUrl, taskName, description, selectedDate, selectedTime, priority], (err, results) => {
    if (err) {
      console.error('Error inserting task:', err);
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = insertTask;
