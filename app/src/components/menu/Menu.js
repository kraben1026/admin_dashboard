import "./Menu.css";
import "../Button.css";
import Button from "../Button";
const Menu = () => {
  return (
   <div className="menu">
    <Button name="Searchbar"/>
    <Button name="Account"/>
    <Button name="Notifications"/>
    <Button name="Logout" />
  </div>
  )
}

export default Menu