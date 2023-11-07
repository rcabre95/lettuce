import ActionButton from "../shared-ui/ActionButton";


export default function MainContent() {
    return (
        <article className="my-4 w-full md:w-5/6 max-w-7xl">
            <section className="mb-4 w-full h-fit md:h-96 flex flex-col md:flex-row-reverse items-center my-4 md:my-12">
                <div className="overflow-hidden w-full md:w-1/3 h-56 md:h-full flex justify-center items-center">
                    <img className="" src="/src/assets/up-35.jpg" alt="hummus image" />
                </div>

                <div className="md:w-2/3 lg:border-b lg:border-t lg:border-black lg:py-3 px-2 lg:px-20 flex flex-col items-center justify-center">
                    <h3 className="text-2xl w-full text-center my-2">GROUP DINING AT ABA</h3>
                    <p className="text-center font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam cumque asperiores ab libero ipsa velit quidem, perspiciatis autem laborum est aut quia numquam optio eaque beatae porro, fugit sunt? Quod ex dignissimos blanditiis, aliquam eligendi, similique quaerat omnis dolorum sint illo eos! Laudantium dolores suscipit, qui nemo dicta quisquam.</p>
                    <ActionButton type="button" text="PLAN YOUR PARTY" action={() => { console.log("planning party...") }} extraStyles="my-2 text-xs lg:mt-4" width="w-64" height="h-8" />
                </div>
            </section>

            <section className="mb-4 w-full h-fit md:h-96 flex flex-col md:flex-row items-center my-4 md:my-12">
                <div className="overflow-hidden w-full md:w-1/3 h-56 md:h-full flex justify-center items-center">
                    <img className="scale-250" src="/src/assets/up-35.jpg" alt="hummus zoomed image" />
                </div>
                <div className="md:w-2/3 lg:border-b lg:border-t lg:border-black lg:py-3 px-2 lg:px-20 flex flex-col items-center justify-center">
                    <h3 className="text-2xl w-full text-center my-2">WINE DINNER</h3>
                    <p className="text-center font-montserrat">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero aliquid soluta a flex flex-col items-center justify-centerrchitecto pariatur consectetur dicta quae earum, fugit officia quisquam ut te w-full text-leftmpora laboriosam eius veritatis facilis harum iure doloribus..</p>
                    <p className="text-center my-2 font-montserrat">June 13th, 2018 at 7pm</p>
                    <ActionButton type="button" text="LEARN MORE" action={() => { console.log("learning more...") }} extraStyles="my-2 text-xs lg:mt-4" width="w-64" height="h-8" />
                </div>
            </section>

            <section className="mb-4 w-full h-fit md:h-96 flex flex-col md:flex-row-reverse items-center my-4 md:my-12">
                <div className="overflow-hidden w-full md:w-1/3 h-56 md:h-full flex justify-center items-center">
                    <img className="scale-150 md:scale-200" src="/src/assets/up-42.jpg" alt="leaf roll image" />
                </div>
                <div className="md:w-2/3 lg:border-b lg:border-t lg:border-black lg:py-3 px-2 lg:px-20 flex flex-col items-center justify-center">
                    <h3 className="text-2xl w-full text-center my-2">ABOUT ABA</h3>
                    <p className="text-center font-montserrat">Aba is a restaurant with a rooftop patio located in Chicago&apos;s historic Fulton Market District. This is Chef CJ Jacobson&apos;s second restaurant with Lettuce Entertain You, and is an extension of Ēma &#40;mother in Hebrew&#41; in River North. Aba, meaning father in Hebrew, will incorporate Ēma&apos;s style of cooking with a larger influence of steak, raw and chilled seafood. The beverage program is crafted by Wine Director Ryan Arnold and Mixologist Liz Pearce and showcases Mediterranean-inspired rare wines and spirits.</p>
                </div>
            </section>
        </article>
    )
}
