export default function ProblemSection() {
  return (
    <section className="problem" id="problem">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" /> The gap</span>
          <h2 className="reveal d1">The problem with traditional interpretation</h2>
          <p className="reveal d2">
            Every modern team is drowning in metrics. The bottleneck isn&apos;t collecting more data — it&apos;s deriving meaning fast enough to act before the moment passes.
          </p>
        </div>
        <div className="problem-grid">
          <div className="pcard reveal d1">
            <div className="vis">
              <div className="vis-bars">
                <span style={{ height: "30%" }} />
                <span style={{ height: "80%" }} />
                <span style={{ height: "55%" }} />
                <span style={{ height: "90%" }} />
                <span style={{ height: "40%" }} />
                <span style={{ height: "70%" }} />
                <span style={{ height: "50%" }} />
              </div>
            </div>
            <div className="pnum">01 / OVERLOAD</div>
            <h3>Too many signals, no story</h3>
            <p>Dashboards keep multiplying. Analysts spend more time stitching context together than learning anything from it.</p>
          </div>
          <div className="pcard reveal d2">
            <div className="vis">
              <div className="vis-noise">
                <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                  <path d="M0,40 Q10,10 20,40 T40,40 T60,40 T80,40 T100,40 T120,40 T140,40 T160,40 T180,40 T200,40" />
                  <path d="M0,50 Q10,30 20,55 T40,45 T60,60 T80,40 T100,55 T120,35 T140,50 T160,42 T180,55 T200,45" style={{ stroke: "#4a7bff", opacity: 0.6 }} />
                </svg>
              </div>
            </div>
            <div className="pnum">02 / NOISE</div>
            <h3>Anomalies hide in plain sight</h3>
            <p>Static thresholds and rule-based alerts miss subtle drift — the kind that quietly compounds into incidents.</p>
          </div>
          <div className="pcard reveal d3">
            <div className="vis">
              <div className="vis-clock">
                <div className="ring" />
                <div className="num">14:32</div>
              </div>
            </div>
            <div className="pnum">03 / LATENCY</div>
            <h3>By the time you know, it&apos;s late</h3>
            <p>Traditional BI cycles measure in hours. Real systems shift in seconds. The distance between insight and action is the cost.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
