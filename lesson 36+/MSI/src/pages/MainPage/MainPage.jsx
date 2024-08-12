import VideoBlock from "../../components/VideoBlock"
import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Box, Modal,Portal,Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import HeroBlock from "../../components/HeroBlock";
import { Values } from "../../components/Values/Values";
import { InputBlock } from "../../components/InputBlock/InputBlock";
import Service from "../../components/ServicesBlock";
import GpuCards from "../../components/GpuCards";
import CommentBlock from "../../components/CommentBlock";
import Circle from "../../components/Circles";
import RecentNews from "../../components/RecentNews";
import RequestBlock from "../../components/RequestBlock";


export default function MainPage() {

    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)

    }
    const handleClose = () => {
        setOpen(false)

    }

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };


    return(
        <>
            <HeroBlock />
            
            <VideoBlock />

            <Values />

            <InputBlock />

            <Service />

            <GpuCards />

            <CommentBlock />

            <Circle/>

            <RecentNews />

            <RequestBlock />
        </>
    )
}