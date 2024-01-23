'use client';

import Link from "next/link";
import { useState } from "react";

const ClientPage = () => {
  const [count,setCount] = useState(0);
  
  return (
    <>
      <div className="text-6xl">ClientPage</div>
      <Link href="/">HomePage</Link>
      <h1>{count}</h1>
      <button className='btn'  onClick={() =>setCount(count + 1)}>click me</button>
    </>
  );
};
export default ClientPage;
