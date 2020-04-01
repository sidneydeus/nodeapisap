import api from "../../services/api";

class UserDetailsController {
  async index(req, res) {
    const { username } = req.params;

    if (!username || username === null)
      return res.status(400).send("Bad Request");

    const userDetails = await api
      .get(`users/${username}`)
      .then(response => response.data);

    return res.json(userDetails);
  }
}
export default new UserDetailsController();
