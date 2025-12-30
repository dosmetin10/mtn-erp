import React from "react";
import "./App.css";
import logo from "./assets/logo.png";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar glass">
        <div className="logo-area">
          <img src={logo} alt="MTN Enerji" />
          <h1 className="brand">MTN ERP</h1>
          <p className="subtitle">Mühendislik • Doğalgaz</p>

          {/* MUHASEBE BUTONU */}
          <a
            href="https://app.appsmith.com/app/bu-sayfa-pdf-alnabilir/page1-6942b8fbc5ffab0df02dbf4a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "16px",
              padding: "12px 18px",
              backgroundColor: "#0d6efd",
              color: "#ffffff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            📊 Muhasebe / Stok Paneline Git
          </a>
        </div>
      </aside>
    </div>
  );
}
