"use client"
import React, { useEffect, useRef, useState } from "react";
// import ButtonUI from "@/components/common/ButtonUI";
// import NextImage from "@/components/common/NextImage";
import PopularItemsCard from "@/components/modules/menu/PopularItemsCard";
// import { menuCategory } from "@/config/data";
// import { CloudCog, PlusCircle } from "lucide-react";
import DiscountCard from "@/components/modules/menu/DiscountCard";
import CategoryCard from "@/components/modules/menu/CategoryCard";
import MenuDetailsModal from "@/components/modules/menu/MenuDetailsModal";
// import ProductService from "@/config/api/product.api";
// import CategoryServices from "@/config/api/category";
import { useDispatch, useSelector } from "react-redux";
import ConfinServices from "@/config/api/config.api";
import { fetchCategoriesAllProducts } from "@/redux/slices/category";
import { fetchBeverageProduct, fetchPopularProduct, fetchRecomendedProduct } from "@/redux/slices/papular";
// import { fetchPopularProduct, fetchCategoriesAllProducts } from "../redux/productSlice"; // Import your product slice actions
const MenuMain = () => {
  const ggg = useSelector((state) => state);
  console.log('=====>>>>', ggg); 
  const dispatch = useDispatch();
  const ref = useRef();
  const papulerProduct = useSelector((state) => state.papular.popularProducts);
  const category = useSelector((state) => state.category?.categoriesAllProducts);
  const [categoryRefs, setCategoryRefs] = useState([]);
  const resturent_id = 8;

  const getpapulerproduct = () =>{
    dispatch(fetchPopularProduct(resturent_id)); // Dispatch the action to fetch popular products
    dispatch(fetchCategoriesAllProducts(resturent_id)); 
    // configdata();// Dispatch the action to fetch category products
  }
  const recomendedProducts = useSelector((state) => state.papular?.recomendedProducts);
  console.log("🚀 ~ CartMain ~ recomendedProducts:", recomendedProducts)
  const beveregeProducts = useSelector((state) => state.papular?.beveregeProducts);
  console.log("🚀 ~ CartMain ~ beveregeProducts:", beveregeProducts)

  const getRecomendedandBeverageProduct = () =>{
    dispatch(fetchRecomendedProduct(resturent_id)); // Dispatch the action to fetch popular products
    dispatch(fetchBeverageProduct(resturent_id)); 
    // configdata();// Dispatch the action to fetch category products
  }
  useEffect(() => {
    getpapulerproduct();
    getRecomendedandBeverageProduct();
  }, [dispatch, resturent_id]);

  useEffect(() => {
    // Create refs for each category
    if (category?.length > 0) {
      setCategoryRefs(category.map(() => ref));
    }
  }, [category]);

  const scrollToCategory = (index) => {
    console.log("index", index);
    categoryRefs[index]?.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <>
      <div>
        <ul className="h-14 w-full bg-[#0D0D0D] flex items-center justify-center gap-6 md:grap-0 sm:grap-0 border-t border-b border-[#5E5E5E]">
        {category?.map((items, index) => (
            <li
              key={items.name}
              onClick={() => scrollToCategory(index)}
              className="text-sm font-bold text-gray-300 cursor-pointer"
            >
              {items.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-14 border-b border-[#5E5E5E]">
        <div className="container">
          <h1 className="primary_title">Popular Items</h1>
          <div className="grid grid-cols-3 gap-6 mt-14">
          {papulerProduct && papulerProduct.length > 0 ? (
    papulerProduct?.slice(-6).map((object) => (
      <PopularItemsCard key={object.id} object={object} />
    ))
  ) : (
    <p>No popular products available</p>
  )}
          </div>
        </div>
      </div>
      <div className="pt-24">
        <div className="container">
          {/* <h2 className="text-lg font-bold">Discounts</h2>
          <div className="grid gap-6 mt-6 md:grid-cols-2 md:gap-14">
            <DiscountCard />
            <DiscountCard />
          </div> */}
          <div className="mt-6">
            {
              category?.map((object, index) => (
            
                <div key={object.name} ref={categoryRefs[index]}>

                <h2 className="text-lg font-bold mt-4">{object.name}</h2>
                  <div className="grid gap-6 mt-6 md:grid-cols-2 md:gap-14">
                    {
                      object.products.map((obj) => (
                        <CategoryCard obj={obj} />
                      ))
                    }

                    {/* <CategoryCard />
              <CategoryCard />
              <CategoryCard /> */}
                  </div>
                </div>
              
              ))
            }

          </div>
        </div>
      </div>
    </>
  );
};

export default MenuMain;
