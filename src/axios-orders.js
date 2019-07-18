import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-my-burger-2f87a.firebaseio.com/'
})

export default instance