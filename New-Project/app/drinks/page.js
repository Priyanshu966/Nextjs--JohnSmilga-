import Link from "next/link";


const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () =>{
  const resp = await fetch(`${url}`);
  if (!resp.ok) {
    throw new Error("There was an error in fetchin;g`")
  }
  const data = await resp.json();
  
  console.log(data);
  return data;
}

const DrinksPage = () => {
  const data = fetchData();
  return (
    <>
      <div className="text-6xl">DrinksPage</div>
      <Link href="/">HomePage</Link>
    </>
  );
};
export default DrinksPage;
