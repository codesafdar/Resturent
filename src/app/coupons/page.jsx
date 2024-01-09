import React from "react";

const Coupons = () => {
  return (
    <>
      <div className="container mt-10 bg-[#232323] p-9 rounded-2xl">
        <h1 className="primary_title">Coupons</h1>
        <div className="grid mt-20 md:grid-cols-2 gap-x-10 lg:gap-x-20 gap-y-8">
          {[...Array(6)].map((_, index) => (
            <div
              className="relative rounded-lg bg-[#383535] flex items-center p-5 md:px-14"
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="96"
                viewBox="0 0 598 96"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M598 0H0V5.70297C30.4229 6.46337 42.7822 33.2673 44.0498 46.5743C44.0498 80.2851 14.6833 89.9802 0 90.6139V96H598V90.297C571.633 89.2832 561.028 66.8515 559.021 55.7624C552.176 21.5446 582.155 8.76568 598 6.65347V0Z"
                  fill="#6B6C6B"
                />
              </svg>
              <div className="absolute flex items-center ml-12 lg:ml-24">
                <hr className="h-20 border-white border-dashed border-l-3" />
                <div className="ml-5">
                  <h3 className="font-semibold text-[#232323]">
                    Welcome Coupon
                  </h3>
                  <h3 className="text-sm">7WPUYF</h3>
                  <h3 className="font-semibold text-[#232323]">Baklawah</h3>
                  <h3 className="text-sm">Valid till 6 feb, 2023</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Coupons;
