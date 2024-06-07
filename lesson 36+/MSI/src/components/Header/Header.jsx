import classes from './Header.module.scss'
import logo from '../../assets/msi-seeklogo-4.svg'
import phone from '../../assets/Phone.svg'
import mail from '../../assets/Chat.svg'
import Container from "../Conteainer"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function Header() {
    const navigationContent = [
        {
            title: 'About us',
            link: '/about'
        },
        {
            title: 'Services',
            link: '/Services'
        },
        {
            title: 'Work',
            link: '/Work'
        },
        {
            title: 'News',
            link: '/News'
        },
        {
            title: 'Contacts',
            link: '/Contacts'
        },
    ]
    
    return(
        <>
            <div className={classes.wrapper}>
                <div className={classes.headerContainer}>
                    <div className={classes.headerContent}>
                        <Link to={"/"}><img className={classes.logo} src={logo} alt="" /></Link>
                        <div className={classes.navbar}> 
                            {navigationContent.map((item, i) => (
                                <Link    className={classes.navigation} key={i} to={item.link}>
                                    <div>{item.title}</div>
                                </Link>
                            ))}
                        </div>
                        <div className={classes.contactBlock}>
                            <div className={classes.contactsItem}> 
                                <img src={phone} alt="" />
                                <div className={classes.contactsInfo}>
                                    <p>Call us</p>
                                    <p>802 53 157</p>
                                </div>
                            </div>
                            <div className={classes.contactsItem}>
                                <img src={mail} alt="" />
                                <div className={classes.contactsInfo}>
                                    <p>Talk to us</p>
                                    <p>ilovemsi@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
