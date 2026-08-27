import React from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

export default function NotFound() {
  return (
    <PageHero title="Page not found">
      <section className="section">
        <div className="container narrow">
          <p>The page you requested could not be found.</p>
          <Link className="button" to="/">Back Home</Link>
        </div>
      </section>
    </PageHero>
  );
}
