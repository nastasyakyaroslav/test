import React from 'react';
import './style.css';
import PhoneImg from './phoneImg';
import LocationImg from './locationImg';
import MailIng from './mailImg';

interface Item {
    icon: React.ReactNode,
    text: string
}

interface InfoItemProps {
    item: Item
}

const items:Item[] = [
    { text: `888 Brannan Street,in \n San Francisco, California`, icon: <LocationImg /> },
    { text: '+1 (039) 032 03 84', icon: <PhoneImg /> },
    { text: 'info@airbnb.com', icon: <MailIng /> }
]

const InfoItem: React.FC<InfoItemProps> = ({ item }) => {
    return (
        <div className='infoItem'>
            {item.icon}
            <span className='infoItemText'>{item.text}</span>
        </div>
    )
};

const Info: React.FC = () => {
    return (
        <div className='info'>
            {items.map(item => <InfoItem  item={item} key={item.text} />)}
        </div>
    )
};

export default Info;