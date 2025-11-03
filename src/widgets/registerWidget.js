(function () {
  if (typeof window === "undefined") return;

  window.widgets = window.widgets || {};

  window.widgets.MySpa = {
    default: {
      render: function (props = {}) {
        console.log("Renderizando widget MySpa con props:", props);
        var id = "MySpa";
        var container = document.getElementById(id);
        if (!container) {
          container = document.createElement("div");
          container.id = id;
          document.body.appendChild(container);
        }

        // Compatibilidad con entorno Next 10 padre
        try {
          var nextData = document.createElement("script");
          nextData.id = "__NEXT_DATA__";
          nextData.type = "application/json";
          nextData.text = JSON.stringify({ props: { pageProps: props } });
          container.appendChild(nextData);
        } catch (e) {
          console.warn("No se pudo insertar __NEXT_DATA__", e);
        }

        // Montar el componente
        if (window.MySpaMount) {
          window.MySpaMount(container, props);
        } else {
          console.error(
            "No se encontró MySpaMount. ¿Está importado mount.tsx?"
          );
        }
      },
    },
  };
})();
