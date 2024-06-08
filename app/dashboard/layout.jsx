import React from "react";
import { Header } from "./_components/Header";

function DashboardLayput({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default DashboardLayput;
