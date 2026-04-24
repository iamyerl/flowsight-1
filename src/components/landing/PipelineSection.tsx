export default function PipelineSection() {
  return (
    <section className="pipeline" id="pipeline">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" /> Flow</span>
          <h2 className="reveal d1">From data to decisions</h2>
          <p className="reveal d2">Four steps. Continuous. Reversible. Auditable end to end.</p>
        </div>
        <div className="timeline">
          <div className="step reveal d1">
            <div className="sdot">01</div>
            <h4>Ingest</h4>
            <p>Bind any stream — events, logs, metrics, traces — with schema-on-read.</p>
          </div>
          <div className="step reveal d2">
            <div className="sdot">02</div>
            <h4>Infer</h4>
            <p>Online models compute drift, causality, and confidence in motion.</p>
          </div>
          <div className="step reveal d3">
            <div className="sdot">03</div>
            <h4>Interpret</h4>
            <p>Findings are explained in plain language with their evidence trail.</p>
          </div>
          <div className="step reveal d4">
            <div className="sdot">04</div>
            <h4>Act</h4>
            <p>Confident signals trigger agents, humans, or runbooks — with rollback.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
