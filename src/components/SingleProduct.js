import React, { useEffect } from 'react'
import Header from './Header';
import { Typography, AppBar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from './REDUX/ACTION/productAction';
import { useParams } from 'react-router-dom';
import { addItemToCart } from './REDUX/ACTION/cartAction';

function SingleProduct() {
    const dispatch = useDispatch();
    const productData = useSelector((state) => state.productReducer);

    const { title } = useParams()
    const single = productData?.data?.find(item => item.title === title)

    console.log("product", productData)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])


    const cartData = useSelector((state) => state.cart);

    const addToCart = () => {
        dispatch(addItemToCart(single.title, cartData))
        alert("successfull")
    }
    return (
        <div>
            <Header />

            <AppBar position="relative" className="subWrapper">
                <Container className="container">
                    <Typography className='subHeader'>
                        <div className='product-top'>
                            <span>Product Details</span>
                        </div>

                        <Typography className='productSession'>
                            <Grid container spacing={3} >
                                <Grid item xs={12} md={4} >
                                    <div>
                                        <img src={single?.image} alt={single?.name} />
                                    </div>
                                </Grid>
                                <Grid item xs={12} md={8}>
                                    <Typography className="singleProduct">
                                        <div> <span className="title"> Name:  </span> <span>{single?.name}</span></div>
                                        <div> <span className="title"> Title: </span>  <span>{single?.title}</span></div>
                                        <div> <span className="title"> Current Bid: </span>  <span>{single?.bid}</span></div>
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Typography>
                    </Typography>


                </Container>

            </AppBar>
        </div>
    )
}

export default SingleProduct