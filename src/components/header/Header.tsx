export default function Header() {
    return (
        <header className={`flex flex-col-reverse md:flex-row mb-4 md:m-8  items-center w-full md:w-11/12 md:max-w-7xl justify-center`}>
            <img className={`hidden md:block w-48 h-48`} src="src/assets/aba-logo.svg" alt="aba-logo" />
            <img className={`block md:hidden backdrop-brightness-90 md:w-0 md:h-0 p-24 bg-plates bg-cover bg-center bg-no-repeat bg-local`} src="src/assets/aba-logo-cream.svg" alt="aba-logo" />
            

            <nav className={`px-4 my-2 w-full md:w-5/6`}>
                <ul className={`py-2  w-full border-t border-b border-black flex flex-wrap justify-between md:justify-around`}>
                    <li className="hover:underline"><a href="/">Reserve</a></li>
                    <li className="hover:underline"><a href="/">Menu</a></li>
                    <li className="hover:underline"><a href="/">Group Dining</a></li>
                    <li className="hover:underline"><a href="/">Events</a></li>
                    <li className="hover:underline"><a href="/">Team</a></li>
                </ul>
            </nav>
        </header>
    )
}
