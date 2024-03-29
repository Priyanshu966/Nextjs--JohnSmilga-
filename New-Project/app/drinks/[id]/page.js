import Image from "next/image";
import Link from "next/link";
const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const fetchData = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const resp = await fetch(`${url}${id}`);

  //Throw error
  if (!resp.ok) {
    throw new Error("Unable to fetch single drink...");
  }

  const data = await resp.json();
  return data;
};

const singlePage = async ({params}) => {
  const data = await fetchData(params.id);
  const {strDrink: title, idDrink: id, strDrinkThumb: image} = data.drinks[0];
  console.log(data);

  return (
    <div className="max-w-6xl mx-auto py-8 ">
      <div className="card min-h-96 max-w-96 border-2 border-slate-900 shadow-lg shadow-slate-95 ring-2 ring-slate-800 ring-offset-2 ring-offset-slate-950 mx-auto sm:mx-0">
        <Image src={image} alt={title} width={300} height={300} className="rounded-xl  h-80 w-full" />
        <div className="card-body">
          <h4 className="text-4xl font-bold text-slate-400">{title}</h4>
          <Link href="/drinks" className="btn btn-accent mt-2">
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};
export default singlePage;
