import { Box, Button, Typography } from "@mui/material"
import { useTranslation } from "react-i18next"
import { CartCardProps } from "../type/CartCardType"
import { FC, useState } from "react"
import { styled } from '@mui/material';


const CartCard:FC<CartCardProps> = (props) => {

    const {cartData} = props

    const {t} = useTranslation()

    const SubButton = styled(Button)(({theme}) => ({
        width: '50px',
        height: '40px',
        fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontSize: "24px",
        fontWeight: 'bold',
        lineHeight: '52px',
        letterSpacing: '0.5px',
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'red',
        marginLeft: "20px", 
        alignItems: "center",
        '&:hover': {
            color: 'red',
            backgroundColor: 'transparent',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.3)',
            border: '2px red',
        },
    }))
    
    const handleRemoveFromCart = () => {
        const currentData = localStorage.getItem('cartData') ? [...JSON.parse(localStorage.getItem('cartData') || "")] : []
        const filteredCart = currentData.filter((item) => (cartData.id !== item.id))
        localStorage.setItem('cartData', JSON.stringify(filteredCart))
        window.location.reload()
        localStorage.setItem('isItemDeleted', '1')

    }

    const getCurrentAmount = JSON.parse(localStorage.getItem("cartData") || "[]")?.filter((item) => (cartData.id !== item.id))[0]?.amount

    console.log(getCurrentAmount)

    const [currentAmount, setCurrentAmount] = useState(1)

    const handleIncrement = () => {
        if(currentAmount < 99){
            setCurrentAmount((prev) => prev + 1)
            
        }
    }

    const handleDecrement = () => {
        if(currentAmount > 1){
            setCurrentAmount((prev) => prev - 1)
        } 
    }

    return(
        <>
            <Box
                sx={{
                    width: "31%",
                    height: "430px",
                    justifyContent: "space-around",
                    border: "3px solid red",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBottom: "30px",
                    borderRadius: "20px",
                }}>
                    <Box
                        sx={{
                            width: "90%",
                            height: "240px",
                            background: "grey",
                            borderRadius: "5px",
                            marginTop: "15px",
                        }}>

                    </Box>
                    <Box
                        sx={{
                            height: "20px",
                            margin: "auto",
                            marginTop: "20px",
                        }}>
                            <Typography sx={{width:"140px"}}>{cartData.title}</Typography>
                        </Box>
                    <Box
                        sx={{
                            width: "90%",
                            height: "80px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            
                        }}>
                        
                        <Typography sx={{fontWeight: "bold", fontSize: "24px",}}>{cartData.id * 100 * currentAmount}</Typography>
                        <Box sx={{display: "flex", alignItems: "center"}}>
                            <SubButton onClick={handleDecrement}>-</SubButton>
                            <Typography sx={{margin: "0px 20px", fontWeight: "bold", fontSize: "24px", }}>{currentAmount}</Typography>
                            <SubButton onClick={handleIncrement}>+</SubButton>
                        </Box>
                        <Button onClick={handleRemoveFromCart}>{t("RemoveFromCart")}</Button>

                    </Box>
                   
            </Box>
        </>
    )
}

export default CartCard