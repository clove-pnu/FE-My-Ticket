import { getAccessToken } from '../utils/token';
import { ReservedTicket } from '../utils/type';
import { myTicketInstance } from './instance';

export function getMyTickets() {
  return myTicketInstance.get('/my/all', {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}

export function refundTicket(ticket: ReservedTicket) {
  return myTicketInstance.delete('/refund', {
    data: ticket,
    headers: {
      Authorization: getAccessToken(),
    },
  });
}
