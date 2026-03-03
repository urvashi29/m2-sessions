import { withSession } from "@/session";

const handler = (req, res) => {
  req.session.destroy();
  res.json({ loggedIn: false });
};

export default withSession(handler);
