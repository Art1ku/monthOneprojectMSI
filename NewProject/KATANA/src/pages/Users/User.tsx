import { useEffect, useState } from "react"
import { fetcher } from "../../helpers/fetcher"
import { Container } from "../../components/UI"
import { UserCard } from "../../components/UI/UserCard/UserCard"
import classes from './User.module.scss'

interface UsersData{
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string 
     }
    },
    phone: string,
    website: string,
    company: {
      name:  string,
      catchPhrase: string,
      bs: string 
    }
}

export const Users = () => {

    const[users, setUsers] = useState<[] | UsersData[]>([])

    const handleFetcher = async () => {
        const result = await fetcher('users')
        setUsers(result)

    }

    useEffect(() => {
        handleFetcher()
    }, [])

    return(
        <>
            <div className={classes.userData}>   
                <Container>
                    <p className={classes.MainTitle}>Users</p>
                    <div className={classes.CardsWrapper}>
                        {users.map((item) => (
                            <UserCard userData={item} key={item.id}/>
                        ))}
                    </div>
                </Container>
            </div> 
        </>
    )
}