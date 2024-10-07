import { Input } from "antd";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h2>library</h2>
      <p>Books for Students</p>
      <Input placeholder="Search books..."/>
    </div>
  );
};

export default Header;
