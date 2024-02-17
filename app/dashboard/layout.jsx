import Navbar from "../ui/dashboard/navbar/navbar";
import Sidebar from "../ui/dashboard/sidebar/sidebar";
import styles from "../ui/dashboard/dashboard.module.css";
import Image from "next/image";


const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <Image
          className={styles.logo}
          src="/task-flow-logo.png"
          alt=""
          width="150"
          height="60"
        />
        <div className={styles.menu}>
          <Sidebar />
        </div>
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
