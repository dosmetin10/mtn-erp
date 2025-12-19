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

  // KURUMSAL KART
  function Kart({ baslik, aciklama, onClick }) {
    return (
      <div
        onClick={onClick}
        style={{
          border: "1px solid #ddd",
          borderRadius: 8,
          padding: 20,
          width: 240,
          cursor: "pointer",
          background: "#fff",
          boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
        }}
      >
        <h3 style={{ margin: 0 }}>{baslik}</h3>
        <p style={{ color: "#555" }}>{aciklama}</p>
      </div>
    )
  }

  // ANA EKRAN
  if (ekran === "menu") {
    return (
      <div style={{ padding: 40, background: "#f4f6f8", minHeight: "100vh" }}>
        <h1>MTN ERP</h1>
        <p style={{ color: "#555" }}>
  Mekanik · Doğalgaz · Proje Yönetimi
</p>

