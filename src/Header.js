import React from 'react';
import Message from './Message';
import Icon from './Icon';

const Header= ({header}) => (
    <span>
    <Message text= {header.text}/>
    <Icon iconName={header.iconName} />
    </span>
);

export default Header;

