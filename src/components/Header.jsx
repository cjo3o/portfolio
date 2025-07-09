import React, {useState} from 'react';

function Header(props) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const listClick = (data) => {
        const about = document.getElementsByClassName("AboutMe_container");
        const skill = document.getElementsByClassName("skill_container");
        const project = document.getElementsByClassName("project_container");
        const education = document.getElementsByClassName("education_container");
        setIsMenuOpen(false);
        if (data === "AboutMe") {
            window.scrollTo({
                top:about[0].offsetTop - 64,
                behavior: "smooth"
            });
        } else if (data === "Skill") {
            window.scrollTo({
                top:skill[0].offsetTop - 64,
                behavior: "smooth"
            });
        } else if (data === "Project") {
            window.scrollTo({
                top:project[0].offsetTop - 64,
                behavior: "smooth"
            });
        } else if (data === "Education") {
            window.scrollTo({
                top:education[0].offsetTop - 64,
                behavior: "smooth"
            });
        }
    }
    return (
        <div className="bg-gray-200 sticky top-0 shadow-sm md:bg-transparent md:shadow-none"
             id="header">
            <div className="flex items-center m-auto justify-between max-w-[1200px] relative"
                 id="header-content">
                <h1 className="inline-block p-4 text-2xl font-bold cursor-pointer hover:text-purple-700 transition-colors duration-200"
                    id="header-title">
                    CJY's Portfolio
                </h1>
                <div className="flex w-full absolute md:static left-0 top-[64px]"
                     id="header-nav">
                    <ul className={`${isMenuOpen ? 'block' : 'hidden'} bg-gray-100 rounded-b-xl w-full md:flex md:px-8 md:bg-transparent md:w-full items-center gap-9`}>
                        <li className="font-bold p-4 cursor-pointer hover:text-purple-700 transition-colors duration-200" onClick={()=>listClick("AboutMe")}>About
                            Me
                        </li>
                        <li className="font-bold p-4 cursor-pointer hover:text-purple-700 transition-colors duration-200" onClick={()=>listClick("Skill")}>Skill</li>
                        <li className="font-bold p-4 cursor-pointer hover:text-purple-700 transition-colors duration-200" onClick={()=>listClick("Project")}>Project</li>
                        <li className="font-bold p-4 cursor-pointer hover:text-purple-700 transition-colors duration-200" onClick={()=>listClick("Education")}>Education</li>
                    </ul>
                </div>
                <div
                    className="menu p-[0.7rem] mr-1 cursor-pointer rounded-lg md:hidden hover:bg-[#cccccc] transition-all"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img src="/icons/menu.png" alt="" className="w-[1.5rem] h-[1.5rem]"/>
                </div>
            </div>
        </div>
    );
}

export default Header;