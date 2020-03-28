import axios from 'axios'
import config from '../config'

const BASE_URI = config.api.baseURL;


class GitDataService {

    async getGitUser(userId, callback) {
        const uri = `${BASE_URI}/users/${userId}`;
        try {
            const response = await axios.get(uri, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            });
            const data = await response.data;
            callback(data)
        } catch (error) {
            console.log(error);
            callback(null)
        }

    }

    async fetchUriData(uri, callback) {
        try {
            const response = await axios.get(uri, {
                method: 'GET',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
                credentials: 'same-origin',
            });
            const data = await response.data;
            callback(data)
        } catch (error) {
            console.log(error);
            callback(null)
        }

    }
}

export default GitDataService;

