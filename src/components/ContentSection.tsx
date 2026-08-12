import type { ReactNode } from "react";

type ContentSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  raised?: boolean;
};

export function ContentSection({ id, eyebrow, title, intro, children, raised = false }: ContentSectionProps) {
  return (
    <section
      className={raised ? "content-section surface-raised" : "content-section surface-base"}
      data-surface-family={raised ? "arena-raised" : "arena-base"}
      id={id}
    >
      <div className="page-shell">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p className="section-lead">{intro}</p> : null}
        {children}
      </div>
    </section>
  );
}
