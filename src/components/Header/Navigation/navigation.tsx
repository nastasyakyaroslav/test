import React from 'react';
import './style.css'

interface Link {
    title: string,
    href: string
}

interface NavigationItemProps {
    link:Link
}

const links: Link[] = [
    {title: 'How it works?',href: '/'},
    {title: 'Browse',href: '/'},
    {title: 'Research',href: '/'},
    {title: 'About',href: '/'},
    {title: 'Contacts',href: '/'}
]

const NavigationItem:React.FC<NavigationItemProps> = ({link}) => {
    return (
        <div>
            <a className="navigationLink" href={link.href}>{link.title}</a>
        </div>
    )
}

const Navigation:React.FC = () => {
    return (
        <nav className="navigation">
            {links.map(link => (
                <NavigationItem link={link} key={link.title} />
            ))}
        </nav>
    )
};

export default Navigation;