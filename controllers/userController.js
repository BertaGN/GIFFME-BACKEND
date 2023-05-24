const User = require("../models/user");


const loginUser = async (req, res) => {
const { email, password } = req.body;

try {
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  if (user.password !== password) {
    return res.status(401).json({ message: 'Invalid password' });
  }
  return res.status(200).json({ message: 'Login successful' });
} catch (error) {
  console.error('Error during login:', error);
  return res.status(500).json({ message: 'Internal server error' });
}
};

module.exports = { loginUser };