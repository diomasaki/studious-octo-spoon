const TransferReceipt = require("../models/TransferReceipt")
const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
  } = require("./verifyToken");

  const router = require("express").Router();

  
  //CREATE

router.post("/", async (req, res) => {
    const newTransferReceipt = new TransferReceipt(req.body);
  
    try {
      const savedTransferReceipt = await newTransferReceipt.save();
      res.status(200).json(savedTransferReceipt);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;