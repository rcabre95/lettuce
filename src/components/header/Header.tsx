import React from 'react'

export default function Header() {
    return (
        <header className={`flex flex-col-reverse md:flex-row flex-center mb-4 md:p-8 items-center`}>
            <img className={`hidden md:block w-48 h-48`} src="/src/assets/aba-logo.svg" alt="aba-logo" />
            <img className={`block md:hidden backdrop-brightness-90 p-24 bg-plates bg-cover bg-center bg-no-repeat bg-local`} src="/src/assets/aba-logo-cream.svg" alt="aba-logo" />
            

            <nav className={`px-4 my-2 w-full`}>
                <ul className={`py-2 md:w-4/6 md:py-4 border-t border-b border-black flex flex-wrap justify-between md:justify-around`}>
                    <li>Reserve</li>
                    <li>Menu</li>
                    <li>Group Dining</li>
                    <li>Events</li>
                    <li>Team</li>
                </ul>
            </nav>
        </header>
    )
}
