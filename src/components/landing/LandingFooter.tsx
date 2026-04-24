export default function LandingFooter() {
  return (
    <footer className="footer-landing" id="demo">
      <div className="cta-card reveal d1">
        <h2>See Flowsight in motion.</h2>
        <p>A guided demo, no setup. Watch a live stream become a decision in under 90 seconds.</p>
        <a href="/demo" className="btn btn-primary">View demo <span className="arrow">→</span></a>
      </div>

      <div className="footnav">
        <div className="fcol" style={{ maxWidth: 300 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight", fontWeight: 600, fontSize: 18, marginBottom: 10 }}>
            <div
              className="brand-mark"
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg,#9a6bff,#4a7bff,#d36bff,#9a6bff)",
                position: "relative",
              }}
            />
            Flowsight
          </div>
          <p style={{ fontSize: 13.5, color: "var(--ink-dim)" }}>
            Multi-layer intelligence for systems that can&apos;t afford to wait.
          </p>
        </div>
        <div className="fcol">
          <h5>Product</h5>
          <a href="#features">Features</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#architecture">Architecture</a>
          <a href="#">Pricing</a>
        </div>
        <div className="fcol">
          <h5>Resources</h5>
          <a href="#">Docs</a>
          <a href="#">Whitepaper</a>
          <a href="#">Changelog</a>
          <a href="#">Status</a>
        </div>
        <div className="fcol">
          <h5>Company</h5>
          <a href="#">About</a>
          <a href="#">Careers</a>
          <a href="#">Contact</a>
          <a href="#">Press</a>
        </div>
      </div>
      <div className="footbar">
        <div>© 2026 Flowsight. All rights reserved.</div>
        <div>v1.4.0 · build 2026.04</div>
      </div>
    </footer>
  );
}
