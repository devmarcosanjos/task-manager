import "./Sidebar.scss";
import CustomButton from "./CustomButon";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="logo">
        <h2>TODO LIST</h2>
      </div>
      <div className="sing-out">
        <CustomButton>Sair</CustomButton>
      </div>
    </div>
  );
};

export default Sidebar;
