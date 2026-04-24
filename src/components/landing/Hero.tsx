import Globe from "./Globe";
import Starfield from "./Starfield";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <Starfield />
      <Globe />
      <div className="arc">
        <svg viewBox="0 0 800 800">
          <path d="M 80 540 Q 400 100 720 540" />
          <path d="M 60 460 Q 400 700 740 380" />
        </svg>
      </div>

<div className="wrap">
        <div className="eyebrow reveal in"><span className="dot" /> Multi-layer intelligence platform</div>
        <h1 className="reveal in d1">From&nbsp;data<br />to&nbsp;decisions.</h1>
        <p className="sub reveal in d2">
          Flowsight turns noisy, high-velocity telemetry into clear, explainable signals — so your team stops interpreting dashboards and starts acting on outcomes.
        </p>
        <div className="hero-cta reveal in d3">
          <a href="/demo" className="btn btn-primary">View demo <span className="arrow">→</span></a>
          <button className="btn">Read whitepaper</button>
        </div>
      </div>
    </section>
  );
}
