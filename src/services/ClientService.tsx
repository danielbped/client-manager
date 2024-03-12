import axios from "axios";

interface Client {
  id?: string;
  name: string;
  email: string;
  phone: string;
  coordinate: string;
}

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
  async create(client: Partial<Client>) {
    try {
      const result = await axios.post("http://localhost:3000/client", client);
      return result.data;
    } catch (err) {
      console.error(err);
      throw new Error('Ocorreu um erro ao criar um novo cliente.')
    }
  }
}