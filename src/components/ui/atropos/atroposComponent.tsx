"use client";
import Atropos from "atropos";
import { useEffect } from "react";

export default function AtroposComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const myAtropos = Atropos({
        el: ".my-atropos",
        activeOffset: 90,
        shadowScale: 5.6,
        highlight: true,
        stretchZ: 10,
        alwaysActive: true,
        onEnter() {
          console.log("Enter");
        },
        // Outros parâmetros...
      });
    }
  }, []);

  return (
    <div className="atropos my-atropos">
      <div className="atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner text-white">{children}</div>
        </div>
      </div>
    </div>
  );
}
