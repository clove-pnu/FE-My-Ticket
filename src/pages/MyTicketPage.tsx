import { useEffect, useState } from 'react';
import CategoryTitle from '../components/common/CategoryTitle';
import MyTicketList from '../components/MyTicketList';
import { ReservedTicket } from '../utils/type';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { getMyTickets } from '../apis/ticket';

export default function MyTicketPage() {
  document.title = '티켓 관리 | Clove 티켓';

  const [ticketList, setTicketList] = useState<ReservedTicket[]>([]);

  useEffect(() => {
    fetchWithHandler(() => getMyTickets(), {
      onSuccess: (response) => {
        setTicketList(response.data.reverse());
      },
      onError: () => {},
    });
  }, []);

  return (
    <main>
      <CategoryTitle>티켓 관리</CategoryTitle>
      <MyTicketList
        tickets={ticketList}
      />
    </main>
  );
}
