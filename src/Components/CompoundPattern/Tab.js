import { createContext, useContext } from "react";
import "../CompoundPattern/Tab.css";

const TabContext = createContext();

export default function Tab({ children, onChange, currentTab }) {
  return (
    <div className="tab">
      <TabContext.Provider value={{ children, onChange, currentTab }}>
        {children}
      </TabContext.Provider>
    </div>
  );
}

Tab.HeadContainer = ({ children }) => {
  return <div className="headcontainer">{children}</div>;
};

Tab.Item = function Item({ label, index, children }) {
const {currentTab,onChange}=useContext(TabContext);

const handleClick=()=>{
    onChange(index);
}

  return <div className={`item ${currentTab === index ? "active": null}`} onClick={handleClick}>{label}</div>;
};

Tab.ContentContainer = ({ children }) => {
  return <div className="contentContainer">{children}</div>;
};

Tab.ContentItem = function ContentItem({index, children }) {
    const {currentTab}=useContext(TabContext);


  return currentTab===index? <div>{children}</div>:null
};
