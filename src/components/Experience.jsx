import ExperienceItem from "./ExperienceItem"

function Experience() {
    return (
        <section id="experience" className="flex flex-col max-w-4xl mt-8 w-full px-4 py-8 bg-gray-800 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4 text-left ml-4">Experience</h2>
            <ol className="relative mt-16">
                <li>

                    <ExperienceItem role={'Creative Technologist'} company={'Lilab'} date={'Jan 2024 - Now'} description={"At Lilab, I work at the intersection of AI, software engineering, and rapid prototyping, designing solutions that bridge complex technology with real business value. My role spans from hands-on development in Python, TypeScript, React, and C#, to architecting multi-cloud solutions in GCP, Azure, and AWS.\n\nI focus on building functional prototypes and production-ready tools that help clients visualize, validate, and adopt innovation faster. Beyond coding, I lead projects end-to-end—aligning with stakeholders, ensuring usability, and guiding teams through delivery.\n\nSelected Projects:\n\n- Environmental Impact Assessment Summaries: Automated the extraction of insights from lengthy EIAs, enabling decision-makers to query documents conversationally.\n- Automated Legal Reports: Built a solution to review lease viability, reducing processing time by 40% and unlocking legal team capacity for higher-value tasks.\n- Intelligent Video Editor: Designed a system that automatically generates social-ready video highlights, cutting editing time by 60% and scaling content production.\n\nThis role strengthened my ability to turn abstract challenges into concrete, scalable AI-powered solutions, while showcasing my capacity to prototype fast, deliver value, and lead innovation."} link={'https://lilab.io'} />
                </li>
                <li>

                    <ExperienceItem role={'Desarrollador FullStack Jr.'} company={'Lilab'} date={'Dic 2022 - Dic 2023'} description={"As a Full Stack Developer Jr. at Lilab, I quickly became a key contributor, taking ownership of critical services, notably developing the cashier module from frontend to backend API, and ensuring its vital integration with SUNAT's electronic invoicing system.\n\nBeyond technical contributions, I naturally stepped into an interim team lead role, guiding junior developers, resolving blockers, and ensuring steady progress for a team predominantly composed of junior talent.\n\nThis experience significantly strengthened my expertise in .NET, C#, React, and microservices, while demonstrating my capacity to lead under pressure and drive results in a fast-paced environment."} link={'https://lilab.io'} />
                </li>
            </ol>
        </section>
    )
}

export default Experience