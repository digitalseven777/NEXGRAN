import type { ReactNode } from "react";

/** Cabeçalho de seção: régua com marcação laranja (motivo estrutural da marca) + H2. */
export function SectionHead({ id, title, children, className = "" }: { id?: string; title: string; children?: ReactNode; className?: string }) {
  return (
    <div className={`sec-head ${className}`}>
      <span className="rule" aria-hidden="true" />
      <h2 id={id}>{title}</h2>
      {children}
    </div>
  );
}
