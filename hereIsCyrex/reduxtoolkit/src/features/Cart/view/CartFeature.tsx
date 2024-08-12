import Card from "../../../shared/UI/Card"
import { Box } from "@mui/material"
import { CartItems } from "../type/CartFeatureType"
import CartCard from "../../../shared/UI/CartCard"
import CartTotal from "../../../shared/UI/CardTotall"

const CartFeature = () => {

    const cartData: CartItems[] | [] = JSON.parse(localStorage.getItem("cartData") || "[]")

    return(
        <>
            <Box sx={{display: "flex", width: "100%", gap: "20px"}}>
                <Box sx={{
                    display: 'flex',
                    gap: '20px',
                    flexWrap: 'wrap',
                   }}>
                    {cartData?.map((item) => (
                        <CartCard key={item.id} cartData={item}/>
                        
                    ))}

                    
                </Box>
                <CartTotal></CartTotal>
                
            </Box>
        </>
    )
}

export default CartFeature