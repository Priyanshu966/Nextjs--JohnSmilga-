'use client';

import Link from "next/link";
import { useState } from "react";

const ClientPage = () => {
  const [count,setCount] = useState(0);
  
  return (
    <div className="max-w-6xl mx-auto px-6 py-6">
      <h4 className='text-6xl text-slate-300 font-bold my-4'>{count}</h4>
      <button className='btn btn-accent font-bold capitalize text-xl'  onClick={() =>setCount(count + 1)}>click me</button>
    </div>
  );
};
export default ClientPage;
