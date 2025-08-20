function SocialPill(props) {


    return (
        <a
            {...props}
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            className="inline-flex items-center justify-center gap-2 px-8 py-2 transition border border-gray-500 rounded-full bg-transparent hover:bg-cyan-300/60 hover:border-gray-200"
        >
            {props.children}
        </a>
    )
}

export default SocialPill