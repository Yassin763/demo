import { useContext } from "react";
import { Offcanvas } from "react-bootstrap";
import { TitleContext } from "../context/ShoppingCartContext";
import CartItems from "./CartItems";

function ShoppingCart({isOpen}) {
    const { cartItems , closecart} = useContext(TitleContext)
    // console.log(cartItems)
    return (<Offcanvas show={isOpen} onHide={closecart} placement="end">
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {cartItems.map((item) => (
                <CartItems key={item.id} {...item}/>
            ))}
        </Offcanvas.Body>
    </Offcanvas>);
}

export default ShoppingCart;