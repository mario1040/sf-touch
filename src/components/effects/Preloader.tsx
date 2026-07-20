"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

/**
 * MONOGRAM_PATH
 * Updated to match the exact SF Touch Clinic logo provided in the image.
 * This path represents a continuous stroke of "SF" with its characteristic loops and waves.
 */
const MONOGRAM_PATH = "M 150.46,235.56 C 150.13,235.14 148.77,233.89 148.44,233.01 C 148.10,232.13 148.35,231.15 148.44,230.26 C 148.52,229.38 148.74,228.61 148.96,227.71 C 149.18,226.82 149.32,225.83 149.74,224.90 C 150.17,223.97 150.80,222.99 151.51,222.15 C 152.22,221.31 153.11,220.58 153.99,219.86 C 154.88,219.15 155.88,218.43 156.81,217.84 C 157.73,217.25 158.67,216.79 159.55,216.33 C 160.44,215.88 161.21,215.47 162.10,215.09 C 163.00,214.71 163.99,214.34 164.92,214.04 C 165.84,213.75 166.78,213.58 167.66,213.32 C 168.55,213.07 169.33,212.76 170.21,212.54 C 171.10,212.32 172.03,212.19 172.96,212.02 C 173.89,211.84 173.70,211.74 175.77,211.49 C 177.84,211.24 179.83,210.47 185.39,210.51 C 190.95,210.56 201.21,211.29 209.13,211.76 C 217.04,212.22 224.94,213.03 232.87,213.32 C 240.79,213.62 248.75,213.86 256.67,213.52 C 264.60,213.18 272.50,212.89 280.41,211.30 C 288.33,209.71 296.23,207.69 304.15,203.97 C 312.08,200.26 320.24,195.24 327.96,189.00 C 335.68,182.75 346.71,171.09 350.46,166.50 C 354.21,161.91 351.38,164.29 350.46,161.46 C 349.53,158.64 345.87,153.65 344.90,149.56 C 343.93,145.47 344.22,141.19 344.64,136.94 C 345.05,132.69 345.24,128.05 347.38,124.05 C 349.53,120.05 353.68,114.75 357.52,112.94 C 361.36,111.13 367.71,111.17 370.40,113.20 C 373.10,115.22 373.88,120.97 373.67,125.10 C 373.47,129.23 371.06,133.73 369.16,137.98 C 367.26,142.24 365.33,146.69 362.29,150.61 C 359.25,154.52 352.84,158.81 350.91,161.46 C 348.98,164.11 350.34,165.06 350.72,166.50 C 351.10,167.94 352.36,168.95 353.20,170.10 C 354.04,171.24 354.87,172.28 355.75,173.37 C 356.64,174.46 357.53,175.55 358.50,176.64 C 359.47,177.73 360.52,178.80 361.57,179.91 C 362.63,181.01 363.75,182.18 364.84,183.24 C 365.93,184.30 367.06,185.20 368.11,186.25 C 369.17,187.30 370.38,188.43 371.19,189.52 C 371.99,190.61 372.45,191.69 372.95,192.79 C 373.46,193.89 373.83,195.53 374.20,196.12 C 374.57,196.72 375.20,196.50 375.80,196.40 C 372.00,201.00 362.50,206.00 356.50,214.50 C 350.50,223.00 349.50,233.50 355.00,242.00 C 360.50,250.50 373.50,251.00 380.50,243.50 C 387.50,236.00 387.00,223.50 381.50,213.50 C 378.50,208.00 377.50,201.50 378.97,197.39 C 379.56,196.39 379.90,197.15 381.00,196.39 C 382.10,195.62 384.05,193.29 385.58,191.81 C 387.10,190.33 388.68,188.84 390.15,187.49 C 391.63,186.14 392.93,185.01 394.41,183.70 C 395.88,182.39 397.51,180.98 398.98,179.64 C 400.45,178.30 401.76,176.95 403.23,175.65 C 404.71,174.36 406.33,172.71 407.81,171.86 C 409.29,171.01 410.66,170.98 412.13,170.55 C 413.60,170.13 415.13,169.05 416.64,169.31 C 418.16,169.57 420.37,172.29 421.22,172.12 C 422.07,171.96 421.61,169.56 421.74,168.33 C 421.87,167.10 421.96,165.92 422.00,164.73 C 422.05,163.54 421.97,162.38 422.00,161.20 C 422.04,160.02 422.12,158.85 422.20,157.67 C 422.28,156.49 422.37,155.31 422.46,154.14 C 422.55,152.96 422.68,151.78 422.72,150.61 C 422.77,149.43 422.68,148.25 422.72,147.07 C 422.77,145.90 422.85,144.72 422.99,143.54 C 423.12,142.37 423.13,145.45 423.51,140.01 C 423.89,134.57 424.35,120.57 425.27,110.91 C 426.20,101.25 427.42,91.71 429.07,82.07 C 430.71,72.42 431.99,62.68 435.15,53.03 C 438.31,43.38 442.40,27.10 448.03,24.19 C 453.67,21.28 465.84,28.82 468.96,35.57 C 472.08,42.31 468.46,55.02 466.74,64.67 C 465.02,74.32 462.08,83.84 458.63,93.45 C 455.17,103.05 451.82,114.53 446.01,122.29 C 440.20,130.05 427.61,136.47 423.77,140.01 C 419.93,143.55 423.16,142.37 422.99,143.54 C 422.81,144.72 422.77,145.90 422.72,147.07 C 422.68,148.25 422.77,149.43 422.72,150.61 C 422.68,151.78 422.55,152.96 422.46,154.14 C 422.37,155.31 422.28,156.49 422.20,157.67 C 422.12,158.85 422.04,160.02 422.00,161.20 C 421.97,162.38 422.05,163.54 422.00,164.73 C 421.96,165.92 421.87,167.10 421.74,168.33 C 421.61,169.56 421.31,170.61 421.22,172.12 C 421.13,173.64 421.26,175.61 421.22,177.42 C 421.18,179.23 421.04,181.13 420.96,182.98 C 420.87,184.83 420.74,186.73 420.70,188.54 C 420.65,190.35 420.74,192.03 420.70,193.84 C 420.65,195.64 420.48,197.54 420.43,199.39 C 420.39,201.25 420.43,203.14 420.43,204.95 C 420.43,206.76 420.43,208.44 420.43,210.25 C 420.43,212.06 420.48,213.96 420.43,215.81 C 420.39,217.66 420.25,220.36 420.17,221.37 C 420.10,222.38 420.05,221.26 419.98,221.89 C 419.90,222.52 419.76,224.03 419.72,225.16 C 419.67,226.30 419.72,227.52 419.72,228.69 C 419.72,229.87 419.72,231.04 419.72,232.23 C 419.72,233.41 419.72,234.68 419.72,235.82 C 419.72,236.97 419.67,237.96 419.72,239.09 C 419.76,240.23 419.93,241.45 419.98,242.62 C 420.02,243.80 419.98,244.98 419.98,246.16 C 419.98,247.33 420.02,248.51 419.98,249.69 C 419.93,250.86 418.50,258.50 424.00,264.00 C 429.50,269.50 439.50,269.50 445.00,264.00 C 450.50,258.50 449.50,252.00 446.00,247.50 C 443.50,244.30 442.47,251.50 442.47,258.06 C 441.83,256.66 441.98,255.04 441.69,253.48 C 441.40,251.92 441.05,250.26 440.71,248.71 C 440.37,247.15 440.09,245.64 439.66,244.13 C 439.24,242.61 438.75,241.17 438.16,239.62 C 437.57,238.06 436.76,236.33 436.13,234.78 C 435.50,233.22 435.42,231.44 434.36,230.26 C 433.31,229.09 431.35,228.94 429.79,227.71 C 428.23,226.48 422.69,226.75 425.01,222.87 C 427.33,218.99 437.23,210.11 443.72,204.43 C 450.20,198.75 457.15,192.63 463.93,188.80 C 470.71,184.97 477.57,183.08 484.40,181.48 C 491.22,179.87 498.04,179.52 504.87,179.19 C 511.69,178.85 518.50,179.37 525.34,179.45 C 532.17,179.52 539.04,179.82 545.87,179.64 C 552.71,179.47 562.39,178.70 566.34,178.40 C 570.30,178.11 568.65,178.00 569.61,177.88 C 570.57,177.76 571.21,177.76 572.10,177.68 C 572.98,177.61 574.02,177.55 574.91,177.42 C 575.80,177.29 576.58,177.12 577.46,176.90 C 578.34,176.68 579.28,176.36 580.21,176.11 C 581.13,175.86 582.14,175.64 583.02,175.39 C 583.90,175.14 584.62,174.99 585.50,174.61 C 586.39,174.23 587.39,173.65 588.32,173.10 C 589.24,172.56 590.18,172.01 591.06,171.34 C 591.95,170.66 592.94,169.89 593.61,169.05 C 594.29,168.21 594.74,167.23 595.12,166.30 C 595.50,165.38 595.68,164.38 595.90,163.49 C 596.12,162.60 596.34,161.82 596.43,160.94 C 596.51,160.06 596.89,158.99 596.43,158.19 C 595.96,157.40 594.08,156.50 593.61,156.17"

const VIEWBOX = "120 0 500 372";
const START_POINT = { x: 150.46, y: 235.56 };
const END_POINT = { x: 593.61, y: 156.17 };

const DRAW_DELAY = 0.5;
const DRAW_DURATION = 2.75;
const DRAW_END = DRAW_DELAY + DRAW_DURATION;
const IMAGE_DELAY = 3.25;
const IMAGE_DURATION = 1.0;
const LOADER_DURATION_MS = 4400;

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { language, isRTL } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADER_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          dir={isRTL ? "rtl" : "ltr"}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#0B1120] text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            y: "-100%",
            opacity: 0,
            transition: { duration: 0.85, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.06),transparent_35%)]" />

          <motion.div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4AF37]/10 blur-[120px]"
            animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.7, 0.25] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center px-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 text-center"
            >
              <p className="text-[10px] md:text-xs uppercase tracking-[0.45em] text-white/45">
                SF Touch Clinic
              </p>
              <p className="mt-3 text-sm md:text-base font-medium text-[#D4AF37]">
                {language === "ar" ? "جمال • ثقة • رقي" : "Beauty • Confidence • Elegance"}
              </p>
            </motion.div>

            <div className="relative w-full max-w-[760px] px-2 md:px-0">
              <svg
                viewBox={VIEWBOX}
                className="h-auto w-full overflow-visible"
                role="img"
                aria-label="SF Touch Clinic loading animation"
              >
                <defs>
                  <linearGradient id="goldStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#9A7B2F" />
                    <stop offset="45%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#F2D27C" />
                  </linearGradient>

                  <filter id="goldGlow" x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* ambient glow seated behind the mark, roughly centered on it */}
                <motion.ellipse
                  cx="380"
                  cy="186"
                  rx="230"
                  ry="150"
                  fill="#D4AF37"
                  opacity="0.05"
                  filter="url(#goldGlow)"
                  animate={{ scale: [1, 1.06, 1], opacity: [0.04, 0.1, 0.04] }}
                  transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* the pen touching down at the very start of the stroke */}
                <motion.circle
                  cx={START_POINT.x}
                  cy={START_POINT.y}
                  r="3"
                  fill="#FFFFFF"
                  filter="url(#goldGlow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 2.6, 0] }}
                  transition={{ duration: 0.55, delay: DRAW_DELAY, ease: "easeOut" }}
                />

                {/* the single continuous "sf" stroke, drawn in one motion */}
                <motion.g
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 0.6, delay: DRAW_END + 0.1, ease: "easeInOut" }}
                >
                  <motion.path
                    d={MONOGRAM_PATH}
                    fill="none"
                    stroke="url(#goldStroke)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter="url(#goldGlow)"
                    opacity="0.9"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: DRAW_DURATION, delay: DRAW_DELAY, ease: [0.65, 0, 0.35, 1] }}
                  />
                  <motion.path
                    d={MONOGRAM_PATH}
                    fill="none"
                    stroke="#FFFFFF"
                    strokeOpacity="0.95"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: DRAW_DURATION, delay: DRAW_DELAY, ease: [0.65, 0, 0.35, 1] }}
                  />

                  {/* glowing tip riding the same path as it is written */}
                  <motion.circle
                    r="5"
                    fill="#FFFFFF"
                    filter="url(#goldGlow)"
                    style={{ offsetPath: `path('${MONOGRAM_PATH}')`, offsetRotate: "0deg" }}
                    initial={{ offsetDistance: "0%", opacity: 0 }}
                    animate={{ offsetDistance: "100%", opacity: [0, 1, 1, 0] }}
                    transition={{
                      offsetDistance: { duration: DRAW_DURATION, delay: DRAW_DELAY, ease: [0.65, 0, 0.35, 1] },
                      opacity: { duration: DRAW_DURATION, delay: DRAW_DELAY, times: [0, 0.04, 0.94, 1] },
                    }}
                  />
                </motion.g>

                {/* a small flare as the pen lifts off at the end of the flourish */}
                <motion.circle
                  cx={END_POINT.x}
                  cy={END_POINT.y}
                  r="0"
                  fill="#FFFFFF"
                  filter="url(#goldGlow)"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: [0, 1, 0], scale: [0, 2.4, 0] }}
                  transition={{ duration: 0.5, delay: DRAW_END - 0.1, ease: "easeOut" }}
                />

                {/* the real, fully rendered mark fades in to take over from the sketch */}
                <motion.image
                  href="/images/logo.png"
                  x="8"
                  y="4"
                  width="744"
                  height="364"
                  preserveAspectRatio="xMidYMid meet"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: IMAGE_DURATION, delay: IMAGE_DELAY, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: DRAW_END + 0.25 }}
              className="mt-2 text-center"
            >
              <p className="text-sm md:text-base font-semibold tracking-[0.35em] text-white/75 uppercase">
                {language === "ar" ? "جارٍ التحميل" : "Loading"}
              </p>

              <div className="mx-auto mt-5 h-[2px] w-40 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full w-16 bg-[linear-gradient(90deg,transparent,#D4AF37,#F2D27C,transparent)]"
                  initial={{ x: "-100%" }}
                  animate={{ x: "340%" }}
                  transition={{
                    duration: 1.3,
                    delay: DRAW_END + 0.35,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
