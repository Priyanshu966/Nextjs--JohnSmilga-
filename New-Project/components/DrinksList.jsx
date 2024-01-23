import Link from "next/link";

const DrinksList = ({drinks}) => {
    console.log(drinks);
  return (
    <ul className="menu menu-vertical">
        {drinks.map((drink) =>{
            const {strDrink,idDrink} = drink;
            return (<li key={idDrink}>
                <Link href="/drinks/idDrink">{strDrink}</Link>

            </li>)
        })}
       
    </ul>
  )
}
export default DrinksList