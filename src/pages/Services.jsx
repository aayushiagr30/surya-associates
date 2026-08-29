import React from "react";
import PageHero from "../components/PageHero";

const services = [
  {
    title: "Statutory Audits",
    items: [
      "Statutory Audit of Companies under the Companies Act,2013",
      "Statutory Audit of Share and Stock Brokers under the Securities Regulations Act.",
      "Statutory Audit/Concurrent Audits/Revenue Audits/Stock Audits of PSU/commercial and Urban Co-operative Banks",
      "Statutory Audit of Insurance Company",
      "Statutory Audit of Co-operative societies",
    ],
  },
  {
    title: "Tax Audits",
    items: [
      "Tax Audit of the Corporate and non-Corporate under the provisions of Income Tax Act, 1961.",
      "GST Audit of the Corporate and non-Corporate under the provisions of GST Act, 2017.",
    ],
  },
  {
    title: "Management services",
    items: [
      "Management & System Audits", "Internal Audits", "Process Reviews", "Business Valuations", "Due Diligence Review",
      "Special Investigations into Irregular and Fraudulent Activities", "Capital Structuring and Budgeting",
      "Preparation of Fixed Assets Register & Conducting Physical Verification of FA", "Implementation of Accounting Standards & Accounting Policies.",
    ],
  },
  {
    title: "Taxation services",
    items: [
      "PAN/TAN Registration", "GST Registration", "Filing of various Income tax returns ONLINE with the Tax authorities",
      "Filing of various Income tax returns ONLINE with the Tax authorities of NRI’s", "Filing of GST returns ONLINE with GSTN",
      "Representation before the Various tax Authorities", "Consultancy in the matters of Income tax, Company law and GST law.",
    ],
  },
  {
    title: "Corporate law services",
    items: [
      "Registration of Companies/LLP/OPC with Ministry of Corporate Affairs",
      "Filing of various Forms with Ministry of Corporate Affairs",
      "Formation of Partnership.",
    ],
  },
];

export default function Services() {
  return (
    <PageHero title="Our Services">
      <section>
        <div className="container narrow">
          <p className="lead">We provide Audits, Assurance, Management, Taxation & Corporate Services...</p>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-item service-item-detailed" key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{service.title}</h3>
                  <ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
          <div className="registration">
            <h2>Registration Details</h2>
            <div className="registration-grid">
              <div><h3>CA S.P. Agarwal</h3><p>Membership Number: 042906</p></div>
              <div><h3>CA Praveen Agarwal</h3><p>Membership Number: 047292</p></div>
            </div>
            <div className="registration-details">
              Firm Registration No. with ICAI: 110710W<br />
              Unique code No. with RBI: 063374<br />
              C&AG Empanelment No.: BO0737<br />
              PAN: AARFS6853Q<br />
              GSTIN: 27AAARFS6853Q1ZZ<br />
              Co-operative Society Empanelment No.: 10689(Class A)
            </div>
          </div>
        </div>
      </section>
    </PageHero>
  );
}
