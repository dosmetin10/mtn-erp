import { useState, useEffect } from "react"

function App() {
  const [ekran, setEkran] = useState("menu")

  // CARI STATE
  const [cariler, setCariler] = useState([])
  const [cariAdi, setCariAdi] = useState("")
  const [telefon, setTelefon] = useState("")
  const [duzenlenenId, setDuzenlenenId] = useState(null)

  // SAYFA AÇILINCA LOCALSTORAGE'DAN OKU
  useEffect(() => {
    const kayitliCariler = localStorage.getItem("cariler")
    if (kayitliCariler) {
      setCariler(JSON.parse(kayitliCariler))
    }
  }, [])

  // LOCALSTORAGE'A YAZ
  function carileriKaydet(yeniListe) {
    setCariler(yeniListe)
    localStorage.setItem("cariler", JSON.stringify(yeniListe))
  }

  function cariEkleVeyaGuncelle() {
    if (!cariAdi) return

    let yeniListe

    if (duzenlenenId) {
      yeniListe = cariler.map((cari) =>
        cari.id === duzenlenenId
          ? { ...cari, cariAdi, telefon }
          : cari
      )
      setDuzenlenenId(null)
    } else {
      yeniListe = [
        ...cariler,
        { id: Date.now(), cariAdi, telefon }
      ]
