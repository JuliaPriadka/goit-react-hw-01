import css from '../TransactionHistory/TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.row}>
        {items.map(item => {
          return (
            <tr className={css.tableRow} key={item.key}>
              <td className={css.type}>{item.type}</td>
              <td className={css.amount}>{item.amount}</td>
              <td className={css.currency}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
