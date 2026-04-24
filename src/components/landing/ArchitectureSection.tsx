const layers = [
  {
    num: "L05 / SURFACE",
    title: "Decision surface",
    desc: "APIs, agent hooks, and human review consoles where outcomes land.",
    tags: ["REST", "gRPC", "Webhooks"],
    delay: "d1",
  },
  {
    num: "L04 / INTERPRET",
    title: "Reasoning layer",
    desc: "Explanation models translate posteriors into language a human can audit.",
    tags: ["LLM", "Grounding", "Eval"],
    delay: "d2",
  },
  {
    num: "L03 / INFER",
    title: "Inference engine",
    desc: "Streaming Bayesian + causal estimators with sub-second window math.",
    tags: ["Bayes", "Causal", "Online"],
    delay: "d3",
  },
  {
    num: "L02 / SHAPE",
    title: "Feature fabric",
    desc: "Time-aware feature store with lineage, replay, and point-in-time guarantees.",
    tags: ["Lineage", "Replay", "SCD"],
    delay: "d4",
  },
  {
    num: "L01 / INGEST",
    title: "Signal ingest",
    desc: "Adapters for events, logs, metrics, and traces — with schema-on-read.",
    tags: ["Kafka", "OTLP", "JDBC"],
    delay: "d5",
  },
];

export default function ArchitectureSection() {
  return (
    <section className="arch" id="architecture">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow reveal"><span className="dot" /> Stack</span>
          <h2 className="reveal d1">Built on a multi-layer intelligent architecture</h2>
          <p className="reveal d2">Each layer is independently observable, replaceable, and bound by a single contract: every output explains itself.</p>
        </div>
        <div className="layers">
          {layers.map((l) => (
            <div key={l.num} className={`layer reveal ${l.delay}`}>
              <div><div className="lnum">{l.num}</div></div>
              <div>
                <h4>{l.title}</h4>
                <div className="ldesc">{l.desc}</div>
              </div>
              <div className="ltags">
                {l.tags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
