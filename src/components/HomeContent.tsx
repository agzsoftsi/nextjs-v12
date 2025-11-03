interface HomeContentProps {
  mode?: string;
  [key: string]: any;
}

export default function HomeContent(props: HomeContentProps) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>Microfrontend Next.js 12 — MF listo 🚀</h1>
      <p>Modo: {props.mode || "standalone"}</p>
      <p>Props recibidos: {JSON.stringify(props)}</p>
    </div>
  );
}
