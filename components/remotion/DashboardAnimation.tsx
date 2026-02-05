"use client";

import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Sequence,
} from "remotion";

const features = [
  { name: "dark-mode", status: true, users: "100%", env: "Production" },
  { name: "new-checkout", status: true, users: "25%", env: "Canary" },
  { name: "ai-assistant", status: false, users: "0%", env: "Dev" },
  { name: "redesigned-nav", status: true, users: "50%", env: "Experiment" },
];

const TypingText = ({
  text,
  startFrame,
  className,
}: {
  text: string;
  startFrame: number;
  className?: string;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const charsToShow = Math.floor(
    interpolate(
      frame - startFrame,
      [0, (text.length * 2)],
      [0, text.length],
      { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
    )
  );

  return <span className={className}>{text.slice(0, charsToShow)}</span>;
};

const FeatureRow = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const entryDelay = 20 + index * 12;

  const slideIn = spring({
    frame: frame - entryDelay,
    fps,
    config: { damping: 200 },
  });

  const translateX = interpolate(slideIn, [0, 1], [-20, 0]);
  const opacity = interpolate(slideIn, [0, 1], [0, 1]);

  // Status indicator pulse
  const pulseScale = feature.status
    ? interpolate(
        Math.sin((frame - entryDelay) * 0.15),
        [-1, 1],
        [0.85, 1.15],
        { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
      )
    : 1;

  const envColors: Record<string, { bg: string; text: string }> = {
    Production: { bg: "rgb(236, 253, 245)", text: "rgb(5, 150, 105)" },
    Canary: { bg: "rgb(255, 251, 235)", text: "rgb(217, 119, 6)" },
    Experiment: { bg: "rgb(250, 245, 255)", text: "rgb(147, 51, 234)" },
    Dev: { bg: "rgba(13, 19, 33, 0.04)", text: "rgb(116, 140, 171)" },
  };

  const env = envColors[feature.env] || envColors.Dev;

  return (
    <div
      style={{
        transform: `translateX(${translateX}px)`,
        opacity,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px",
        backgroundColor: "rgba(13, 19, 33, 0.015)",
        borderRadius: "8px",
        marginBottom: "8px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: feature.status
              ? "rgb(16, 185, 129)"
              : "rgba(13, 19, 33, 0.15)",
            transform: `scale(${pulseScale})`,
          }}
        />
        <code
          style={{
            fontSize: "12px",
            fontWeight: 500,
            color: "rgb(13, 19, 33)",
            fontFamily: "monospace",
          }}
        >
          {feature.name}
        </code>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <span
          style={{
            fontSize: "10px",
            color: "rgb(116, 140, 171)",
          }}
        >
          {feature.users}
        </span>
        <span
          style={{
            padding: "2px 6px",
            fontSize: "10px",
            fontWeight: 500,
            borderRadius: "4px",
            backgroundColor: env.bg,
            color: env.text,
          }}
        >
          {feature.env}
        </span>
      </div>
    </div>
  );
};


export const DashboardAnimation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Main card entrance
  const cardEntry = spring({
    frame,
    fps,
    config: { damping: 200 },
  });

  const cardScale = interpolate(cardEntry, [0, 1], [0.95, 1]);
  const cardOpacity = interpolate(cardEntry, [0, 1], [0, 1]);

  // Header fade in
  const headerOpacity = interpolate(frame, [5, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  // Button pulse
  const buttonScale = interpolate(
    Math.sin((frame - 40) * 0.1),
    [-1, 1],
    [1, 1.02],
    { extrapolateLeft: "clamp", extrapolateRight: "clamp" }
  );

  return (
    <AbsoluteFill
      style={{
        backgroundColor: "transparent",
        padding: "0",
      }}
    >
      <div
        style={{
          position: "relative",
          transform: `scale(${cardScale})`,
          opacity: cardOpacity,
          backgroundColor: "white",
          borderRadius: "16px",
          boxShadow: "0 25px 50px -12px rgba(13, 19, 33, 0.06)",
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
            padding: "12px 16px",
            backgroundColor: "rgba(13, 19, 33, 0.015)",
            borderBottom: "1px solid rgba(13, 19, 33, 0.04)",
          }}
        >
          <div style={{ display: "flex", gap: "6px" }}>
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(13, 19, 33, 0.08)",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(13, 19, 33, 0.08)",
              }}
            />
            <div
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: "rgba(13, 19, 33, 0.08)",
              }}
            />
          </div>
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            <div
              style={{
                padding: "2px 12px",
                backgroundColor: "rgba(13, 19, 33, 0.03)",
                borderRadius: "4px",
                fontSize: "10px",
                color: "rgb(116, 140, 171)",
              }}
            >
              <TypingText
                text="dashboard.featuregate.io"
                startFrame={8}
              />
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div style={{ padding: "20px 24px" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "24px",
              opacity: headerOpacity,
            }}
          >
            <div>
              <h3
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "rgb(13, 19, 33)",
                  margin: 0,
                }}
              >
                Feature Flags
              </h3>
              <p
                style={{
                  fontSize: "12px",
                  color: "rgb(116, 140, 171)",
                  margin: "4px 0 0 0",
                }}
              >
                12 active
              </p>
            </div>
            <button
              style={{
                padding: "6px 12px",
                backgroundColor: "rgb(13, 19, 33)",
                color: "rgb(240, 235, 216)",
                fontSize: "12px",
                fontWeight: 500,
                borderRadius: "6px",
                border: "none",
                transform: `scale(${buttonScale})`,
              }}
            >
              + New
            </button>
          </div>

          {/* Feature list */}
          <div>
            {features.map((feature, i) => (
              <FeatureRow key={feature.name} feature={feature} index={i} />
            ))}
          </div>
        </div>
      </div>




    </AbsoluteFill>
  );
};

export const dashboardConfig = {
  id: "DashboardAnimation",
  fps: 30,
  durationInFrames: 150, // 5 seconds loop
  width: 520,
  height: 400,
};
