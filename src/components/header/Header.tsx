import React from 'react'

export default function Header() {
  return (
    <header className={`flex flex-col flex-center mb-4`}>
        <img className={`p-16`} src="/src/assets/aba-logo.svg" alt="aba-logo" />

        <nav className={`px-4`}>
            <ul className={`py-2 border-t border-b border-black flex flex-wrap justify-between`}>
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
