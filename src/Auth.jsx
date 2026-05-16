import { useState } from "react"
import { supabase } from "./supabase"
import { useNavigate } from "react-router-dom"

function Auth() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isSignUp, setIsSignUp] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const navigate = useNavigate()

  const handleAuth = async () => {
    setLoading(true)
    setError("")
    setMessage("")

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({ email, password })
      if (error) setError(error.message)
      else setMessage("Check your email to confirm your account!")
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) setError(error.message)
      else navigate("/app")
    }

    setLoading(false)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ background: "#1a1d27", borderRadius: "16px", padding: "48px", border: "1px solid #2d3148", width: "100%", maxWidth: "420px" }}>
        
        <div style={{ textAlign: "center", marginBottom: "32px" }}>
          <span style={{ fontSize: "40px" }}>🏠</span>
          <h1 style={{ color: "white", fontSize: "24px", fontWeight: "700", margin: "12px 0 4px 0" }}>Realtor AI</h1>
          <p style={{ color: "#6b7280", margin: 0 }}>{isSignUp ? "Create your account" : "Sign in to your account"}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div>
            <label style={labelStyle}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div>
            <label style={labelStyle}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>

          {error && (
            <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: "8px", padding: "12px", color: "#ef4444", fontSize: "14px" }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{ background: "#152d1d", border: "1px solid #22c55e", borderRadius: "8px", padding: "12px", color: "#22c55e", fontSize: "14px" }}>
              {message}
            </div>
          )}

          <button
            onClick={handleAuth}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "600",
              background: "linear-gradient(90deg, #6366f1, #8b5cf6)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: loading ? "not-allowed" : "pointer"
            }}
          >
            {loading ? "Loading..." : isSignUp ? "Create Account" : "Sign In"}
          </button>

          <p style={{ textAlign: "center", color: "#6b7280", fontSize: "14px", margin: 0 }}>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              onClick={() => setIsSignUp(!isSignUp)}
              style={{ color: "#8b5cf6", cursor: "pointer", fontWeight: "600" }}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  )
}

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontSize: "14px",
  fontWeight: "500",
  color: "#9ca3af"
}

const inputStyle = {
  width: "100%",
  padding: "12px",
  fontSize: "15px",
  background: "#0f1117",
  border: "1px solid #2d3148",
  borderRadius: "8px",
  color: "white",
  boxSizing: "border-box",
  outline: "none"
}

export default Auth