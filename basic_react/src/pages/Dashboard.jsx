import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <div>This is Dashboard.</div>

      <ul>
        <li>
          <Link to="profile">Profile</Link>
        </li>
        <li>
          <Link to="settings">Settings</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
