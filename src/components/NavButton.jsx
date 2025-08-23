function NavButton(props) {
    return (
        <a href={props.target} onClick={props.onClick} className="nav-button font-bold text-border text-lg border-b-3 border-transparent transition-all delay-100 hover:border-b-3 hover:border-cyan-300 hover:text-gray-200 hover:bg-cyan-300/60  px-4 py-2 rounded-full block mt-4 lg:inline-block lg:mt-0 text-gray-200 mr-4 ">
            {props.children}
        </a>
    )
}

export default NavButton