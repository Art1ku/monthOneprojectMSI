import classes from './Profile.module.scss'
import { Container } from '../../components/UI'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import pfpDefault from '../../assets/user.svg'

export const Profile = () => {

    const user = localStorage.getItem("user") && JSON.parse(localStorage.getItem("user") as string)


    const [userPfp, setUserPfp] = useState<string | undefined>(user.pfp ? user.pfp: pfpDefault)



    console.log(userPfp)
    const navigate = useNavigate()
    // useEffect(() => {
    //     if(!user){
    //         navigate("/")
    //     }

    // }, [])
    
    const handleExit = () => {
        localStorage.removeItem('user')
        navigate('/')
        window.location.reload()
    }

    const handleprofilePicture = (e: any) => {
        console.log(e.target.files)
        setUserPfp(URL.createObjectURL(e.target.files[0]))
        const updateUser = {...user, pfp: URL.createObjectURL(e.target.files[0])}
        localStorage.setItem('user', JSON.stringify(updateUser))
    }

    console.log(user)
    
    return(
        <>
        <div className={classes.wrapper}>
            <Container>
                <div className={classes.avatarDiv}>
                <input className={classes.hiddenInput} id='pfp' type="file" onChange={handleprofilePicture}/>
                    <label className={classes.labelDiv} htmlFor="pfp">
                        <img className={classes.avatar} src={userPfp} alt={userPfp} />
                    </label>
                        
                    
                    
                </div>
                <div className={classes.profileWrapper}>
                    <p className={classes.name}>Name: {user?.userName.value}</p>
                    <p className={classes.number}>Phone number: {user?.phoneNumber.value}</p>
                </div>
                <Button onClick={() => handleExit()}>Exit</Button>
            </Container>
        </div>
        </>
    )
}