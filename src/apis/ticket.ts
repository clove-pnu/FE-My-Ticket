import { myTicketInstance } from './instance';

export function getMyTicket() {
  return myTicketInstance.get('');
}
