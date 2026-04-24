"use client";

import { useRef, useState } from "react";

export default function UploadSection() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) setFile(f);
  };

  return (
    <section className="upload-section">
      <div
        className={`upload-zone ${dragOver ? "drag" : ""} ${file ? "has-file" : ""}`}
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
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
        <button className="btn btn-primary" disabled={!file}>
          Run analysis <span className="arrow">→</span>
        </button>
        <button className="btn" onClick={() => setFile(null)} disabled={!file}>
          Clear
        </button>
      </div>
    </section>
  );
}
