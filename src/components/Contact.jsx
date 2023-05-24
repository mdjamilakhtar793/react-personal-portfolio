import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";

import vgs from "../assets/vg.png";
const Contact = () => {
  /*const [inputs, setInputs] = useState({ name: "", email: "", query: "" });--------------This Is The Second Way Hooks Uses*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const submitHandled = (e) => {
    e.preventDefault();
    console.log(name, email, query);

    toast.success("Data Sended ");
  };

  const animates = {
    form: {
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
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form onSubmit={submitHandled} {...animates.form}>
          <h2>Contact Me.</h2>
          <input
            type="text"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="Your Query"
            required
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <motion.button {...animates.button} type="submit">
            Send Query
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={vgs} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
