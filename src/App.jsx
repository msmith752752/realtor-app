import { useState } from "react"

function App() {
  const [address, setAddress] = useState("")
  const [bedrooms, setBedrooms] = useState("")
  const [bathrooms, setBathrooms] = useState("")
  const [features, setFeatures] = useState("")
  const [listing, setListing] = useState("")
  const [loading, setLoading] = useState(false)

  const generateListing = async () => {
    setLoading(true)
    setListing("")

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
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
    setLoading(false)
  }

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", fontFamily: "Arial", padding: "0 20px" }}>
      <h1 style={{ color: "#2c3e50" }}>🏠 Realtor AI Assistant</h1>
      <h2 style={{ color: "#7f8c8d" }}>Listing Description Generator</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <input
          placeholder="Property Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Number of Bedrooms"
          value={bedrooms}
          onChange={(e) => setBedrooms(e.target.value)}
          style={inputStyle}
        />
        <input
          placeholder="Number of Bathrooms"
          value={bathrooms}
          onChange={(e) => setBathrooms(e.target.value)}
          style={inputStyle}
        />
        <textarea
          placeholder="Key Features (e.g. renovated kitchen, pool, hardwood floors)"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          style={{ ...inputStyle, height: "80px", resize: "vertical" }}
        />

        <button
          onClick={generateListing}
          disabled={loading}
          style={buttonStyle}
        >
          {loading ? "Generating..." : "Generate Listing"}
        </button>
      </div>

      {listing && (
        <div style={{ marginTop: "24px", padding: "16px", background: "#f8f9fa", borderRadius: "8px", lineHeight: "1.6" }}>
          <h3 style={{ color: "#2c3e50" }}>Generated Listing:</h3>
          <p>{listing}</p>
        </div>
      )}
    </div>
  )
}

const inputStyle = {
  padding: "10px",
  fontSize: "16px",
  borderRadius: "6px",
  border: "1px solid #ccc",
  width: "100%",
  boxSizing: "border-box"
}

const buttonStyle = {
  padding: "12px",
  fontSize: "16px",
  backgroundColor: "#2c3e50",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
}

export default App