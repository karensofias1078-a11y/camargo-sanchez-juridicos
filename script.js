// ===== Configuración =====
// Cambie este número por el WhatsApp real de la firma (código de país + número, sin + ni espacios)
const WHATSAPP_NUMBER = "573000000000";

const translations = {
  es: {
    "nav.home": "Inicio",
    "nav.services": "Servicios",
    "nav.team": "Abogados",
    "nav.reviews": "Testimonios",
    "nav.contact": "Contacto",
    "hero.eyebrow": "Firma de abogados",
    "hero.title1": "Defendemos sus derechos",
    "hero.title2": "con excelencia y compromiso",
    "hero.text": "En Camargo Sánchez Jurídicos brindamos asesoría y representación legal integral a personas y empresas. Combinamos rigor técnico, ética y un trato cercano para encontrar la mejor solución a cada caso.",
    "hero.cta": "Contáctanos por WhatsApp",
    "hero.cta2": "Ver servicios",
    "hero.stat1": "Años de experiencia",
    "hero.stat2": "Casos atendidos",
    "hero.stat3": "Clientes satisfechos",
    "about.t1": "Confidencialidad",
    "about.d1": "Cada caso se maneja con absoluta reserva y respeto por su información.",
    "about.t2": "Estrategia",
    "about.d2": "Analizamos su situación a fondo y diseñamos una ruta jurídica clara.",
    "about.t3": "Acompañamiento",
    "about.d3": "Le mantenemos informado en cada etapa del proceso, sin tecnicismos.",
    "services.eyebrow": "Áreas de práctica",
    "services.title": "Servicios que ofrecemos",
    "services.sub": "Asesoría preventiva, conciliación y litigio en las principales ramas del derecho.",
    "services.civil.t": "Derecho Civil",
    "services.civil.d": "Contratos, responsabilidad civil, procesos de cobro, sucesiones, propiedad y conflictos entre particulares.",
    "services.admin.t": "Derecho Administrativo",
    "services.admin.d": "Demandas contra el Estado, derechos de petición, tutelas, contratación estatal y reparación directa.",
    "services.penal.t": "Derecho Penal",
    "services.penal.d": "Defensa técnica en todas las etapas del proceso, representación de víctimas y audiencias preliminares.",
    "services.family.t": "Derecho de Familia",
    "services.family.d": "Divorcios, custodia, cuota alimentaria, régimen de visitas, uniones maritales y adopciones.",
    "services.labor.t": "Derecho Laboral",
    "services.labor.d": "Despidos injustificados, liquidaciones, acoso laboral, pensiones y asesoría a empleadores.",
    "services.disc.t": "Derecho Disciplinario",
    "services.disc.d": "Defensa de servidores públicos y profesionales ante procesos disciplinarios de la Procuraduría y entidades.",
    "team.eyebrow": "Nuestro equipo",
    "team.title": "Perfiles de los abogados",
    "team.sub": "Profesionales especializados, comprometidos con la defensa de sus intereses.",
    "team.k1.role": "Especialista en Derecho Público",
    "team.k1.bio": "Amplia experiencia en asuntos administrativos, contratación estatal y acciones constitucionales frente a entidades públicas.",
    "team.k2.role": "Especialista en Derecho Laboral",
    "team.k2.bio": "Representa a trabajadores y empresas en conflictos laborales, reclamaciones de prestaciones sociales y seguridad social.",
    "team.i.role": "Especialista en Derecho Penal",
    "team.i.bio": "Defensora penal con sólida trayectoria en litigio oral, garantizando el debido proceso y los derechos de sus clientes.",
    "reviews.eyebrow": "Testimonios",
    "reviews.title": "Lo que dicen nuestros clientes",
    "reviews.sub": "4.9 de 5 según más de 120 reseñas",
    "reviews.r1": "“Me despidieron sin justa causa y no sabía qué hacer. La Dra. Karen Sánchez me explicó todo con paciencia y logramos un acuerdo con la empresa en menos de tres meses. Muy recomendados.”",
    "reviews.r1c": "Caso laboral · Bogotá",
    "reviews.r2": "“Excelente acompañamiento en mi proceso de divorcio. Fueron muy humanos en un momento difícil y siempre respondieron mis dudas por WhatsApp, incluso fines de semana.”",
    "reviews.r2c": "Derecho de familia · Medellín",
    "reviews.r3": "“La Dra. Isabela Camargo llevó la defensa de mi hermano con mucho profesionalismo. Preparó cada audiencia al detalle. Gracias a ella el proceso terminó a nuestro favor.”",
    "reviews.r3c": "Derecho penal · Bogotá",
    "reviews.r4": "“Me ayudaron con una tutela contra mi EPS que me negaba un tratamiento. Fallaron a mi favor en diez días. El proceso fue claro y el costo justo.”",
    "reviews.r4c": "Acción de tutela · Cali",
    "reviews.r5": "“Como funcionario público enfrenté un proceso disciplinario que me tenía muy preocupado. Su asesoría fue clave para demostrar mi inocencia y archivar la investigación.”",
    "reviews.r5c": "Derecho disciplinario · Tunja",
    "reviews.r6": "“Asesoran a nuestra empresa en temas contractuales y laborales desde hace dos años. Respuestas rápidas, conceptos bien sustentados y total confianza.”",
    "reviews.r6c": "Gerente, PYME · Bucaramanga",
    "contact.eyebrow": "Contacto",
    "contact.title": "Hablemos de su caso",
    "contact.sub": "La primera orientación es sin compromiso. Escríbanos por el canal que prefiera y le responderemos a la mayor brevedad.",
    "contact.cta": "Agendar asesoría",
    "contact.email": "Correo",
    "footer.rights": "Todos los derechos reservados.",
    "wa.msg": "Hola, quisiera una asesoría legal"
  },
  en: {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.team": "Attorneys",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.eyebrow": "Law firm",
    "hero.title1": "We defend your rights",
    "hero.title2": "with excellence and commitment",
    "hero.text": "At Camargo Sánchez Jurídicos we provide comprehensive legal counsel and representation to individuals and businesses. We combine technical rigor, ethics and a personal approach to find the best solution for every case.",
    "hero.cta": "Contact us on WhatsApp",
    "hero.cta2": "View services",
    "hero.stat1": "Years of experience",
    "hero.stat2": "Cases handled",
    "hero.stat3": "Satisfied clients",
    "about.t1": "Confidentiality",
    "about.d1": "Every case is handled with absolute discretion and respect for your information.",
    "about.t2": "Strategy",
    "about.d2": "We analyze your situation in depth and design a clear legal path.",
    "about.t3": "Guidance",
    "about.d3": "We keep you informed at every stage of the process, in plain language.",
    "services.eyebrow": "Practice areas",
    "services.title": "Our services",
    "services.sub": "Preventive counsel, mediation and litigation across the main branches of law.",
    "services.civil.t": "Civil Law",
    "services.civil.d": "Contracts, civil liability, debt collection, estates and inheritance, property and disputes between private parties.",
    "services.admin.t": "Administrative Law",
    "services.admin.d": "Claims against the State, formal petitions, constitutional injunctions (tutela), public procurement and direct reparation.",
    "services.penal.t": "Criminal Law",
    "services.penal.d": "Criminal defense at every stage of the proceedings, victim representation and preliminary hearings.",
    "services.family.t": "Family Law",
    "services.family.d": "Divorce, custody, child support, visitation rights, domestic partnerships and adoptions.",
    "services.labor.t": "Labor Law",
    "services.labor.d": "Wrongful termination, severance settlements, workplace harassment, pensions and employer advisory.",
    "services.disc.t": "Disciplinary Law",
    "services.disc.d": "Defense of public servants and professionals in disciplinary proceedings before oversight bodies and institutions.",
    "team.eyebrow": "Our team",
    "team.title": "Meet our attorneys",
    "team.sub": "Specialized professionals committed to protecting your interests.",
    "team.k1.role": "Public Law Specialist",
    "team.k1.bio": "Extensive experience in administrative matters, public procurement and constitutional actions against government entities.",
    "team.k2.role": "Labor Law Specialist",
    "team.k2.bio": "Represents employees and companies in labor disputes, employee benefit claims and social security matters.",
    "team.i.role": "Criminal Law Specialist",
    "team.i.bio": "Criminal defense attorney with a solid track record in oral litigation, safeguarding due process and her clients' rights.",
    "reviews.eyebrow": "Testimonials",
    "reviews.title": "What our clients say",
    "reviews.sub": "4.9 out of 5 based on 120+ reviews",
    "reviews.r1": "“I was fired without just cause and didn't know what to do. Karen Sánchez patiently explained everything and we reached a settlement with the company in under three months. Highly recommended.”",
    "reviews.r1c": "Labor case · Bogotá",
    "reviews.r2": "“Excellent support throughout my divorce. They were truly compassionate during a hard time and always answered my questions on WhatsApp, even on weekends.”",
    "reviews.r2c": "Family law · Medellín",
    "reviews.r3": "“Isabela Camargo handled my brother's defense with great professionalism. She prepared every hearing in detail. Thanks to her, the case ended in our favor.”",
    "reviews.r3c": "Criminal law · Bogotá",
    "reviews.r4": "“They helped me file a tutela against my health insurer, which was denying me treatment. The ruling came in my favor within ten days. Clear process and fair fees.”",
    "reviews.r4c": "Constitutional injunction · Cali",
    "reviews.r5": "“As a public servant I faced a disciplinary investigation that had me very worried. Their counsel was key to proving my innocence and getting the case dismissed.”",
    "reviews.r5c": "Disciplinary law · Tunja",
    "reviews.r6": "“They've advised our company on contracts and labor matters for two years. Fast answers, well-founded opinions and complete trust.”",
    "reviews.r6c": "Manager, SME · Bucaramanga",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk about your case",
    "contact.sub": "Your first consultation comes with no obligation. Reach out through your preferred channel and we'll get back to you as soon as possible.",
    "contact.cta": "Book a consultation",
    "contact.email": "Email",
    "footer.rights": "All rights reserved.",
    "wa.msg": "Hello, I would like legal advice"
  }
};

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  // Update WhatsApp message language
  const msg = encodeURIComponent(dict["wa.msg"]);
  document.querySelectorAll("[data-wa]").forEach(a => {
    a.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
  });
  try { localStorage.setItem("csj-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang__btn").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

let initialLang = "es";
try { initialLang = localStorage.getItem("csj-lang") || "es"; } catch (e) {}
setLanguage(initialLang);

// ===== Header & mobile menu =====
const header = document.getElementById("header");
const burger = document.getElementById("burger");

const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 20);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

burger.addEventListener("click", () => {
  const open = header.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", open);
});
document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => {
  header.classList.remove("is-open");
  burger.setAttribute("aria-expanded", "false");
}));

// ===== Image fallback (if a stock photo fails to load) =====
const fallbackSVG = "data:image/svg+xml;utf8," + encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 500 600'><rect width='500' height='600' fill='#1d1d20'/><circle cx='250' cy='230' r='90' fill='#c9a24a' opacity='.55'/><path d='M90 600c0-110 72-190 160-190s160 80 160 190z' fill='#c9a24a' opacity='.55'/></svg>`
);
document.querySelectorAll(".lawyer__photo img").forEach(img => {
  img.addEventListener("error", () => { img.src = fallbackSVG; }, { once: true });
});

// ===== Reveal on scroll =====
const revealEls = document.querySelectorAll(".section__head, .card, .lawyer, .about__item, .social, .contact__intro");
if ("IntersectionObserver" in window) {
  revealEls.forEach(el => el.classList.add("reveal"));
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => io.observe(el));
}

document.getElementById("year").textContent = new Date().getFullYear();
