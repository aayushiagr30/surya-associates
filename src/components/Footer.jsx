import React from "react";

const governmentNumbers = [
  ["Ministry of Corporate affairs", "0124-4832500"],
  ["Income tax E-filing", "1800103 0025"],
  ["Income Tax Centralized Processing Center", "18001034455"],
  ["Income Tax Reporting Portal", "18001034215"],
  ["GST help line", "0120-4888999"],
  ["ESIC Dept", "1800112526"],
  ["Employees PF Dept", "1800118005"],
];

const links = [
  ["Ministry of Corporate affairs", "http://www.mca.gov.in"],
  ["ICAI", "https://icai.org"],
  ["ICAI UDIN", "https://udin.icai.org"],
  ["Income tax", "https://www.incometax.gov.in/iec/foportal/"],
  ["Tax Calculator", "https://www.incometaxindia.gov.in/tax-tools"],
  ["GST", "https://www.gst.gov.in/"],
  ["GST EWay Bill portal", "https://ewaybillgst.gov.in/"],
  ["Customs National Trade Portal", "https://www.icegate.gov.in/"],
  ["E-Tax payments", "https://onlineservices.tin.egov-nsdl.com/etaxnew/tdsnontds.jsp"],
  ["Income tax Reporting Portal", "https://report.insight.gov.in/reporting-webapp/portal/homePage"],
  ["Employees Provident Fund", "https://unifiedportal-mem.epfindia.gov.in/memberinterface/"],
  ["ESIC", "https://portal.esic.gov.in/EmployerPortal/ESICInsurancePortal/Portal_Loginnew.aspx"],
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div><h3>Surya Associates</h3><p>Chartered Accountants</p></div>
        <div><h4>Toll-Free Assistance</h4><div className="footer-links">{governmentNumbers.map(([name, number]) => <a key={name} href={`tel:${number.replace(/\s+/g, "")}`} target="_self">{name}: {number}</a>)}</div></div>
        <div><h4>Government Portals</h4><div className="footer-links">{links.map(([name, url]) => <a key={name} href={url} target="_blank" rel="noreferrer">{name}</a>)}</div></div>
      </div>
      <div className="container footer-bottom">© 1989 Surya Associates. All Rights Reserved.</div>
    </footer>
  );
}
