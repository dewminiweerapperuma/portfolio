export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  nodeId,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  nodeId: string;
}) {
  return (
    <div className="trace-module">
      <div className="mb-1 font-mono text-xs text-inkFaint">{nodeId}</div>
      <span className="font-mono text-xs uppercase tracking-widest text-copper">
        {eyebrow}
      </span>
      <h1 className="mt-2 font-display text-3xl font-medium sm:text-4xl lg:text-4xl text-slate-100">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-xl text-inkDim">{subtitle}</p>
      )}
    </div>
  );
}
