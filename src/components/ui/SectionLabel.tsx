interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] font-bold tracking-[0.15em] uppercase text-accent-l mb-5">
      <span className="w-6 h-px bg-accent" />
      {children}
    </span>
  );
}
