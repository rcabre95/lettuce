export default function Footer() {
    return (
        <footer className={`bg-dark-wood bg-cover bg-center bg-no-repeat bg-local h-fit w-screen`}>
            <UpperFooter />
            <LowerFooter />
        </footer>
    )
}

function UpperFooter() {
    return (
    <div>
        <section>
            <h4>HOURS</h4>
            <ul>
                <li>Tues - Thurs 12pm - 10pm</li>
                <li>Fri 12pm - 1am</li>
                <li>Sat 11am - 1am</li>
                <li>Sun 10am - 9pm</li>
            </ul>
        </section>
        <section>
            <h4>LOCATIONS</h4>
            <span>302 N Green Street</span><br />
            <span>3rd Floor</span><br />
            <span>Chicago, IL 60607</span><br />
            <span>&#40;773&#41; 645-1400</span><br />
        </section>
        <a href="/"><h4>CONTACT</h4></a>
        <a href="/"><h4>NEWSLETTER</h4></a>
    </div>
    )
}

function LowerFooter() {
    return (
    <nav>
        <ul>
            <li><a href="/">FREQUENT DINER</a></li>
            <li><a href="/">GIFT CARDS</a></li>
            <li><a href="/">EMPLOYMENT</a></li>
            <li><a href="/">LEYE.COM</a></li>
            <li><a href="/">TERMS OF USE</a></li>
            <li><a href="/">PRIVACY POLICY</a></li>
        </ul>
    </nav>
    )
}
