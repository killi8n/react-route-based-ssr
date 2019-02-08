import axios from 'axios';

export const getThumbnail = () => axios.get('/api/thumbnail');
export const getRepos = () => axios.get('/api/repos');
