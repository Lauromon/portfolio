import ProyectCard from "./ProyectCard"
import viutyImg from "../assets/prickly.gif"

function Proyects() {
    return (
        <section id="proyects" className="flex flex-col max-w-4xl mt-8 w-full px-4 py-8 bg-gray-800 rounded-lg shadow-lg text-white">
            <h2 className="text-3xl font-bold mb-4 ml-4 text-left">Proyects</h2>
            <div className="max-w-3xl mx-auto">
                <ProyectCard
                    proyectName="Prikly (ex-Viuti)"
                    proyectDescription="A comprehensive and intuitive management platform for beauty salons, barbershops, spas, fitness centers, and more.

Backend: Built with C# and .NET, leveraging Entity Framework and Dapper for database integration.

Frontend: Developed using JavaScript with React.

Architecture: Designed as a microservices-based distributed system, integrating event-driven communication to ensure scalability, modularity, and adaptability to evolving business needs."
                    proyectImage={viutyImg}
                    proyectAltImage="Viuti website screenshots"
                    proyectLink="https://www.prikly.io/"
                    proyectRepository={null}
                />
                {/* Disclaimer: the others proyects are not available, they are private projects. But if you want to know more about them, you can contact me */}
                <div className="flex flex-col gap-4 mt-8">
                    <p className="text-sm text-gray-400">If you want to know more about my work, feel free to contact me.</p>
                </div>
            </div>
        </section>
    )
}



export default Proyects