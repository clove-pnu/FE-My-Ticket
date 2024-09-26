import styles from './styles/MyTicketList.module.css';
import { ReservedTicket } from '../utils/type';
import MyTicket from './MyTicket';

interface MyTicketListProps {
  tickets: ReservedTicket[];
}

export default function MyTicketList({ tickets }: MyTicketListProps) {
  return (
    <div className={styles.container}>
      <ul className={styles.ticketList}>
        {tickets.map(({
          id,
          eventDate,
          reservedDate,
          seatNumber,
          eventName,
          price,
          section,
        }) => (
          <li
            key={id}
            className={styles.ticket}
          >
            <MyTicket
              id={id}
              eventDate={eventDate}
              reservedDate={reservedDate}
              seatNumber={seatNumber}
              eventName={eventName}
              price={price}
              section={section}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
