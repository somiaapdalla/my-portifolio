import { Link } from "react-router"

function Header(){
    return <div className="bg-slate-900">
        <div className=" flex justify-between text-white pl-10 pr-10 pb-10 pt-5">
        <h1 className="text-2xl">Portifolio</h1>
        <ul className="flex justify-between gap-6 font-semibold">
         <Link to="./"><li className="cursor-pointer hover:text-blue-900">Home</li></Link> 
          <Link to="about"> <li className="cursor-pointer hover:text-blue-900">About</li></Link> 
           <Link to="skills"><li className="cursor-pointer hover:text-blue-900">Skills</li></Link> 
           <Link to="projects"><li className="cursor-pointer hover:text-blue-900">Projects</li></Link> 
        </ul>
        </div>
    </div>
}
export default Header