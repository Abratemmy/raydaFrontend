import React from 'react';
import { Typography, AppBar, Button, CssBaseline, Toolbar, Container } from '@material-ui/core';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import "./styles.css";
import image from "../Assets/Image.svg";
import roundImage from "../Assets/Content.svg";
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import CircleIcon from '@mui/icons-material/Circle';

function Header() {
    return (
        <div>
            <CssBaseline />
            <AppBar position="relative" className="topHeader">
                <Container className="container">
                    <Toolbar className="wrapper2">
                        <div className="" >
                            <Typography className="firstText">Welcome</Typography>
                            <Typography variant="p" className="secondText">Your current sales aution and activity</Typography>
                        </div>

                        <Typography>
                            <NotificationsNoneIcon />
                        </Typography>
                    </Toolbar>
                </Container>

            </AppBar>

            <AppBar position="relative" className="subWrapper">
                <Container>
                    <Typography className='subHeader'>
                        <div className="Image">
                            <img src={image} alt="" width="100%" className='bgImg' />

                        </div>

                        <Typography className='sessionContainer'>
                            <img src={roundImage} alt="" className='roundImage' />

                            <Typography className='subSession'>
                                <div className='leftSession'>
                                    <div className='text'>Starts in: 3 days: 2 hours: 24 minutes
                                        <span className='bottom'>
                                            <span className='dot'>
                                                <CircleIcon className='circle' />Not Live
                                            </span>
                                            <span className='layer'>Layers Auction</span>
                                        </span>
                                    </div>
                                </div>
                                <div className='rightSession'>
                                    <Button variant="contained"><ThumbUpOffAltIcon className='thumb' />Accept Invite</Button>
                                </div>
                            </Typography>

                        </Typography>
                    </Typography>

                </Container>
            </AppBar>

        </div >
    )
}

export default Header