import Student from "../models/students.js";

export const CreateStudent = async (req, res) => {
    try {  
        const { name, email, age } = req.body || {};
        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields are required" ,

            });
       
    }
    const student = new Student({ name, email, age });
    await student.save();
    res.status(201).json({ message: "Student created successfully", student });
} catch (error) {
    console.log("Create Student Error:", error);

    res.status(500).json({
        message: "Server error",
        error: error.message
    });
}
};

export const GetStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ message: "Students fetched successfully", students });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


export const GetStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findById(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student fetched successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

 export const UpdateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        if (!name || !email || !age) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const student = await Student.findByIdAndUpdate(id, { name, email, age }, { new: true });
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student updated successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


export const DeleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const student = await Student.findByIdAndDelete(id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student deleted successfully", student });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

