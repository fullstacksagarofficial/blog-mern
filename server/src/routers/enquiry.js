const express = require('express')
const router = new express.Router();
const Enquiry = require('../models/enquiry');
//create a new enquiry 
router.post("/enquiry", async (req, res) => {
    try {
      const enquiry = new Enquiry(req.body)
      const createEnquiry = await enquiry.save();
      res.status(201).send(createEnquiry);
    } catch (e) {
      res.status(201).send(e);
    }
  })
  
  // fetch enquiry 
  router.get("/enquiry", async (req, res) => {
    try {
      const enquiryData = await Enquiry.find();
      res.status(200).send(enquiryData);
    } catch (e) {
      res.status(400).send(e);
    }
  })
  
  // fetch individual enquiry 
  router.get("/enquiry/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const EnquiryData = await Enquiry.findById(_id)
      res.send(EnquiryData);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  
  
  // update Enquiry by ID
  router.patch("/enquiry/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const updateEnquiryData = await Enquiry.findByIdAndUpdate(_id, req.body, {
        new: true,
      })
      res.send(updateEnquiryData);
    } catch (e) {
      res.status(404).send(e);
    }
  })
  
  
  // delete Enquiry by ID
  router.delete("/enquiry/:id", async (req, res) => {
    try {
      const _id = req.params.id;
      const deleteEnquiry = await Enquiry.findByIdAndDelete(_id)
      if (!_id) {
        return res.status(404).send();
      }
      res.send(deleteEnquiry);
    } catch (e) {
      res.status(500).send(e);
    }
  })
  

module.exports = router;