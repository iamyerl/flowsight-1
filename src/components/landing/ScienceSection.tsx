export default function ScienceSection() {
  return (
    <section className="science" id="science">
      <div className="wrap">
        <div>
          <span className="eyebrow reveal"><span className="dot" /> Method</span>
          <h2 className="reveal d1" style={{ marginTop: 18 }}>The science behind it</h2>
          <p className="lead reveal d2">
            Flowsight combines three disciplines into a single inference loop: streaming statistics for context, causal modeling for structure, and probabilistic reasoning for confidence. Every signal carries its uncertainty, every recommendation carries its proof.
          </p>
          <div className="pillars">
            <div className="pillar reveal d3">
              <div className="pico">μ</div>
              <div>
                <h4>Streaming statistics</h4>
                <p>Online estimators detect drift and seasonality without re-training, at sub-second granularity.</p>
              </div>
            </div>
            <div className="pillar reveal d3">
              <div className="pico">→</div>
              <div>
                <h4>Causal graph inference</h4>
                <p>Relationships are learned, not declared — so root cause is a result, not a guess.</p>
              </div>
            </div>
            <div className="pillar reveal d4">
              <div className="pico">P</div>
              <div>
                <h4>Probabilistic reasoning</h4>
                <p>Bayesian posteriors quantify how sure the system is — so humans can decide where to spend trust.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="orb-stage reveal d2">
          <div className="orb orb-1"><div className="node" /><div className="node" /><div className="node" /></div>
          <div className="orb orb-2"><div className="node" /><div className="node" /></div>
          <div className="orb orb-3"><div className="node" /></div>
          <div className="orb-core" />
        </div>
      </div>
    </section>
  );
}
