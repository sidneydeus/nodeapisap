import api from "../../services/api";

class UserController {
  async index(req, res) {
    const { since, page, per_page } = req.query;

    const users = await api
      .get("users", {
        params: { since: since, page: page, per_page: per_page }
      })
      .then(response => response);

    const { link } = users.headers;
    res.setHeader("link", link);
    return res.json(users.data);
  }
}
export default new UserController();
