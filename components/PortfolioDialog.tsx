"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Native modality provides Escape, focus containment and an inert background. */
export default function PortfolioDialog({ children, className, label, onClose }: {
  children: ReactNode; className: string; label: string; onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (ref.current) { ref.current.scrollTop = 0; ref.current.querySelector<HTMLButtonElement>("button")?.focus(); }
  }, [label]);
  useEffect(() => {
    const dialog = ref.current;
    const previous = document.activeElement as HTMLElement | null;
    dialog?.showModal();
    return () => { dialog?.close(); previous?.focus(); };
  }, []);
  return <dialog ref={ref} className={className} aria-label={label} onCancel={onClose}
    onClick={(event) => { if (event.target === event.currentTarget) {
      const bounds = event.currentTarget.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
    } }}>
    {children}
  </dialog>;
}
