import Header from "../Header"
import Footer from "../Footer"

const Outlet = (props) => {
    
    const {children} = props

    return(
        <>
            <Header />
            {children}
            <Footer />
            
        </>
    )
}

export default Outlet