import Link from "next/link";
import Image from "next/image";

const DrinksList = ({drinks}) => {
  console.log(drinks);
  return (
    <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-8 place-items-center'>
      {drinks.map((drink) => {
        const {strDrink: title, idDrink: id, strDrinkThumb: image} = drink;
        return (
          <li key={id}>
            <Link
              href={`/drinks/${id}`}
              className="card min-h-96 border-2 border-slate-900 shadow-lg shadow-slate-950 ring-2 ring-slate-800 ring-offset-2 ring-offset-slate-950"
            >
              <Image src={image} alt={title} priority width={320} height={300} className='rounded-xl  h-80' />
              <div className="card-body">
                <h4 className="text-xl font-bold text-slate-400">{title}</h4>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default DrinksList;
