import axios from 'axios'

const apiClient = axios.create({
  baseURL: `http://localhost/api`,
  withCredentials: false,
})

export default {
  getProfile() {
    return apiClient.get('/profile')
  },
  getActivity() {
    return apiClient.get('/activity')
  },
}
