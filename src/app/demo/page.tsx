import LandingNavbar from "@/components/landing/LandingNavbar";
import SvgDefs from "@/components/landing/SvgDefs";
import UploadSection from "@/components/demo/UploadSection";
import ResultsSection from "@/components/demo/ResultsSection";

export default function DemoPage() {
  return (
    <div className="landing">
      <div className="stars" />
      <div className="grain" />

      <SvgDefs />

      <div className="shell">
        <LandingNavbar />

        <main className="demo-main">
          <div className="wrap">
            <div className="demo-head">
              <span className="eyebrow"><span className="dot" /> Live demo</span>
              <h1>Upload your data</h1>
              <p>
                Drop a well log file (LAS, CSV) and Flowsight will return interpretation,
                anomaly detection, and decision recommendations.
              </p>
            </div>

            <UploadSection />
            <ResultsSection />
          </div>
        </main>
      </div>
    </div>
  );
}
