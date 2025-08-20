function ExperienceItem({ company, role, date, description, link = null }) {
    return (
        <div
            className="relative mx-12 pb-12 grid before:absolute before:left-[-35px] before:block before:h-full before:border-l-2 before:border-black/20 dark:before:border-white/15 before:content-[''] md:grid-cols-5 md:gap-10 md:space-x-4]"
        >
            <div className="relative pb-12 md:col-span-2">
                <div className="sticky top-18 z-10">
                    <span className="text-cyan-400 -left-[45px] top-[-15px] absolute rounded-full text-5xl"
                    >&bull;</span>
                    <h3 className="text-xl font-bold text-cyan-400">{role}</h3>
                    <h4 className="font-semibold text-xl text-gray-600 dark:text-white">{company}</h4>
                    <time className="p-0 m-0 text-sm text-gray-600/80 dark:text-white/80">{date}</time>
                </div>
            </div>
            <div className="relative flex flex-col gap-6 pb-4 whitespace-pre-line text-gray-600 dark:text-gray-300 md:col-span-3">
                {description}
                {
                    link && (
                        <a href={link} role="link" target="_blank" className="inline-flex items-center text-lg font-medium text-cyan-500 dark:text-cyan-200 dark:hover:text-cyan-300 hover:text-cyan-700">
                            See more{" "}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 icon icon-tabler icon-tabler-chevron-right"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeinejoin="round"
                            >
                                <>
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M9 6l6 6l-6 6" />
                                </>
                            </svg>
                        </a>
                    )
                }
            </div>
        </div>
    )
}

export default ExperienceItem