function AboutTemplate() {
  return {
    name: "About",

    html: `
      <div class="about-layout">

        <div class="about-left">
          <h1>About</h1>

          <p>
            I run a local junk removal and cleanout service around the area.
            Nothing fancy. Just honest work, showing up on time, and getting the job done without the runaround.
          </p>

          <p>
            Most of the jobs are pretty simple: garages, old furniture, yard cleanups, or just stuff people don’t want to deal with anymore.
            You point at what needs to go, I give you a fair price, and if it works, I take care of the rest.
          </p>

          <p>
            I’m not a big franchise or call center. It’s just me doing the work, so when you call, you’re talking directly to the person showing up.
          </p>

          <p>
            The goal is simple. Make it easy to clear out space and keep things local, affordable, and straightforward.
          </p>
        </div>

        <div class="about-right">
          <img src="./assets/images/me.jpg" alt="Noel - Junk Removal" />
        </div>

      </div>
    `,

    styles: {
      base: {
        ".about-layout": {
          display: "flex",
          alignItems: "flex-start",
          gap: "40px",
          width: "100%"
        },

        ".about-left": {
          flex: "1"
        },

        ".about-right": {
          flex: "0 0 25%",
          display: "flex",
          justifyContent: "center"
        },

        ".about-right img": {
          width: "100%",
          maxWidth: "220px",
          borderRadius: "12px",
          objectFit: "cover"
        },

        ".main h1": {
          color: "var(--content-text)"
        },

        ".main p": {
          color: "var(--content-text)",
          lineHeight: "1.6",
          maxWidth: "700px"
        }
      },

      mobile: {
        ".about-layout": {
          flexDirection: "column",
          gap: "20px"
        },

        ".about-left": {
          width: "100%"
        },

        ".about-right": {
          width: "100%",
          justifyContent: "flex-start"
        },

        ".about-right img": {
          maxWidth: "100%",
          height: "auto"
        }
      }
    }
  };
}

export default AboutTemplate;