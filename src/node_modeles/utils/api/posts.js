import  axios  from 'axios';
import {postsApi} from "./index";

export default {
    get: ()=> axios.get(`http://www.mocky.io/v2/5c9b49553600006500d96b84`),
   remove: _id => axios.delete(`/posts/${_id}`),
};
