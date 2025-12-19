import { useState, useEffect } from "react"

function App() {
  const [ekran, setEkran] = useState("menu")

  const [cariler, setCariler] = useState([])
  const [cariAdi, setCariAdi] = useState("")
  const [telefon, setTelefon] = useState("")
  const [duzenlenenId, setDuzenlenenId] = useState(null)

  // Sayfa açılınca kayıtlari oku
  useEffect(() => {
    const kayitli = localStorage.getItem("cariler")
    if (kayitli) {
      try {
        setCariler(JSON.parse(kayitli))
      } catch {
        setCariler([])
      }
    }
  }, [])

  // Kaydetme fonksiyonu
  function carileriKaydet(liste) {
    setCariler(liste)
    localStorage.setItem("cariler", JSON.stringify(liste))
  }

  function cariEkleVeyaGuncelle() {
    if (!cariAdi) return

    let yeniListe = []

    if (duzenlenenId) {
      yeniListe = cariler.map((cari) =>
        cari.id === duzenlenenId
          ? { ...cari, cariAdi, telefon }
          : cari
      )
    } else {
      yeniListe = [
        ...cariler,
        { id: Date.now(), cariAdi, telefon }
      ]
    }

    carileriKaydet(yeniListe)

    setCariAdi("")
    setTelefon("")
    setDuzenlenenId(null)
  }

  function cariDuzenle(cari) {
    setCariAdi(cari.cariAdi)
    setTelefon(cari.telefon)
    setDuzenlenenId(cari.id)
  }

  function cariSil(id) {
    if (!window.confirm("Silmek istiyor musun?")) return
    const yeniListe = cariler.filter((cari) => cari.id !== id)
    carileriKaydet(yeniListe)
  }

  function Kart({ baslik, aciklama, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          border: "1px solid #ddd",
          borderRadius: 10,
          padding: 22,
          width: 260,
          cursor: "pointer",
          background: "#fff",
          boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
        }}
      >
        <h3 style={{ margin: 0 }}>{baslik}</h3>
        <p style={{ color: "#555" }}>{aciklama}</p>
      </div>
    )
  }

  if (ekran === "menu") {
    return (
      <div style={{ padding: 40, background: "#f4f6f8", minHeight: "100vh" }}>
        <h1>MTN ERP</h1>
        <p style={{ color: "#555" }}>
          Mekanik · Doğalgaz · Proje Yönetimi
        </p>

        <div style={{ display: "flex", gap: 24, marginTop: 40 }}>
          <Kart
            baslik="Cari Yönetimi"
            aciklama="Müşteri ve tedarikçi takibi"
            onClick={() => setEkran("cari")}
          />
          <Kart
            baslik="Stok / Malzeme"
            aciklama="Depo ve malzeme kontrolü"
            onClick={() => alert("Henüz yok")}
          />
          <Kart
            baslik="Teklifler"
            aciklama="Teklif oluşturma ve hesaplama"
            onClick={() => alert("Henüz yok")}
          />
        </div>
      </div>
    )
  }

  if (ekran === "cari") {
    return (
      <div style={{ padding: 40 }}>
        <button onClick={() => setEkran("menu")}>
          ← Ana Ekrana Dön
        </button>

        <h1>Cari Yönetimi</h1>

        <hr />

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
          {duzenlenenId ? "Güncelle" : "Cari Ekle"}
        </button>

        <hr />

        <h3>Cari Listesi</h3>

        {cariler.length === 0 ? (
          <p>Henüz cari yok</p>
        ) : (
          <ul>
            {cariler.map((cari) => (
              <li key={cari.id}>
                <strong>{cari.cariAdi}</strong> – {cari.telefon}
                <br />
                <button onClick={() => cariDuzenle(cari)}>
                  Düzenle
                </button>
                <button
                  style={{ marginLeft: 8 }}
                  onClick={() => cariSil(cari.id)}
                >
                  Sil
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
