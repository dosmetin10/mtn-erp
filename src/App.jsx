import React from "react";
import "./App.css";
import { createClient } from "@supabase/supabase-js";
import mtnLogo from "./assets/mtnlogo.jpeg";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  return (
    <div className="app-container">
      <aside className="sidebar">
        <img src={mtnLogo} alt="MTN Enerji" className="logo" />
        <h2>MTN ERP</h2>
        <ul>
          <li>📦 Stok Girişi</li>
          <li>🚚 Stok Çıkışı</li>
          <li>👥 Cariler</li>
          <li>🧾 Teklifler</li>
          <li>💾 Yedekleme</li>
        </ul>
      </aside>

      <main className="main-content glass">
        <header>
          <h1>Hoş geldiniz, Metin Döş 👋</h1>
          <p>MTN Enerji ERP sisteminize hoş geldiniz. Süreçleri buradan yönetin.</p>
        </header>

        <section className="dashboard">
          <div className="card">
            <h3>Stok Yönetimi</h3>
            <p>Malzeme giriş ve çıkışlarını buradan takip edin.</p>
          </div>
          <div className="card">
            <h3>Cariler</h3>
            <p>Müşteri ve tedarikçi kayıtlarınızı yönetin.</p>
          </div>
          <div className="card">
            <h3>Teklifler</h3>
            <p>Teklif oluşturun, PDF olarak dışa aktarın.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
