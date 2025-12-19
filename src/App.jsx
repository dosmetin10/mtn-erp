import { useState } from "react"

function App() {
  const [ekran, setEkran] = useState("menu")

  // CARI STATE
  const [cariler, setCariler] = useState([])
  const [cariAdi, setCariAdi] = useState("")
  const [telefon, setTelefon] = useState("")
  const [duzenlenenId, setDuzenlenenId] = useState(null)

  function cariEkleVeyaGuncelle() {
    if (!cariAdi) return

    if (duzenlenenId) {
      setCariler(
        cariler.map((cari) =>
          cari.id === duzenlenenId
            ? { ...cari, cariAdi, telefon }
            : cari
        )
      )
      setDuzenlenenId(null)
    } else {
      setCariler([
        ...cariler,
        { id: Date.now(), cariAdi, telefon }
      ])
    }

    setCariAdi("")
    setTelefon("")
  }

  function cariDuzenle(cari) {
    setCariAdi(cari.cariAdi)
    setTelefon(cari.telefon)
    setDuzenlenenId(cari.id)
  }

  function cariSil(id) {
    if (!window.confirm("Bu cariyi silmek istiyor musun?")) return
    setCariler(cariler.filter((cari) => cari.id !== id))
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

        <h3>{duzenlenenId ? "Cari Düzenle" : "Yeni Cari Ekle"}</h3>

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

        <button onClick={cariEkleVeyaGuncelle}>
          {duzenlenenId ? "Kaydet" : "Cari Ekle"}
        </button>

        {duzenlenenId && (
          <button
            style={{ marginLeft: 10 }}
            onClick={() => {
              setDuzenlenenId(null)
              setCariAdi("")
              setTelefon("")
            }}
          >
            İptal
          </button>
        )}

        <hr />

        <h3>Cari Listesi</h3>

        {cariler.length === 0 && <p>Henüz cari yok</p>}

        <ul>
          {cariler.map((cari) => (
            <li key={cari.id}>
              <strong>{cari.cariAdi}</strong> – {cari.telefon}
              <br />
              <button onClick={() => cariDuzenle(cari)}>
                Düzenle
              </button>
              <button
                style={{ marginLeft: 10 }}
                onClick={() => cariSil(cari.id)}
              >
                Sil
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
