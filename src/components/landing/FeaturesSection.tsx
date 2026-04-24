export default function FeaturesSection() {
  return (
    <section className="features" id="features">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" /> Capabilities</span>
          <h2 className="reveal d1">What you can do with Flowsight</h2>
          <p className="reveal d2">A workspace built for the people who turn observation into outcomes — operators, analysts, and the systems they orchestrate.</p>
        </div>
        <div className="feat-grid">
          <div className="fcard fc-wide reveal d1">
            <div className="ftag">REAL-TIME</div>
            <div className="ftitle">Watch your operations think out loud</div>
            <p className="fdesc">Live signal streams annotated with context, drift, and confidence — read the system the way a senior engineer reads a room.</p>
            <div className="stream">
              <svg viewBox="0 0 600 200" preserveAspectRatio="none">
                <path d="M0,140 C60,100 100,160 160,120 C220,80 260,150 320,110 C380,70 420,140 480,100 C540,60 580,120 600,90" style={{ stroke: "#9a6bff" }} />
                <path d="M0,160 C60,130 100,180 160,150 C220,120 260,170 320,140 C380,110 420,160 480,130 C540,100 580,150 600,120" style={{ stroke: "#4a7bff", opacity: 0.5 }} />
                <path d="M0,180 C60,170 100,190 160,175 C220,160 260,185 320,170 C380,155 420,180 480,165 C540,150 580,175 600,160" style={{ stroke: "#d36bff", opacity: 0.4 }} />
              </svg>
            </div>
          </div>
          <div className="fcard fc-mid reveal d2">
            <div className="ftag">DETECT</div>
            <div className="ftitle">Anomaly triage</div>
            <p className="fdesc">Surface the 3% of events that change outcomes.</p>
            <div className="anomaly-graph">
              <svg viewBox="0 0 200 100" preserveAspectRatio="none">
                <path d="M0,70 L40,65 L80,60 L120,40 L160,55 L200,50" fill="none" stroke="#4a7bff" strokeWidth="1.5" />
                <circle cx="120" cy="40" r="6" fill="#d36bff" opacity="0.3" />
                <circle cx="120" cy="40" r="3" fill="#d36bff" />
              </svg>
            </div>
          </div>

          <div className="fcard fc-mid reveal d1">
            <div className="ftag">EXPLAIN</div>
            <div className="ftitle">Causal trace</div>
            <p className="fdesc">Every alert ships with its lineage — what changed upstream, and why it matters.</p>
            <div className="pulse-list">
              <span>upstream → ingest</span>
              <span>shift detected</span>
              <span>confidence 0.92</span>
            </div>
          </div>
          <div className="fcard fc-half reveal d2">
            <div className="ftag">ROUTE</div>
            <div className="ftitle">Decision routing</div>
            <p className="fdesc">Wire confident signals straight into runbooks, agents, or human review — no glue code.</p>
          </div>
          <div className="fcard fc-half reveal d3">
            <div className="ftag">MEASURE</div>
            <div className="ftitle">Confidence calibration</div>
            <p className="fdesc">See how often the system is right — and tune the threshold where you trust it to act.</p>
            <div className="donut">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" className="bg" />
                <circle cx="50" cy="50" r="40" className="fg" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
