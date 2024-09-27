import { getAccessToken } from '../utils/token';
import { myTicketInstance } from './instance';

export function getMyTickets() {
  return myTicketInstance.get('/my/all', {
    headers: {
      Authorization: getAccessToken(),
    },
  });
}

export function cancelTicket({
  eventName,
  section,
  seatNumber,
  price,
  eventTime,
}: {
  eventName: string;
  section: string;
  seatNumber: number;
  price: number;
  eventTime: string;
}) {
  return myTicketInstance.delete('/cancel', {
    data: {
      eventName,
      section,
      seatNumber,
      price,
      eventTime,
    },
    headers: {
      Authorization: getAccessToken(),
    },
  });
}
