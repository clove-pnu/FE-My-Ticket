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
          eventTime,
          purchaseTime,
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
              eventTime={eventTime}
              purchaseTime={purchaseTime}
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
