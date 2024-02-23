"use client";

import { useAuthContext } from "../../contexts/authContext";
import { useRouter } from "next/navigation";

const LogoutPage = () => {
  const { logout } = useAuthContext();
  const router = useRouter();

  logout();
  return router.push("/login");
}

export default LogoutPage