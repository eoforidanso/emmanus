import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="notfound">
      <span className="eyebrow">404</span>
      <h1>This page took a wellness day</h1>
      <p>
        The page you're looking for doesn't exist — but everything you need is
        just a click away.
      </p>
      <Link to="/" className="btn btn--primary">
        Back to home
      </Link>
    </section>
  );
}
