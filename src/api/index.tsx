import axios from 'axios'

export const getIndexData = () => (axios.get('https://jsonplaceholder.typicode.com/posts'))