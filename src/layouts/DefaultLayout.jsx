import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <NavBar></NavBar>
      <main>
        <Outlet />
      </main>
    </>
  );
}
