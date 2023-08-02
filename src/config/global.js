export default {
  global: {
    componenteFormativo: 'Atenciones al recién nacido en la RIAMP',
    descripcionCurso:
      'La preparación de la vida extrauterina y la adecuada adaptación neonatal requiere que, durante el proceso de cambios fisiológicos, el recién nacido tenga los cuidados no solo necesarios sino además óptimos, encontrados en las intervenciones orientadas desde la Ruta Integral de Atención Materno Perinatal que define las intervenciones para la niña y el niño recién nacido.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          'Atención integral al recién nacido en sala de partos (adaptación neonatal)',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tamizaje neonatal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Lactancia materna',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Consejería en lactancia materna',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Lactancia materna en situaciones difíciles',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reanimación neonatal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Atención del recién nacido',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/33110290_CF02_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Tamizaje neonatal ',
      referencia:
        'Ley 1980 de 2019. [Congreso de Colombia]. Por medio de la cual se crea el programa de tamizaje neonatal en Colombia. Julio 26 de 2019.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/Normatividad_Nuevo/Ley%201980%20de%202019.pdf',
    },
    {
      tema: 'Tamizaje neonatal ',
      referencia:
        'Ministerio de Salud y Protección social. (2020). Resolución por la cual se reglamenta el Programa de Tamizaje Neonatal en Colombia, se adoptan sus Lineamientos Técnicos y Operativos y se dictan otras disposiciones.',
      tipo: 'PDF',
      link:
        'https://consultorsalud.com/wp-content/uploads/2020/10/Programa-de-Tamizaje-Neonatal-en-Colombia.pdf',
    },
    {
      tema: 'Reanimación neonatal  ',
      referencia:
        'Rodríguez, A. (2023). <i>Reanimación Neonatal</i>. Escuela Nacional de Enfermería y Obstetricia. ',
      tipo: 'PDF',
      link:
        'http://www.eneo.unam.mx/rcp3/datos%20fuente/Manual%20de%20Reanimacion%20NEONATAL.pdf',
    },
    {
      tema: 'Atención del recién nacido ',
      referencia:
        'Resolución 3280 de 2018. [Ministerio de Salud y Protección Social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      tipo: 'PDF',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Atención',
      significado:
        'servicios recibidos por los individuos o las poblaciones para promover, mantener la salud.',
    },
    {
      termino: 'Derecho',
      significado:
        'es el conjunto de normas que imponen deberes y normas que confieren facultades, que establecen las bases de convivencia social.',
    },
    {
      termino: 'Infancia',
      significado:
        'etapa de la vida del hombre comprendida desde el nacimiento hasta la pubertad.',
    },
    {
      termino: 'Integrales',
      significado:
        'es la principal condición del desarrollo humano, es el estado del bienestar que permiten un adecuado crecimiento y desarrollo en todos los ámbitos de la vida y personas. ',
    },
    {
      termino: 'Lineamiento',
      significado:
        'documento en el cual se establecen directrices específicas o políticas internas asociadas a un tema, proceso o método en particular',
    },
    {
      termino: 'Materno perinatal',
      significado:
        'es el adecuado desarrollo de control prenatal y perinatal dicho control debe ser precoz, periódico, completo, de calidad, de amplia cobertura; siendo ofrecido a la mayor población posible y garantizando su fácil accesibilidad.',
    },
    {
      termino: 'Morbilidad',
      significado:
        'se refiere a la presentación de una enfermedad o síntoma de una enfermedad, o a la proporción de la enfermedad en una población.',
    },
    {
      termino: 'Mortalidad',
      significado:
        'estudia la frecuencia del número de defunciones ocurridas en una población, área geográfica y periodo determinado. ',
    },
    {
      termino: 'Normativa',
      significado:
        'es un conjunto de normas y reglas que tienen como finalidad, regular y asegurar las cantidades y características en la reproducción o servicio de los bienes de consumo entre personas físicas y/o jurídicas. ',
    },
    {
      termino: 'Políticas',
      significado:
        'configuran un dispositivo postmoderno que instrumentaliza ideologías manteniendo el poder y hegemonía, que no solo orienta un sector, sino que requieren mirarse desde un pensar crítico que profundice más allá de escenarios democráticos.',
    },
    {
      termino: 'RIAS',
      significado:
        'las rutas integrales de atención en salud definen las condiciones necesarias para asegurar la integridad en la atención por parte de los agentes del sistema de salud (territorio, asegurador, prestador) y de otros sectores.',
    },
    {
      termino: 'Riesgo',
      significado: 'contingencia o proximidad de un daño o peligro.',
    },
  ],
  referencias: [
    {
      referencia:
        'Flórez, S., Rubiano J., Molina C., Lozada, A. y Rocha, L. (2021). Tamizaje con oximetría de pulso en el diagnóstico de cardiopatías congénitas críticas en recién nacidos. <i>Revista Colombiana de Cardiología</i>.',
      link: 'https://doi.org/10.24875/rccar.m21000100',
    },
    {
      referencia:
        'Resolución número 3280 de 2018. [Ministerio de salud y protección social]. Por medio de la cual se adoptan los lineamientos técnicos y operativos de la Ruta Integral de Atención para la Promoción y Mantenimiento de la Salud y la Ruta Integral de Atención en Salud para la Población Materno Perinatal y se establecen las directrices para su operación. Agosto 2 de 2018.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/DE/DIJ/resolucion-3280-de-2018.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección social. (2020). Resolución por la cual se reglamenta el Programa de Tamizaje Neonatal en Colombia, se adoptan sus Lineamientos Técnicos y Operativos y se dictan otras disposiciones.',
      link:
        'https://consultorsalud.com/wp-content/uploads/2020/10/Programa-de-Tamizaje-Neonatal-en-Colombia.pdf',
    },
    {
      referencia:
        'NIH. (2019). ¿Hay casos o situaciones especiales en las que no debería amamantar?. espanol.nichd.nih.gov.',
      link:
        'https://espanol.nichd.nih.gov/salud/temas/breastfeeding/informacion/amamantar#:~:text=Si%20tiene%20alguna%20de%20las,el%20profesional%20de%20la%20salud%3A&text=Infecci%C3%B3n%20por%20VIH,tipo%20I%20o%20tipo%20II',
    },
    {
      referencia:
        'Rodríguez, A. (2023). <i>Reanimación Neonatal</i>. Escuela Nacional de Enfermería y Obstetricia.',
      link:
        'http://www.eneo.unam.mx/rcp3/datos%20fuente/Manual%20de%20Reanimacion%20NEONATAL.pdf',
    },
    {
      referencia:
        'Vivas, M. A. (2020) Así funcionará el programa de tamizaje neonatal en Colombia. Consultor Salud.',
      link:
        'https://consultorsalud.com/asi-funcionara-el-programa-de-tamizaje-neonatal-en-colombia/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Efraín Gómez Matamoros',
          cargo: 'Experto Temático',
          centro:
            'Regional Distrito Capital / Centro de Formación de Talento Humano en Salud',
        },
        {
          nombre: 'Luz Aida Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital- Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Asesora Metodológica',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrección de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yerson Fabian Zarate Saavedra',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Edward Leonardo Pico Cabra',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cácere',
          cargo: 'Storyboard e Ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
