"use client"
import { FC } from "react";
import {useSelector,useDispatch} from "react-redux";
// slice
import { numberValue,incrementValueFunc,decrementValueFunc } from "../redux/slices/userSlice";

const Home:FC = () => {
    const number = useSelector(numberValue);
    const dispatch = useDispatch();
    console.log(number)
 return (
    <div className=" gap-x-3 flex bg-pink-300 justify-center items-center w-full h-[100vh]">
        <button className="border border-lime-200 text-3xl w-[40px] rounded-full h-[40px]" onClick={() => dispatch<any>(decrementValueFunc())}>-</button>
        <h1 className="text-8xl">{number}</h1>
        <button className="border border-lime-200 text-3xl w-[40px] rounded-full h-[40px]" onClick={() => dispatch<any>(incrementValueFunc())}>+</button>
    </div>
 );
}
export default Home;