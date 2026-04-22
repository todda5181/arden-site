import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Arden</title>
        <meta name="description" content="Arden — coming soon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: 0, letterSpacing: "-0.02em" }}>
          Arden
        </h1>
        <p style={{ marginTop: "1rem", maxWidth: 480, color: "#555" }}>
          This is a working Next.js starter. Edit{" "}
          <code
            style={{
              background: "#eee",
              padding: "2px 6px",
              borderRadius: 4,
            }}
          >
            pages/index.js
          </code>{" "}
          to build out your homepage. Save the file and the browser will
          refresh automatically.
        </p>
      </main>
    </>
  );
}
