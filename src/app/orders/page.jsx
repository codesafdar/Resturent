"use client"
import React, { useEffect }  from "react";
import OrdersTab from "@/components/modules/orders/OrdersTab";
import { useDispatch, useSelector } from "@/redux/store";
import { fetchOrderList } from "@/redux/slices/product";

const OrdersMain = () => {
  const dispatch = useDispatch();
  const orderList = useSelector(state => state.product?.popularProduct);
  const orderList1 = useSelector(state => state);
  console.log("🚀 ~ OrdersMain ~ orderList1:rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr1111111111111111", orderList1)
  console.log("🚀 ~ file: page.jsx:9 ~ OrdersMain ~ orderListlllllllllllllllllllllllllllll:", orderList)
  useEffect(() => {
    dispatch(fetchOrderList());
  }, [dispatch]);

  return (
    <>
      <div className="container rounded-2xl bg-[#232323] p-11 mt-10">
        <h1 className="text-center primary_title">Orders</h1>
        <div className="mt-10">
          <OrdersTab orderlist={orderList} />
        </div>
      </div>
    </>
  );
};

export default OrdersMain;
