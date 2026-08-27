import React from "react";
import PageHero from "../components/PageHero";

function ContactPerson({ name, phone, email }) {
  return (
    <div className="detail-block">
      <h3>{name}</h3>
      <a href={`tel:${phone.replace(/\s/g, "")}`}>{phone}</a>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
}
const officePhoneWhatsApp = "919820077823";


export default function Contact() {
  return (
    <PageHero title="Contact us">
      <section>
        <div className="container contact-grid">
          <div className="contact-card">
            <span className="eyebrow">Get in touch</span>
            <h2>Surya Associates</h2>
            <p>Chartered Accountants</p>
            <a
              className="whatsapp-link"
              href={`https://wa.me/${officePhoneWhatsApp}`}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm5.8 14.03c-.24.68-1.38 1.3-1.92 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.31-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.54-1.16-2.93 0-1.4.73-2.08 1-2.36.24-.28.53-.35.71-.35s.35 0 .5.01c.16.01.38-.06.59.45.24.57.8 1.98.87 2.12.07.14.11.31.02.5-.09.19-.14.31-.27.47-.14.16-.29.36-.41.48-.14.14-.28.29-.12.57.16.28.71 1.17 1.53 1.9 1.05.94 1.94 1.23 2.22 1.37.28.14.44.12.61-.07.16-.19.7-.81.89-1.09.19-.28.38-.23.63-.14.26.09 1.63.77 1.91.91.28.14.47.21.53.33.07.12.07.68-.17 1.36z" />
              </svg>
              Message us on WhatsApp
            </a>
          </div>

          <div className="contact-details">
            <ContactPerson name="S.P. Agarwal" phone="+91 9820077823" email="surya@suryaassociatesca.in" />
            <ContactPerson name="Praveen Agarwal" phone="+91 9820398458" email="praveenagarwalmumbai@gmail.com" />
            <div className="detail-block">
              <h3>Address</h3>
              <p>308 Ghanshyam Enclave, New Link Road, Kandivali West, Mumbai 400067.</p>
              <a href="tel:+912229671924">022-29671924</a>
              <a href="mailto:surya@suryaassociatesca.in">surya@suryaassociatesca.in</a>
              <a href="mailto:suryaassociatesca@gmail.com">suryaassociatesca@gmail.com</a>
              <a href="https://www.suryaassociatesca.in" target="_blank" rel="noreferrer">www.suryaassociatesca.in</a>
              <iframe
                className="contact-map"
                title="Surya Associates office location"
                src="https://maps.google.com/maps?q=Ghanshyam%20Enclave%2C%20New%20Link%20Road%2C%20Kandivali%20West%2C%20Mumbai%20400067&t=&z=15&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </PageHero>
  );
}
