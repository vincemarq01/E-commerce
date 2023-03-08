import React from 'react';
import image1 from '../assets/image-product-1.jpg';
import image2 from '../assets/image-product-1-thumbnail.jpg';
import nextIcon from '../assets/icon-next.svg';
import prevIcon from '../assets/icon-previous.svg';
import minusIcon from '../assets/icon-minus.svg';
import plusIcon from '../assets/icon-plus.svg';

import { ReactComponent as MinusIcon } from '../assets/icon-minus.svg';
import { ReactComponent as CartIcon } from '../assets/icon-cart.svg';
const Cart = () => {
  return (
    <div className="lg:grid grid-cols-2 max-w-[1240px] mx-auto lg:mt-[96px]">
      <div className="hidden lg:flex flex-col">
        <div className="2xl:flex mx-[120px] my-5">
          <img className="w-full h-[400px] rounded-2xl" src={image1}></img>
        </div>
        <div>
          <div className="flex flex-row gap-8 flex-wrap  px-[120px] w-full">
            <img className="w-[70px] h-[70px] rounded-xl" src={image2}></img>
            <img className="w-[70px] h-[70px] rounded-xl" src={image2}></img>
            <img className="w-[70px] h-[70px] rounded-xl" src={image2}></img>
            <img className="w-[70px] h-[70px] rounded-xl" src={image2}></img>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full">
        <div className="mt-0 lg:hidden my-5 flex relative">
          <img className="w-full h-[450px] relative" src={image1}></img>
        </div>
        <div className=" absolute h-[50px] w-[50px] mt-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full bg-white/80 cursor-pointer">
          <img className="mx-auto mt-[30%]" src={nextIcon}></img>
        </div>

        <div className=" absolute h-[50px] w-[50px] mt-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full bg-white/80 cursor-pointer">
          <img className="mx-auto mt-[30%]" src={prevIcon}></img>
        </div>

        <div className=" px-5 text-wrap">
          <p className="text-orange-text font-bold">SNEAKER COMPANY</p>
          <h1 className="text-4xl font-bold">Fall Limited Edition Sneakers</h1>
          <p className="pt-[30px]">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>

          <div className="py-[30px] grid grid-cols-3 ">
            <div>
              <h1 className="font-bold text-3xl">$125.00</h1>
            </div>
            <div className="pt-1">
              <span className="font-bold text-orange-text rounded-md bg-orange-400/20 p-[4px]">
                50%
              </span>
            </div>
            <div>
              <p className="font-bold text-gray-400 line-through text-right">
                $250.00
              </p>
            </div>
          </div>

          <div className="p-5 my-5 bg-gray-100 rounded-md flex justify-between ">
            <div className="my-auto">
              <MinusIcon fill="black" />
            </div>
            <div>
              <p className="text-center">0</p>
            </div>
            <div className="my-auto">
              <img className="" src={plusIcon}></img>
            </div>
          </div>

          <div className="p-5 bg-red-400 rounded-md flex justify-center ">
            <div className="mr-5 fill-slate-100">
              <CartIcon stroke="white" fill="red" />
            </div>
            <p className="text-xl text-white">Add to cart</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
