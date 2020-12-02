const adminLogin = require("../helpers/adminLogin");

const generateAdminToken = async (password, username) => {
  const body = {
    password,
    username,
  };
  let result = await adminLogin(body, "login");
  return result.data.token;
};

module.exports = generateAdminToken;
