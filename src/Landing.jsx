import { useNavigate } from "react-router-dom"

function Landing() {
  const navigate = useNavigate()

  return (
    <div style={{ minHeight: "100vh", background: "#0f1117", color: "white", fontFamily: "'Segoe UI', sans-serif" }}>
      
      {/* Navigation */}
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "20px 48px", borderBottom: "1px solid #1f2232" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "24px" }}>🏠</span>
          <span style={{ fontSize: "22px", fontWeight: "700", color: "white" }}>Realtor AI</span>
        </div>
        <div style={{ display: "flex", gap: "16px" }}>
          <button
            onClick={() => navigate("/app")}
            style={{ padding: "10px 24px", fontSize: "15px", background: "transparent", color: "white", border: "1px solid #4b5563", borderRadius: "8px", cursor: "pointer" }}
          >
            Sign In
          </button>
          <button
            onClick={() => navigate("/app")}
            style={{ padding: "10px 24px", fontSize: "15px", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", color: "white", border: "none", borderRadius: "8px", cursor: "pointer", fontWeight: "600" }}
          >
            Get Started Free
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 48px", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "#1a1d27", border: "1px solid #6366f1", borderRadius: "20px", padding: "6px 16px", fontSize: "13px", color: "#8b5cf6", marginBottom: "24px" }}>
          ✨ Powered by Claude AI
        </div>
        <h1 style={{ fontSize: "64px", fontWeight: "800", lineHeight: "1.1", margin: "0 0 24px 0", background: "linear-gradient(135deg, #ffffff 0%, #8b5cf6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          Write Listings That<br />Sell Homes Faster
        </h1>
        <p style={{ fontSize: "20px", color: "#9ca3af", maxWidth: "600px", margin: "0 auto 40px auto", lineHeight: "1.6" }}>
          AI-powered tools built for real estate professionals. Generate compelling listing descriptions, market reports, and client emails in seconds.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <button
            onClick={() => navigate("/app")}
            style={{ padding: "16px 36px", fontSize: "17px", fontWeight: "700", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" }}
          >
            Try It Free →
          </button>
          <button
            style={{ padding: "16px 36px", fontSize: "17px", fontWeight: "600", background: "transparent", color: "white", border: "1px solid #4b5563", borderRadius: "10px", cursor: "pointer" }}
          >
            See How It Works
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 48px 100px 48px" }}>
        <h2 style={{ textAlign: "center", fontSize: "36px", fontWeight: "700", marginBottom: "16px" }}>Everything Realtors Need</h2>
        <p style={{ textAlign: "center", color: "#9ca3af", marginBottom: "60px", fontSize: "18px" }}>Save hours every week with AI tools built for real estate</p>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "24px" }}>
          {[
            { icon: "📝", title: "Listing Descriptions", desc: "Generate professional, compelling property descriptions in seconds. Just enter the details and let AI do the writing." },
            { icon: "📊", title: "Market Reports", desc: "Get instant AI-powered market analysis and insights to share with your clients and close deals faster." },
            { icon: "✉️", title: "Client Emails", desc: "Draft personalized client emails, follow-ups, and outreach messages that sound professional every time." },
          ].map((feature, i) => (
            <div key={i} style={{ background: "#1a1d27", borderRadius: "16px", padding: "32px", border: "1px solid #2d3148" }}>
              <div style={{ fontSize: "36px", marginBottom: "16px" }}>{feature.icon}</div>
              <h3 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>{feature.title}</h3>
              <p style={{ color: "#9ca3af", lineHeight: "1.6", margin: 0 }}>{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div style={{ background: "#1a1d27", borderTop: "1px solid #2d3148", borderBottom: "1px solid #2d3148", padding: "80px 48px", textAlign: "center" }}>
        <h2 style={{ fontSize: "40px", fontWeight: "800", marginBottom: "16px" }}>Ready to Save Hours Every Week?</h2>
        <p style={{ color: "#9ca3af", fontSize: "18px", marginBottom: "40px" }}>Join realtors already using Realtor AI to win more listings</p>
        <button
          onClick={() => navigate("/app")}
          style={{ padding: "18px 48px", fontSize: "18px", fontWeight: "700", background: "linear-gradient(90deg, #6366f1, #8b5cf6)", color: "white", border: "none", borderRadius: "10px", cursor: "pointer" }}
        >
          Get Started Free →
        </button>
      </div>

      {/* Footer */}
      <div style={{ padding: "32px 48px", textAlign: "center", color: "#4b5563", fontSize: "14px" }}>
        © 2026 Realtor AI. Built with Claude by Anthropic.
      </div>

    </div>
  )
}

export default Landing