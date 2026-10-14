import db from "../config/db.js";

// Get all students
export const getStudents = async (req, res) => {
  const [students] = await db.query("SELECT * FROM students");
  res.json(students);
};

// Get one student
export const getStudentById = async (req, res) => {
  const [rows] = await db.execute(
    "SELECT * FROM students WHERE id = ?", [req.params.id]
  );
  res.json(rows[0] || { message: "Student not found" });
};

// Add a student
export const createStudent = async (req, res) => {
  const { name, email, age } = req.body;
  const [result] = await db.execute(
    "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
    [name, email, age]
  );
  res.status(201).json({ id: result.insertId, name, email, age });
};

// Update a student
export const updateStudent = async (req, res) => {
  const { name, email, age } = req.body;
  await db.execute(
    "UPDATE students SET name=?, email=?, age=? WHERE id=?",
    [name, email, age, req.params.id]
  );
  res.json({ message: "Student updated" });
};

// Delete a student
export const deleteStudent = async (req, res) => {
  await db.execute("DELETE FROM students WHERE id=?", [req.params.id]);
  res.json({ message: "Student deleted" });
};