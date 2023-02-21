import "../Button.css"
import Button from "../Button"
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <aside className="toolbar">
      <Button className="toolbarTitle" name="DASHBOARD"/>
      <Button className="toolbarTitle" name = "PRODUCTS"/>
      <Button className="toolbarTitle" name = "NEWS"/>
      <Button className="toolbarTitle"name = "FORMS"/>
  </aside>
  )
}

export default  Sidebar