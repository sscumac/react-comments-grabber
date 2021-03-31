
import Button from './Button'

const Header = ({ title, onAdd, showForm}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showForm ? "red" : "black"} text={showForm ? "close" : "add"} onClick={onAdd}/>
      {/* <Button color="orange" text="orange" /> */}
      {/* <Button color="blue" text="blue" /> */}
    </header>
  )
}

export default Header
