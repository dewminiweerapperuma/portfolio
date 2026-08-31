export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  nodeId,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  nodeId?: string;
}) {
  return (
    <div className="trace-module">
      <h1 className="font-display text-3xl font-medium sm:text-4xl lg:text-4xl text-slate-100">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 max-w-xl text-inkDim">{subtitle}</p>
      )}
    </div>
  );
}
