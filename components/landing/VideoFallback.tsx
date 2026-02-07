export default function VideoFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-warm-sand via-dusk-beige to-warm-sand opacity-80">
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, var(--earth-dark) 1px, transparent 0)",
          backgroundSize: "48px 48px",
        }}
      />
    </div>
  );
}
