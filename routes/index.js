'use strict'

const express = require('express');
const router = express.Router();
router.use('/v1/api', require('./access')); //prefix v1/api/
// router.get('', (req, res) => {
//    // const demoStr = "demo string for compression";
//     res.status(200).json({
//         message: 'Welcome to the E-commerce API',
//      //   metaData : demoStr.repeat(1000)
//     });
// });

module.exports = router;
