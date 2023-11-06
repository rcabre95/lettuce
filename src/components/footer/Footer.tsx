export default function Footer() {
    return (
        <footer className={`bg-dark-wood bg-cover bg-center bg-no-repeat bg-local h-fit w-screen text-lettuce-cream p-4`}>
            <UpperFooter />
            <LowerFooter />
        </footer>
    )
}

function UpperFooter() {
    return (
    <div className="flex flex-wrap mb-4">
        <section className={`w-1/2 text-right mb-4`}>
            <h4>HOURS</h4>
            <ul>
                <li className="text-sm">Tues - Thurs 12pm - 10pm</li>
                <li className="text-sm">Fri 12pm - 1am</li>
                <li className="text-sm">Sat 11am - 1am</li>
                <li className="text-sm">Sun 10am - 9pm</li>
            </ul>
        </section>
        <section className={`w-1/2 text-right`}>
            <h4>LOCATIONS</h4>
            <span className="text-sm">302 N Green Street</span><br />
            <span className="text-sm">3rd Floor</span><br />
            <span className="text-sm">Chicago, IL 60607</span><br />
            <span className="text-sm">&#40;773&#41; 645-1400</span><br />
        </section>
        <section className="w-full h-fit text-right mt-2">
            <a href="/"><h4 className="underline">CONTACT</h4></a>
            <a href="/"><h4 className="underline">NEWSLETTER</h4></a>
        </section>
    </div>
    )
}

function LowerFooter() {
    return (
    <nav className="w-full text-xs ">
        <ul className="w-full h-20 flex flex-wrap justify-center items-center">
            <li className="p-2"><a href="/">FREQUENT DINER</a></li>
            <li className="p-2"><a href="/">GIFT CARDS</a></li>
            <li className="p-2"><a href="/">EMPLOYMENT</a></li>
            <li className="p-2"><a href="/">LEYE.COM</a></li>
            <li className="p-2"><a href="/">TERMS OF USE</a></li>
            <li className="p-2"><a href="/">PRIVACY POLICY</a></li>
        </ul>
    </nav>
    )
}
