import { useState } from "react"

function App() {
  const [ekran, setEkran] = useState("menu")

  // CARI STATE
  const [cariler, setCariler] = useState([])
  const [cariAdi, setCariAdi] = useState("")
  const [telefon, setTelefon] = useState("")

  function cariEkle() {
    if (!cariAdi) return

    setCariler([
      ...cariler,
      { id: Date.now(), cariAdi, telefon }
    ])

    setCariAdi("")
    setTelefon("")
  }

  // ANA EKRAN
  if (ekran === "menu") {
    return (
      <div style={{ padding: 40 }}>
        <h1>MTN ERP</h1>
        <p>Hoş geldin Metin</p>

        <button
          style={{ padding: 10, width: 220 }}
          onClick={() => setEkran("cari")}
        >
          Cari Yönetimi
        </button>

        <br /><br />

        <button style={{ padding: 10, width: 220 }}>
          Stok / Malzeme
        </button>

        <br /><br />

        <button style={{ padding: 10, width: 220 }}>
          Teklifler
        </button>
      </div>
    )
  }

  // CARI YÖNETIMI
  if (ekran === "cari") {
    return (
      <div style={{ padding: 40 }}>
        <h1>Cari Yönetimi</h1>

        <button onClick={() => setEkran("menu")}>
          ← Ana Ekrana Dön
        </button>

        <hr />

        <h3>Yeni Cari Ekle</h3>

        <input
          placeholder="Cari Adı"
          value={cariAdi}
          onChange={(e) => setCariAdi(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Telefon"
          value={telefon}
          onChange={(e) => setTelefon(e.target.value)}
        />
        <br /><br />

        <button onClick={cariEkle}>Cari Ekle</button>

        <hr />

        <h3>Cari Listesi</h3>

        {cariler.length === 0 && <p>Henüz cari yok</p>}

        <ul>
          {cariler.map((cari) => (
            <li key={cari.id}>
              <strong>{cari.cariAdi}</strong> – {cari.telefon}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
