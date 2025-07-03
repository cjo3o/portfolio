import React from 'react';

function Header(props) {
    return (
        <div className="bg-gray-200 shadow-sm"
             id="header">
            <div className="flex m-auto justify-between max-w-[1200px]"
                 id="header-content">
                <h1 className="inline-block p-4 text-2xl font-bold"
                    id="header-title">
                    CJY's Portfolio
                </h1>
                <div className="flex"
                     id="header-nav">
                    <ul className="px-8 flex items-center gap-9">
                        <li className="font-bold p-4 cursor-pointer">About Me</li>
                        <li className="font-bold p-4 cursor-pointer">Skill</li>
                        <li className="font-bold p-4 cursor-pointer">Project</li>
                        <li className="font-bold p-4 cursor-pointer">Education</li>
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Header;