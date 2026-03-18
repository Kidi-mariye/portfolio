export default function Metrics() {
  const stats = [
    { label: "Projects Built", value: "12+" },
    { label: "Technologies", value: "10+" },
    { label: "Years Learning", value: "4" },
  ];

  return (
    <section className="section border-t border-[var(--border-subtle)]">
      <div className="grid md:grid-cols-3 gap-16 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-4xl mb-3">{item.value}</h3>
            <p className="text-sm uppercase tracking-widest text-[var(--ink-muted)]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
