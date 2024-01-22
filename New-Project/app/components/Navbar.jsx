import Link from "next/link";

const Navbar = () => {
  const links = [
    {
      id: 1,
      label: "client",
      href: "/client",
    },
    {
      id: 2,
      label: "drinks",
      href: "/drinks",
    },
    {
      id: 3,
      label: "tasks",
      href: "/tasks",
    },
    {
      id: 4,
      label: "query",
      href: "/query",
    },
  ];
  return (
    <nav className='navbar flex-col bg-slate-950 py-6 md:py-4 md:flex-row  md:px-24'>
      <button className='btn btn-primary uppercase md:mr-8'>next.js</button>
      <ul className='menu menu-horizontal capitalize text-slate-500'>
        {links.map((link) => {
          const {id, label, href} = link;
          return (
            <li key={id}>
              <Link href={href}>
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default Navbar;
