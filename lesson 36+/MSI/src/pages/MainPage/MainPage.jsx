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
import { Box, Modal,Typography } from "@mui/material";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useState } from "react";
    



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
            <VideoBlock />

            <Box sx={{
                '& > button':{
                    border: '10px solid'
                }
            }}>
                <Button variant="contained" size="large" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>


            </Box>



            



            <div>
                <Button onClick={handleOpen}>Open modal</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">
                    <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                    </Box>
                </Modal>
            </div>






            <div>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<p>AAAAAAA</p>}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    >
                    Click
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    >
                    Click
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                </Accordion>
                <Accordion defaultExpanded>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    >
                    Accordion Actions
                    </AccordionSummary>
                    <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </AccordionDetails>
                    <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                    </AccordionActions>
                </Accordion>
            </div> 
        </>
    )
}