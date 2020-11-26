const express = require('express')
const router = express.Router()

const axios = require('axios');

router.post('/login', (req, res, next) => {
  try{
    const data = JSON.stringify({"password": `${req.body.password}`,"username": `${req.body.username}`});
    const config = {
      method: 'post',
      url: 'https://sandbox-api.violet.io/v1/login',
      headers: { 
        'X-Violet-App-Secret': '21a81126a67a4bc5964a4db72933ce57', 
        'X-Violet-App-Id': '10121', 
        'Content-Type': 'application/json'
      },
      data : data
    };
    axios(config)
    .then(function (response) {
      return res.json(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }catch(err) {
    return next(err)
  }
})

module.exports = router