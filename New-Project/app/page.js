import Link from "next/link";

const HomePage = () => {
  return (
    <div className="max-w-6xl mx-auto px-6  mt-6 ">
      <h1 className="capitalize text-5xl font-bold py-4 text-slate-300">next.js tutorial</h1>
      <Link href="/client" className="capitalize btn btn-accent font-bold">
        get started
      </Link>
    </div>
  );
};
export default HomePage;
