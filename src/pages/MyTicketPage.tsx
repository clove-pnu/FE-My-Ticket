import CategoryTitle from '../components/common/CategoryTitle';
import MyTicketList from '../components/MyTicketList';

export default function MyTicketPage() {
  return (
    <main>
      <CategoryTitle>티켓 관리</CategoryTitle>
      <MyTicketList
        tickets={[
          {
            id: 1,
            eventDate: '2024-01-03',
            reservedDate: '2024-01-01',
            seatNumber: 1,
            eventName: '시카고',
            price: 15000,
            section: 'R',
          },
          {
            id: 2,
            eventDate: '2024-01-03',
            reservedDate: '2024-01-02',
            seatNumber: 2,
            eventName: '시카고',
            price: 12000,
            section: 'S',
          },
          {
            id: 3,
            eventDate: '2024-01-04',
            reservedDate: '2024-01-02',
            seatNumber: 12,
            eventName: '시카고',
            price: 10000,
            section: 'A',
          },
        ]}
      />
    </main>
  );
}
