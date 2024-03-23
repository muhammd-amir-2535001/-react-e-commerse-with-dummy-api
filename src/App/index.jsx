
import AppBar from "./AppBar/index"
import { useState, useEffect } from "react"
import Product from "./Product/index"
import Cart from "./Product/index"
import axios from "axios";
const App = () => {
    const [filter, setFilter] = useState("")
    const [tabe, setTabe] = useState(0)
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState([])
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true)
            let response = await axios.get(`https://api.escuelajs.co/api/v1/products/?title=${encodeURIComponent(filter)}`)
            setProducts(response.data);
            setLoading(false)

        }
        apiCall()

    }, [filter])

    return (
        <div style={{ height: "80vh" }}>
            <AppBar setFilter={setFilter} tabe={tabe} filter={filter} setTabe={setTabe} count={cartData.length} />
            <br /><br /><br /><br /><br />
            {tabe === 0 &&
                <Product products={products}
                    loading={loading}
                    setCartData={setCartData}
                    cartData={cartData}
                    flag="item"

                />
            }
            {tabe === 1 &&
                <Cart
                    products={cartData}
                    flag="cart"
                    setCartData={setCartData}
                />}

        </div>
    )
}

export default App;