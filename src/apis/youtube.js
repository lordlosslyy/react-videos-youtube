import axios from 'axios';

const KEY = 'AIzaSyBobk6YRGyRpM7-1vIZH96tcyoYswVEPus'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
