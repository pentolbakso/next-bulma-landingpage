import { NextSeo } from "next-seo";
import { event } from "../lib/analytics";

export default function Contact() {
  function sendEmail() {
    const email = "contact@awesomesaucestudio.com";
    window.open("mailto:" + email + "?subject=Hi");
    event("email", "ecommerce");
  }

  function sendWhatsapp() {
    const number = "62811111111";
    const text = "Hi";
    const url = `https://api.whatsapp.com/send?phone=${number}&text=${encodeURIComponent(
      text
    )}`;
    window.open(url);
    event("chat", "ecommerce");
  }

  return (
    <>
      <NextSeo title="Contact Us" />

      <main>
        <section class="section is-small">
          <div class="container">
            <h2 class="is-size-4">Get in touch</h2>
            <br />
            <ul class="is-size-5">
              <li>
                <a onClick={sendEmail}>
                  <span class="icon is-medium">
                    <i class="far fa-envelope"></i>
                  </span>
                  <span>contact@awesomesaucestudio.com</span>
                </a>
              </li>
              <li>
                <a onClick={sendWhatsapp}>
                  <span class="icon is-medium">
                    <i class="fab fa-whatsapp"></i>
                  </span>
                  <span>Send a Whatsapp message</span>
                </a>
              </li>
              <li>
                <span class="icon is-medium">
                  <i class="fa fa-map-marker-alt"></i>
                </span>
                <span>Jalan Mawar 33, Bandung, Indonesia</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
