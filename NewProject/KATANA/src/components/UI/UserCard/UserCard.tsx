import classes from './UserCard.module.scss'
import user from '../../../assets/user.svg'
import { FC } from 'react'
import { CustomModal } from '../CustomModal/CustomModal'
import { useState } from 'react'

interface UserCardProps{
    userData: {
        name: string,
        email: string,
        phone: string,
        website: string,
        company: {
        name:  string,
        catchPhrase: string,
        bs: string 
        }
    }
}

export const UserCard:FC<UserCardProps> = (props) => {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const {userData} = props



    return(
        <>
            
                <div className={classes.CardWrapper} onClick={() => handleOpen()}>
                    <img className={classes.userIcon} src={user} alt="" />
                    <p className={classes.Name}>{userData.name}</p>
                    <p>{userData.email}</p>
                    <p>{userData.phone}</p>
                    <div>
                        <p>{userData.company.name}</p>
                        <p>{userData.company.catchPhrase}</p>
                    </div>
                </div>
                <CustomModal open={open} handleClose={handleClose}>
                    <img className={classes.userIcon} src={user} alt="" />
                    <p className={classes.Name}>{userData.name}</p>
                    <p>{userData.email}</p>
                    <p>{userData.phone}</p>
                    <div>
                        <p>{userData.company.name}</p>
                        <p>{userData.company.catchPhrase}</p>
                    </div>
                </CustomModal>
        
        </>
    )
}