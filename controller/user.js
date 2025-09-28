import User from "../moduler/userModel.js";
import Service from "../service/authService.js";
const handlesignup = async (req, res) => {

   const { name, email, password } = req.body;

   await User.create({
      name,
      email,
      password,

   });
   return res.redirect("/login");
}

const handlelogin = async (req, res) => {
   const { email, password } = req.body;

   const user = await User.findOne({ email, password });
   if (!user) return res.render("login", { error: "Invalid username or password" });

   const token = Service.setUser(user);
   res.cookie("token", token, { httpOnly: true }); // ✅ correct
   return res.redirect("/home");
}



export default { handlesignup, handlelogin };