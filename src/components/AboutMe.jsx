function AboutMe() {
    return (
        <section id="about" className="max-w-4xl w-full px-4 py-8 flex flex-col bg-gray-800 rounded-lg shadow-lg text-white mt-8">
            <h2 className="text-3xl font-bold mb-4 text-left ml-4">About me</h2>
            <article className="[&>p]:mb-4 [&>p>strong]:text-cyan-100 [&>p>strong]:font-normal [&>p>strong]:font-mono text-pretty order-2 ">
                <p>
                    Hi! I'm Lautaro, a <strong>Creative Technologist and Full Stack Developer</strong> with a passion for solving problems through technology and design.
                </p>

                <p>
                    My path into software wasn’t traditional—I started out operating CNC machines in workshops and factories, where I quickly became the person who figured out how to fix broken processes and improve workflows. That mindset of <em>“finding a way to make it work”</em> still drives everything I build today.
                </p>

                <p>
                    Over the years, I’ve designed and developed end-to-end solutions ranging from web applications and automation tools to AI-powered assistants and document analysis systems. What excites me most is <strong>turning complex challenges into simple, usable products</strong>—whether that means architecting a full stack application, streamlining workflows, or experimenting with emerging tech like LLMs and multi-agent systems.
                </p>

                <p>
                    Beyond code, I see myself as a builder: someone who combines technical depth with creativity to transform abstract goals into solutions that people actually use and value.
                </p>
            </article>
        </section>
    )
}

export default AboutMe