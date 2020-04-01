import api from "../../services/api";

class UserReposController {
  async index(req, res) {
    const { username } = req.params;

    if (!username || username === null)
      return res.status(400).send("Bad Request");

    const userRepos = await api
      .get(`users/${username}/repos`)
      .then(response => response.data);

    return res.json(userRepos);
  }
}
export default new UserReposController();
