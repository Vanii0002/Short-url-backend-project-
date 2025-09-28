import jwt from "jsonwebtoken";

const secret = "Tushar";
function setUser(user) {

  return jwt.sign({
    _id: user._id,
    email: user.email,
      name: user.name ,
  }, secret);
}


function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.log("JWT Error:", err.message);
    return null;
  }
}

export default { setUser, getUser };