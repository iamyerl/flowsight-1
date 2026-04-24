"use client";

import { useEffect, useRef } from "react";

const continents: [number, number][][] = [
  [[-168,66],[-156,71],[-141,69],[-128,70],[-95,75],[-82,80],[-65,82],[-55,75],[-52,60],[-65,52],[-72,45],[-78,38],[-82,30],[-86,30],[-92,30],[-97,26],[-105,22],[-110,24],[-116,32],[-122,38],[-125,46],[-130,54],[-138,58],[-152,58],[-160,55],[-168,66]],
  [[-105,22],[-98,18],[-92,15],[-85,12],[-80,9],[-77,8],[-82,15],[-90,20],[-100,22],[-105,22]],
  [[-80,12],[-72,11],[-62,8],[-52,5],[-46,0],[-38,-5],[-35,-8],[-38,-15],[-42,-22],[-48,-28],[-58,-35],[-62,-40],[-68,-46],[-72,-52],[-71,-55],[-68,-54],[-66,-46],[-70,-40],[-72,-32],[-72,-22],[-78,-12],[-80,-4],[-80,4],[-80,12]],
  [[-55,60],[-44,60],[-30,65],[-22,72],[-22,80],[-32,83],[-50,80],[-58,72],[-60,66],[-55,60]],
  [[-17,28],[-10,32],[0,33],[10,33],[20,32],[28,32],[32,30],[34,28],[35,22],[40,15],[44,12],[51,10],[51,3],[42,-2],[40,-12],[36,-18],[32,-26],[26,-32],[20,-34],[14,-30],[10,-22],[8,-12],[12,-2],[8,4],[2,4],[-4,5],[-10,8],[-14,12],[-17,18],[-17,28]],
  [[-10,36],[-2,43],[5,43],[12,45],[20,40],[28,40],[36,40],[40,46],[35,52],[28,56],[18,56],[10,54],[4,52],[-2,50],[-6,50],[-8,44],[-10,36]],
  [[5,58],[10,58],[14,62],[20,68],[26,70],[30,68],[28,62],[22,58],[15,56],[8,55],[5,58]],
  [[-10,52],[-3,55],[-2,58],[-5,58],[-10,56],[-10,52]],
  [[28,56],[40,60],[55,66],[70,70],[90,72],[110,72],[130,70],[150,68],[170,68],[178,68],[178,72],[160,76],[130,76],[100,76],[70,76],[40,72],[28,68],[28,56]],
  [[35,28],[42,30],[50,28],[55,24],[58,20],[60,24],[55,30],[50,34],[44,36],[38,34],[35,28]],
  [[55,30],[65,38],[72,40],[78,36],[82,30],[88,28],[92,28],[96,22],[100,22],[104,22],[108,22],[112,24],[120,30],[122,36],[126,40],[130,38],[132,34],[128,32],[122,28],[118,22],[112,18],[105,12],[100,8],[96,12],[92,18],[88,22],[82,18],[76,10],[72,10],[68,18],[62,22],[56,24],[55,30]],
  [[96,2],[105,-2],[114,-4],[124,-6],[132,-2],[136,-2],[132,2],[120,4],[108,4],[100,6],[96,2]],
  [[114,-22],[122,-18],[132,-12],[140,-12],[148,-18],[154,-26],[150,-34],[140,-38],[130,-34],[120,-34],[114,-30],[114,-22]],
  [[136,34],[140,38],[144,42],[145,44],[140,42],[134,34],[136,34]],
  [[-180,-72],[-150,-78],[-110,-78],[-70,-72],[-30,-70],[10,-72],[50,-68],[90,-70],[130,-72],[170,-70],[180,-72],[180,-85],[-180,-85],[-180,-72]],
];

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    if (!ctx) return;
    const W = cvs.width;
    const H = cvs.height;
    const TILE = W / 2;

    const lonLatToXY = (lon: number, lat: number): [number, number] => {
      const x = ((lon + 180) / 360) * TILE;
      const y = ((90 - lat) / 180) * H;
      return [x, y];
    };
    const pointInPoly = (x: number, y: number, poly: [number, number][]) => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const [xi, yi] = poly[i];
        const [xj, yj] = poly[j];
        const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    };

    const polysPx = continents.map((poly) =>
      poly.map(([lo, la]) => lonLatToXY(lo, la))
    );

    ctx.clearRect(0, 0, W, H);

    // ocean dot grid
    ctx.fillStyle = "rgba(255,255,255,0.05)";
    const oceanStep = 12;
    for (let y = oceanStep / 2; y < H; y += oceanStep) {
      for (let x = oceanStep / 2; x < TILE; x += oceanStep) {
        ctx.fillRect(x, y, 1, 1);
      }
    }

    // land dots
    const step = 7;
    for (let y = step / 2; y < H; y += step) {
      const lat = 90 - (y / H) * 180;
      const latScale = Math.cos((lat * Math.PI) / 180);
      const colStep = step / Math.max(0.25, latScale);
      for (let x = step / 2; x < TILE; x += colStep) {
        for (const poly of polysPx) {
          if (pointInPoly(x, y, poly)) {
            const r = 1.4 + Math.random() * 0.6;
            ctx.fillStyle =
              Math.random() < 0.12
                ? "rgba(211,167,255,0.95)"
                : "rgba(255,255,255,0.85)";
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fill();
            break;
          }
        }
      }
    }

    // duplicate tile for seamless wrap
    ctx.drawImage(cvs, 0, 0, TILE, H, TILE, 0, TILE, H);
  }, []);

  return (
    <div className="globe-stage">
      <div className="globe-ring" />
      <div className="globe-sphere">
        <div className="globe-map">
          <canvas ref={canvasRef} width={2400} height={1200} />
        </div>
        <div className="globe-shade" />
        <div className="globe-rim" />
      </div>
    </div>
  );
}
