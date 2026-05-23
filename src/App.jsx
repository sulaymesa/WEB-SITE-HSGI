function App() {
  const year = new Date().getFullYear();

  const servicios = [
    "Diseño hidrosanitario bajo metodología BIM",
    "Diseño de redes de gas",
    "Diseño de redes de protección contra incendio",
    "Diseño de acueductos",
    "Diseño de alcantarillado pluvial y sanitario",
    "Modelado y coordinación BIM para proyectos constructivos"
  ];

  const propuestaValor = [
    {
      titulo: "Especialización técnica de nicho",
      texto: "Integramos ingeniería de conducción de fluidos con modelado BIM tridimensional para proyectos de vivienda, institucionales, industriales y comerciales."
    },
    {
      titulo: "Alineación con ISO 19650",
      texto: "Trabajamos bajo principios de gestión estructurada de la información, facilitando procesos claros, trazables y colaborativos."
    },
    {
      titulo: "Coordinación digital remota",
      texto: "Rompemos fronteras mediante flujos digitales, trabajo colaborativo y coordinación eficiente con equipos de diseño, obra y consultoría."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.jpg" alt="Logo HSGI Ingeniería SAS" className="h-12 w-auto" />
          </a>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
            <a href="#problema" className="hover:text-hsgiBlue">Problema</a>
            <a href="#solucion" className="hover:text-hsgiBlue">Solución</a>
            <a href="#servicios" className="hover:text-hsgiBlue">Servicios</a>
            <a href="#clientes" className="hover:text-hsgiBlue">Clientes</a>
            <a href="#contacto" className="hover:text-hsgiBlue">Contacto</a>
          </div>

          <a href="#contacto" className="btn-primary hidden sm:inline-flex">
            Contáctanos
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-br from-white via-hsgiSoft to-blue-50"
      >
        <div className="absolute top-20 right-0 w-72 h-72 bg-hsgiBlue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-hsgiGreen/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="inline-flex px-4 py-2 rounded-full bg-white border border-hsgiBlue/30 text-sm font-semibold text-hsgiDark mb-6">
              Consultoría BIM en conducción de fluidos
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-hsgiDark">
              HSGI INGENIERÍA SAS
            </h1>

            <p className="mt-6 text-2xl md:text-3xl font-semibold text-gray-700">
              Ingeniería con propósito. Precisión BIM para construir el futuro.
            </p>

            <p className="mt-6 section-text max-w-xl">
              Diseñamos redes hidrosanitarias, gas, incendio, acueducto y alcantarillado
              bajo metodología BIM para proyectos de vivienda, institucionales, industriales
              y comerciales en Latinoamérica.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="btn-primary">
                Contáctanos
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] shadow-2xl p-8 border border-gray-100">
            <img
              src="/logo.jpg"
              alt="HSGI Ingeniería SAS"
              className="w-full max-w-md mx-auto"
            />

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl bg-hsgiSoft p-5 text-center">
                <p className="text-3xl font-extrabold text-hsgiDark">12+</p>
                <p className="text-sm text-gray-600">años de experiencia</p>
              </div>

              <div className="rounded-2xl bg-hsgiSoft p-5 text-center">
                <p className="text-3xl font-extrabold text-hsgiDark">500k+</p>
                <p className="text-sm text-gray-600">m² diseñados en BIM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMA */}
      <section id="problema" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
              El problema del mercado
            </p>
            <h2 className="section-title">
              La construcción avanza hacia BIM, pero faltan firmas especializadas.
            </h2>
          </div>

          <p className="section-text">
            El sector de la construcción en Latinoamérica experimenta una transformación
            impulsada por mandatos de digitalización. Diversos países avanzan en la exigencia
            de metodologías BIM para proyectos de infraestructura y edificación. Sin embargo,
            el mercado presenta una escasez de firmas de ingeniería capaces de integrar la
            complejidad de las redes de conducción de fluidos con la precisión tridimensional,
            colaborativa y documentada que exige BIM.
          </p>
        </div>
      </section>

      {/* SOLUCIÓN */}
      <section id="solucion" className="py-24 bg-hsgiSoft">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
              Nuestra solución
            </p>
            <h2 className="section-title">
              Servicios BIM especializados en conducción de fluidos.
            </h2>
            <p className="section-text">
              HSGI entrega servicios BIM especializados mediante coordinación digital remota,
              bajo estándares asociados a ISO 19650, reduciendo incompatibilidades, reprocesos
              y tiempos de coordinación constructiva.
            </p>
          </div>
        </div>
      </section>

      {/* PROPUESTA DE VALOR */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
            Propuesta de valor
          </p>
          <h2 className="section-title max-w-3xl">
            Una firma especializada para proyectos que necesitan precisión, confianza y cumplimiento.
          </h2>

          <div className="grid md:grid-cols-3 gap-7 mt-10">
            {propuestaValor.map((item, index) => (
              <article className="card" key={index}>
                <div className="w-12 h-12 rounded-2xl bg-hsgiBlue/20 flex items-center justify-center font-bold text-hsgiDark mb-5">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{item.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 bg-hsgiDark text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-hsgiGreen mb-3">
            Productos y servicios
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Diseños hidrosanitarios, gas, incendio, acueducto y alcantarillado bajo BIM.
          </h2>
          <p className="text-gray-300 max-w-3xl text-lg leading-relaxed">
            Desarrollamos soluciones técnicas con estándares internacionales para nuevos
            desarrollos urbanísticos, vivienda, proyectos institucionales, industriales
            y comerciales.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/10 border border-white/10 p-6"
              >
                <p className="font-semibold">{servicio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MODELO DE NEGOCIO Y CLIENTE */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <article className="card">
            <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
              Modelo de negocio
            </p>
            <h2 className="text-2xl font-bold mb-4">B2B digital de alto valor agregado</h2>
            <p className="text-gray-600 leading-relaxed">
              El proyecto opera bajo un modelo B2B digital orientado a servicios especializados,
              apalancado en infraestructura en la nube, coordinación remota, experiencia técnica
              y propiedad intelectual acumulada por la empresa. Los ingresos provienen de venta
              directa o a través de aliados estratégicos.
            </p>
          </article>

          <article className="card">
            <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
              Cliente objetivo
            </p>
            <h2 className="text-2xl font-bold mb-4">Constructoras, consultoras e inversionistas</h2>
            <p className="text-gray-600 leading-relaxed">
              HSGI se dirige a empresas del sector construcción, firmas de consultoría,
              desarrolladores inmobiliarios y organizaciones que requieren tercerizar diseños
              técnicos BIM en hidrosanitario, gas, incendio, acueducto y alcantarillado.
            </p>
          </article>
        </div>
      </section>

      {/* VALIDACIÓN */}
      <section className="py-24 bg-gradient-to-br from-hsgiSoft to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
            Validación del prototipo
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold text-hsgiDark">
            Más de 500.000 m²
          </h2>
          <p className="mt-5 text-xl text-gray-600">
            construidos y diseñados bajo metodología BIM en Colombia.
          </p>
        </div>
      </section>

      {/* CLIENTES */}
      <section id="clientes" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
            Confianza empresarial
          </p>
          <h2 className="section-title">
            Algunos de nuestros clientes
          </h2>

          <div className="mt-10 bg-white rounded-3xl shadow-xl border border-gray-100 p-5">
            <img
              src="/clientes.png"
              alt="Clientes actuales de HSGI Ingeniería SAS"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="py-24 bg-hsgiSoft">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-hsgiBlue mb-3">
              Contacto
            </p>
            <h2 className="section-title">
              Hablemos de tu próximo proyecto BIM.
            </h2>
            <p className="section-text">
              Déjanos tus datos y nuestro equipo podrá contactarte para revisar las necesidades
              técnicas de tu proyecto.
            </p>

            <div className="mt-8 rounded-3xl bg-white p-6 shadow-lg">
              <p className="font-bold text-hsgiDark">HSGI INGENIERÍA SAS</p>
              <p className="text-gray-600 mt-2">
                Consultoría en conducción de fluidos.
              </p>
              <p className="text-gray-600 mt-2">
                Canales digitales: LinkedIn y página web.
              </p>
            </div>
          </div>

          <form className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
            <div className="grid gap-5">
              <input
                type="text"
                placeholder="Nombre"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hsgiBlue"
              />

              <input
                type="email"
                placeholder="Correo"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hsgiBlue"
              />

              <input
                type="text"
                placeholder="Compañía"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hsgiBlue"
              />

              <input
                type="tel"
                placeholder="Teléfono"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hsgiBlue"
              />

              <textarea
                placeholder="Cuéntanos brevemente sobre tu proyecto"
                rows="4"
                className="w-full rounded-xl border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-hsgiBlue"
              ></textarea>

              <button type="button" className="btn-primary w-full">
                Contáctanos
              </button>

              <p className="text-xs text-gray-500 text-center">
                Este formulario es demostrativo para el prototipo. Para recibir mensajes reales,
                se puede conectar posteriormente con EmailJS, Formspree o un backend.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-hsgiDark text-white py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 items-center">
          <div className="text-center md:text-left">
            <p className="font-bold text-xl">HSGI INGENIERÍA SAS</p>
            <p className="text-gray-300 text-sm mt-1">
              Consultoría en conducción de fluidos.
            </p>
          </div>

          <p className="text-gray-300 text-sm">
            © {year} HSGI INGENIERÍA SAS. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default App;
``
