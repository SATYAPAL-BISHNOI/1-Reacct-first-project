import React from "react";
import "../style/Home.scss";
import vg from "../assets/2.webp";

const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>tachkill</h1>
          <p>Solution to all your problem'S</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />
        <div>
            <h3>About</h3>
          <p>
            We are your one and only solution to the tech Problem's you face
            everyday. We are landing the tech company whose aim is to <ul>increase
            the problem solving ability in children.</ul>
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
                TechKill PVT. LTD. Foundeation consectetur, adipisicing elit. Sequi odit eos iure quo, fuga harum modi? Sapiente corporis a repellat. Odio nostrum commodi, adipisci repellendus magnam suscipit sapiente deserunt nam. Quae, voluptas!<ul>Sequi odit eos iure quo, fuga harum modi? Sapiente corporis a repellat</ul>
                Odio nostrum commodi, adipisci repellendus magnam suscipit sapiente deserunt nam. Quae, voluptas!<ul>Sequi odit eos iure quo, fuga harum modi? Sapiente corporis a repellat</ul>
            </p>

        </div>
      </div>
    </>
  );
};

export default Home;
