import { Container } from "../../UI"
import { Link } from "react-router-dom"
import { Button } from "@mui/material"
import classes from "./Header.module.scss"
import icon from "../../../assets/navbar/Bread_icon-icons.com_68777.svg"
import { CustomModal } from "../../UI/CustomModal/CustomModal"
import { useState } from "react"
import { Login } from "../Login/Login"

const navBar = [
    {
        title: 'posts',
        url: '/posts'
    },
    {
        title: 'comments',
        url: '/comments'
    },
    {
        title: 'album',
        url: '/album'
    },
    {
        title: 'photos',
        url: '/photos'
    },
    {
        title: 'users',
        url: '/users'
    },
]

export const Header = () => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }


    const user = localStorage.getItem('user')

    const handleExit = () => {
        localStorage.removeItem('user')
        window.location.reload()
    }

    
    return(
        <>
            <Container>
                    <nav className={classes.wrapper}>
                        <Link to={"/"}> <img className={classes.icon} src={icon} alt="home" /></Link>
                        <div className={classes.navbar}>
                            {navBar.map((navEl, i) => (
                                <Link to={navEl.url} key={i}>{navEl.title}</Link>
                            ))}
                        </div>
                        {
                        !user ?
                            <Button variant="contained" onClick={() => handleOpen()}>Sign up</Button>
                            : <Button variant="contained" onClick={() => handleExit()}>Exit</Button>
                        }
                    </nav>
            
            </Container>
            <CustomModal open={open} handleClose={handleClose}><Login/></CustomModal>
        </>
    )
}