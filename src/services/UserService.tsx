import axios from "axios";

interface User {
  email: string;
  password: string;
  name: string;
}

export default {
  async login(user: Partial<User>) {
    try {
      const result = await axios.post("http://localhost:3000/user/login", user);
      return result.data;
    } catch (err) {
      console.error(err);
      throw new Error('Ocorreu um erro ao fazer login.')
    }
  }
}