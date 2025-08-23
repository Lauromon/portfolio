import Hero from "../components/Hero";
import Proyects from "../components/Proyects";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Navbar from "../components/Navbar";
import ContactForm from "../components/ContactForm";

export default function Index() {
    return (
        <div className='flex flex-col items-center max-w-screen px-4 mx-auto bg-gradient-to-b from-black via-gray-800 to-cyan-600 text-white pb-8'>
            <Navbar />
            <Hero />
            <Experience />
            <Proyects />
            <AboutMe />
            <ContactForm />
        </div>
    );
}