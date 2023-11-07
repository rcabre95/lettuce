export default function Footer() {
    return (
        <footer className={`bg-dark-wood bg-cover bg-center bg-no-repeat bg-local h-fit md:min-h-96 w-screen md:flex md:flex-col md:items-end md:justify-end text-lettuce-cream p-4`}>
            <UpperFooter />
            <LowerFooter />
        </footer>
    )
}

function UpperFooter() {
    return (
    <>
    <div className="flex w-full md:w-2/3 flex-wrap justify-end">
        <section className={`w-1/2 md:w-72 text-right md:text-left mb-4`}>
            <h4 className="text-base md:text-lg">HOURS</h4>
            <ul>
                <li className="text-sm font-montserrat md:text-base">Tues - Thurs 12pm - 10pm</li>
                <li className="text-sm font-montserrat md:text-base">Fri 12pm - 1am</li>
                <li className="text-sm font-montserrat md:text-base">Sat 11am - 1am</li>
                <li className="text-sm font-montserrat md:text-base">Sun 10am - 9pm</li>
            </ul>
        </section>
        <section className={`w-1/2 md:w-72 text-right md:text-left`}>
            <h4 className="text-base md:text-lg">LOCATIONS</h4>
            <span className="text-sm font-montserrat md:text-base">302 N Green Street</span><br />
            <span className="text-sm font-montserrat md:text-base">3rd Floor</span><br />
            <span className="text-sm font-montserrat md:text-base">Chicago, IL 60607</span><br />
            <span className="text-sm font-montserrat md:text-base">&#40;773&#41; 645-1400</span><br />
        </section>
        
    </div>
    <div className="w-full md:w-2/3 mb-4 h-fit md:flex md:flex-col md:items-end mt-2 mr-2 text-lg">
        <section className="md:w-72 lg:mr-72 text-right md:text-left md:flex md:flex-col">
            <a className="hover:underline" href="/"><h4 className="">CONTACT</h4></a>
            <a className="hover:underline" href="/"><h4 className="">NEWSLETTER</h4></a>
        </section>
    </div>
    </>
    )
}

function LowerFooter() {
    return (
    <nav className="w-full text-xs md:flex md:self-end -mb-3">
        <ul className="w-full h-20 md:h-10 flex flex-wrap justify-center md:items-end items-center">
            <li className="p-2"><a className="hover:underline" href="/">FREQUENT DINER</a></li>
            <li className="p-2"><a className="hover:underline" href="/">GIFT CARDS</a></li>
            <li className="p-2"><a className="hover:underline" href="/">EMPLOYMENT</a></li>
            <li className="p-2"><a className="hover:underline" href="/">LEYE.COM</a></li>
            <li className="p-2"><a className="hover:underline" href="/">TERMS OF USE</a></li>
            <li className="p-2"><a className="hover:underline" href="/">PRIVACY POLICY</a></li>
        </ul>
    </nav>
    )
}
