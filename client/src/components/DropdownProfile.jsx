import { useLogout } from '../hooks/useLogout'

export const DropdownProfile = () => {
  const { logout } = useLogout();

  const handleLogout = () => {
    logout();
  }
  return (
    <div className="flex flex-col dropDownProfile">
        <ul className="flex flex-col gap-2 text-xs">
            <li>Profile</li>
            <li>Settings</li>
            <li><button onClick={handleLogout}>Log Out</button></li>
        </ul>
    </div>
  )
}
