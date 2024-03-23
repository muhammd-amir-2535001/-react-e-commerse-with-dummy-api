import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';


function ProductCard({
    price,
    title,
    image,
    index,
    addTocart = () => { },
    addQuantity = () => { },
    removeCard = () => { },
    flag,
    quantity
}) {

    const ojectOfAction = {
        item: (index) => {
            return <>
                <IconButton
                    onClick={() => { addTocart(index) }}
                    aria-label="add to favorites">
                    <ShoppingCartIcon sx={{ color: "blue", fontSize: "2rem" }} />
                </IconButton>
            </>

        },
        cart: (index, quantity) => {
            return <div>
                <div>
                    <IconButton
                        onClick={() => { addQuantity(index, "add") }}
                        aria-label="add quantity"
                        sx={{ color: "green" }}
                    >
                        <AddIcon />
                    </IconButton>

                    {quantity}

                    <IconButton
                        onClick={() => { addQuantity(index, "sub") }}
                        aria-label="remove quantity"
                        sx={{ color: "red" }}
                    >
                        <RemoveIcon />
                    </IconButton>
                    <span style={{ marginLeft: "20px" }}>
                        <IconButton
                            sx={{ color: "red" }}
                            onClick={() => { removeCard(index) }}
                            aria-label="remove quantity">
                            remove
                        </IconButton>
                    </span>
                </div>
            </div>
        }
    }


    return (
        <Card sx={{ maxWidth: 370 }}>
            <CardMedia
                component="img"
                height="194"
                image={image}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "17px" }}>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    $ {price}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {ojectOfAction[flag](index, quantity)}
            </CardActions>
        </Card>
    );
}

export default ProductCard;