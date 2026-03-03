import { withSession } from "@/session";

const handler = (req, res) => {
  const user = req.session.get("user");
  if (user) {
    res.status(200).json({
      loggedIn: true,
      ...user,
    });
  } else {
    res.json({
      loggedIn: false,
    });
  }
};

export default withSession(handler);
