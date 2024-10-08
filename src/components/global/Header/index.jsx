import { Input } from "antd";
import "./style.css";
import { useState } from "react";

const Header = ({ inputValue, filterInput }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    filterInput(e.target.value);
  };

  return (
    <div className="header">
      <h2>library</h2>
      <p>Books for Students</p>
      <Input
        placeholder="Search books..."
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Header;
