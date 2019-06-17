import axios from 'axios';

// const TOKEN = "f9acf3e3-79f8-4362-8cdd-3765c3f6f38e";
const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //     'Authorization': `Bearer ${TOKEN}`
  // }
});

const getHello = async () => {
  try {
    const resp = await api(`/`)
    return resp.data;
  }
  catch(e) {
    console.error(e);
  }
}

export {
  getHello,
}

