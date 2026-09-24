import express from "express";
const router = express.Router();    
import { GetStudentById,GetStudents,UpdateStudent,DeleteStudent,CreateStudent} from "../controller/studentcontroller.js";


router.get("/", GetStudents);
router.get("/:id", GetStudentById);
router.put("/:id", UpdateStudent);
router.post("/", CreateStudent);
router.delete("/:id", DeleteStudent);   

export default router;