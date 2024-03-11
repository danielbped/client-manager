import axios from "axios";

export default {
  async list() {
    try {
      const result = await axios.get("http://localhost:3000/client");
      return result.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  },
  create() {

  }
}