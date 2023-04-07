import React from "react";
import "../Styles/Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Layout from "./Layout";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynthvnl",
        "template_jq81rqc",
        form.current,
        "zLhNjC15V92cU8cAT"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Layout>
      <section id="contact">
        <h5 className="mt-5 text-center text-2xl font-semibold"> Get In Touch </h5>
        <h2 className="mb-10 text-center text-3xl font-bold"> Contact Me </h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact_option">
              <MdOutlineEmail className="contact_option_icon" />
              <h4>Emails</h4>
              <h5>mannannasir49@gmail.com</h5>
              <a href="mailto:mannannasir49@gmail.com" target="_blank">
              </a>
            </article>
            <article className="contact_option">
              <RiMessengerLine className="contact_option_icon" />
              <h4>Messenger</h4>
              <h5>Mannan Nasir</h5>
              <a
                href="https://m.me/profile.php?id=100009863538012"
                target="_blank"
              >
                Send a message
              </a>
            </article>
            <article className="contact_option">
              <BsWhatsapp className="contact_option_icon" />
              <h4>WhatsApp</h4>
              <h5> Mannan Nasir </h5>
              <a
                href="https://api.whatsapp.com/send?phone=+923211156826"
                target="_blank"
              >
                Send a message
              </a>
            </article>
          </div>

          {/* END OF CONTACT OPTIONS */}

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
            ></textarea>
            <button type="submit" className="contact_submit">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
