
import { Box, Button, Typography } from "@mui/material"

const CartTotal = () => {

    const handleRemoveItems = () => {
        localStorage.removeItem("cartData")
        localStorage.setItem("isItemBought", "1")
        window.location.reload()
    }


    return(
        <>
            <Box  
                sx={{
                    border: "2px solid red",
                    borderRadius: "8px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "48px",
                    width: "300px",
                    height: "125px",
                    padding: "16px, 24px",
                    
                }}>
                <Typography sx={{fontSize: "24px", margin: "0"}}>Оформить заказ</Typography>
                <Button onClick={handleRemoveItems}>Заказать</Button>
            </Box>
        </>
    )
}

export default CartTotal