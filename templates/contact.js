function ContactTemplate() {
  return {
    name: "Contact",

    html: `
      <div class="contact-container">

        <h1>Contact</h1>

        <p class="contact-intro">
          Fast response. Usually same day. Call or text and I’ll give you a quick quote based on what you need gone.
        </p>

        <div class="contact-card">

          <h3>Call or Text</h3>

          <a class="contact-btn callnumlink"></a>

          <p class="contact-note">
            If I don’t answer right away, I’m probably on a job. Just leave a text and I’ll get back to you.
          </p>

        </div>

        <div class="contact-area">
          <h3>Service Area</h3>
          <p>
            Based in Atwater, CA and serving nearby areas in Merced County.
          </p>
        </div>

        <div class="contact-cta">
          <h3>What to send when you message me</h3>
          <p>
            A quick photo or short description of what you need removed is perfect.
            I can usually give you a rough price right away.
          </p>
        </div>

      </div>
    `,

    styles: {
      base: {
        ".contact-container": {
          maxWidth: "700px",
          width: "100%"
        },

        "h1": {
          color: "var(--content-text)",
          marginBottom: "10px"
        },

        ".contact-intro": {
          color: "var(--content-text)",
          lineHeight: "1.6",
          marginBottom: "20px"
        },

        ".contact-card": {
          padding: "20px",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "12px",
          marginBottom: "20px"
        },

        ".contact-card h3": {
          color: "var(--content-text)",
          marginBottom: "10px"
        },

        ".contact-btn": {
          display: "inline-block",
          background: "#f5c400",
          color: "#1a1a1a",
          padding: "12px 18px",
          textDecoration: "none",
          fontWeight: "bold",
          borderRadius: "8px",
          marginBottom: "10px"
        },

        ".contact-btn:hover": {
          background: "#d9a800"
        },

        ".contact-note": {
          color: "var(--content-text)",
          opacity: "0.8",
          fontSize: "0.9rem",
          lineHeight: "1.5"
        },

        ".contact-area, .contact-cta": {
          marginBottom: "20px"
        },

        ".contact-area h3, .contact-cta h3": {
          color: "var(--content-text)",
          marginBottom: "8px"
        },

        ".contact-area p, .contact-cta p": {
          color: "var(--content-text)",
          lineHeight: "1.6",
          opacity: "0.9"
        }
      },

      mobile: {
        ".contact-container": {
          maxWidth: "100%"
        },

        ".contact-card": {
          padding: "15px"
        },

        ".contact-btn": {
          width: "100%",
          textAlign: "center",
          padding: "14px 18px"
        },

        ".contact-intro": {
          fontSize: "0.95rem"
        },

        ".contact-note": {
          fontSize: "0.85rem"
        }
      }
    }
  };
}

export default ContactTemplate;