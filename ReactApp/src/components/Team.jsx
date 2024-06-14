import React from "react";
import "../style/Team.scss";
import founderlogo from "../assets/founderlogo.jpg";
import suman from "../assets/suman.jpeg";
import prachi from "../assets/prachi.jpeg";
import rajveer from '../assets/rajveer.jpeg';
import vijay from '../assets/vijay.jpeg';
import satish from '../assets/satish.jpeg'
import p from '../assets/P.jpeg';
import female from "../assets/Female.jpeg";
// import { AiOutlineUser, AiOutlineMan } from "react-icons/ai";
const Team = () => {
  return (
    <>
      <div className="team">
        <main>
          <h1>Founder and Team Information </h1>
          <div className="founder">
            <h3>Founder</h3>
            <div>
              <img src={founderlogo} alt="" />
            </div>
            <p>
              Satyapal bishnoi <br />
              <span>( Founder and CEO of TechKill )</span>
            </p>
            </div>

            
                {/* team content */}
                <div className="team-content">
                    <h4>Our Management Team</h4>
                    <div>
                    <div>
                        <img src={satish} alt="" />
                        <p>Satish bishnoi <br />
                            <span>5 year's exprience</span>
                        </p>
                    </div>
                    <div>
                        <img src={vijay} alt="" />
                        <p>Vijay partap <br />
                            <span>5 year's exprience</span>
                        </p>
                    </div>
                    <div>
                        <img src={p} alt="" />
                        <p>Parveen raj <br />
                            <span>4.5 year's exprience</span>
                        </p>
                    </div>

                    </div>

                    {/*  */}
                    {/*  */}
                    <div>
                    <div>
                        <img src={prachi} alt="" />
                        <p>Prachi bhati <br />
                            <span>4 year's expriance</span>
                        </p>
                    </div>
                    <div>
                        <img src={suman} alt="" />
                        <p>Suman sharma <br />
                            <span>3.5 year's exprience</span>
                        </p>
                    </div>
                    <div>
                        <img src={rajveer} alt="" />
                        <p>Rajveer deva <br />
                            <span>3.5 year expriance</span>
                        </p>
                    </div>

                    </div>
                </div>
                <h2>Thank's for visiting THACkILL</h2>
        </main>
      </div>
    </>
  );
};

export default Team;
