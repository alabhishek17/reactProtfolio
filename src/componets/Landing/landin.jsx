import style from "./css_landing.module.css"
import img from "../../../public/abhishek.jpg"
import { FaAddressBook } from "react-icons/fa6";
import { ImLocation } from "react-icons/im";
import { FaRegHourglassHalf } from "react-icons/fa6";
import { BsJustifyLeft, BsLinkedin } from "react-icons/bs";
import { GrInstagram } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa6";
import { VscGithubInverted } from "react-icons/vsc";
import About from "../Pages/about";
import Nav from "../Navbar/nav";
function Landing() {
    return (
        <div style={{ display: "flex", width: "100%"}}>
            <div className={style.sideA} style={{ backgroundColor: "#1E1E1F6B", width: "30%", borderRadius: "5px", padding: "20px 30px 30px", alignItems:"center",margin: "0px 19.2px" }}>
                <section className={style.img1}>
                    <img style={{ width: "100px" }} src={img} alt="" />
                    <h3>Abhishek</h3>
                    <p>hello world</p>
                </section>
                <hr />
                <section className={style.age}>

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "raw", border: "2px solid black", margin:"10px",width:"200px",alignItems:"center",justifyContent:"center"}}>
                        <FaRegHourglassHalf style={{ border: "2px solid", padding: "10px", fontSize: "20px", color: "goldenrod", borderRadius: "5px", backgroundColor: "GrayText" }} />
                        <div style={{ marginLeft:"10px" }}>
                            <p style={{margin:"0px"}}>AGE</p>
                            <time>23 years old</time>
                        </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "raw", border: "2px solid black", margin:"10px",width:"200px",alignItems:"center",justifyContent:"center" }}>
                        <ImLocation style={{ border: "2px solid", padding: "10px", fontSize: "20px", color: "goldenrod", borderRadius: "5px", backgroundColor: "GrayText" }} />
                        <div style={{marginLeft:"10px"}}>
                            <p style={{margin:"0px"}}>LOCATION</p>
                            <address>BENGALORU</address>
                        </div>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", flexDirection: "raw", border: "2px solid black",margin:"10px",width:"200px",alignItems:"center",justifyContent:"center"  }}>

                        <FaAddressBook style={{ border: "2px solid", padding: "10px", fontSize: "20px", color: "goldenrod", borderRadius: "5px", backgroundColor: "GrayText" }} />
                        <div style={{marginLeft:"10px"}}>
                            <p style={{margin:"0px"}} >PHONE</p>
                            <p style={{margin:"0px"}}>+917872373</p>
                        </div>
                    </div>
                      
                     
                  
                </section>
                <section className={style.icons}>
                    <BsLinkedin style={{ fontSize: "30px" }} />
                    <GrInstagram style={{ fontSize: "30px" }} />
                    <FaTwitter style={{ fontSize: "30px" }} />
                    <VscGithubInverted style={{ fontSize: "30px" }} />
                </section>
            </div>
            <div className={style.sideB}>
                
                <Nav style={{}} />
                <About/>
            </div>
        </div>
    )
}
export default Landing;