import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";

import {
  MdDashboard,
  MdDescription,
  MdAnalytics,
  MdPerson,
  MdSupportAgent,
  MdPeopleAlt,
  MdChecklist,
  MdLogout,
} from "react-icons/md";

const menuItem = [
  {
    title: "Dashboard",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
    ],
  },
  {
    title: "Gestión",
    list: [
      {
        title: "Servicios",
        path: "/dashboard/services",
        icon: <MdDescription />,
      },
      {
        title: "Presupuestos",
        path: "/dashboard/budgets",
        icon: <MdAnalytics />,
      },
      {
        title: "Clientes",
        path: "/dashboard/clients",
        icon: <MdPerson />,
      },
      {
        title: "Agentes",
        path: "/dashboard/agents",
        icon: <MdSupportAgent />,
      },
      {
        title: "Usuarios",
        path: "/dashboard/users",
        icon: <MdPeopleAlt />,
      },
      {
        title: "Categorias",
        path: "/dashboard/categories",
        icon: <MdChecklist />,
      },
    ],
  },
  {
    title: "Configuración",
    list: [
      {
        title: "Cerrar sesión",
        path: "/logout",
        icon: <MdLogout />,
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {menuItem.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
