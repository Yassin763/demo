import { Button, Stack } from "react-bootstrap";
import storeItem from '../../backend/db.json'
import formatCurrency from "./formatCurrency";
import { useContext } from "react";
import { TitleContext } from "../context/ShoppingCartContext";
function CartItems({ id, quantity }) {
    const {removeItemFromCart} = useContext(TitleContext)
    const item = storeItem.items.find((i) => i.id === id)
    if (item == null) {
        return null
    }
    return (
        <>
            <Stack direction="horizontal" gap={2} className="d.flex align-items-center">
                <img src={item.imgUrl} alt="cart-img" style={{ width: "125px", height: "75px", objectFit: "cover" }} />
                <div className="me-auto">
                    <div>
                        {item.name}
                        {quantity > 1 && <span className="text-muted" style={{ fontSize: "0.65rem" }}> x{quantity} </span>}
                        <div className="text-muted" style={{ fontSize: "0.75rem" }} >
                            {formatCurrency(item.price)}
                        </div>
                    </div>
                    <div>
                        {formatCurrency(item.price * quantity)}
                    </div>
                </div>
                <Button className="btn btn-sm btn-outline-danger" onClick={() => removeItemFromCart(id)}>
                    &times;
                </Button>
            </Stack>
        </>
    );
}

export default CartItems;