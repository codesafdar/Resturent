"use client";

import React, { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import OrdersCard from "./OrdersCard";

const OrdersTab = ({orderlist}) => {
  const [selected, setSelected] = useState("running");

  return (
    <>
      <div className="flex flex-col w-full">
        <Tabs
          aria-label="Options"
          selectedKey={selected}
          onSelectionChange={setSelected}
          variant="underlined"
          fullWidth
          color="primary"
          disableAnimation
          classNames={{
            tabList: "pt-3",
            tabContent:
              "group-data-[selected=true]:text-white text-3xl font-medium mb-6",
          }}
        >
          <Tab key="running" title="Running">
            <div className="grid mt-6 gap-x-16 gap-y-9 md:grid-cols-2">
              {
                orderlist?.map((obj, index) =>(
                  <OrdersCard obj={obj} />
                ))
              }
             
              {/* <OrdersCard />
              <OrdersCard />
              <OrdersCard /> */}
            </div>
          </Tab>
          <Tab key="history" title="History">
            <div className="grid mt-6 gap-x-16 gap-y-9 md:grid-cols-2">
            {
                orderlist?.map((obj) =>(
                  <OrdersCard />
                ))
              }
            </div>
          </Tab>
        </Tabs>
      </div>
    </>
  );
};

export default OrdersTab;
