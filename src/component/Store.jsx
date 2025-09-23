import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TitleContext } from "../context/ShoppingCartContext";
import formatCurrency from "./formatCurrency";
function Store() {
    const [items, Setitems] = useState([])
    useEffect(() => {
        fetch('https://my-json-server.typicode.com/Yassin763/repo/items')
            .then(res => res.json())
            .then(body => Setitems(body))
    }, [])
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeItemFromCart } = useContext(TitleContext)
    return (
        <>
            <h1>Store</h1>
            <div className="container my-3 ">
                <div className="row">
                    {
                        items.map(item =>
                          {
                              const quantity = getItemQuantity(item.id)



                              return (
                                

                                <div className="col-lg-4 col-md-6 col-sm-12 mb-5 d-flex flex-wrap " key={item.id}>
                                    <div className="card" style={{ width: "23rem" }}>
                                        <img src={item.imgUrl} className="card-img-top" style={{ width: "100%", height: "20rem", objectFit: 'cover' }} alt={item.imgUrl} />
                                        <div className="card-body">
                                            <div className="card-title d-flex justify-content-between align-items-center">
                                                <span className="fs-2 ">{item.name}</span>
                                                <span className="text-muted fw-semibold">{formatCurrency(item.price)}</span>
                                            </div>
                                            <div className="mt-3">
                                                {quantity === 0 ? (<button className="btn btn-primary mt-5" style={{ width: "100%" }} onClick={() => increaseCartQuantity(item.id)}>Add Cart</button>) :
                                                    <div className="d-flex align-items-center flex-column" style={{ gap: "0.5rem" }}>
                                                        <div className="d-flex justify-content-between align-items-center" style={{ gap: "0.5rem" }}>
                                                            <button className="btn btn-primary" onClick={() => decreaseCartQuantity(item.id)}>-</button>
                                                            <span className="fs-3">{quantity} in cart</span>
                                                            <button className="btn btn-primary" onClick={() => increaseCartQuantity(item.id)}>+</button>
                                                        </div>
                                                        <button className="btn btn-danger btn-sm" onClick={() => removeItemFromCart(item.id)}>Remove</button>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                          }
                        )
                    }
                </div>
            </div>
        </>
    );
}


export default Store;




