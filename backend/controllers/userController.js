const registerUser = (req, res) => {
  res.send("Register Router");
};

const loginUser = (req, res) => {
  res.send("Login Route");
};

module.exports = {
  registerUser,
  loginUser,
};
