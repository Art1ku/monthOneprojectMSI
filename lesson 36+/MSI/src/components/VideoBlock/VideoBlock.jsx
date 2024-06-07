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
            <Container>
                <div className={classes.wrapper}>
                    <Title>MSI - Micro Star International</Title>
                    <SubTitle>We giving you new apportunity in gaming</SubTitle>
                    <ReactPlayer className={classes.videoMSI} url='https://www.youtube.com/watch?v=IO95TCWpTSg' />
                </div>
            </Container>





            
        </>
    )
}