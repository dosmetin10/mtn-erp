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
