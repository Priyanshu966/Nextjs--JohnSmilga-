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
    <nav className=" bg-slate-950 py-4">
      <div className='navbar max-w-6xl mx-auto px-6 flex-col md:flex-row'>
        <button className="btn btn-primary uppercase md:mr-8">next.js</button>
        <ul className="menu menu-horizontal capitalize text-slate-500">
          {links.map((link) => {
            const {id, label, href} = link;
            return (
              <li key={id}>
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
