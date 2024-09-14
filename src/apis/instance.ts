import axios from 'axios';

export const myTicketInstance = axios.create({
  baseURL: '/tickets',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});
