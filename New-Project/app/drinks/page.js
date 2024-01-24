
import DrinksList from "@/components/DrinksList";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(`${url}`);

  //For throwing error
  if (!resp.ok) {
    throw new Error("Failed to fetch drinks");
  }

  const data = await resp.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchData();
  
  return (
    <>
      <DrinksList drinks={data.drinks}/>
    </>
  );
};
export default DrinksPage;
