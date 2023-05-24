import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import we from "../assets/vg.png";
const Home = () => {
  const clientCounting = useRef(null);
  const projectCounting = useRef(null);

  const animateClineCounting = () => {
    animate(0, 20, {
      duration: 1,
      onUpdate: (val) => (clientCounting.current.textContent = val.toFixed(2)),
    });
  };

  const animateProjectCounting = () => {
    animate(0, 50, {
      duration: 1,
      onUpdate: (val) => (projectCounting.current.textContent = val.toFixed(2)),
    });
  };
  const animating = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animating.h1}>
            Hi,
            <br /> I'm Md Jamil Akhtar
          </motion.h1>
          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creators"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewroyer",
            }}
          />

          <div>
            <a href="mailto:mdjamilakhtar793@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              <motion.span
                whileInView={animateClineCounting}
                ref={clientCounting}
              >
                20
              </motion.span>
            </p>
            <span>Clients All Over World</span>
          </article>
          <aside>
            <article>
              <p>
                +
                <motion.span
                  ref={projectCounting}
                  whileInView={animateProjectCounting}
                >
                  50
                </motion.span>
              </p>
              <span>Projects Developed</span>
            </article>
            <article dspacial>
              <p>Contact</p>
              <span>mdjamilakhtar793@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={we} alt="Md Jamil Akhtar" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
