import axios from 'axios';
import { key } from "./key";

export default axios.create({
    baseURL: 'https://www.thegamesdb.net/api/'
});
