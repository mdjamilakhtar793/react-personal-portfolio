import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillRedEnvelope,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src="https://avatars.githubusercontent.com/u/131196293?s=400&u=f68e0622b37d258b739e3d785cce1989eb5858bc&v=4"
          alt="Founder"
        />
        <h2>Md Jamil Akhtar</h2>
        <p>
          E-Learning Full-Time , But discipline is last forever <br />
          <AiFillRedEnvelope />
          <span>@-©️Copyright-Jam-Tech-2023</span>
        </p>
      </div>
      <aside>
        <h2>Social Meadia</h2>
        <article>
          <a href="https://youtu.be/3Nr_qTKRb5I" target="blank">
            <AiFillYoutube />
          </a>
          <a href="https://github.com/mdjamilakhtar793" target="blank">
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/jamil-akhtar/" target="blank">
            <AiFillLinkedin />
          </a>
          <a href="https://www.linkedin.com/in/jamil-akhtar/" target="blank">
            <AiFillTwitterCircle />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
