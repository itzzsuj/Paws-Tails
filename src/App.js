import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Puppies from "./components/Puppies"
import About from "./components/About"
import Contact from "./components/Contact"

function App(){
    return(
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Puppies></Puppies>
            <About></About>
            <Contact></Contact>
        </div>
    )
}

export default App