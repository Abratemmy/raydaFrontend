import React, { useEffect } from 'react'
import Header from './Header';
import { Typography, AppBar, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { getAllProduct } from './REDUX/ACTION/productAction';
import { addItemToCart } from './REDUX/ACTION/cartAction';


function Products() {
    const dispatch = useDispatch()

    const productData = useSelector((state) => state.productReducer);
    console.log("product", productData)

    useEffect(() => {
        dispatch(getAllProduct())
    }, [dispatch])

    const addToCart = () => {
        dispatch(addItemToCart())
    }

    return (
        <div>
            <Header />

            <AppBar position="relative" className="subWrapper" style={{ marginBottom: "30px" }}>
                <Container className="container">
                    <Typography className='subHeader'>
                        <div className='product-top'>
                            <span>Featured Items</span>
                            <NavLink to="/auction" className="nav-link">View Auction</NavLink>
                        </div>

                        <Typography className='productSession'>
                            <Grid container spacing={3} >
                                {productData?.data?.map((product, index) => (
                                    <Grid item lg={3} xl={3} md={4} key={index} >
                                        <Card lg={{ maxWidth: 275 }} className="productCard">
                                            <NavLink to={`/product_details/${product.title}`} className="productNav">
                                                <CardActionArea>
                                                    <div className='imageContainer'>
                                                        <CardMedia
                                                            component="img"
                                                            height="140"
                                                            image={product?.image}
                                                            alt="green iguana"
                                                            className="productImage"
                                                        />
                                                    </div>
                                                    <CardContent className='cardContent'>
                                                        <Typography className='top'>
                                                            <span>{product?.name?.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</span>
                                                            <span>{product?.name}</span>
                                                            <span>(highest Bidder)</span>
                                                        </Typography>
                                                        <Typography variant="body2" className='middle'>
                                                            {product?.title}
                                                            <div className="bid">Current Bid: <span>{product?.bid} </span></div>
                                                        </Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </NavLink>
                                            <CardActions className='cardAction'>
                                                <Button onClick={addToCart}>
                                                    Add to wishlist
                                                </Button>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))}
                            </Grid>

                        </Typography>
                    </Typography>


                </Container>

            </AppBar>
        </div>
    )
}

export default Products