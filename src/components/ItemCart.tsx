import useShoppingCart from "../hooks/useShoppingCart";
import { Stack } from "react-bootstrap";
import storeItems from "../data/items.json";

type ItemCartProps = {
  id: number;
  quantity: number;
};

const ItemCart = ({ id, quantity }: ItemCartProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex">
      <img
        src={item?.imgUrl}
        style={{ width: "124px", height: "75px", objectFit: "cover" }}
      />
    </Stack>
  );
};

export default ItemCart;
