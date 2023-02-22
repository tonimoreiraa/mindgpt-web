import { NavLink, useMatch } from "react-router-dom";

function Link({to, label}: {to: string, label: string})
{
    const match = useMatch(to)

    return <NavLink className={match ? "text-indigo-500 font-semibold" : "hover:text-indigo-500 hover:font-semibold"} to={to}>{label}</NavLink>
}

function Header()
{
    return <div className="fixed top-0 w-full h-16 bg-primary flex items-center justify-between md:px-24 px-4">
        <img src={import.meta.env.BASE_URL + 'assets/mindgpt.svg'} className="h-10" />
        <div className="grid grid-flow-col items-center gap-x-8 text-sm text-indigo-200 font-light">
            <Link to="/" label="Início" />
            <Link to="/plans" label="Planos" />
            <Link to="/account" label="Minha conta" />
            <Link to="/try" label="Testar agora!" />
        </div>
    </div>
}

export default Header;