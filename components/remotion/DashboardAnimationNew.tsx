"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

// Animated Progress Bar Component
const ProgressBar = ({
  label,
  targetValue,
  color,
  delay,
}: {
  label: string;
  targetValue: number;
  color: string;
  delay: number;
}) => {
  const frame = useCurrentFrame();

  const entryOpacity = interpolate(frame - delay, [0, 10], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const progress = interpolate(frame - delay, [10, 50], [0, targetValue], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const shimmerOffset = interpolate((frame - delay) % 60, [0, 60], [-100, 200], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div style={{ opacity: entryOpacity, marginBottom: "12px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "4px",
        }}
      >
        <span style={{ fontSize: "10px", fontWeight: 500, color: "rgb(13, 19, 33)" }}>
          {label}
        </span>
        <span style={{ fontSize: "10px", color: "rgb(116, 140, 171)" }}>
          {Math.round(progress)}%
        </span>
      </div>
      <div
        style={{
          height: "6px",
          backgroundColor: "rgba(13, 19, 33, 0.06)",
          borderRadius: "3px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: color,
            borderRadius: "3px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: `${shimmerOffset}%`,
              width: "30%",
              height: "100%",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

// Circular Gauge Component
const CircularGauge = ({
  value,
  label,
  color,
  delay,
}: {
  value: number;
  label: string;
  color: string;
  delay: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryScale = spring({
    frame: frame - delay,
    fps,
    config: { damping: 15, stiffness: 100 },
  });

  const scale = interpolate(entryScale, [0, 1], [0.5, 1]);
  const opacity = interpolate(entryScale, [0, 1], [0, 1]);

  const animatedValue = interpolate(frame - delay, [10, 45], [0, value], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const circumference = 2 * Math.PI * 20;
  const strokeDashoffset = circumference - (animatedValue / 100) * circumference;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transform: `scale(${scale})`,
        opacity,
      }}
    >
      <svg width="52" height="52" viewBox="0 0 52 52">
        <circle cx="26" cy="26" r="20" fill="none" stroke="rgba(13, 19, 33, 0.06)" strokeWidth="4" />
        <circle
          cx="26"
          cy="26"
          r="20"
          fill="none"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          transform="rotate(-90 26 26)"
        />
        <text
          x="26"
          y="26"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="11"
          fontWeight="600"
          fill="rgb(13, 19, 33)"
        >
          {Math.round(animatedValue)}%
        </text>
      </svg>
      <span style={{ fontSize: "9px", color: "rgb(116, 140, 171)", marginTop: "4px" }}>
        {label}
      </span>
    </div>
  );
};

// Animated Line Chart Component
const LineChart = ({ delay }: { delay: number }) => {
  const frame = useCurrentFrame();

  const entryOpacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const width = 200;
  const height = 70;
  const padding = 8;
  const dataPoints = [18, 25, 22, 35, 32, 45, 42, 55, 52, 65];
  const maxValue = 70;

  const pathProgress = interpolate(frame - delay, [15, 70], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const pointsToShow = Math.ceil(dataPoints.length * pathProgress);
  const points = dataPoints.slice(0, pointsToShow).map((val, i) => {
    const x = padding + (i / (dataPoints.length - 1)) * (width - padding * 2);
    const y = height - padding - (val / maxValue) * (height - padding * 2);
    return { x, y };
  });

  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
  const areaPath =
    points.length > 0
      ? `${linePath} L ${points[points.length - 1]?.x || 0} ${height - padding} L ${padding} ${height - padding} Z`
      : "";

  const lastPoint = points[points.length - 1];
  const dotPulse = interpolate(Math.sin((frame - delay) * 0.2), [-1, 1], [0.8, 1.2]);

  return (
    <div style={{ opacity: entryOpacity }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
        <span style={{ fontSize: "10px", fontWeight: 500, color: "rgb(13, 19, 33)" }}>Adoption Rate</span>
        <span style={{ fontSize: "10px", color: "rgb(16, 185, 129)", fontWeight: 500 }}>↑ 23%</span>
      </div>
      <svg width={width} height={height} style={{ backgroundColor: "rgba(13, 19, 33, 0.015)", borderRadius: "8px" }}>
        {[0.25, 0.5, 0.75].map((ratio) => (
          <line
            key={ratio}
            x1={padding}
            y1={height - padding - ratio * (height - padding * 2)}
            x2={width - padding}
            y2={height - padding - ratio * (height - padding * 2)}
            stroke="rgba(13, 19, 33, 0.05)"
            strokeDasharray="2,2"
          />
        ))}
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgb(0, 85, 255)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="rgb(0, 85, 255)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {areaPath && <path d={areaPath} fill="url(#chartGradient)" />}
        {linePath && (
          <path d={linePath} fill="none" stroke="rgb(0, 85, 255)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        )}
        {lastPoint && <circle cx={lastPoint.x} cy={lastPoint.y} r={4 * dotPulse} fill="rgb(0, 85, 255)" />}
      </svg>
    </div>
  );
};

// Mini Stat Card Component
const MiniStat = ({
  value,
  label,
  trend,
  delay,
}: {
  value: string;
  label: string;
  trend: "up" | "down";
  delay: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entrySpring = spring({ frame: frame - delay, fps, config: { damping: 200 } });
  const translateY = interpolate(entrySpring, [0, 1], [10, 0]);
  const opacity = interpolate(entrySpring, [0, 1], [0, 1]);

  return (
    <div
      style={{
        transform: `translateY(${translateY}px)`,
        opacity,
        padding: "10px",
        backgroundColor: "rgba(13, 19, 33, 0.02)",
        borderRadius: "8px",
        flex: 1,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        <span style={{ fontSize: "14px", fontWeight: 600, color: "rgb(13, 19, 33)" }}>{value}</span>
        <span style={{ fontSize: "9px", color: trend === "up" ? "rgb(16, 185, 129)" : "rgb(239, 68, 68)" }}>
          {trend === "up" ? "↑" : "↓"}
        </span>
      </div>
      <span style={{ fontSize: "9px", color: "rgb(116, 140, 171)" }}>{label}</span>
    </div>
  );
};

// Activity Feed Component
const ActivityFeed = ({ delay }: { delay: number }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryOpacity = interpolate(frame - delay, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const activities = [
    { action: "Enabled", feature: "dark-mode", user: "sarah@acme.io", time: "2m ago", color: "rgb(16, 185, 129)" },
    { action: "Rolled out", feature: "checkout-v2", user: "mike@acme.io", time: "5m ago", color: "rgb(0, 85, 255)" },
    { action: "Created", feature: "ai-search", user: "alex@acme.io", time: "12m ago", color: "rgb(147, 51, 234)" },
  ];

  return (
    <div style={{ opacity: entryOpacity }}>
      <div style={{ fontSize: "11px", fontWeight: 600, color: "rgb(13, 19, 33)", marginBottom: "10px" }}>
        Recent Activity
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {activities.map((activity, i) => {
          const itemDelay = delay + 10 + i * 8;
          const itemSpring = spring({ frame: frame - itemDelay, fps, config: { damping: 200 } });
          const itemOpacity = interpolate(itemSpring, [0, 1], [0, 1]);
          const itemX = interpolate(itemSpring, [0, 1], [-10, 0]);

          // Pulsing dot
          const pulse = interpolate(Math.sin((frame - itemDelay) * 0.15), [-1, 1], [0.7, 1]);

          return (
            <div
              key={i}
              style={{
                opacity: itemOpacity,
                transform: `translateX(${itemX}px)`,
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px",
                backgroundColor: "rgba(13, 19, 33, 0.015)",
                borderRadius: "6px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: activity.color,
                  transform: `scale(${pulse})`,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: "9px", color: "rgb(13, 19, 33)" }}>
                  <span style={{ fontWeight: 500 }}>{activity.action}</span>{" "}
                  <code style={{ fontSize: "8px", backgroundColor: "rgba(13, 19, 33, 0.04)", padding: "1px 3px", borderRadius: "2px" }}>
                    {activity.feature}
                  </code>
                </div>
                <div style={{ fontSize: "8px", color: "rgb(116, 140, 171)", marginTop: "2px" }}>
                  {activity.user} · {activity.time}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TypingText = ({ text, startFrame }: { text: string; startFrame: number }) => {
  const frame = useCurrentFrame();
  const charsToShow = Math.floor(
    interpolate(frame - startFrame, [0, text.length * 2], [0, text.length], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    })
  );
  return <span>{text.slice(0, charsToShow)}</span>;
};

export const DashboardAnimation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const cardEntry = spring({ frame, fps, config: { damping: 200 } });
  const cardScale = interpolate(cardEntry, [0, 1], [0.95, 1]);
  const cardOpacity = interpolate(cardEntry, [0, 1], [0, 1]);

  return (
    <AbsoluteFill style={{ backgroundColor: "transparent", padding: "0" }}>
      <div
        style={{
          position: "relative",
          transform: `scale(${cardScale})`,
          opacity: cardOpacity,
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(13, 19, 33, 0.08)",
          border: "1px solid rgba(13, 19, 33, 0.04)",
          overflow: "hidden",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Window header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 14px",
            backgroundColor: "rgba(13, 19, 33, 0.015)",
            borderBottom: "1px solid rgba(13, 19, 33, 0.04)",
          }}
        >
          <div style={{ display: "flex", gap: "5px" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((color) => (
              <div key={color} style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: color }} />
            ))}
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                padding: "2px 10px",
                backgroundColor: "rgba(13, 19, 33, 0.03)",
                borderRadius: "4px",
                fontSize: "9px",
                color: "rgb(116, 140, 171)",
              }}
            >
              <TypingText text="dashboard.featuregate.io" startFrame={8} />
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{ padding: "14px 16px", display: "flex", gap: "16px" }}>
          {/* Left column - Progress bars */}
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "11px", fontWeight: 600, color: "rgb(13, 19, 33)", marginBottom: "12px" }}>
              Rollout Progress
            </div>
            <ProgressBar label="Dark Mode" targetValue={100} color="rgb(16, 185, 129)" delay={15} />
            <ProgressBar label="New Checkout" targetValue={67} color="rgb(0, 85, 255)" delay={25} />
            <ProgressBar label="AI Assistant" targetValue={23} color="rgb(147, 51, 234)" delay={35} />

            {/* Mini stats row */}
            <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
              <MiniStat value="2.4k" label="Daily Users" trend="up" delay={50} />
              <MiniStat value="99.9%" label="Uptime" trend="up" delay={55} />
            </div>
          </div>

          {/* Right column - Gauges and chart */}
          <div style={{ width: "200px" }}>
            {/* Circular gauges */}
            <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "12px" }}>
              <CircularGauge value={87} label="Success" color="rgb(16, 185, 129)" delay={20} />
              <CircularGauge value={94} label="Health" color="rgb(0, 85, 255)" delay={30} />
            </div>

            {/* Line chart */}
            <LineChart delay={40} />
          </div>
        </div>

        {/* Bottom section - Activity Feed */}
        <div style={{ padding: "0 16px 14px 16px" }}>
          <ActivityFeed delay={60} />
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const dashboardConfig = {
  id: "DashboardAnimation",
  fps: 30,
  durationInFrames: 150,
  width: 520,
  height: 420,
};
