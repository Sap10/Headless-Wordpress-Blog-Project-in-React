import axios from 'axios';

const instance = axios.create({
    baseURL:'http://localhost/webdev/myBlog/site/'
});

export default instance;