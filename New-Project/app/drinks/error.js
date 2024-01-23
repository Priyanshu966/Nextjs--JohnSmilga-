"use client";

const error = (error) => {
  console.log(error);
  return (
    <div className='h-40 flex justify-center items-center'>
      <h2 className="text-3xl font-bold text-slate-300 ">{error.error.message}</h2>
    </div>
  );
};
export default error;
