const API_URL = "http://localhost:5000/api/students";

// GET all students
export const getStudents = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  return data;
};

// GET student by ID
export const getStudentById = async (id) => {
  const response = await fetch(`${API_URL}/${id}`);
  const data = await response.json();

  return data;
};

// CREATE student
export const createStudent = async (student) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  const data = await response.json();

  return data;
};

// UPDATE student
export const updateStudent = async (id, student) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });

  const data = await response.json();

  return data;
};

// DELETE student
export const deleteStudent = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();

  return data;
};