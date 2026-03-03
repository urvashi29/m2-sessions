import { data } from "@/data";
import { withSession } from "@/session";

async function handler(req, res) {
  console.log(req.body);
  const { userName, password } = req.body;
  const user = data.find((item) => item.username === userName);
  if (user && user.password === password) {
    req.session.set("user", user);
    await req.session.save();
    res.status(200).json({ message: "user is authenticated" });
  } else {
    res.status(403).json({ message: "user is not authenticated" });
  }
}

export default withSession(handler);
