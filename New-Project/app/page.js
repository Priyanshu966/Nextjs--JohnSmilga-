import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <div className="text-6xl font-bold">HomePage</div>
      <Link href="/about">AboutPage</Link>
    </>
  );
};
export default HomePage;
