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
import {Button} from "@mui/material"


export default function Footer (){
    const navigationContent = [
        {
            title: 'About us',
            link: '/about'
        },
        {
            title: 'AvalPosit',
            link: '/AvalPosit'
        },
        {
            title: 'Contacts',
            link: '/Contacts'
        },
    ]
    const navigationContent2 = [
        {
            title: 'Services',
            link: '/Services'
        },
        {
            title: 'Work',
            link: '/Work'
        },
        {
            title: 'News',
            link: '/News'
        },
    ]
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
                        <div className={classes.NavConT}>
                            <div className={classes.headOfficeP}>
                                <h6>HEAD OFFICE</h6>
                                <div className={classes.PContainer}>
                                    <p className={classes.whiteP}>Address: </p>
                                    <a href="https://www.google.com/maps/place/Micro-Star+International+Co.,+Ltd./@25.0076325,121.4848234,17z/data=!3m1!4b1!4m6!3m5!1s0x3442a82c71531cc7:0x6173619febf53ed9!8m2!3d25.0076325!4d121.4873983!16s%2Fg%2F11b69cf_fn?entry=ttu"><p className={classes.greyPaddres}> New Taipei City 235, Taiwan</p></a>
                                </div>
                                <div className={classes.PContainer}>
                                    <p className={classes.whiteP}>Call: </p>
                                    <p className={classes.greyP}>+886-2-3234-5599 #1356</p>
                                    </div>
                                <div className={classes.PContainer}>
                                    <p className={classes.whiteP}>Email: </p>
                                    <p className={classes.greyP}>acs@msi.com
                                ×</p>
                                </div>
                            </div>
                            <div className={classes.whoWeAreP}>
                                <h6>HEAD OFFICE</h6>
                                <div className={classes.footerNavMargin}>
                                    {navigationContent.map((item, i) => (
                                        <Link className={classes.greyP} key={i} to={item.link}>
                                            <div>{item.title}</div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.secondHalf}>
                        <div className={classes.footerInput}>
                            <h4 className={classes.FooterInput}>Let’s stay in touch</h4>
                            <div className={classes.InputField}>
                                <input className={classes.EmailField} type="text" />
                                <button className={classes.submitButton} variant="contained">SUBSCRIBE</button>
                            </div>
                            <div className={classes.divForPAfterInput}>
                                <p className={classes.pAfterInput}>*Subscribe to our newsletter to receive communications and early updates from Createx Construction Bureau.</p>
                            </div>
                        </div>
                        <div className={classes.ourExperienceP}>
                        <h6>OUR EXPERIENCE</h6>
                            <div className={classes.footerNavMargin}>
                                {navigationContent2.map((item, i) => (
                                        <Link    className={classes.greyP} key={i} to={item.link}>
                                            <div>{item.title}</div>
                                        </Link>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
{/* <div className={classes.PContainer}>
                                <Link><p className={classes.greyP}></p></Link>
                            </div>
                            <div className={classes.PContainer}>
                                <Link><p className={classes.greyP}></p></Link>
                            </div>
                            <div className={classes.PContainer}>
                                <Link><p className={classes.greyP}></p> </Link>
                            </div> */}