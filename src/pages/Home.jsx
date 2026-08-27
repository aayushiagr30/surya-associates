import React from "react";
import { Link } from "react-router-dom";
import PartnerCard from "../components/PartnerCard";

const deadlines = [
  { what: "GSTR 1 for the months March to June 2020", when: "Ref Govt Notification" },
  { what: "GSTR 3B for the months April to June 2020", when: "Ref Govt Notification" },
  { what: "TDS payment for the month June’20", when: "7 Jul ’20" },
  { what: "Annual return GST for F.Y. 2018-2019", when: "30 Sep ’20" },
  { what: "GST audit for F.Y. 2018-2019", when: "30 Sep ’20" },
  { what: "TDS returns for the quarter March’20", when: "31 Jul ’20" },
];

export default function Home() {
  return (
    <>
      <section className="intro section">
        <div className="container">
          <div className="section-heading center">
            <h1>Surya Associates</h1>
            <h2>Chartered Accountants</h2>
          </div>

          <div className="intro-grid">
            <div className="intro-copy">
              <p>
                A well established
                firm since 1989, based in Mumbai.
              </p>
              <blockquote>
                The major sectors covered under our audits are Manufacturing,
                Engineering, Information Technology, Chemicals, Custom House
                Agent/Shipping Agents, Banking, Insurance, Share and Stock
                Broker, Marine Survey, Retail Sector etc.
                <br /><br />
                We conduct audits in different system environments like SAP,
                TALLY and other tailor made ERP softwares.
              </blockquote>
              <p>
                The firm has two full time partners with a team consisting of
                full time CA, semi qualified Assistants and Articled Assistants.
                We are fully equipped to conduct any type of professional
                assignments.
              </p>
            </div>

            <aside className="deadline-card">
              <span className="eyebrow-light">Statutory calendar</span>
              <h3>Upcoming deadlines</h3>
              {deadlines.map((deadline, index) => (
                <div className="ledger-row" key={deadline.what}>
                  <span className="ledger-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="ledger-what">{deadline.what}</span>
                  <span className="ledger-when">{deadline.when}</span>
                </div>
              ))}
            </aside>
          </div>
        </div>
      </section>

      <section className="partners section">
        <div className="container">
          <div className="partners-heading">
            <div>
              <span className="eyebrow">Our people</span>
              <h2>The founding partners...</h2>
            </div>
            <Link className="button" to="/services">Our Services</Link>
          </div>

          <div className="partner-grid">
            <PartnerCard
              initials="4.jpg"
              role="Founding Partner, FCA"
              name="S.P. Agarwal"
              text="Chartered Accountant since November 1988, with 29+ years across Statutory, Tax, Internal, Bank and Insurance Audits, Management &amp; Systems Audit, and Direct &amp; Indirect Taxation."
            />
            <PartnerCard
              initials="2.jpg"
              role="Partner, FCA"
              name="Praveen Agarwal"
              text="Chartered Accountant since November 1992, with 26+ years of post-qualification experience across Audits and Taxation."
            />
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta-content">
          <span className="eyebrow">Professional accounting services</span>
          <h2>Get in Touch!</h2>
          <Link className="button button-light" to="/contact">Contact</Link>
        </div>
      </section>
    </>
  );
}
