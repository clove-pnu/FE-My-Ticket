import { numberToMoney } from '../utils/convert';
import { ReservedTicket } from '../utils/type';
import styles from './styles/MyTicket.module.css';

export default function MyTicket({
  id,
  eventDate,
  reservedDate,
  seatNumber,
  eventName,
  price,
  section,
}: ReservedTicket) {
  return (
    <div className={styles.container}>
      <div className={styles.eventName}>{eventName}</div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>공연 일자</div>
        <div>{eventDate}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>구역</div>
        <div>{section}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>좌석 번호</div>
        <div>{seatNumber}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>예매 일자</div>
        <div>{reservedDate}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>예매 가격</div>
        <div>{numberToMoney(price)}</div>
      </div>
      <button
        type="button"
        className={styles.button}
      >
        예매 취소
      </button>
    </div>
  );
}
