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
              className="card min-h-96 border-2 border-slate-400 shadow-lg shadow-slate-950"
            >
              <img src={image} alt={title} className='rounded-xl width-full h-80' />
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
