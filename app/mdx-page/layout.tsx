import React from "react";

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="prose">
      {children}
    </div>
  );
}