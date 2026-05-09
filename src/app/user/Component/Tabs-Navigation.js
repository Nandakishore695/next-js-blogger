import React from 'react'


function TabsNavigation({ handleMenu, types }) {
    return (
        <>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <button className={`nav-link active bg-dark fw-normal ${types === "all" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} aria-current="page" onClick={() => handleMenu("all")}>All</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link fw-normal ${types === "Reactjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} onClick={() => handleMenu("Reactjs")}>React JS</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link fw-normal ${types === "Nextjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} href="#" onClick={() => handleMenu("Nextjs")}>Next JS</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link fw-normal ${types === "Expressjs" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} aria-disabled="true" onClick={() => handleMenu("Expressjs")}>Express JS</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link fw-normal ${types === "Git" ? 'bg-black text-white' : 'bg-white text-black'} cursor-pointer rounded-2xl hover:border`} aria-disabled="true" onClick={() => handleMenu("Git")}>Git</button>
                </li>
            </ul>
        </>
    )
}
export default TabsNavigation;
