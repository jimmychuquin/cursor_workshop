export const siteContent = {
  brand: {
    name: "tech-ec",
    tagline: "Tecnología que tu negocio de barrio puede usar mañana.",
  },
  nav: {
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proceso", href: "#proceso" },
      { label: "Clientes", href: "#clientes" },
      { label: "Trabajo", href: "#trabajo" },
      { label: "FAQ", href: "#faq" },
    ],
    contactCtaLabel: "Contáctame",
    contactCtaHref: "#contacto",
  },
  hero: {
    id: "inicio",
    titleLead: "Más reservas y menos caos operativo",
    titleHighlight: "para tu negocio local",
    titleTrail: "",
    subtitle:
      "Te ayudamos a que te encuentren, te escriban y vuelvan — sin que tengas que volverte experto en herramientas.",
    primaryCta: {
      label: "Contáctame",
      href: "mailto:jeims-sk@live.com",
    },
    secondaryCta: {
      label: "Ver cómo trabajamos",
      href: "#proceso",
    },
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=85",
      alt: "Personas trabajando juntas en una mesa con portátiles en un espacio de oficina luminoso.",
    },
  },
  about: {
    id: "acerca",
    title: "Menos promesas vacías, más plan claro",
    eyebrow: "Por qué tech-ec",
    paragraphs: [
      "Los negocios locales no necesitan otro PDF con features: necesitan saber qué cambia en su semana cuando alguien les deja la web, las citas o los mensajes ordenados.",
      "En tech-ec empezamos por tus objetivos reales: más tráfico a pie, más pedidos por WhatsApp, menos tiempo respondiendo lo mismo. Traducimos eso en entregables concretos y fechas que puedes revisar.",
      "Seguimos cerca después del lanzamiento: pequeños ajustes, mejoras cuando ves qué responde tu clientela y apoyo directo cuando algo falla.",
    ],
    pullQuote:
      "El mejor proyecto es el que tú entiendes y puedes sostener.",
  },
  services: {
    id: "servicios",
    title: "Tres formas de ganar terreno sin frenar tu operación",
    eyebrow: "Servicios",
    intro:
      "Cada bloque está pensado para que notes el impacto en ingresos o en horas recuperadas — no solo en \"tener una web\".",
    items: [
      {
        iconName: "Globe" as const,
        title: "Te encuentren y te elijan",
        description:
          "Páginas rápidas y claras en móvil, textos que invitan a escribir o llamar y estructura pensada para Google y para quien ya te conoce de la zona.",
      },
      {
        iconName: "Workflow" as const,
        title: "Menos trabajo repetitivo",
        description:
          "Flujos para citas, confirmaciones, respuestas iniciales y seguimiento de pedidos — adaptados a cómo ya usas WhatsApp o tu cuaderno.",
      },
      {
        iconName: "Headphones" as const,
        title: "Alguien al otro lado cuando falla algo",
        description:
          "Cambios de carta o horarios, métricas básicas que importan y mejoras cuando ves qué funciona. Sin tickets eternos ni lenguaje técnico innecesario.",
      },
    ],
  },
  process: {
    id: "proceso",
    eyebrow: "Cómo funciona",
    title: "De la primera llamada a medir resultados",
    subtitle:
      "Sin sorpresas: en cada etapa sabes qué recibes y qué necesitamos de tu lado.",
    steps: [
      {
        title: "Diagnóstico en lenguaje humano",
        body: "Revisamos canal actual, clientes ideales y cuellos de botella. Sales con prioridades claras y un rango de inversión alineado.",
      },
      {
        title: "Propuesta y entregables cerrados",
        body: "Definimos alcance, plazos y qué probamos antes de publicar. Si algo no aporta al objetivo, lo apartamos sin drama.",
      },
      {
        title: "Construcción y revisión contigo",
        body: "Avances visibles, espacio para tu feedback y pruebas en móvil real — donde suele vivir tu cliente.",
      },
      {
        title: "Publicación y ritual de mejora",
        body: "Te dejamos lo esencial documentado y acordamos revisiones cortas para afinar mensajes o conversiones según datos reales.",
      },
    ],
  },
  testimonials: {
    id: "clientes",
    eyebrow: "Prueba social",
    title: "Negocios como el tuyo ya lo notan en el día a día",
    items: [
      {
        quote:
          "Antes perdíamos pedidos por mensajes mezclados. Ahora tenemos un flujo simple y el equipo sabe qué responder primero.",
        name: "María Elena V.",
        role: "Dueña",
        business: "Cafetería de barrio, Quito norte",
      },
      {
        quote:
          "La web nueva no es solo bonita: la gente llega, ve el menú y nos llama. En dos meses subieron las reservas de fin de semana.",
        name: "Andrés C.",
        role: "Socio",
        business: "Restaurante familiar",
      },
      {
        quote:
          "Me explicaron todo sin jerga. Puedo pedir cambios y no siento que esté 'rompiendo' algo que no entiendo.",
        name: "Lucía P.",
        role: "Profesional independiente",
        business: "Consultorio / servicios",
      },
    ],
  },
  portfolio: {
    id: "trabajo",
    eyebrow: "Referencias",
    title: "Ejemplos del tipo de resultados que construimos",
    subtitle:
      "Casos representativos: nombres y cifras son ilustrativos y pueden adaptarse a tu sector.",
    imageCaption: "Referencia visual — sustituible por tu caso real.",
    items: [
      {
        title: "Marca de barrio con carta y pedidos por WhatsApp",
        category: "Restauración",
        description:
          "Sitio de una página con menú actualizable, CTAs a WhatsApp y textos optimizados para búsquedas locales.",
        image: {
          src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
          alt: "Interior acogedor de restaurante con mesas y luz cálida.",
        },
      },
      {
        title: "Servicio a domicilio con agenda ligera",
        category: "Operación local",
        description:
          "Formulario de solicitud, confirmación automática básica y página de confianza con reseñas y zonas de cobertura.",
        image: {
          src: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400&q=80",
          alt: "Equipo revisando un proyecto en pantallas en oficina abierta.",
        },
      },
      {
        title: "Profesional con captación y seguimiento simple",
        category: "Servicios",
        description:
          "Landing con propuesta clara, testimonios y un solo canal de contacto para no dispersar consultas.",
        image: {
          src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
          alt: "Espacio de trabajo minimalista con laptop y café.",
        },
      },
    ],
  },
  faq: {
    id: "faq",
    eyebrow: "FAQ",
    title: "Preguntas que suelen aparecer antes del sí",
    items: [
      {
        question: "¿Trabajan solo en Quito o también en otras ciudades?",
        answer:
          "Podemos trabajar remoto con la misma metodología. Lo importante es tener claros tus canales y tu público; las sesiones pueden ser por videollamada.",
      },
      {
        question: "¿Necesito ya tener dominio y hosting?",
        answer:
          "No es obligatorio desde el día uno. Te orientamos en opciones razonables y te decimos qué conviene comprar tú a nombre del negocio para que seas dueño de tus activos.",
      },
      {
        question: "¿Cuánto tarda un proyecto típico?",
        answer:
          "Una landing enfocada puede estar en pocas semanas si el contenido y las fotos están listos. Proyectos con automatizaciones dependen del alcance; en el diagnóstico te damos un calendario realista.",
      },
      {
        question: "¿Me van a dejar algo que no pueda actualizar?",
        answer:
          "Priorizamos que entiendas lo básico: cambiar textos, horarios o fotos. Si prefieres no tocar nada, también podemos acordar un ritmo de mantenimiento.",
      },
      {
        question: "¿Qué incluye el soporte después del lanzamiento?",
        answer:
          "Pequeños ajustes, monitorización básica y ayuda cuando algo falla. Los paquetes se adaptan al tamaño de tu operación — sin atarte a servicios que no vas a usar.",
      },
    ],
  },
  finalCta: {
    id: "contacto",
    title: "Cuéntanos qué te gustaría que pasara en 90 días",
    subtitle:
      "Un correo con tu rubro, tu zona y el problema principal basta para devolverte opciones concretas — sin compromiso.",
    button: {
      label: "Escribir ahora",
      href: "mailto:jeims-sk@live.com",
    },
    secondaryNote:
      "¿Urgente? Escríbenos por WhatsApp y priorizamos tu mensaje.",
  },
  footer: {
    linksColumnTitle: "Mapa del sitio",
    contactColumnTitle: "Contacto",
    email: "jeims-sk@live.com",
    tagline: "Soluciones digitales con los pies en el barrio.",
    whatsapp: {
      display: "098 338 0541",
      tel: "+593983380541",
      href: "https://wa.me/593983380541",
    },
    social: {
      instagram: {
        handle: "@jimmy_ed94",
        href: "https://www.instagram.com/jimmy_ed94",
      },
    },
    copyright: "© {year} tech-ec. Todos los derechos reservados.",
  },
} as const;

export type ServiceIconName =
  (typeof siteContent.services.items)[number]["iconName"];
