import style from "./css_about.module.css"
import dev from "../../../public/icon-dev.svg"
import frame from "../../../public/icon-frameworks.svg"
import app from "../../../public/icon-app.svg"
import market from "../../../public/icon-marketing.svg"
function About() {
  return (
    <div>

      <header>
        <h2>"About me"</h2>
      </header>
      <section className={style.sectA}>
        <div>
          <p>
            Hello there! 👋 My name is Oktay and I'm from Berlin, Germany. As a Full-Stack software developer, I
            specialize in creating visually appealing websites, apps and mobile games. My passion for graphic design
            isn't just a hobby, it's a key ingredient in every project I work on.
          </p>
        </div>
        <div>
          <p>
            In my free time, I enjoy exploring my other passions, such as photography and music production, which
            provide me with creative outlets. I am also very passionate about Web3 and everything related to crypto,
            NFTs and blockchain technology as I believe they have the potential to revolutionize business and online
            interactions.
          </p>
          <p>
            If you have an innovative idea for a project that needs to be developed, I would love to hear from you.
            Your vision can be turned into a real product.
            Don't hesitate to reach out and let's start a conversation about your concept.
            I'm excited to collaborate and help bring your ideas to life.
          </p>
        </div>
        <button>show more</button>

      </section>
      <section className={style.sectB}>
        <h3>Primary Focus</h3>
        <div className={style.container}>
          <div className={style.card}>
            <div>
              <img src={dev} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h4 style={{ margin: "0px 0px 10px 10px" }}>Web Design & Developement</h4>
              <p style={{ margin: "0px 0px 10px 10px" }}>Creating attractive, easy-to-use websites that work well for businesses and individuals online.</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <img src={frame} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h4 style={{ margin: "0px 0px 10px 10px" }}>Full-Stack Solution</h4>
              <p style={{ margin: "0px 0px 10px 10px" }}>Developing scalable web applications using JavaScript Frameworks, SQL Databases, PHP and Python.</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <img src={app} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h4 style={{ margin: "0px 0px 10px 10px" }}>Mobile Apps & Games</h4>
              <p style={{ margin: "0px 0px 10px 10px" }}>Creating and developing engaging mobile apps and games for iOS and Android devices.</p>
            </div>
          </div>
          <div className={style.card}>
            <div>
              <img src={market} alt="" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <h4 style={{ margin: "0px 0px 10px 10px" }}>Marketing & SEO</h4>
              <p style={{ margin: "0px 0px 10px 10px" }}>marketing icon
Marketing & SEO
Using SEO and marketing strategies to boost online visibility and promote products or services.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
export default About;