var axios = require('axios');
var data = JSON.stringify({"password":"[REDACTED]","username":"[REDACTED]"});
var config = {
  method: 'post',
  url: 'https://sandbox-api.violet.io/v1/login',
  headers: { 
    'X-Violet-App-Secret': '[REDACTED]', 
    'X-Violet-App-Id': '[REDACTED]', 
    'Content-Type': 'application/json'
  },
  data : data
};
axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});