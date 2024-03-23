import Np_Product from "./No_product"
import Card from "./Card"
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';


const style = { width: "100%", display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }
const cardStyle = { backgroundColor: "white" }

const Product = ({
    products,
    loading = false,
    setCartData = () => { },
    cartData = [],
    flag
}) => {
    const addTocart = (index) => {
        let card = products[index];
        let temp = cartData;

        for (let i = 0; i < cartData.length; i++) {
            if (cartData[i].id === card.id) {
                alert("The item is already added");
                return 0;
            }
        }
        card.quantity = 1;
        temp.push(card)
        alert("Item is Successfulyy added");
        setCartData([...temp])
    }
    const addQuantity = (index, flag) => {
        var card = products;
        if (flag === "sub"){
            if(card[index].quantity>1)card[index].quantity=card[index].quantity-1;
        } 
        else card[index].quantity=card[index].quantity+1;
        setCartData([...card])

    }

    const removeCard = (id)=>{
        var cards = products;
        cards=cards.filter((__ , index)=> index!==id);
        setCartData([...cards])
    }


    return <div style={products.length === 0 || loading ? style : cardStyle}>
        {loading === false && products.length === 0 && <Np_Product />}
        {loading === false && products.length !== 0 && <Grid container spacing={{ xs: 2, md: 6, lg: 12 }}>
            {
                products.map(({ price, title, images, quantity }, index) => {
                    let image = images[0]
                    return <Grid key={index} item xs={6} md={4} lg={3}>
                        <Card
                            flag={flag}
                            quantity={quantity}
                            price={price}
                            title={title}
                            image={image}
                            addTocart={addTocart}
                            index={index}
                            addQuantity={addQuantity}
                            removeCard={removeCard}
                        />
                    </Grid>
                })
            }
        </Grid>}

        {loading === true && <CircularProgress />}
    </div>

}

export default Product;