"use client";

import { useRef, useState } from "react";

type StageStatus = "pending" | "loading" | "done";
type Stage = {
  id: string;
  label: string;
  desc: string;
  status: StageStatus;
};

const INITIAL_STAGES: Stage[] = [
  { id: "detect",    label: "Detect Baseline",     desc: "Identify reference signal range from raw input.", status: "pending" },
  { id: "validate",  label: "Validate Baseline",   desc: "Check baseline against expected statistical envelope.", status: "pending" },
  { id: "calref",    label: "Calibrate Reference", desc: "Lock in baseline and align channels.", status: "pending" },
  { id: "calrun",    label: "Run Calibration",     desc: "Apply calibration curves across all rows.", status: "pending" },
  { id: "interpret", label: "Run Interpretation",  desc: "Compute activation, gradient, dominance per depth.", status: "pending" },
];

const SAMPLE_ROWS = [
  { depth: 1498, sigma: 0.08, gr: 95, tds: 15000, zone: "Shale",       decision: "Skip"      },
  { depth: 1499, sigma: 0.10, gr: 90, tds: 18000, zone: "Shale",       decision: "Skip"      },
  { depth: 1500, sigma: 0.15, gr: 75, tds: 22000, zone: "Transition",  decision: "Evaluate"  },
  { depth: 1501, sigma: 0.22, gr: 60, tds: 30000, zone: "Sand",        decision: "Evaluate"  },
  { depth: 1502, sigma: 0.28, gr: 45, tds: 38000, zone: "Pay zone",    decision: "Perforate" },
  { depth: 1503, sigma: 0.32, gr: 35, tds: 42000, zone: "Pay zone",    decision: "Perforate" },
  { depth: 1504, sigma: 0.35, gr: 25, tds: 45000, zone: "Pay zone",    decision: "Perforate" },
];

export default function DemoFlow() {
  const inputRef = useRef<HTMLInputElement>(null);
  const pipelineRef = useRef<HTMLElement>(null);
  const resultsRef = useRef<HTMLElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);
  const [stages, setStages] = useState<Stage[]>(INITIAL_STAGES);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  const reset = () => {
    setFile(null);
    setStages(INITIAL_STAGES);
    setRunning(false);
    setDone(false);
  };

  const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  const runAnalysis = async () => {
    if (!file || running) return;
    setRunning(true);
    setDone(false);
    setStages(INITIAL_STAGES);

    // smooth scroll to pipeline once it renders
    requestAnimationFrame(() => {
      pipelineRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    for (let i = 0; i < INITIAL_STAGES.length; i++) {
      // mark current stage as loading
      setStages((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, status: "loading" } : s))
      );
      await sleep(900 + Math.random() * 500);
      // mark current stage as done
      setStages((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, status: "done" } : s))
      );
    }

    setRunning(false);
    setDone(true);

    // scroll down to results after a small delay
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 350);
  };

  return (
    <>
      {/* ───── UPLOAD ───── */}
      <section className="upload-section">
        <div
          className={`upload-zone ${dragOver ? "drag" : ""} ${file ? "has-file" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onDrop={onDrop}
          onClick={() => !running && inputRef.current?.click()}
        >
          <input
            ref={inputRef}
            type="file"
            accept=".las,.csv,.txt"
            hidden
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />

          <div className="upload-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 4v12M6 10l6-6 6 6M4 18v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {file ? (
            <>
              <div className="upload-title">{file.name}</div>
              <div className="upload-sub">{(file.size / 1024).toFixed(1)} KB · ready to analyze</div>
            </>
          ) : (
            <>
              <div className="upload-title">Drop your file here</div>
              <div className="upload-sub">or click to browse — LAS, CSV, TXT supported</div>
            </>
          )}

          <div className="upload-meta">
            <span className="mtag">LAS</span>
            <span className="mtag">CSV</span>
            <span className="mtag">TXT</span>
            <span className="mtag dim">max 50 MB</span>
          </div>
        </div>

        <div className="upload-actions">
          <button className="btn btn-primary" disabled={!file || running} onClick={runAnalysis}>
            {running ? "Analyzing…" : "Run analysis"} <span className="arrow">→</span>
          </button>
          <button className="btn" onClick={reset} disabled={!file || running}>
            Clear
          </button>
        </div>
      </section>

      {/* ───── PIPELINE ───── */}
      {(running || done) && (
        <section ref={pipelineRef} className="pipeline-stages">
          <div className="results-head">
            <span className="eyebrow"><span className="dot" /> Pipeline</span>
            <h2>{done ? "Analysis complete" : "Running interpretation…"}</h2>
            <p>{done
              ? "All stages finished. Review the output below."
              : "Each layer of the engine validates and calibrates the input before producing decisions."
            }</p>
          </div>

          <ol className="stage-list">
            {stages.map((s, i) => (
              <li key={s.id} className={`stage-item ${s.status}`}>
                <div className="stage-num">{String(i + 1).padStart(2, "0")}</div>
                <div className="stage-body">
                  <div className="stage-title">{s.label}</div>
                  <div className="stage-desc">{s.desc}</div>
                </div>
                <div className="stage-status">
                  {s.status === "pending" && <span className="badge pending">Pending</span>}
                  {s.status === "loading" && <span className="badge loading"><span className="spin" />Running</span>}
                  {s.status === "done" && <span className="badge done">✓ Done</span>}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* ───── RESULTS ───── */}
      {done && (
        <section ref={resultsRef} className="results-section">
          <div className="results-head">
            <span className="eyebrow"><span className="dot" /> Output</span>
            <h2>Results</h2>
            <p>Interpreted layers with zone classification and perforation recommendations.</p>
          </div>

          {/* Summary cards */}
          <div className="results-grid">
            <div className="rcard">
              <div className="rtag">SUMMARY</div>
              <div className="rtitle">Pay zone detected</div>
              <p className="rdesc">
                Three contiguous depths (<b>1502–1504 m</b>) show high sigma, low gamma-ray,
                and elevated TDS — consistent with a producible sand interval.
              </p>
              <div className="metric-row">
                <div className="metric"><span className="mv">3</span><span className="ml">layers flagged</span></div>
                <div className="metric"><span className="mv">87.3%</span><span className="ml">confidence</span></div>
              </div>
            </div>

            <div className="rcard">
              <div className="rtag">SIGNAL</div>
              <div className="rtitle">Layer signals</div>
              <p className="rdesc">Average activation across layers, normalised to the calibrated baseline.</p>
              <div className="signal-bars">
                {[18, 28, 52, 70, 88, 92, 95].map((v, i) => (
                  <div key={i} className="sb">
                    <div className="sb-fill" style={{ height: `${v}%` }} />
                  </div>
                ))}
              </div>
              <div className="signal-axis">
                <span>1498</span><span>1500</span><span>1502</span><span>1504</span>
              </div>
            </div>
          </div>

          {/* Decisions table */}
          <div className="rcard wide" style={{ marginTop: 20 }}>
            <div className="rtag">DECISIONS</div>
            <div className="rtitle">Per-depth interpretation</div>
            <p className="rdesc">Calibrated readings with engine-recommended actions.</p>

            <div className="result-table-wrap">
              <table className="result-table">
                <thead>
                  <tr>
                    <th>Depth (m)</th>
                    <th>σ</th>
                    <th>GR</th>
                    <th>TDS</th>
                    <th>Zone</th>
                    <th>Decision</th>
                  </tr>
                </thead>
                <tbody>
                  {SAMPLE_ROWS.map((r) => (
                    <tr key={r.depth}>
                      <td className="mono-cell">{r.depth}</td>
                      <td className="mono-cell">{r.sigma.toFixed(2)}</td>
                      <td className="mono-cell">{r.gr}</td>
                      <td className="mono-cell">{r.tds.toLocaleString()}</td>
                      <td>
                        <span className={`zone-pill zone-${r.zone.toLowerCase().replace(/\s/g, "-")}`}>
                          {r.zone}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`decision-pill ${
                            r.decision === "Perforate"
                              ? "good"
                              : r.decision === "Evaluate"
                              ? "warn"
                              : "muted"
                          }`}
                        >
                          {r.decision}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Explanation */}
          <div className="rcard wide" style={{ marginTop: 20 }}>
            <div className="rtag">EXPLANATION</div>
            <div className="rtitle">What the engine sees</div>
            <p className="rdesc-long">
              The first two depths (<b>1498–1499 m</b>) show low sigma values and high gamma-ray
              readings — classic shale signature, no perforation recommended. Starting at <b>1500 m</b>,
              gamma-ray drops sharply while sigma and TDS rise — indicating a transition into a sandier
              lithology. From <b>1502 m</b> onward, all three signals (activation, gradient, dominance)
              converge on a high-confidence pay-zone classification, supported by a 92% Bayesian posterior.
              The recommended action is to perforate <b>1502–1504 m</b> for primary production.
            </p>
          </div>
        </section>
      )}
    </>
  );
}
