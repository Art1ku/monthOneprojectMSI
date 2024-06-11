import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import classes from './Footer.module.scss'
import logo from '../../assets/msi-seeklogo-4.svg'
import logo2 from '../../assets/footerAssets/msi-5-logo-black-and-white.png'
import whatsappIcon from '../../assets/footerAssets/WhatsApp.svg'
import vector1 from '../../assets/footerAssets/Vector.svg'
import vector2 from '../../assets/footerAssets/Vector (1).svg'
import vector3 from '../../assets/footerAssets/Vector (2).svg'
import vectro4 from '../../assets/footerAssets/Subtract.svg'
import {TextField} from "@mui/material"


export default function Footer (){
    return (
        <>
            <div className={classes.FooterWrapper}>
                
                <div className={classes.Container}>
                    <div className={classes.firstHalf}>
                        <div className={classes.footerTextDiv}> 
                            <div className={classes.whatareyoudoingthere}>
                                <img src={logo2} className={classes.Logoss} alt="" />
                                <div className={classes.logosConteiner}>
                                    <img className={classes.logos} src={whatsappIcon} alt="" />
                                    <img className={classes.logos} src={vector1} alt="" />
                                    <img className={classes.logos} src={vector2} alt="" />
                                    <img className={classes.logos} src={vector3} alt="" />
                                    <img className={classes.logos} src={vectro4} alt="" />
                                </div>
                                
                            </div>
                            <div className={classes.textContainer}>
                                <p className={classes.textLow}>Createx Construction Bureau has been successfully operating in the USA construction market since 2000. We are proud to offer you quality construction and exemplary service. Our mission is to set the highest standards for construction sphere.</p>
                            </div>
                            

                        </div>
                        <div className={classes.footerInput}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </div>
                    </div>
                    <div className={classes.secondHalf}></div>
                </div>
            </div>
        </>
    )
}