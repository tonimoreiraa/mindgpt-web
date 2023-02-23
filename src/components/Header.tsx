import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { NavLink, useMatch } from "react-router-dom";

function Link({to, label}: {to: string, label: string})
{
    const match = useMatch(to)

    return <NavLink className={match ? "text-indigo-500 font-semibold" : "hover:text-indigo-500 hover:font-semibold"} to={to}>{label}</NavLink>
}

function Nav()
{
    const [open, setOpen] = useState(false)

    const handleClick = () => setOpen(!open)

    return <>
        <div className={`${open ? 'fixed top-16 bg-white grid grid-flow-row text-indigo-400 p-4 rounded gap-4 text-base right-4 text-right' : 'hidden md:grid grid-flow-col items-center gap-x-8 text-sm text-indigo-200 font-light'} `}>
            <Link to="/" label="Início" />
            <a href="/#plans" className="hover:text-indigo-500 hover:font-semibold">Planos</a>
            <Link to="/sign-up" label="Minha conta" />
            <a target="_blank" href="https://wa.me/5582981335944?text=Ol%C3%A1" className="hover:text-indigo-500 hover:font-semibold">Testar agora!</a>
        </div>
        <div onClick={handleClick} className="md:hidden cursor-pointer">
            <IoMenu color="white" size={38} />
        </div>
    </>
}

function Header()
{
    return <div className="fixed top-0 w-full h-16 bg-primary flex items-center justify-between md:px-24 px-4">
        <img src={import.meta.env.BASE_URL + 'assets/mindgpt.svg'} className="h-10" />
        <Nav />
    </div>
}

export default Header;