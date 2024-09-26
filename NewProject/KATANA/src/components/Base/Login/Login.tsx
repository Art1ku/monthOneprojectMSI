import { TextField, Button } from "@mui/material"
import classes from "./Login.module.scss"
import { useState } from "react"

export const Login = () => {

    const [loginData, setLoginData] = useState({
        // userName: {
        //     value: '',
        //     error: false,
        // },
        // phoneNumber: {
        //     value: '',
        //     error: false,
        // },
        userName: '',
        phoneNumber: '',
    })



    const handleAddUser = () => {
        localStorage.setItem('user', JSON.stringify(loginData))
        window.location.reload()
    }


    return(
        <>
            <div className={classes.wrapper}>
                <p className={classes.Name}>Login</p>
                <div className={classes.inputWrapper}>
                    <TextField onChange={(e) => {
                        console.log(e.target.value)
                        setLoginData((prev) => ({...prev, userName: e.target.value}))
                        console.log(loginData)
                    }} error={false} variant="filled" label="Username" />
                    <TextField onChange={(e) => {
                        console.log(e.target.value)
                        setLoginData((prev) => ({...prev, phoneNumber: e.target.value}))
                        console.log(loginData)
                    }} error={false} variant="filled" label="Number"  />
                </div>
                <Button variant="contained" onClick={() => handleAddUser()}>Login</Button>
            </div>
        </>
    )
}