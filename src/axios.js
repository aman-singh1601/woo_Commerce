import axios from 'axios'

const instance=axios.create({
    baseURL:'https://us-central1-woo-commerce-941c8.cloudfunctions.net/api'
    //http://127.0.0.1:5001/woo-commerce-941c8/us-central1/api
})

export default instance;