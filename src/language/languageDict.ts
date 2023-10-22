export type DictData = keyof typeof languageData;

const languageData = {
  aboutMe: ["About Me", "Über mich"],
  hireMe: ["Hire Me", "Mich buchen"],
  skills: ["Skills", "Fähigkeiten"],
  projects: ["Projects", "Projekte"],
  contactMe: ["Contact Me", "Kontaktiere mich"],
  greeting: ["Hi there, I'm ", "Hallo, ich bin "],
  viewPage: ["View Page", "Seite ansehen"],
  intro: [
    "I'm a Full Stack Web Developer based in Wiesbaden, Germany.",
    "Ich bin ein Full-Stack Webentwickler mit Sitz in Wiesbaden, Deutschland.",
  ],
  webIdeas: [
    "🚀 Looking to bring your web ideas to life? 🌐💡",
    "🚀 Möchten Sie Ihre Web-Ideen zum Leben erwecken? 🌐💡",
  ],

  skillsIntro: [
    "Here are some of the skills I bring to the table:",
    "Hier sind einige der Fähigkeiten, die ich mitbringe:",
  ],
  projectsIntro: [
    "Check out some of my recent projects.",
    "Schauen Sie sich einige meiner neuesten Projekte an.",
  ],
  contactIntro: ["Let's get in touch. ", "Lass uns in Kontakt treten.  "],
  contactLinkedIn: [
    "Let's connect on LinkedIn.",
    "Lassen Sie uns auf LinkedIn verbinden.",
  ],
  contactGitHub: [
    "Check out my GitHub repos.",
    "Schauen Sie sich meine GitHub-Repositories an.",
  ],
  contactFiverr: [
    "Hire me for your next project.",
    "Buchen Sie mich für Ihr nächstes Projekt.",
  ],
  aboutMeText: [
    `I'm Leonardo, 24 years old, and I discovered my passion for software development right after graduating from high school. Initially, I started developing Android apps in Java, which provided me with a solid entry into the world of programming. Later, I joined a web development team, where I expanded my expertise and worked on challenging projects for clients. This experience helped me develop my versatility in both frontend and backend development. In recent years, I've also specialized in Flutter, allowing me to turn creative app ideas into reality. With my enduring enthusiasm for software development and my past experiences, I'm dedicated to crafting tailored solutions for client projects. I particularly value teamwork and am always in search of new challenges to further enhance my skills and achieve excellence.`,
    `Ich bin Leonardo, 24 Jahre alt, und meine Leidenschaft für die Softwareentwicklung entdeckte ich direkt nach meinem Abitur. Anfangs begann ich mit der Entwicklung von Android-Apps in Java, was mir einen soliden Einstieg in die Welt der Programmierung verschaffte. Später schloss ich mich einem Webentwicklungsteam an, wo ich mein Fachwissen erweiterte und anspruchsvolle Projekte für Kunden umsetzte. Diese Erfahrung half mir, meine Vielseitigkeit in der Frontend- und Backend-Entwicklung zu entwickeln. In den letzten Jahren habe ich mich zusätzlich auf Flutter spezialisiert und bin nun in der Lage, kreative App-Ideen in die Realität umzusetzen. Mit meiner anhaltenden Begeisterung für die Softwareentwicklung und meinen bisherigen Erfahrungen bin ich bestrebt, maßgeschneiderte Lösungen für Kundenprojekte zu entwickeln. Die Zusammenarbeit im Team schätze ich besonders und suche immer nach neuen Herausforderungen, um meine Fähigkeiten weiter auszubauen und Exzellenz zu erreichen.
    `,
  ],

  frogeexText: [
    `FOX is a staffing agency specializing in personnel consulting and placement. They connect experts in the fields of IT and business and offer outsourcing services. With locations in four countries, they have access to an international pool of experts and stay updated on industry developments. They serve various industries, including finance, industry, and public-sector companies.`,
    `FOX ist eine Personaldienstleistungsagentur, die sich auf Personalberatung und -vermittlung spezialisiert hat. Sie vermitteln Experten in den Bereichen IT und Business und bieten Outsourcing-Services. Mit Standorten in vier Ländern haben sie Zugang zu einem internationalen Experten-Pool und halten sich über Branchenentwicklungen auf dem Laufenden. Sie bedienen verschiedene Branchen, darunter Finanzwesen, Industrie und öffentlich-rechtliche Unternehmen.`,
  ],

  studioonomatoText: [
    `Studio Onomato is an architectural firm that bases its work on the concept of onomatopoeia. They aim to create projects that speak for themselves without requiring many explanations. Their focus is on the transformation and design of existing structures, whether it's the sensitive handling of cultural heritage or the careful selection of materials and the design of new buildings. Technically, their website features a complete content management system based on Supabase as the backend. This allows the administrator to have comprehensive control over the website, its content, and its management. This technical solution helps Studio Onomato effectively and attractively present their projects and visions online.`,
    `Studio Onomato ist ein Architektenbüro, das seine Arbeit auf dem Konzept der Lautmalerei basiert. Sie streben danach, Projekte zu schaffen, die für sich selbst sprechen, ohne viele Erklärungen zu erfordern. Ihr Fokus liegt auf der Umgestaltung und Gestaltung von bestehenden Strukturen, sei es der behutsame Umgang mit Kulturerbe oder die sorgfältige Auswahl von Materialien und das Design neuer Gebäude. Technisch gesehen verfügt ihre Website über ein vollständiges Content Management System, das auf Supabase als Backend basiert. Dies ermöglicht dem Administrator eine umfassende Kontrolle über die Website, die Inhalte und deren Verwaltung. Diese technische Lösung hilft Studio Onomato dabei, ihre Projekte und Visionen effektiv und ansprechend online zu präsentieren.`,
  ],

  davidserviceText: [
    `David Service is a facility management company with a focus on Wiesbaden, Mainz, and the surrounding areas. They offer comprehensive services in housekeeping, garden care, removals, and more. David Service stands out for quality and reliability in all of their services. Their experienced team specializes in maintaining properties in top condition, and they have earned an excellent reputation for outstanding service and customer satisfaction. They offer professional services such as pigeon control, pest control, household clearances, and comprehensive janitorial services in the Wiesbaden, Mainz, and Frankfurt regions, serving both households and businesses.`,
    `David Service ist ein Facility-Management-Unternehmen mit Schwerpunkt in Wiesbaden, Mainz und Umgebung. Sie bieten umfassende Dienstleistungen in den Bereichen Hausmeisterservices, Gartenpflege, Entrümpelungen und mehr. David Service zeichnet sich durch Qualität und Zuverlässigkeit in all ihren Dienstleistungen aus. Ihr erfahrenes Team ist darauf spezialisiert, Immobilien in erstklassigem Zustand zu halten, und sie haben sich einen hervorragenden Ruf für erstklassigen Service und Kundenzufriedenheit erarbeitet. Sie bieten professionelle Dienstleistungen wie Taubenabwehr, Schädlingsbekämpfung, Haushaltsauflösungen und umfassende Hausmeisterdienste in der Region Wiesbaden, Mainz und Frankfurt an, sowohl für Privathaushalte als auch für Unternehmen.`,
  ],

  foxdepartmentText: [
    "FOX is a personnel service provider specializing in personnel consulting and recruitment. They connect experts in the fields of IT and Business and offer outsourcing services. With locations in four countries, they have access to an international pool of experts and stay up-to-date with industry developments. They serve various industries, including finance, industry, and public-sector organizations.",
    "FOX ist ein Personaldienstleister, der sich auf Personalberatung und -vermittlung spezialisiert hat. Sie vermitteln Experten in den Bereichen IT und Business und bieten Outsourcing-Services. Mit Standorten in vier Ländern haben sie Zugang zu einem internationalen Experten-Pool und halten sich über Branchenentwicklungen auf dem Laufenden. Sie bedienen verschiedene Branchen, darunter Finanzwesen, Industrie und öffentlich-rechtliche Unternehmen.",
  ],

  mysocialsText: [
    `MySocials" is an application designed to assist with weekend activity planning and the discovery of local events. The app features a user-friendly interface that allows users to find and purchase tickets for events and parties in their vicinity.

  One of the technical aspects of the app is its integration of payment systems such as Stripe and Paypal, ensuring secure transactions. The app also employs geolocation queries to display events based on the user's current location.
  
  Additionally, the app provides a feature that allows users to connect with others who are interested in the same events by using the "Party-Swipe." This feature enables users to make potential contacts before attending an event.
  
  "MySocials" combines practical weekend activity planning with technical features, offering users an efficient and enjoyable solution for weekend entertainment.`,
    `MySocials" ist eine Anwendung, die bei der Planung von Wochenendaktivitäten und der Suche nach Veranstaltungen in der Nähe hilft. Die Anwendung bietet eine benutzerfreundliche Oberfläche, die es den Benutzern ermöglicht, Events und Partys in ihrer Umgebung zu finden und Tickets direkt über die Anwendung zu erwerben.

  Eine der technischen Funktionen der Anwendung ist die Integration von Zahlungssystemen wie Stripe und Paypal, um sichere Transaktionen zu ermöglichen. Die Anwendung verwendet auch Geolocation-Abfragen, um dem Benutzer Veranstaltungen an seinem aktuellen Standort anzuzeigen.
  
  Zusätzlich bietet die Anwendung die Möglichkeit, andere Benutzer zu treffen, die an denselben Veranstaltungen interessiert sind, indem sie den "Party-Swipe" verwenden. Dies ermöglicht es den Benutzern, potenzielle Kontakte zu knüpfen, bevor sie an einer Veranstaltung teilnehmen.
  
  "MySocials" kombiniert die praktische Planung von Wochenendaktivitäten mit technischen Features, um den Benutzern eine effiziente und unterhaltsame Lösung für die Wochenendgestaltung zu bieten.`,
  ],

  send: ["Send", "Absenden"],
  phone: ["Phone", "Handynummer"],
  message: ["Message", "Nachricht"],

  retry: ["Try again", "Erneut versuchen"],
  somethingWentWrong: [
    "Whoops! Something went wrong",
    "Ups! Etwas ist schiefgelaufen",
  ],
  close: ["Cose", "Schließen"],
  thanks: ["Thank you for messaging me!", "Vielen Dank für Ihre Nachricht!"],
  tryAgainLater: [
    "Please try again later",
    "Versuchen Sie es später noch einmal",
  ],
  iBeInTouch: [
    "I will get in touch with you shortly",
    "Ich werde mich in Kürze bei Ihnen melden",
  ],
};

export function translation(key: DictData, language: string) {
  return languageData[key][language === "de-DE" ? 1 : 0];
}
