export type ServiceSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  cardDescription: string;
  intro: string;
  ctaLabel?: string;
  sections: ServiceSection[];
  faq: ServiceFaq[];
};

const placeholderSections: ServiceSection[] = [
  {
    title: "¿Qué es este tratamiento?",
    paragraphs: [
      "[Pendiente de redacción] Describe aquí en qué consiste el servicio, para quién está indicado y cómo puede ayudar al paciente.",
    ],
  },
  {
    title: "Beneficios principales",
    bullets: [
      "[Pendiente] Beneficio 1.",
      "[Pendiente] Beneficio 2.",
      "[Pendiente] Beneficio 3.",
    ],
  },
  {
    title: "¿Qué dolencias tratamos?",
    bullets: [
      "[Pendiente] Dolencia o caso clínico 1.",
      "[Pendiente] Dolencia o caso clínico 2.",
      "[Pendiente] Dolencia o caso clínico 3.",
    ],
  },
  {
    title: "¿Cómo es el tratamiento?",
    paragraphs: [
      "[Pendiente de redacción] Explica la evaluación inicial, cómo se aplica el tratamiento y con qué técnicas se combina.",
    ],
  },
];

const placeholderFaq: ServiceFaq[] = [
  {
    question: "¿Cuántas sesiones suelen ser necesarias?",
    answer: "[Pendiente] Respuesta orientativa según valoración individual.",
  },
  {
    question: "¿Es un tratamiento doloroso?",
    answer: "[Pendiente] Respuesta adaptada al servicio y perfil del paciente.",
  },
  {
    question: "¿Se puede combinar con otras terapias?",
    answer: "[Pendiente] Indica combinaciones recomendadas en clínica.",
  },
];

export const servicesCatalog: ServiceDetail[] = [
  {
    slug: "electropuncion",
    title: "Electropunción",
    cardDescription: "Estimulación eléctrica para aliviar el dolor muscular.",
    intro:
      "La electropunción es una técnica innovadora en el ámbito de la fisioterapia que combina los beneficios de la acupuntura y la electroterapia para tratar el dolor, mejorar la funcionalidad y acelerar la recuperación de diversas dolencias. En Rouco Fisioterapia, somos especialistas en esta técnica avanzada, ofreciendo tratamientos personalizados para nuestros pacientes en San Fernando de Henares, Coslada, Torrejón de Ardoz y otras localidades cercanas de Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la electropunción?",
        paragraphs: [
          "La electropunción es un método terapéutico que utiliza pequeñas agujas similares a las de la acupuntura, a las que se les aplica una corriente eléctrica controlada. Este procedimiento busca estimular los puntos clave del cuerpo para aliviar tensiones, reducir el dolor y promover la regeneración de tejidos.",
          "A diferencia de otras técnicas, la punción seca y electropunción permite una estimulación más profunda y localizada de los músculos, tendones y tejidos blandos, siendo especialmente eficaz en el tratamiento de dolores crónicos, lesiones deportivas y problemas musculoesqueléticos.",
        ],
      },
      {
        title: "Beneficios de la electropunción en fisioterapia",
        bullets: [
          "Alivio eficaz del dolor: La estimulación eléctrica bloquea las señales de dolor, proporcionando un alivio casi inmediato en muchas dolencias.",
          "Mejora de la circulación sanguínea: Favorece la oxigenación y el aporte de nutrientes en los tejidos, acelerando la recuperación.",
          "Reducción de la inflamación: Ideal para tratar lesiones inflamatorias y reducir el malestar asociado.",
          "Estimulación muscular profunda: Ayuda a relajar músculos tensos o espasmódicos, promoviendo su funcionalidad.",
          "Tratamiento personalizado: La intensidad y localización del estímulo se ajustan a las necesidades específicas de cada paciente.",
        ],
      },
      {
        title: "¿Qué dolencias tratamos con electropunción?",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos la electropunción para abordar diversas dolencias, entre ellas:",
        ],
        bullets: [
          "Dolor crónico: Tratamos problemas como la fibromialgia, dolores de espalda y cervicales persistentes.",
          "Lesiones deportivas: Tendinitis, contracturas musculares y esguinces, entre otras lesiones comunes en deportistas.",
          "Dolores neuropáticos: Alivio de molestias causadas por nervios comprimidos, como la ciática.",
          "Síndrome de dolor miofascial: Tratamos puntos gatillo que generan dolor irradiado.",
          "Artritis y artrosis: Reducimos la inflamación y el dolor en articulaciones afectadas.",
        ],
      },
      {
        title: "¿Cómo se realiza una sesión de fisioterapia con electropunción?",
        paragraphs: [
          "El tratamiento comienza con una evaluación detallada de tu condición para identificar las áreas problemáticas. Luego, se colocan las agujas en puntos específicos del cuerpo, conectándolas a un dispositivo de electroestimulación con pinzas. Durante la sesión, sentirás una leve vibración o impulso eléctrico, que es completamente controlado y adaptado a tu tolerancia.",
          "Cada sesión tiene una duración aproximada de 45 minutos. Además, la electropunción seca se combina con otras técnicas de fisioterapia, como terapia manual, estiramientos o ejercicios personalizados, para potenciar sus beneficios y abordar de manera integral las necesidades del paciente.",
        ],
      },
      {
        title: "Recupera tu bienestar con electropunción en Rouco Fisioterapia",
        paragraphs: [
          "No permitas que el dolor limite tu vida diaria. En Rouco Fisioterapia, contamos con las técnicas más avanzadas y un equipo de especialistas comprometidos con tu salud. Contacta con nosotros y reserva tu cita hoy mismo.",
        ],
      },
    ],
    faq: [
      {
        question: "¿La electropunción es dolorosa?",
        answer: "La mayoría de los pacientes describen la sensación como un ligero hormigueo o pulsación. Aunque el uso de agujas pueda generar temor, el procedimiento es mínimamente invasivo y bien tolerado.",
      },
      {
        question: "¿Quién puede beneficiarse de la electropunción?",
        answer: "Puede beneficiar a personas con dolor crónico, lesiones deportivas, contracturas, dolor miofascial o molestias neuropáticas, siempre tras valoración individual del fisioterapeuta.",
      },
      {
        question: "¿Cuántas sesiones se necesitan para notar resultados?",
        answer: "Depende de la dolencia y su evolución, pero en muchos casos se percibe mejoría en las primeras sesiones dentro de un plan de tratamiento personalizado.",
      },
      {
        question: "¿Es segura la electropunción?",
        answer: "Sí, cuando se aplica por profesionales cualificados y con una evaluación previa adecuada, es una técnica segura y controlada.",
      },
      {
        question: "¿Puede combinarse la electropunción con otros tratamientos?",
        answer: "Sí. Habitualmente se combina con terapia manual, estiramientos y ejercicio terapéutico para mejorar los resultados de forma integral.",
      },
    ],
  },
  {
    slug: "kinesiotaping",
    title: "Kinesiotaping",
    cardDescription: "Vendaje funcional para soporte y recuperación muscular.",
    intro:
      "El kinesiotaping es una técnica innovadora de vendaje terapéutico utilizada en fisioterapia para aliviar el dolor, mejorar la movilidad y prevenir lesiones. En Rouco Fisioterapia, empleamos el kinesiotaping como complemento ideal en nuestros tratamientos, ayudando a los pacientes de San Fernando de Henares, Coslada, Torrejón de Ardoz y otras localidades cercanas de Madrid a recuperar su bienestar.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es el kinesiotaping?",
        paragraphs: [
          "El kinesiotaping es una técnica innovadora de vendaje terapéutico utilizada en fisioterapia para aliviar el dolor, mejorar la movilidad y prevenir lesiones. En Rouco Fisioterapia, empleamos el kinesiotaping como complemento ideal en nuestros tratamientos, ayudando a los pacientes de San Fernando de Henares, Coslada, Torrejón de Ardoz y otras localidades cercanas de Madrid a recuperar su bienestar.",
        ],
      },
      {
        title: "Beneficios del kinesiotaping",
        paragraphs: [
          "El kinesiotaping ofrece múltiples beneficios terapéuticos, tanto en el tratamiento como en la prevención de lesiones:",
        ],
        bullets: [
          "Alivio del dolor: Reduce la presión sobre los receptores del dolor, proporcionando un alivio inmediato.",
          "Mejora de la circulación: Facilita el drenaje linfático y la eliminación de líquidos acumulados.",
          "Estabilización muscular y articular: Ofrece soporte sin limitar el rango de movimiento.",
          "Reducción de la inflamación: Ideal para tratar edemas y hematomas.",
          "Prevención de lesiones: Protege músculos y articulaciones durante actividades deportivas o diarias.",
          "Corrección postural: Ayuda a mejorar la alineación corporal, reduciendo tensiones innecesarias.",
        ],
      },
      {
        title: "¿Qué dolencias tratamos con kinesiotaping?",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos el kinesiotaping para tratar una amplia variedad de dolencias, entre ellas:",
        ],
        bullets: [
          "Lesiones deportivas: Esguinces, roturas fibrilares y sobrecargas musculares.",
          "Dolores de espalda y cuello: Alivio de tensiones musculares y contracturas.",
          "Edemas y hematomas: Mejora del drenaje linfático tras traumatismos.",
          "Tendinitis y fascitis plantar: Reducción de la inflamación y alivio del dolor.",
          "Problemas posturales: Corrección de desequilibrios musculares y mejora de la postura corporal.",
        ],
      },
      {
        title: "¿Cómo se realiza un tratamiento con kinesiotaping?",
        paragraphs: [
          "El proceso comienza con una evaluación personalizada para identificar las áreas afectadas y las necesidades específicas del paciente. Luego, el fisioterapeuta aplica las cintas siguiendo técnicas específicas que pueden variar según el objetivo del tratamiento:",
        ],
        bullets: [
          "Aplicación de alivio muscular: Para reducir la tensión y mejorar la flexibilidad.",
          "Soporte articular: Para estabilizar las articulaciones y prevenir lesiones.",
          "Drenaje linfático: Para facilitar la eliminación de líquidos acumulados.",
          "Corrección postural: Para realinear el cuerpo y mejorar la postura.",
        ],
      },
      {
        title: "Recupera tu bienestar con kinesiotaping en Rouco Fisioterapia",
        paragraphs: [
          "En Rouco Fisioterapia, combinamos las técnicas más avanzadas para ayudarte a alcanzar tus objetivos de salud. Contacta con nosotros y descubre cómo el kinesiotaping puede marcar la diferencia en tu recuperación.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es doloroso el kinesiotaping?",
        answer: "No, su aplicación no suele ser dolorosa y está diseñada para mejorar el confort del paciente.",
      },
      {
        question: "¿Cuánto tiempo se puede llevar el kinesiotaping?",
        answer: "Normalmente varios días, según la zona tratada y la indicación del fisioterapeuta.",
      },
      {
        question: "¿Quién puede beneficiarse del kinesiotaping?",
        answer: "Personas con dolor muscular o articular, deportistas y pacientes en procesos de recuperación funcional.",
      },
      {
        question: "¿El kinesiotaping sustituye otros tratamientos?",
        answer: "No, normalmente se utiliza como complemento dentro de un plan terapéutico personalizado.",
      },
      {
        question: "¿Es seguro usar kinesiotaping durante el embarazo?",
        answer: "Sí, siempre que sea aplicado por un fisioterapeuta cualificado y adaptado a las necesidades de la paciente.",
      },
    ],
  },
  {
    slug: "ejercicio-terapeutico",
    title: "Ejercicio Terapéutico",
    cardDescription: "Programas de ejercicio para rehabilitación activa.",
    intro:
      "El ejercicio terapéutico es una herramienta clave en fisioterapia para tratar y prevenir disfunciones musculoesqueléticas, mejorar la movilidad y fortalecer el cuerpo. En Rouco Fisioterapia, diseñamos programas personalizados de ejercicio terapéutico para ayudarte a alcanzar tus objetivos de salud y bienestar. Nuestros servicios están disponibles en San Fernando de Henares, Coslada, Torrejón de Ardoz y localidades cercanas de Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es el ejercicio terapéutico?",
        paragraphs: [
          "El ejercicio terapéutico en fisioterapia consiste en la realización de movimientos específicos diseñados por un fisioterapeuta para mejorar la funcionalidad del cuerpo, aliviar el dolor y prevenir lesiones. Este tipo de ejercicios se adapta a las necesidades individuales de cada paciente, considerando su condición física, edad y objetivos.",
          "A través de una planificación estructurada, el ejercicio terapéutico permite fortalecer músculos, mejorar la flexibilidad, corregir desequilibrios posturales y optimizar el rendimiento físico en actividades diarias o deportivas.",
        ],
      },
      {
        title: "Beneficios del ejercicio terapéutico",
        bullets: [
          "Alivio del dolor crónico: Mejora la funcionalidad de las áreas afectadas, reduciendo la sensación de dolor.",
          "Prevención de lesiones: Fortalece músculos y articulaciones, minimizando el riesgo de recaídas o nuevas lesiones.",
          "Mejora de la postura corporal: Corrige desalineaciones y previene problemas relacionados con malas posturas.",
          "Incremento de la fuerza y resistencia: Ayuda a recuperar la fuerza muscular tras lesiones o inmovilizaciones.",
          "Flexibilidad y movilidad articular: Facilita el movimiento y reduce la rigidez en músculos y articulaciones.",
          "Rehabilitación integral: Es ideal para complementar otros tratamientos, como masajes terapéuticos o técnicas de fisioterapia avanzada.",
        ],
      },
      {
        title: "¿Qué dolencias tratamos con ejercicio terapéutico?",
        paragraphs: [
          "En Rouco Fisioterapia, empleamos el ejercicio terapéutico para abordar diversas condiciones, entre ellas:",
        ],
        bullets: [
          "Dolor lumbar y cervical: Ejercicios para fortalecer la musculatura estabilizadora y reducir el dolor.",
          "Lesiones deportivas: Recuperación funcional tras esguinces, roturas fibrilares o tendinitis.",
          "Artritis y artrosis: Mejoramos la movilidad y reducimos el impacto de estas condiciones degenerativas.",
          "Recuperación postquirúrgica: Rehabilitación tras cirugías ortopédicas para recuperar la funcionalidad.",
          "Desequilibrios musculares y posturales: Corregimos asimetrías y potenciamos el equilibrio corporal.",
        ],
      },
      {
        title: "¿Cómo se realiza un programa de ejercicio terapéutico?",
        paragraphs: [
          "El tratamiento comienza con una evaluación exhaustiva para determinar tus necesidades específicas. A partir de este análisis, diseñamos un plan de ejercicios terapéuticos personalizados que pueden incluir:",
        ],
        bullets: [
          "Ejercicios de fortalecimiento muscular: Dirigidos a grupos musculares específicos.",
          "Estiramientos terapéuticos: Para mejorar la flexibilidad y reducir tensiones musculares.",
          "Movilización articular: Ejercicios suaves para recuperar la movilidad de las articulaciones.",
          "Trabajo de equilibrio y coordinación: Para mejorar el control motor y prevenir caídas.",
        ],
      },
      {
        title: "Recupera tu movilidad y bienestar con ejercicio terapéutico en Rouco Fisioterapia",
        paragraphs: [
          "En Rouco Fisioterapia, te ayudamos a recuperar tu salud y prevenir futuras dolencias con programas personalizados. Contacta con nosotros y comienza a trabajar en tu bienestar desde hoy.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es seguro realizar ejercicio terapéutico si tengo dolor?",
        answer: "Sí, siempre que sea supervisado por un fisioterapeuta cualificado. El ejercicio terapéutico se diseña específicamente para evitar agravar el dolor y promover la recuperación.",
      },
      {
        question: "¿Cuánto tiempo tarda en notarse una mejoría?",
        answer: "Depende del tipo de lesión, el estado inicial y la constancia, pero en muchos casos se perciben avances durante las primeras semanas.",
      },
      {
        question: "¿Puedo combinar el ejercicio terapéutico con otros tratamientos?",
        answer: "Sí. Suele combinarse con terapia manual, electroterapia o punción seca para potenciar resultados y acelerar la recuperación.",
      },
      {
        question: "¿El ejercicio terapéutico es adecuado para todas las edades?",
        answer: "Sí, se adapta a cada etapa de la vida y condición física, desde personas jóvenes hasta adultos mayores.",
      },
      {
        question: "¿Qué ropa debo llevar para las sesiones?",
        answer: "Ropa cómoda y flexible que permita moverte con facilidad. Calzado deportivo estable suele ser recomendable.",
      },
    ],
  },
  {
    slug: "terapia-manual",
    title: "Terapia Manual",
    cardDescription: "Técnicas manuales especializadas para tratar disfunciones.",
    intro:
      "La Terapia Manual Neuro-Ortopédica es un enfoque avanzado dentro de la fisioterapia que combina técnicas especializadas para abordar tanto las restricciones mecánicas como las disfunciones del sistema nervioso. En Rouco Fisioterapia, adaptamos estas técnicas a tus necesidades individuales, promoviendo la recuperación del movimiento, el alivio del dolor y la mejora de la funcionalidad corporal. Estamos ubicados en San Fernando de Henares y atendemos a pacientes de Coslada, Torrejón de Ardoz y municipios cercanos en Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la Terapia Manual Neuro-Ortopédica?",
        paragraphs: [
          "La fisioterapia manual ortopédica integra el tratamiento de disfunciones musculoesqueléticas y neurológicas mediante técnicas manuales. Su objetivo principal es restaurar el equilibrio entre el sistema nervioso y el aparato locomotor, abordando tanto las restricciones articulares como las alteraciones en la conducción nerviosa.",
          "El fisioterapeuta analiza minuciosamente la interacción entre músculos, articulaciones y nervios para identificar bloqueos, tensiones o patrones de dolor. Posteriormente, aplica técnicas manuales avanzadas que optimizan la movilidad articular, liberan restricciones nerviosas y reducen el dolor, promoviendo una recuperación integral.",
        ],
      },
      {
        title: "Técnicas utilizadas en Terapia Manual Neuro-Ortopédica",
        bullets: [
          "Movilización Neurodinámica: Alivia tensiones en los nervios periféricos, como el ciático o el mediano, mejorando su funcionalidad y reduciendo dolores irradiados.",
          "Movilización Articular: Recupera el rango de movimiento articular afectado por rigidez o bloqueos mecánicos.",
          "Manipulación Ortopédica: Ajustes específicos y controlados para liberar restricciones en las articulaciones.",
          "Técnicas Miotensivas: Relajan y fortalecen músculos mediante estímulos neuromusculares precisos.",
          "Liberación Miofascial: Reduce restricciones en los tejidos blandos y mejora la movilidad global.",
          "Masaje Neuro-Ortopédico Funcional: Combina la relajación muscular con la mejora de la circulación y la reducción del estrés neuromuscular.",
        ],
      },
      {
        title: "Beneficios de la Terapia Manual Neuro-Ortopédica",
        paragraphs: [
          "La terapia manual ortopédica aporta beneficios que combinan la mejora mecánica y neurológica:",
        ],
        bullets: [
          "Alivio del dolor musculoesquelético y neuropático: Reduce molestias tanto en músculos y articulaciones como en los nervios afectados.",
          "Restauración de la movilidad integral: Aumenta el rango de movimiento al liberar restricciones articulares y nerviosas.",
          "Optimización de la función nerviosa: Mejora la circulación y la conductividad de los nervios comprimidos o irritados.",
          "Prevención de recaídas: Corrige desequilibrios musculares y neurológicos para reducir riesgos de nuevas lesiones.",
          "Mejora de la calidad de vida: Permite realizar actividades diarias sin dolor ni limitaciones.",
        ],
      },
      {
        title: "Dolencias tratadas con la Terapia Manual",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos esta especialización para tratar:",
        ],
        bullets: [
          "Dolores irradiados por compresión nerviosa: Como la ciática o el síndrome del túnel carpiano.",
          "Rigidez articular y muscular: Asociada a lesiones, posturas inadecuadas o patologías crónicas.",
          "Síndrome de dolor miofascial: Con puntos gatillo que generan dolor local e irradiado.",
          "Alteraciones neuromusculares: Como espasmos musculares o pérdida de coordinación.",
          "Problemas derivados de lesiones deportivas: Incluyendo tendinopatías y esguinces que afectan la función nerviosa y articular.",
        ],
      },
      {
        title: "No dejes que el dolor o la rigidez limiten tu día a día",
        paragraphs: [
          "En Rouco Fisioterapia, te ayudamos a recuperar tu bienestar con técnicas avanzadas de terapia manual ortopédica para el tratamiento del dolor. Ponte en contacto con nosotros para reservar tu cita y empieza a sentirte mejor desde hoy.",
        ],
      },
    ],
    faq: [
      {
        question: "¿En qué se diferencia la terapia manual de otras técnicas de fisioterapia?",
        answer: "La terapia manual utiliza exclusivamente las manos del fisioterapeuta para movilizar y tratar músculos, articulaciones y tejidos blandos, mientras que otras técnicas pueden incluir máquinas, ejercicios o herramientas específicas.",
      },
      {
        question: "¿Es dolorosa la terapia manual o tiene algún efecto secundario?",
        answer: "Por lo general es bien tolerada. En algunas personas puede aparecer una leve molestia temporal tras la sesión, que suele remitir en poco tiempo.",
      },
      {
        question: "¿Cuánto dura una sesión de terapia manual?",
        answer: "Habitualmente entre 45 y 60 minutos, en función de la valoración y de los objetivos terapéuticos.",
      },
      {
        question: "¿La terapia manual es adecuada para todas las edades?",
        answer: "Sí, se adapta a cada paciente según edad, estado físico y condición clínica.",
      },
      {
        question: "¿Se puede utilizar la terapia manual para tratar lesiones deportivas?",
        answer: "Sí. Es una herramienta eficaz para recuperar movilidad, reducir dolor y mejorar función en lesiones deportivas.",
      },
      {
        question: "¿Qué ropa debo llevar para una sesión de terapia manual?",
        answer: "Ropa cómoda que permita el acceso a la zona a tratar y facilite el movimiento durante la valoración y tratamiento.",
      },
      {
        question: "¿Cuánto tiempo tarda en notarse una mejoría con terapia manual?",
        answer: "Depende de cada caso, pero en muchos pacientes se observa mejoría desde las primeras sesiones.",
      },
      {
        question: "¿Es posible combinar la terapia manual con otros tratamientos como punción seca o ejercicios terapéuticos?",
        answer: "Sí. De hecho, combinar técnicas suele mejorar los resultados y acelerar la recuperación.",
      },
      {
        question: "¿Qué condiciones no son aptas para tratarse con terapia manual?",
        answer: "Algunas patologías agudas, infecciones, fracturas recientes u otras contraindicaciones requieren valoración previa para decidir el enfoque más seguro.",
      },
      {
        question: "¿Cómo puedo saber si necesito terapia manual para mi dolor o problema físico?",
        answer: "La forma adecuada es realizar una valoración fisioterapéutica completa para determinar si la terapia manual es indicada en tu caso.",
      },
    ],
  },
  {
    slug: "puncion-seca",
    title: "Punción Seca",
    cardDescription: "Tratamiento de puntos gatillo para aliviar contracturas.",
    intro:
      "¡No dejes que el dolor te detenga! La punción seca es una técnica de fisioterapia innovadora y eficaz para tratar dolores musculares y contracturas de forma inmediata. En Rouco Fisioterapia, ubicada en San Fernando de Henares, ofrecemos este tratamiento a pacientes de Madrid y municipios cercanos como Coslada y Torrejón de Ardoz, con resultados inmediatos que mejoran tu calidad de vida.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la punción seca?",
        paragraphs: [
          "La punción seca es una técnica avanzada de fisioterapia que consiste en la introducción de una aguja muy fina directamente en los puntos gatillo miofasciales dentro del músculo. Estos puntos gatillo son áreas hiperirritables que pueden causar dolor y disfunción muscular debido a sobrecargas, lesiones o malas posturas. Al insertar la aguja en el punto gatillo, se provoca una contracción involuntaria del músculo, conocida como respuesta de espasmo local, lo que ayuda a liberar la tensión acumulada, reduciendo el dolor y mejorando la función muscular.",
          "Este procedimiento es indoloro y no requiere de medicación, lo que lo convierte en una técnica natural y segura para el tratamiento del dolor. Tras la sesión, muchos pacientes notan una mejora significativa en su movilidad y una reducción del malestar muscular.",
        ],
      },
      {
        title: "Tipos de punción seca",
        bullets: [
          "Punción seca superficial: La aguja penetra solo 1 cm en la piel y tejidos subcutáneos, relajando los músculos superficiales y aliviando el dolor leve.",
          "Punción seca profunda: La aguja se inserta profundamente hasta alcanzar el punto gatillo dentro del músculo, lo que es más efectivo para contracturas musculares crónicas y dolores persistentes.",
        ],
      },
      {
        title: "Beneficios de la punción seca",
        paragraphs: [
          "La punción seca proporciona una serie de beneficios, especialmente para aquellos que sufren de dolor muscular crónico o agudo:",
        ],
        bullets: [
          "Alivio inmediato del dolor: Al eliminar la contractura muscular, se reduce el dolor rápidamente.",
          "Mejora de la movilidad: Los pacientes suelen experimentar una mayor flexibilidad y amplitud de movimiento después del tratamiento.",
          "Reducción de la inflamación muscular: La técnica ayuda a mejorar la circulación, lo que acelera la reducción de la inflamación.",
          "Recuperación rápida: La mayoría de los pacientes sienten mejoras significativas después de una o pocas sesiones.",
          "Técnica natural y segura: No se utilizan medicamentos, y los efectos secundarios son mínimos cuando el procedimiento lo realiza un fisioterapeuta especializado.",
        ],
      },
      {
        title: "Dolencias que tratamos con punción seca",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos la punción seca para tratar una amplia variedad de dolencias musculares. Este tratamiento es especialmente eficaz para:",
        ],
        bullets: [
          "Contracturas musculares crónicas: Liberar los puntos gatillo alivia la tensión acumulada en los músculos.",
          "Lumbalgias y cervicalgias: Dolores en la espalda baja y cuello causados por malas posturas o sobrecargas.",
          "Tendinitis: Inflamación de los tendones, especialmente en deportistas.",
          "Dolores musculares posturales: Causados por posiciones corporales prolongadas incorrectas.",
          "Síndrome de dolor miofascial: Dolor crónico asociado a la tensión muscular y puntos gatillo.",
        ],
      },
      {
        title: "No dejes que el dolor limite tu calidad de vida",
        paragraphs: [
          "Si estás buscando un tratamiento eficaz y personalizado para tus dolores musculares o contracturas, Rouco Fisioterapia es la solución. Contáctanos hoy mismo para reservar tu cita y descubre cómo la punción seca y nuestras técnicas avanzadas pueden ayudarte a recuperar tu bienestar de forma rápida y segura.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Qué diferencia hay entre la punción seca y la acupuntura?",
        answer: "La punción seca se centra en aliviar puntos gatillo en músculos para tratar el dolor y la movilidad, mientras que la acupuntura es una técnica de la medicina tradicional china que busca equilibrar la energía del cuerpo. No se utiliza con el mismo fin terapéutico.",
      },
      {
        question: "¿Es la punción seca dolorosa o tiene efectos secundarios?",
        answer: "Suele ser bien tolerada. Puede aparecer una molestia local temporal o sensación de agujetas tras la sesión, que normalmente desaparece en poco tiempo.",
      },
      {
        question: "¿Cuántas sesiones de punción seca son necesarias para ver resultados?",
        answer: "Depende de cada caso, pero muchas personas notan mejoría en pocas sesiones dentro de un plan de tratamiento personalizado.",
      },
      {
        question: "¿La punción seca es adecuada para todos los pacientes o tiene contraindicaciones?",
        answer: "No en todos los casos. Es necesaria una valoración previa para descartar contraindicaciones y adaptar el tratamiento de forma segura.",
      },
      {
        question: "¿Es la punción seca eficaz para deportistas con lesiones crónicas?",
        answer: "Sí, puede ser muy útil para reducir dolor y mejorar función en lesiones deportivas crónicas, especialmente combinada con ejercicio terapéutico.",
      },
      {
        question: "¿Qué debo hacer después de una sesión de punción seca para optimizar los resultados?",
        answer: "Seguir las pautas del fisioterapeuta, hidratarse bien, evitar sobrecargas inmediatas y mantener la movilidad suave suele favorecer la recuperación.",
      },
      {
        question: "¿La punción seca puede combinarse con otros tratamientos de fisioterapia?",
        answer: "Sí, se combina frecuentemente con terapia manual, ejercicios terapéuticos y otras técnicas para mejorar resultados.",
      },
      {
        question: "¿Qué diferencia hay entre la punción seca superficial y la profunda?",
        answer: "La superficial actúa en capas más externas para dolor leve; la profunda busca el punto gatillo dentro del músculo en cuadros más persistentes.",
      },
      {
        question: "¿Cómo se siente el músculo después de una sesión de punción seca?",
        answer: "Es habitual notar el músculo más suelto y con menor dolor, aunque puede haber sensibilidad local transitoria durante unas horas.",
      },
      {
        question: "¿Cuáles son los principales riesgos o complicaciones de la punción seca?",
        answer: "Cuando la aplica un profesional cualificado, los riesgos son bajos y suelen limitarse a molestias locales leves y temporales.",
      },
    ],
  },
  {
    slug: "neuromodulacion",
    title: "Neuromodulación",
    cardDescription: "Modulación del sistema nervioso para el control del dolor.",
    intro:
      "La neuromodulación es una técnica avanzada en fisioterapia que se utiliza para regular la actividad del sistema nervioso y tratar diversas dolencias relacionadas con el dolor crónico, disfunciones musculoesqueléticas y trastornos neurológicos. En Rouco Fisioterapia, aplicamos esta técnica de forma personalizada para ofrecerte un tratamiento eficaz, seguro y adaptado a tus necesidades. Estamos ubicados en San Fernando de Henares, atendiendo también a pacientes de Coslada, Torrejón de Ardoz y municipios cercanos en Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la neuromodulación?",
        paragraphs: [
          "La neuromodulación es un tratamiento que utiliza corrientes eléctricas de baja frecuencia para estimular nervios periféricos y tejidos musculares con el objetivo de modular la actividad del sistema nervioso. Esta técnica es mínimamente invasiva y se realiza a través de agujas finas conectadas a un dispositivo de electroestimulación.",
          "El objetivo principal del tratamiento de neuromodulación es reducir el dolor, mejorar la funcionalidad y restaurar el equilibrio neuromuscular, actuando de manera directa sobre las vías nerviosas responsables de la transmisión del dolor o la disfunción.",
        ],
      },
      {
        title: "Beneficios de la neuromodulación",
        paragraphs: [
          "La neuromodulación aporta múltiples beneficios en el ámbito de la fisioterapia, incluyendo:",
        ],
        bullets: [
          "Alivio eficaz del dolor crónico: Disminuye la sensibilidad de las vías nerviosas que transmiten el dolor.",
          "Mejora de la funcionalidad muscular: Reactiva músculos inhibidos o atrofiados.",
          "Reducción de la inflamación: Modula la respuesta inflamatoria en tejidos afectados.",
          "Estimulación de la regeneración nerviosa: Ayuda en la recuperación tras lesiones nerviosas.",
          "Tratamiento personalizado: Permite ajustar la intensidad y la localización del estímulo según las necesidades del paciente.",
          "Efecto prolongado: Los resultados pueden mantenerse durante semanas o meses después del tratamiento.",
        ],
      },
      {
        title: "¿Qué dolencias tratamos con neuromodulación?",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos la neuromodulación para tratar una amplia gama de dolencias, como:",
        ],
        bullets: [
          "Dolor lumbar y cervical crónico: Alivio del dolor persistente en la espalda y el cuello.",
          "Tendinopatías: Estimulación del proceso de recuperación en tendones inflamados o degenerados.",
          "Neuropatías periféricas: Tratamiento del dolor o la pérdida de sensibilidad causada por compresiones nerviosas, como en el síndrome del túnel carpiano.",
          "Disfunciones neuromusculares: Recuperación de músculos afectados por inhibiciones nerviosas.",
          "Síndrome de dolor miofascial: Liberación de puntos gatillo y alivio de dolores irradiados.",
          "Lesiones deportivas: Rehabilitación avanzada para acelerar la recuperación tras sobrecargas o roturas.",
        ],
      },
      {
        title: "¿Cómo se realiza un tratamiento con neuromodulación?",
        paragraphs: [
          "El tratamiento comienza con una evaluación exhaustiva para identificar las áreas afectadas. Posteriormente, se colocan agujas en puntos estratégicos, como músculos o nervios específicos, y se conectan a un dispositivo de electroestimulación que genera corrientes de baja frecuencia.",
          "Durante la sesión, el fisioterapeuta ajusta la intensidad de la estimulación para asegurar un tratamiento cómodo y eficaz. Generalmente, cada sesión dura entre 45 y 60 minutos y puede combinarse con otras técnicas de fisioterapia, como terapia manual, punción seca o ejercicio terapéutico, para potenciar los resultados.",
        ],
      },
      {
        title: "Recupera tu bienestar con neuromodulación en Rouco Fisioterapia",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos las técnicas más avanzadas para tratar tus dolencias de manera eficaz y personalizada. Contáctanos para más información y reserva tu cita hoy mismo.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es dolorosa la neuromodulación?",
        answer: "No, la mayoría de los pacientes solo experimentan una leve sensación de hormigueo o contracción muscular durante la sesión.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer: "Depende de la dolencia y de la respuesta individual al tratamiento. Tras la valoración inicial se establece un plan personalizado.",
      },
      {
        question: "¿Se puede combinar con otros tratamientos de fisioterapia?",
        answer: "Sí, habitualmente se combina con terapia manual, punción seca o ejercicio terapéutico para potenciar resultados.",
      },
      {
        question: "¿La neuromodulación tiene contraindicaciones?",
        answer: "Como en cualquier técnica, existen situaciones que requieren precaución. Por eso siempre se realiza una evaluación previa antes de iniciar el tratamiento.",
      },
      {
        question: "¿Cuánto dura cada sesión?",
        answer: "Generalmente entre 45 y 60 minutos, en función del objetivo terapéutico y de las áreas tratadas.",
      },
    ],
  },
  {
    slug: "educacion-terapeutica",
    title: "Educación Terapéutica",
    cardDescription: "Aprende a gestionar tu dolor y prevenir recaídas.",
    intro:
      "La educación terapéutica es un componente esencial de la fisioterapia moderna, diseñado para empoderar a los pacientes mediante el conocimiento de sus dolencias, promoviendo la autogestión y la prevención de futuras complicaciones. En Rouco Fisioterapia, ofrecemos programas personalizados de educación terapéutica, dirigidos a pacientes de San Fernando de Henares, Coslada, Torrejón de Ardoz y localidades cercanas en Madrid, para mejorar su calidad de vida y garantizar resultados a largo plazo.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la educación terapéutica?",
        paragraphs: [
          "La educación terapéutica en fisioterapia consiste en proporcionar a los pacientes la información y las herramientas necesarias para comprender su condición, prevenir recaídas y adoptar hábitos de vida saludables. Este enfoque combina explicaciones teóricas con actividades prácticas, adaptándose a las necesidades y objetivos de cada persona.",
          "El objetivo principal es convertir al paciente en el protagonista de su propia recuperación, promoviendo la adherencia al tratamiento y reduciendo el riesgo de recaídas o complicaciones.",
        ],
      },
      {
        title: "Beneficios de la educación terapéutica",
        paragraphs: [
          "La educación física terapéutica ofrece múltiples beneficios tanto a corto como a largo plazo, incluyendo:",
        ],
        bullets: [
          "Empoderamiento del paciente: Proporciona conocimientos que fomentan la autonomía y la toma de decisiones informadas.",
          "Mejor comprensión de la dolencia: Ayuda a los pacientes a identificar los factores que contribuyen a su problema de salud.",
          "Reducción del dolor: Enseña estrategias efectivas para manejar el dolor crónico o agudo.",
          "Prevención de lesiones: Promueve hábitos saludables y ejercicios específicos que minimizan el riesgo de futuras lesiones.",
          "Aumento de la adherencia al tratamiento: Los pacientes bien informados son más constantes y comprometidos con su plan de fisioterapia.",
        ],
      },
      {
        title: "¿Qué abordamos en los programas de educación terapéutica?",
        paragraphs: [
          "En Rouco Fisioterapia, diseñamos programas educativos personalizados que abarcan una amplia gama de temas relacionados con la salud y el bienestar físico:",
        ],
        bullets: [
          "Información sobre la condición del paciente: Explicamos el origen, la evolución y el impacto de la dolencia en el cuerpo.",
          "Gestión del dolor: Enseñamos técnicas como la relajación, el control postural y ejercicios para aliviar molestias.",
          "Prevención de lesiones: Instruimos sobre prácticas seguras para actividades físicas, deportivas y laborales.",
          "Mejora de la postura corporal: Ofrecemos pautas para evitar tensiones innecesarias y prevenir dolores musculoesqueléticos.",
          "Técnicas de ergonomía: Enseñamos a optimizar el entorno laboral y doméstico para proteger la columna vertebral y las articulaciones.",
          "Autogestión de enfermedades crónicas: Facilitamos herramientas para manejar afecciones como la fibromialgia, la artrosis o el dolor neuropático.",
        ],
      },
      {
        title: "¿Cómo se realiza una sesión de educación terapéutica?",
        paragraphs: [
          "El proceso comienza con una evaluación personalizada para entender las necesidades y expectativas del paciente. A partir de esta información, diseñamos un plan educativo que incluye:",
        ],
        bullets: [
          "Sesiones individuales o grupales: Adaptadas al nivel de conocimiento y habilidades del paciente.",
          "Explicaciones claras y prácticas: Utilizamos lenguaje accesible para garantizar la comprensión.",
          "Técnicas prácticas: Los pacientes aprenden ejercicios y estrategias específicas para aplicar en su día a día.",
          "Seguimiento continuo: Realizamos evaluaciones periódicas para ajustar el plan educativo según la evolución del paciente.",
        ],
      },
      {
        title: "Recupera tu bienestar con educación terapéutica en Rouco Fisioterapia",
        paragraphs: [
          "En Rouco Fisioterapia, creemos que el conocimiento es poder. Nuestra misión es equipar a los pacientes con las herramientas necesarias para tomar el control de su salud y mejorar su calidad de vida. Contáctanos hoy mismo para diseñar tu plan personalizado de educación terapéutica.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es adecuada la educación terapéutica para todos los pacientes?",
        answer: "Sí, es beneficiosa para personas de todas las edades y condiciones, ya que se adapta a las necesidades individuales de cada paciente.",
      },
      {
        question: "¿Cuántas sesiones se necesitan?",
        answer: "Depende de la condición, objetivos y evolución de cada paciente. Tras la valoración inicial se establece una planificación personalizada.",
      },
      {
        question: "¿Puede combinarse la educación terapéutica con otros tratamientos?",
        answer: "Sí, se complementa muy bien con terapia manual, ejercicio terapéutico, neuromodulación y otras técnicas de fisioterapia.",
      },
      {
        question: "¿Qué tipo de ejercicios se enseñan en educación terapéutica?",
        answer: "Se enseñan ejercicios de movilidad, control postural, fortalecimiento y pautas de ergonomía adaptadas a cada caso.",
      },
      {
        question: "¿La educación terapéutica ayuda con el dolor crónico?",
        answer: "Sí, aporta estrategias prácticas para comprender y gestionar mejor el dolor crónico, mejorando la funcionalidad y la calidad de vida.",
      },
    ],
  },
  {
    slug: "epte",
    title: "EPTE",
    cardDescription: "Electrólisis percutánea para tendinopatías.",
    intro:
      "La EPTE (Electrólisis Percutánea Terapéutica) es una técnica avanzada y mínimamente invasiva en fisioterapia, utilizada para el tratamiento de tendinopatías crónicas y lesiones musculoesqueléticas. En Rouco Fisioterapia, contamos con los últimos avances en tecnología EPTE para ayudarte a acelerar la recuperación, reducir el dolor y mejorar tu calidad de vida. Atendemos a pacientes de San Fernando de Henares, Coslada, Torrejón de Ardoz, y otras localidades cercanas en Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la EPTE?",
        paragraphs: [
          "La EPTE es un procedimiento terapéutico que utiliza microcorrientes aplicadas a través de una aguja fina insertada directamente en el tejido afectado. Este tratamiento provoca una respuesta inflamatoria controlada en la zona lesionada, estimulando los procesos naturales de regeneración y reparación de tejidos.",
          "La electrólisis percutánea terapéutica es especialmente efectiva en el tratamiento de tendinopatías crónicas y lesiones que no han respondido bien a otros enfoques terapéuticos. Gracias a su precisión, actúa de manera localizada, sin dañar los tejidos circundantes y con mínimas molestias para el paciente.",
        ],
      },
      {
        title: "Beneficios de la Electrólisis Percutánea Terapéutica",
        paragraphs: [
          "La EPTE aporta numerosos beneficios en el tratamiento de lesiones y dolencias musculoesqueléticas:",
        ],
        bullets: [
          "Alivio rápido del dolor: Reduce la sintomatología desde las primeras sesiones.",
          "Estimulación de la regeneración tisular: Promueve la formación de tejido nuevo y saludable.",
          "Tratamiento localizado: Actúa directamente en la zona afectada, sin comprometer tejidos sanos.",
          "Mínimamente invasiva: Utiliza agujas finas y microcorrientes, con molestias mínimas.",
          "Recuperación más rápida: Ideal para deportistas y personas activas que necesitan volver a su rutina lo antes posible.",
          "Prevención de recaídas: Refuerza el tejido tratado para evitar futuras lesiones.",
        ],
      },
      {
        title: "¿Qué dolencias tratamos con EPTE?",
        paragraphs: [
          "En Rouco Fisioterapia, empleamos la EPTE para abordar una amplia variedad de dolencias, entre las que destacan:",
        ],
        bullets: [
          "Tendinopatías crónicas: Como tendinitis rotuliana, epicondilitis (codo de tenista) y tendinitis aquílea.",
          "Lesiones deportivas: Tratamiento eficaz de lesiones musculares, desgarros y sobrecargas.",
          "Fascitis plantar: Alivio del dolor y regeneración del tejido afectado.",
          "Calcificaciones tendinosas: Disolución controlada de depósitos de calcio en los tendones.",
          "Roturas fibrilares: Recuperación acelerada y mejora del tejido lesionado.",
          "Dolor miofascial: Liberación de puntos gatillo y alivio de tensiones musculares crónicas.",
        ],
      },
      {
        title: "¿Cómo se realiza un tratamiento con electrólisis percutánea?",
        paragraphs: [
          "El tratamiento comienza con una evaluación exhaustiva para identificar la lesión y su gravedad. A continuación, se procede de la siguiente manera:",
        ],
        bullets: [
          "Preparación de la zona: Se desinfecta la piel para garantizar la máxima seguridad.",
          "Aplicación de la aguja: Se introduce una aguja fina en el tejido afectado, guiada por ecografía para garantizar precisión.",
          "Electrólisis controlada: Se aplican microcorrientes a través de la aguja para estimular la regeneración del tejido.",
          "Finalización y recomendaciones: Tras la sesión, el fisioterapeuta proporciona pautas personalizadas para maximizar los resultados.",
        ],
      },
      {
        title: "Duración y combinación con otras técnicas",
        paragraphs: [
          "Cada sesión de EPTE dura aproximadamente entre 15 y 30 minutos, dependiendo de la lesión tratada. Este tratamiento suele combinarse con otras técnicas de fisioterapia, como terapia manual, ejercicio terapéutico o kinesiotaping, para obtener mejores resultados.",
        ],
      },
      {
        title: "Recupera tu bienestar con EPTE en Rouco Fisioterapia",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos la EPTE como una herramienta innovadora para el tratamiento de lesiones musculoesqueléticas. Nuestro equipo de fisioterapeutas está altamente cualificado y comprometido con tu recuperación. Reserva tu cita y comienza a disfrutar de una vida sin dolor.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Es doloroso el tratamiento con EPTE?",
        answer: "No, aunque la aplicación de las microcorrientes puede generar una ligera molestia, es bien tolerada por la mayoría de los pacientes.",
      },
      {
        question: "¿Cuántas sesiones son necesarias?",
        answer: "Depende del tipo y evolución de la lesión. Tras la valoración inicial se pauta un número de sesiones personalizado.",
      },
      {
        question: "¿Se puede combinar la EPTE con otras terapias?",
        answer: "Sí, frecuentemente se combina con terapia manual, ejercicio terapéutico o kinesiotaping para optimizar resultados.",
      },
      {
        question: "¿Es seguro el tratamiento con EPTE?",
        answer: "Sí, cuando lo aplica un fisioterapeuta cualificado y con la valoración adecuada, es una técnica segura y controlada.",
      },
      {
        question: "¿Quiénes pueden beneficiarse de la EPTE?",
        answer: "Personas con tendinopatías crónicas, lesiones deportivas, fascitis plantar, calcificaciones o dolor miofascial, entre otros cuadros musculoesqueléticos.",
      },
    ],
  },
  {
    slug: "ecografia",
    title: "Ecografía",
    cardDescription: "Diagnóstico por imagen para un tratamiento preciso.",
    intro:
      "La ecografía en fisioterapia es una herramienta avanzada de diagnóstico por imagen que permite evaluar en tiempo real el estado de músculos, tendones, ligamentos y otras estructuras del sistema musculoesquelético. En Rouco Fisioterapia, utilizamos la ecografía como complemento a la evaluación clínica, permitiéndonos un diagnóstico más preciso y un seguimiento detallado de la evolución del paciente. Estamos ubicados en San Fernando de Henares y atendemos a pacientes de Coslada, Torrejón de Ardoz y municipios cercanos en Madrid.",
    ctaLabel: "RESERVA TU CITA",
    sections: [
      {
        title: "¿Qué es la ecografía en fisioterapia?",
        paragraphs: [
          "La ecografía es una técnica de imagen no invasiva que emplea ultrasonidos para obtener imágenes en tiempo real de los tejidos blandos del cuerpo. En fisioterapia, se utiliza principalmente para evaluar lesiones musculoesqueléticas, guiar tratamientos y monitorizar la evolución del paciente.",
          "Gracias a su alta resolución y capacidad para observar los tejidos en movimiento, la ecografía permite detectar lesiones como roturas musculares, tendinopatías, inflamaciones articulares y alteraciones en los nervios periféricos.",
        ],
      },
      {
        title: "Usos de la ecografía en fisioterapia",
        bullets: [
          "Diagnóstico de lesiones musculares y tendinosas: Permite visualizar roturas, desgarros o inflamaciones.",
          "Evaluación de ligamentos y fascias: Identifica esguinces, fibrosis y alteraciones en la fascia plantar.",
          "Seguimiento de la evolución de la lesión: Permite monitorizar la regeneración de los tejidos tratados.",
          "Guía para tratamientos invasivos: Se utiliza en técnicas como la punción seca o la electrólisis percutánea.",
          "Control biomecánico en tiempo real: Permite observar la función de los músculos durante el movimiento.",
        ],
      },
      {
        title: "Beneficios de la ecografía en fisioterapia",
        paragraphs: [
          "El uso de la ecografía aporta múltiples ventajas en el tratamiento fisioterapéutico:",
        ],
        bullets: [
          "Diagnóstico preciso y rápido: Permite identificar lesiones en la primera consulta sin necesidad de pruebas adicionales.",
          "Evaluación en tiempo real: Se pueden observar los tejidos en movimiento para detectar disfunciones dinámicas.",
          "Seguridad y comodidad: Es una técnica no invasiva, indolora y sin efectos secundarios.",
          "Tratamiento más efectivo: Facilita la personalización del tratamiento en función de los hallazgos ecográficos.",
          "Seguimiento detallado: Permite comparar imágenes antes, durante y después del tratamiento para evaluar la mejoría.",
        ],
      },
      {
        title: "Lesiones que se pueden evaluar con ecografía",
        paragraphs: [
          "En Rouco Fisioterapia, utilizamos la ecografía para evaluar diversas patologías y lesiones, tales como:",
        ],
        bullets: [
          "Roturas y desgarros musculares.",
          "Tendinopatías y calcificaciones en tendones.",
          "Bursitis e inflamaciones articulares.",
          "Lesiones ligamentosas, como esguinces y distensiones.",
          "Síndrome del túnel carpiano y atrapamientos nerviosos.",
          "Fascitis plantar y otras afecciones del tejido conectivo.",
        ],
      },
      {
        title: "Aprovecha la precisión de la ecografía para un diagnóstico y tratamiento más efectivo.",
        paragraphs: [
          "En Rouco Fisioterapia, te ofrecemos una valoración ecográfica detallada para garantizar un abordaje terapéutico adecuado a tu caso. Contacta con nosotros y obtén la mejor atención para tu recuperación.",
        ],
      },
    ],
    faq: [],
  },
];

export const servicesBySlug = Object.fromEntries(
  servicesCatalog.map((service) => [service.slug, service]),
) as Record<string, ServiceDetail>;
