import axios from 'axios';

// const TOKEN = "f9acf3e3-79f8-4362-8cdd-3765c3f6f38e";
const BASE_URL = 'http://localhost:3001';

const api = axios.create({
  baseURL: BASE_URL,
  // headers: {
  //     'Authorization': `Bearer ${TOKEN}`
  // }
});

const postUser = async(user) => {
  try {
    const resp = await api.post('/users', user);
    return resp.data;
  }
  catch(e) {
    console.error(e);
  }
}

const loginUser = async(user) => {
  try {
    const resp = await api.post('/users/login', user);
    return resp.data;
  }
  catch(e) {
    console.error(e);
  }
}

export {
  postUser,
  loginUser
}

