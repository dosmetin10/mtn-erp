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
        </div>
      </aside>
    </div>
  );
}
