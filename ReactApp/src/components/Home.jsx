import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp";
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai";



const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>tachkill</h1>
          <p>Solution to all your problem'S</p>
        </main>
      </div>
      <div className="home2" id="about">
        <img src={vg} alt="graphics" />
        <div>
            <h3>About</h3>
          <p>
           <i> We are your one and only</i> solution to the tech Problem's you face
            everyday. We are landing the tech company whose aim is to <ul>increase
            the<b> problem solving ability in children.</b></ul>
            We are your one and only solution to the tech Problem's you face
            everyday.
            We are landing the tech company whose aim is to increase
          </p>
        </div>
      </div>
      <div className="home3">
        <div>
            <h1>WHO ARE WE ?</h1>
            <p>
                TechKill PVT. LTD. Foundeation consectetur, adipisicing elit. Sequi odit eos iure quo, fuga harum modi? Sapiente corporis a repellat. Odio nostrum commodi, adipisci repellendus magnam suscipit sapiente deserunt nam. Quae, voluptas!<ul>TechKill Foundation iure quo, fuga harum modi? Sapiente corporis a repellat</ul>
                Problem solving skill's adipisci repellendus magnam suscipit sapiente deserunt nam. Quae, voluptas!<ul>techKill Foundation iure quo, fuga harum modi? Sapiente corporis a repellat</ul>
            </p>

        </div>
      </div>

      <div className="home4" id="brand">
        <div>
            <h1>Brand's</h1>
            <article>
                <div style={{
                    animationDelay: "0.3s",
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>

                <div style={{
                    animationDelay: "0.5s",
                }}>
                    <AiFillTwitterCircle/>
                    <p>Twitter</p>
                </div>

                <div style={{
                    animationDelay: "0.7s",
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>

                <div style={{
                    animationDelay: "1s",
                }}>
                    <AiFillYoutube/>
                    <p>YouTube</p>
                </div>
            </article>
        </div>
      </div>
    </>
  );
};

export default Home;
