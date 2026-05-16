import { useState } from "react"

function App() {
  const [address, setAddress] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [features, setFeatures] = useState("")
  const [listing, setListing] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const generateListing = async () => {
    if (!address || !bedrooms || !bathrooms || !features) {
      setError("Please fill in all fields before generating.")
      return
    }
    setError("")
    setLoading(true)
    setListing("")

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [
            {
              role: "user",
              content: `Write a compelling real estate listing description for this property:
                Address: ${address}
                Bedrooms: ${bedrooms}
                Bathrooms: ${bathrooms}
                Key Features: ${features}
                Make it engaging, professional, and around 150 words.`
            }
          ]
        })
      })

      const data = await response.json()
      setListing(data.content[0].text)
    } catch (err) {
      setError("Something went wrong. Please try again.")
    }

    setLoading(false)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(listing)
  }

  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", color: "white", fontFamily: "'Segoe UI', sans-serif" }}>

      <div style={{ background: "#1a1d27", borderBottom: "1px solid #2d3148", padding: "16px 32px", display: "flex", alignItems: "center", gap: "12px" }}>
        <span style={{ fontSize: "28px" }}>🏠</span>
        <div>
          <div style={{ fontSize: "20px", fontWeight: "700", color: "white" }}>Realtor AI</div>
          <div style={{ fontSize: "12px", color: "#6b7280" }}>Powered by Claude</div>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 24px" }}>

        <div style={{ marginBottom: "32px" }}>
          <h1 style={{ fontSize: "32px", fontWeight: "700", margin: "0 0 8px 0", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Listing Description Generator
          </h1>
          <p style={{ color: "#6b7280", margin: 0 }}>Fill in the property details and let AI write a professional listing in seconds.</p>
        </div>

        <div style={{ background: "#1a1d27", borderRadius: "16px", padding: "32px", border: "1px solid #2d3148", marginBottom: "24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "16px" }}>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Property Address</label>
              <input
                placeholder="123 Oak Street, Charlotte, NC"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Bedrooms</label>
              <input
                placeholder="4"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Bathrooms</label>
              <input
                placeholder="3"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
                style={inputStyle}
              />
            </div>
            <div style={{ gridColumn: "1 / -1" }}>
              <label style={labelStyle}>Key Features</label>
              <textarea
                placeholder="e.g. renovated kitchen, pool, hardwood floors, large backyard"
                value={features}
                onChange={(e) => setFeatures(e.target.value)}
                style={{ ...inputStyle, height: "100px", resize: "vertical" }}
              />
            </div>
          </div>

          {error && (
            <div style={{ background: "#2d1515", border: "1px solid #ef4444", borderRadius: "8px", padding: "12px", color: "#ef4444", marginBottom: "16px", fontSize: "14px" }}>
              {error}
            </div>
          )}

          <button
            onClick={generateListing}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px",
              fontSize: "16px",
              fontWeight: "600",
              background: loading ? "#374151" : "linear-gradient(90deg, #6366f1, #8b5cf6)",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: loading ? "not-allowed" : "pointer",
              transition: "opacity 0.2s"
            }}
          >
            {loading ? "✨ Generating..." : "✨ Generate Listing"}
          </button>
        </div>

        {listing && (
          <div style={{ background: "#1a1d27", borderRadius: "16px", padding: "32px", border: "1px solid #6366f1" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
              <h2 style={{ margin: 0, fontSize: "18px", color: "white" }}>Generated Listing</h2>
              <button
                onClick={copyToClipboard}
                style={{ padding: "8px 16px", fontSize: "14px", background: "#2d3148", color: "white", border: "1px solid #4b5563", borderRadius: "8px", cursor: "pointer" }}
              >
                📋 Copy
              </button>
            </div>
            <p style={{ color: "#d1d5db", lineHeight: "1.8", margin: 0 }}>{listing}</p>
          </div>
        )}
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

export default App