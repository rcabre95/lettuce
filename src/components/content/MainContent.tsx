import ActionButton from "../shared-ui/ActionButton";


export default function MainContent() {
    return (
        <article className="my-4">
            <section className="mb-4 h-fit flex flex-col items-center my-4">
                <div className="overflow-hidden w-56 h-56 flex justify-center items-center">
                    <img className="" src="/src/assets/up-35.jpg" alt="hummus image" />
                </div>

                <div className="px-2 flex flex-col items-center justify-center">
                    <h3 className="text-lg w-full text-left my-2">GROUP DINING AT ABA</h3>
                    <p className="text-center text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam cumque asperiores ab libero ipsa velit quidem, perspiciatis autem laborum est aut quia numquam optio eaque beatae porro, fugit sunt? Quod ex dignissimos blanditiis, aliquam eligendi, similique quaerat omnis dolorum sint illo eos! Laudantium dolores suscipit, qui nemo dicta quisquam.</p>
                    <ActionButton type="button" text="PLAN YOUR PARTY" action={() => { console.log("planning party...") }} extraStyles="my-2" />
                </div>
            </section>

            <section className="mb-4 h-fit flex flex-col items-center my-4">
                <div className="overflow-hidden w-56 h-56 flex justify-center items-center">
                    <img className="scale-250" src="/src/assets/up-35.jpg" alt="hummus zoomed image" />
                </div>
                <div className="px-2 flex flex-col items-center justify-center">
                    <h3 className="text-lg w-full text-left my-2">WINE DINNER</h3>
                    <p className="text-cente text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero aliquid soluta a flex flex-col items-center justify-centerrchitecto pariatur consectetur dicta quae earum, fugit officia quisquam ut te w-full text-leftmpora laboriosam eius veritatis facilis harum iure doloribus..</p>
                    <p className="text-center text-sm">June 13th, 2018 at 7pm</p>
                    <ActionButton type="button" text="LEARN MORE" action={() => { console.log("learning more...") }} extraStyles="my-2" />
                </div>
            </section>

            <section className="mb-4 h-fit flex flex-col items-center my-4">
                <div className="overflow-hidden w-56 h-56 flex justify-center items-center">
                    <img className="scale-150" src="/src/assets/up-42.jpg" alt="leaf roll image" />
                </div>
                <div className="px-2 flex flex-col items-center justify-center">
                    <h3 className="text-lg w-full text-left my-2">ABOUT ABA</h3>
                    <p className="text-center text-sm">Aba is a restaurant with a rooftop patio located in Chicago&apos;s historic Fulton Market District. This is Chef CJ Jacobson&apos;s second restaurant with Lettuce Entertain You, and is an extension of Ēma &#40;mother in Hebrew&#41; in River North. Aba, meaning father in Hebrew, will incorporate Ēma&apos;s style of cooking with a larger influence of steak, raw and chilled seafood. The beverage program is crafted by Wine Director Ryan Arnold and Mixologist Liz Pearce and showcases Mediterranean-inspired rare wines and spirits.</p>
                </div>
            </section>
        </article>
    )
}
