const axios = require("axios");

const adminLogin = async (body, path) => {
  const data = JSON.stringify(body);
  const config = {
    method: "post",
    url: `https://sandbox-api.violet.io/v1/${path}`,
    headers: {
      "X-Violet-App-Secret": "21a81126a67a4bc5964a4db72933ce57",
      "X-Violet-App-Id": "10121",
      "Content-Type": "application/json",
    },
    data: data,
  };
  const response = await axios(config)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

module.exports = adminLogin;
