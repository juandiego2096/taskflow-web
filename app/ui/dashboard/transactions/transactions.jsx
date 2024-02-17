"use client"
import Table from "../table/table";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <spam className={styles.title}>Últimos estados</spam>
     <Table />
    </div>
  );
};

export default Transactions;
