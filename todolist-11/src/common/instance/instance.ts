import axios from "axios";

const token = '821bb199-f961-4294-ae4c-67d65a31214d'
const apiKey = '804e3ec3-d8f3-4626-a39d-47e6c146c837'

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  headers: {
    Authorization: `Bearer ${token}`,
    'API-KEY': apiKey
  }
})