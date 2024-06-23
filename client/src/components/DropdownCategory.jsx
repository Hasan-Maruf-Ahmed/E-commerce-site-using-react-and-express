import { NavLink } from "react-router-dom";


export const DropdownCategory = ({setOpenCategory}) => {
    const handleClick = () => {
        setOpenCategory((prev)=> !prev);
    }
  return (
    <ul className="flex flex-col text-sm" onClick={handleClick}>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/smartwatch">Smart watch</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/headphones">Headphones</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/speakers">Speakers</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/chargingaccessories">Charging Accessories</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/security">Security</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/powerbanks">Powerbanks</NavLink></li>
        <li className='py-3 px-5 hover:cursor-pointer'><NavLink to="/category/monitor">Monitor</NavLink></li>
    </ul>
  )
}
