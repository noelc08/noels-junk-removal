function ServicesTemplate() {
  return {
    name: "Services",

    html: `
      <div class="services-layout">

        <!-- LEFT CONTENT -->
        <div class="services-main">

          <h1>Services</h1>

          <p class="services-intro"></p>

          <div class="services-grid services-list"></div>

        </div>

        <!-- RIGHT STICKY NOTE -->
        <div class="services-side">

          <div class="sticky-note">
            <h3 class="note-title"></h3>
            <div class="note-body"></div>
          </div>

        </div>

      </div>
    `,

    styles: {
      base: {
        ".services-layout": {
          display: "flex",
          alignItems: "flex-start",
          gap: "40px"
        },

        ".services-main": {
          width: "70%"
        },

        ".services-side": {
          width: "30%"
        },

        ".sticky-note": {
          position: "sticky",
          top: "calc(var(--navbar-height) + 40px)",
          padding: "15px",
          borderLeft: "3px solid var(--content-text)",
          background: "rgba(0,0,0,0.05)",
          borderRadius: "10px",

          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px"
        },

        ".sticky-note h3": {
          color: "var(--content-text)",
          marginBottom: "10px"
        },

        ".sticky-note p": {
          color: "var(--content-text)",
          lineHeight: "1.6",
          opacity: "0.9",
          marginBottom: "10px"
        },

        "h1": {
          color: "var(--content-text)",
          marginBottom: "10px"
        },

        ".services-intro": {
          color: "var(--content-text)",
          marginBottom: "25px",
          lineHeight: "1.6",
          maxWidth: "700px"
        },

        ".services-grid": {
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px"
        },

        ".service-card": {
          padding: "15px",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px"
        },

        ".service-card h3": {
          color: "var(--content-text)",
          marginBottom: "8px"
        },

        ".service-card p": {
          color: "var(--content-text)",
          lineHeight: "1.5",
          opacity: "0.9"
        }
      },

      mobile: {
        ".services-layout": {
          flexDirection: "column",
          gap: "20px",
          height: "calc(100vh - var(--navbar-height))",
          overflow: "hidden"
        },

        ".services-main": {
          width: "100%",
          overflowY: "auto",
          maxHeight: "50vh",
          paddingRight: "5px"
        },

        ".services-side": {
          width: "100%",
          overflowY: "auto",
          maxHeight: "40vh"
        },

        ".sticky-note": {
          position: "relative",
          top: "unset"
        },

        ".services-grid": {
          gridTemplateColumns: "1fr"
        }
      }
    }
  };
}

export default ServicesTemplate;