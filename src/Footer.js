import React from "react";
import Message from "./Message";
import Icon from "./Icon";    

const Footer = ({footer}) => (
    <span className = "footer">
       <Message text={footer.text}/> 
       <Icon iconName={footer.iconName}/>
    </span>
);

export default Footer;