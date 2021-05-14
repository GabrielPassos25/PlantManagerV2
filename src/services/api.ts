import axios from 'axios';
//Install lib: sudo npm install -g json-server
//Run server: json-server ./src/services/server.json --host 192.168.1.68 --port 3333 --delay 700

const api = axios.create({
    baseURL: 'http://192.168.1.68:3333'
});

export default api;