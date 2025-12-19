import { useState } from "react"
import { supabase } from "./supabase"

function App() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  async function girisYap() {
    const email = `${username}@mtn.local`

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError("Giriş başarısız")
    } else {
      setError("")
      alert("Giriş başarılı")
    }
  }

  return (
    <div style={{ padding: 40 }}>
      <h2>MTN ERP Giriş</h2>

      <input
        placeholder="Kullanıcı adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={girisYap}>Giriş Yap</button>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  )
}

export default App
