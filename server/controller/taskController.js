const insertTask = require('../model/taskModel');
const db = require('../database/config');


module.exports = {

  addTask: (req, res) => {
    const taskDetails = req.body.value;
    const formattedDate = new Date(taskDetails.selectedDate).toISOString().slice(0, 19).replace('T', ' ');
    taskDetails.selectedDate = formattedDate;

    insertTask(taskDetails, (err, results) => {
      if (err) {
        res.status(500).json({ message: 'Failed to insert task' });
      } else {
        res.status(200).json({ message: 'Task inserted successfully' });
      }
    });
  },

  getTask: (req, res) => {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
      if (err) {
        res.status(500).json({ error: 'Failed to fetch tasks' });
      } else {
        // Sort the results based on selectedDate
        results.sort((a, b) => {
          const dateA = new Date(a.selectedDate);
          const dateB = new Date(b.selectedDate);
          return dateA - dateB;
        });

        res.status(200).json(results);
      }
    });
  },

  deleteTask: (req, res) => {
    const { taskId } = req.body;
    if (!taskId) return res.status(400).json({ message: "Requires Task Id to Delete" })
    const deleteQuery = 'DELETE FROM tasks WHERE id = ?';
    db.query(deleteQuery, [taskId], (err, results) => {
      if (err) {
        console.error('Error deleting task:', err);
        res.status(500).json({ message: 'Failed to delete task' });
      } else {
        console.log('Task deleted successfully');
        res.status(200).json({ message: 'Task deleted successfully' });
      }
    });
  },

  updateTask: (req, res) => {
    const { taskDetails } = req.body;
    if (!taskDetails.id) {
      return res.status(400).json({ message: 'Task ID is required for updating a task' });
    }
    const formattedDate = new Date(taskDetails.selectedDate).toISOString().slice(0, 19).replace('T', ' ');
    taskDetails.selectedDate = formattedDate;
    const updateQuery = 'UPDATE tasks SET imageUrl=?, taskName=?, description=?, selectedDate=?, selectedTime=?, priority=? WHERE id=?';
    const values = [taskDetails.imageUrl, taskDetails.taskName, taskDetails.description, taskDetails.selectedDate, taskDetails.selectedTime, taskDetails.priority, taskDetails.id];

    db.query(updateQuery, values, (err) => {
      if (err) {
        res.status(500).json({ message: 'Failed to update task' });
      } else {
        res.status(200).json({ message: 'Task updated successfully' });
      }
    });
  }


};
