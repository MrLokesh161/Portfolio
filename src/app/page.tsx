import Navbar from "@/components/Navbar"
import Hero from "@/components/Home/Hero"
import About from "@/components/Home/About"


export default function Home() {

    return (
        <div className="bg-black">
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}