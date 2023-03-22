import React from 'react'
import Header from './Header';
import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';

function Products() {
    return (
        <div>
            <Header />

            <AppBar position="relative" className="subWrapper">
                <Container className="container">
                    <Toolbar className="wrapper2">
                        <div className="" >
                            <Typography className="firstText">Welcome</Typography>
                            <Typography variant="p" className="secondText">Your current sales aution and activity</Typography>
                        </div>

                        <Typography>
                            {/* <NotificationsNoneIcon /> */}
                        </Typography>
                    </Toolbar>
                </Container>

            </AppBar>
        </div>
    )
}

export default Products