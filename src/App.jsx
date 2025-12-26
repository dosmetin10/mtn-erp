import React from "react";
import "./App.css";
import mtnLogo from "./assets/mtnlogo.jpeg";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function App() {
  return (
    <div className="dashboard">
      <aside className="sidebar glass">
        <div className="logo-area">
          <img src={mtnLogo} alt="MTN Enerji" className="logo" />
          <h1 className="brand">MTN ERP</h1>
          <p className="subtitle">Mühendislik • Doğalgaz</p>
        </div>
        <nav>
          <ul>
            <li>📦 Stok Girişi</li>
            <li>🚚 Stok Çıkışı</li>
            <li>👥 Cariler</li>
            <li>🧾 Teklifler</li>
            <li>💾 Yedekleme</li>
            <li>⚙️ Ayarlar</li>
          </ul>
        </nav>
      </aside>

      <main className="content">
        <header className="glass header">
          <h2>Hoş geldiniz, Metin Döş 👋</h2>
          <p>MTN Enerji ERP sistemine giriş yaptınız.</p>
        </header>

        <section className="cards">
          <div className="card glass">
            <h3>Stok Yönetimi</h3>
            <p>Malzeme girişlerini takip edin.</p>
          </div>
          <div className="card glass">
            <h3>Cariler</h3>
            <p>Müşteri ve tedarikçi bilgilerini yönetin.</p>
          </div>
          <div className="card glass">
            <h3>Teklifler</h3>
            <p>PDF teklif oluşturun ve dışa aktarın.</p>
          </div>
        </section>

        <footer className="glass footer">
          <p>© 2025 MTN Enerji Mühendislik • Doğalgaz | ERP v2.0</p>
        </footer>
      </main>
    </div>
  );
}
