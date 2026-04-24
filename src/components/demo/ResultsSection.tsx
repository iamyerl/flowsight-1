export default function ResultsSection() {
  return (
    <section className="results-section">
      <div className="results-head">
        <span className="eyebrow"><span className="dot" /> Output</span>
        <h2>Results</h2>
        <p>Once you upload a file and run analysis, the interpretation will appear below.</p>
      </div>

      <div className="results-grid">
        <div className="rcard">
          <div className="rtag">SUMMARY</div>
          <div className="rtitle">Interpretation summary</div>
          <p className="rdesc">Plain-language explanation of detected zones, drift, and confidence.</p>
          <div className="rplaceholder">Awaiting input</div>
        </div>

        <div className="rcard">
          <div className="rtag">SIGNAL</div>
          <div className="rtitle">Layer signals</div>
          <p className="rdesc">Activation, gradient, and dominance per layer.</p>
          <div className="rplaceholder">Awaiting input</div>
        </div>

        <div className="rcard wide">
          <div className="rtag">DECISIONS</div>
          <div className="rtitle">Perforation recommendations</div>
          <p className="rdesc">Ranked list of perforation candidates with confidence scores.</p>
          <div className="rplaceholder tall">Awaiting input</div>
        </div>
      </div>
    </section>
  );
}
