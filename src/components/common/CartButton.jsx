import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useDispatch, useSelector } from "@/redux/store";
import { fetchcartList, dicscartList } from "@/redux/slices/cart";
import { toast } from 'react-toastify';

const CartButton = ({ size, obj, quantity }) => {
  // const cartitem = useSelector(state => state.cart?.cartitem);
  // const objCount = cartitem.filter((item) => item.id === obj.id).length;

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [count, setCount] = useState(quantity || 0);

  const decreascart = () => {
    if (count > 0) {
      setCount(count - 1); // Fix: Use setCount with the updated value
      dispatch(dicscartList(obj));
    }
  };

  const addcartitem = async () => {
    setCount(count + 1); // Fix: Use setCount with the updated value
    dispatch(fetchcartList(obj));
    toast.success('Add Product Successfully!', { position: 'top-center' });

  };
  // const cartitem = useSelector(state => state.cart?.cartitem);
  // console.log("🚀 ~ CartMain ~ cartitem:", cartitem)
  // const uniqueItems = Array.from(new Set(cartitem.map((item) => item.id))).map((id) => ({
  //   item: cartitem.find((item) => item.id === id),
  //   quantity: cartitem.filter((item) => item.id === id).length,
  // }));
  
  return (
    <>
      <div className="flex items-center gap-2">
        <Button
          size={size ?? "sm"}
          variant="light"
          color="primary"
          isIconOnly
          onClick={() => decreascart()} // Fix: Call decreascart on click
        >
          <Minus size={16} />
        </Button>
        <div>{count}</div>
        <Button
          size={size ?? "sm"}
          variant="light"
          color="primary"
          isIconOnly
          onClick={() => addcartitem()} // Fix: Call addcartitem on click
        >
          <Plus size={16} />
        </Button>
      </div>
    </>
  );
};

export default CartButton;
