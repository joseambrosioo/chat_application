// export const signup = (req, res) => {
//   res.send("signupUser");
//   console.log("signupUser");
// };

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;
  } catch (error) {}
};

export const login = (req, res) => {
  res.send("loginUser");
  console.log("loginUser");
};

export const logout = (req, res) => {
  res.send("logoutUser");
  console.log("logoutUser");
};
