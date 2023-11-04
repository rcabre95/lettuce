import ActionButton from "../shared-ui/ActionButton";


export default function MainContent() {
  return (
    <article>
        <section>
            <div>
                <h3>GROUP DINING AT ABA</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laboriosam cumque asperiores ab libero ipsa velit quidem, perspiciatis autem laborum est aut quia numquam optio eaque beatae porro, fugit sunt? Quod ex dignissimos blanditiis, aliquam eligendi, similique quaerat omnis dolorum sint illo eos! Laudantium dolores suscipit, qui nemo dicta quisquam.</p>
                <ActionButton text="PLAN YOUR PARTY" action={() => { console.log("planning party...") }} />
            </div>
            <img src="/src/assets/" alt="" />
        </section>

        <section>
            <div>
                <h3>WINE DINNER</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit libero aliquid soluta architecto pariatur consectetur dicta quae earum, fugit officia quisquam ut tempora laboriosam eius veritatis facilis harum iure doloribus..</p>
                <p>June 13th, 2018 at 7pm</p>
                <ActionButton text="LEARN MORE" action={() => { console.log("learning more...") }} />
            </div>
        </section>

        <section>
            <div>
                <h3>ABOUT ABA</h3>
                <p>Aba is a restaurant with a rooftop patio located in Chicago&apos;s historic Fulton Market District. This is Chef CJ Jacobson&apos;s second restaurant with Lettuce Entertain You, and is an extension of Ēma &#40;mother in Hebrew&#41; in River North. Aba, meaning father in Hebrew, will incorporate Ēma&apos; style of cooking with a larger influence of steak, raw and chilled seafood. The beverage program is crafted by Wine Director Ryan Arnold and Mixologist Liz Pearce and showcases Mediterranean-inspired rare wines and spirits.</p>
            </div>
        </section>
    </article>
  )
}
