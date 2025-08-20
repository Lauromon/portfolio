function ProyectCard({ proyectName, proyectDescription, proyectImage, proyectAltImage, proyectLink, proyectRepository }) {

    return (
        <div className="flex flex-col gap-4 items-center">
            <h3 className="text-2xl">{proyectName}</h3>
            <p className="text-lg whitespace-pre-line text-left">{proyectDescription}</p>
            <img className="rounded-md" src={proyectImage} alt={proyectAltImage} />
            <ul className="flex gap-4">

            {
                proyectLink && (
                    <a href={proyectLink} role="link" target="_blank" className="inline-flex items-center text-lg font-medium text-cyan-500 dark:text-cyan-200 dark:hover:text-cyan-300 hover:text-cyan-700">
                        See project{" "}
                    </a>
                )
            }
            {
                proyectRepository && (
                    <a href={proyectRepository} role="link" target="_blank" className="inline-flex items-center text-lg font-medium text-cyan-500 dark:text-cyan-200 dark:hover:text-cyan-300 hover:text-cyan-700">
                        See repo{" "}
                    </a>
                )
            }
            </ul>
        </div>
    )
}

export default ProyectCard