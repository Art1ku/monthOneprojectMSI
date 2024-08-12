import { Title , SubTitle } from "../UI"
import Container from "../Conteainer/Container"
import classes from "./VideoBlock.module.scss"
import React from 'react'
import ReactPlayer from 'react-player'
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import { Button } from "@mui/material"

export default function VideoBlock() {
    return(
        <> 
            <div className={classes.wrapper}>
                <Container>
                    <div className={classes.wrapper}>
                        <Title>MSI - Micro Star International</Title>
                        <SubTitle>We giving you new apportunity in gaming</SubTitle>
                        <iframe className={classes.videoMSI} src="https://www.youtube.com/embed/IO95TCWpTSg?si=Ris4NsIFC9HDQu7Z" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </Container>
            </div>
        </>
    )
}