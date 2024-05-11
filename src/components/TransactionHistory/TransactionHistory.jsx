import css from "../TransactionHistory/TransactionHistory.module.css"

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead >
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.key} className={css.row}>
            <tr className={css.tableRow}>
              <td className={css.type}>{item.type}</td>
              <td className={css.amount}>{item.amount}</td>
              <td className={css.currency}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}
