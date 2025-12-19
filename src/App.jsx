import { useState } from "react"

function App() {
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

  return (
    <div style={{ padding: 40 }}>
      <h1>MTN ERP – Cari Yönetimi</h1>

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

export default App
