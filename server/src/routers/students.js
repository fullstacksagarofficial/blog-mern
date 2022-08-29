const express = require('express')
const router = new express.Router();
const Student = require('../models/studentRegistration');
//create a new students 
router.post("/students", async (req, res) => {
    try {
      const students = new Student(req.body)
      const createStudent = await students.save();
      res.status(201).send(createStudent);
    } catch (e) {
      res.status(201).send(e);
    }
  })
  
  // fetch students 
  router.get("/students", async (req, res) => {
    try {
      const studentsData = await Student.find();
      res.status(200).send(studentsData);
    } catch (e) {
      res.status(400).send(e);
    }
  })
  
  // fetch individual students 
  router.get("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const studentData = await Student.findById(_id)
      res.send(studentData);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  
  
  // update student by ID
  router.patch("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateStudentData = await Student.findByIdAndUpdate(_id, req.body, {
        new: true,
      })
      res.send(updateStudentData);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  
  
  // delete student by ID
  router.delete("/students/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteStudent = await Student.findByIdAndDelete(_id)
      if (!_id) {
        return res.status(404).send();
      }
      res.send(deleteStudent);
    } catch (e) {
      res.status(500).send(e);
    }
  })
  

module.exports = router;