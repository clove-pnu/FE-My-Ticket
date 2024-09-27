import { cancelTicket } from '../apis/ticket';
import { numberToMoney } from '../utils/convert';
import { fetchWithHandler } from '../utils/fetchWithHandler';
import { ReservedTicket } from '../utils/type';
import styles from './styles/MyTicket.module.css';

export default function MyTicket({
  id,
  eventTime,
  purchaseTime,
  seatNumber,
  eventName,
  price,
  section,
}: ReservedTicket) {
  const handleCancelTicket = () => {
    fetchWithHandler(() => cancelTicket({
      eventName,
      section,
      seatNumber,
      price,
      eventTime,
    }), {
      onSuccess: (response) => {
        alert('예매 취소가 완료되었습니다.');
        window.location.reload();
      },
      onError: () => {
        alert('예매 취소에 실패하였습니다.');
      },
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.eventName}>{eventName}</div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>공연 일자</div>
        <div>{eventTime}</div>
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
        <div>{new Date(purchaseTime).toLocaleString()}</div>
      </div>
      <div className={styles.info}>
        <div className={styles.infoTitle}>예매 가격</div>
        <div>{numberToMoney(price)}</div>
      </div>
      <button
        type="button"
        className={styles.button}
        onClick={handleCancelTicket}
      >
        예매 취소
      </button>
    </div>
  );
}
