import { TextField, Button } from "@mui/material"
import classes from "./Login.module.scss"
import { useState } from "react"

interface LoginData{
    userName: LoginValue
    phoneNumber: LoginValue
    [key: string]: LoginValue


}
interface LoginValue{
    value: string
    pattern: RegExp
    error: boolean

}
export const Login = () => {

    const [loginData, setLoginData] = useState<LoginData>({
        userName: {
            value: '',
            pattern: /\w{4,16}/i,
            error: false,
        },
        phoneNumber: {
            value: '',
            pattern: /^\+996\d{3}\d{2}\d{2}\d{2}$/,
            error: false,
        },
    })

    const handleValidate = () => {
        let result = false
        if(!loginData.userName.pattern.test(loginData.userName.value)){
            handleUpdLoginData('userName', 'error', true)
            result = true
        }
        if(!loginData.phoneNumber.pattern.test(loginData.phoneNumber.value) ){
            handleUpdLoginData('phoneNumber', 'error', true)
            result = true
        }
        return result
        
    }

    const handleAddUser = () => {
        handleValidate()
        if(!handleValidate()){
            localStorage.setItem('user', JSON.stringify(loginData))
            window.location.reload()
        }
        
        
    }

    const handleUpdLoginData = (key:string, type: string, value: string | boolean) => {
        setLoginData(prev => (
            {
                ...prev, [key]: {
                    ...prev[key],
                    [type]: value
                }
            }
        ))
    }

    


    return(
        <>
            <div className={classes.wrapper}>
                <p className={classes.Name}>Login</p>
                <div className={classes.inputWrapper}>
                    <TextField onChange={(e) => {
                        handleUpdLoginData('userName', 'value', e.target.value)
                        handleUpdLoginData('userName', 'error', false)
                    }} error={loginData.userName.error} variant="filled" label="Username" />
                    {loginData.userName.error ? <p>Input more than 4 and not bigger than 16</p> : <></>}
                    <TextField onChange={(e) => {
                        handleUpdLoginData('phoneNumber', 'value', e.target.value)
                        handleUpdLoginData('phoneNumber', 'error', false)
                    }} error={loginData.phoneNumber.error} variant="filled" label="Number"  />
                    {loginData.phoneNumber.error ? <p>Phone pattern: +996 XXX XX-XX-XX</p> : <></>}
                </div>
                <Button variant="contained" onClick={() => handleAddUser()}>Login</Button>
            </div>
        </>
    )
}