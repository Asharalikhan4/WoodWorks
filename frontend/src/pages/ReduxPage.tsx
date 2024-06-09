import React from "react";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

export default function ReduxPage() {

    const count = useSelector((state: RootState) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div className="flex items-center justify-center mt-10">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Counter App</h1>
                <div className="flex items-center justify-center mb-8">
                    <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-4" id="decrement" onClick={() => dispatch(decrement())}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path>
                        </svg>
                    </button>
                    <span className="text-6xl font-bold text-gray-800" id="count">{count}</span>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded ml-4" id="increment" onClick={() => dispatch(increment())}>
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                        </svg>
                    </button>
                </div>
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full" id="reset" onClick={() => dispatch(reset())}>Reset</button>
            </div>
        </div>
    );
};