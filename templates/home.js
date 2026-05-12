function HomeTemplate() {
  return {
    name: "Home",

    html: `
      <h1>Simple, Honest Junk Removal</h1>

      <div class="content-wrapper">
        <div id="text">
          <p>
            Most jobs are simple: you show me what needs to go, I give you a clear price,
            and if it works for both of us, I handle the rest. No complicated scheduling
            systems or long wait times.
            I’m not a big call center or a complicated franchise system. I just
            offer straightforward help when you need to clean up a space. If it
            fits in a truck and it’s safe to haul, I’ll probably take it. I just
            like seeing local spaces stay clean and usable.
          </p>

          <p>
            I handle general junk removal, small cleanouts, and hauling for items
            that are safe and reasonable to move. That can include household clutter,
            garage cleanouts, yard debris, and similar jobs. Construction junk removal
            is something I also do, though not as often. I’m not a large-scale demolition
            service or hazardous waste handler, and I don’t take anything unsafe or
            illegal to transport.
          </p>
        </div>

        <div id="side">
          <img src="assets/images/jobs/IMG_20260507_104730921.jpg" alt="Job example" />
        </div>
      </div>
    `,

    styles: {
      base: {
        "h1, p": {
          color: "var(--content-text)"
        },

        "#text p": {
          textIndent: "30px"
        },

        ".content-wrapper": {
          display: "flex",
          gap: "20px",
          alignItems: "flex-start"
        },

        "#text": {
          flex: "0 0 60%",
          minWidth: "0"
        },

        "#side": {
          flex: "1",
          minWidth: "0"
        },

        "#side img": {
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          border: "solid",
          borderColor: "var(--navbar-bg)",
          display: "block"
        }
      },

      mobile: {
        ".content-wrapper": {
          flexDirection: "column",
          alignItems: "stretch",

          height: "100%",
          overflowY: "auto",
          overflowX: "hidden",

          WebkitOverflowScrolling: "touch"
        },

        "#text": {
          flex: "unset",
          width: "100%"
        },

        "#side": {
          flex: "unset",
          width: "100%"
        },

        "#side img": {
          display: "block",
          width: "100%",
          maxWidth: "100%",
          height: "auto",
          objectFit: "contain"
        }
      }
    }
  };
}

export default HomeTemplate;
