'use client'

import { useEffect, useState } from 'react'
import { Anchor, ArrowDown, ArrowRight, ChevronLeft, ChevronRight, Mail, Menu, MessageCircle, Minus, Phone, Plus, Ship, Waves, X } from 'lucide-react'

const services = [
  { number: '01', title: 'Installation des bases nautiques', description: 'Installation et aménagement de bases nautiques selon les caractéristiques du site et les besoins du projet.', images: ['/images/services/base-nautique-ponton.jpg', '/images/services/renflouage-ponton-parachutes.jpg'] },
  { number: '02', title: 'Renflouage des bateaux et travaux sur corps immergés', description: 'Interventions destinées au renflouage des bateaux et aux travaux sur les éléments immergés, selon les contraintes et les caractéristiques de chaque opération.', images: ['/images/services/renflouage-bateau-immerge.jpg', '/images/services/renflouage-bateau-vue.jpg', '/images/services/renflouage-plongeur-sac.jpg', '/images/services/renflouage-plongeur-orange.jpg', '/images/services/renflouage-bouees-3t.jpg'] },
]

// Logos des collaborateurs (public/images/clients)
const partners = [
  { name: 'Marsa Maroc', logo: '/images/clients/marsa-maroc.png' },
  { name: 'Somagec', logo: '/images/clients/somagec.png' },
  { name: 'Samir Group', logo: '/images/clients/samir.png' },
  { name: 'ANP - Agence Nationale des Ports', logo: '/images/clients/anp.png' },
]

// Vidéos marine du hero : déposez vos fichiers mp4 dans public/videos.
// Sans fichier trouvé, le hero affiche un diaporama de photos.
const heroVideos = ['/videos/marine-1.mp4', '/videos/marine-2.mp4', '/videos/marine-3.mp4']
const heroPhotos = ['/images/services/renflouage-ponton-parachutes.jpg', '/images/services/renflouage-bateau-vue.jpg', '/images/services/renflouage-bouees-3t.jpg', '/images/services/base-nautique-ponton.jpg']

const contact = { phone: '[Numéro à compléter]', email: '[Adresse e-mail à compléter]', location: '[Localisation à compléter]', availability: '[Disponibilité à compléter]' }
const socialLinks = { instagram: '', facebook: '', linkedin: '', whatsapp: '' }
const questions = [
  ['Quels sont vos services ?', 'Nous proposons l’installation de bases nautiques ainsi que le renflouage de bateaux et les travaux sur corps immergés.'],
  ['Installation des bases nautiques', 'Nous adaptons l’installation et l’aménagement des bases nautiques aux caractéristiques du site et aux besoins du projet.'],
  ['Renflouage des bateaux', 'Les modalités d’une intervention de renflouage dépendent de chaque opération et de son contexte. Contactez-nous pour en discuter.'],
  ['Comment demander un devis ?', 'Utilisez le formulaire de contact pour nous présenter votre projet. Nous pourrons ensuite échanger sur vos besoins.'],
  ['Comment vous contacter ?', 'Vous pouvez nous écrire via le formulaire ci-dessous. Les coordonnées seront complétées prochainement.'],
]

function Logo() { return <a href="#accueil" className="flex items-center gap-3" aria-label="ZAIDOFFSHORING, accueil"><span className="flex size-9 items-center justify-center rounded-full border border-cyan-300/60 text-cyan-300"><Anchor size={18} /></span><span className="text-sm font-semibold tracking-[0.22em] text-white">ZAID<span className="text-cyan-300">OFFSHORING</span></span></a> }

function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="site-nav"><div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 lg:px-10"><Logo /><nav className="nav-links hidden items-center gap-10 md:flex"><a href="#accueil">Accueil</a><a href="#a-propos">À propos</a><a href="#services">Nos services</a><a href="#collaborateurs">Collaborateurs</a><a href="#contact">Contact</a></nav><a className="nav-cta hidden md:inline-flex" href="#contact">Demander un devis <ArrowRight size={15} /></a><button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-menu flex flex-col gap-5 px-6 pb-6 md:hidden"><a href="#a-propos" onClick={() => setOpen(false)}>À propos</a><a href="#services" onClick={() => setOpen(false)}>Nos services</a><a href="#collaborateurs" onClick={() => setOpen(false)}>Collaborateurs</a><a href="#contact" onClick={() => setOpen(false)}>Contact</a><a className="nav-cta w-fit" href="#contact" onClick={() => setOpen(false)}>Demander un devis <ArrowRight size={15} /></a></nav>}</header>
}

function HeroBackground() {
  const [videoIndex, setVideoIndex] = useState(0)
  const [failed, setFailed] = useState<number[]>([])
  const [photoIndex, setPhotoIndex] = useState(0)
  const available = heroVideos.map((_, i) => i).filter((i) => !failed.includes(i))
  const useVideos = available.length > 0
  const current = useVideos ? (available.includes(videoIndex) ? videoIndex : available[0]) : -1
  useEffect(() => {
    if (useVideos) return
    const timer = setInterval(() => setPhotoIndex((i) => (i + 1) % heroPhotos.length), 6000)
    return () => clearInterval(timer)
  }, [useVideos])
  const next = () => {
    if (available.length < 2) return
    setVideoIndex(available[(available.indexOf(current) + 1) % available.length])
  }
  return <div className="absolute inset-0" aria-hidden="true">
    {heroPhotos.map((src, i) => <img key={src} src={src} alt="" className="absolute inset-0 h-full w-full object-cover" style={{ opacity: !useVideos && i === photoIndex ? 1 : 0, transition: 'opacity 1.5s ease' }} />)}
    {useVideos && <video key={heroVideos[current]} src={heroVideos[current]} poster={heroPhotos[0]} className="absolute inset-0 h-full w-full object-cover" autoPlay muted playsInline loop={available.length === 1} preload="auto" onEnded={next} onError={() => setFailed((list) => (list.includes(current) ? list : [...list, current]))} />}
  </div>
}

function Hero() { return <section id="accueil" className="hero"><HeroBackground /><div className="hero-overlay" /><div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center justify-center px-6 pb-24 pt-32 text-center lg:px-10"><div className="mx-auto max-w-4xl"><p className="eyebrow fade-up">Expertise maritime & offshore</p><h1 className="mt-6 text-4xl font-bold leading-[1.06] tracking-tight text-white fade-up delay-1 sm:text-6xl lg:text-7xl">L’expertise maritime<br />au service de <em>vos projets.</em></h1><p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-white/80 fade-up delay-2 sm:text-lg">ZAIDOFFSHORING vous accompagne dans vos opérations maritimes, l’installation de bases nautiques et les interventions sur les structures immergées.</p><div className="mt-10 flex flex-wrap justify-center gap-4 fade-up delay-3"><a className="button-primary" href="#services">Découvrir nos services <ArrowDown size={16} /></a><a className="button-ghost" href="#contact">Nous contacter <ArrowRight size={16} /></a></div></div></div><div className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-white/50"><span>Explorer</span><span className="h-10 w-px bg-white/40" /></div></section> }

function About() { return <section id="a-propos" className="section-pad bg-white"><div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.05fr_.95fr] lg:gap-24 lg:px-10"><div className="about-image"><div className="image-label"><Waves size={16} /> Au cœur du milieu marin</div></div><div><p className="eyebrow dark-eyebrow">À propos de nous</p><h2 className="section-title mt-5">Des solutions maritimes adaptées à <em>vos projets</em></h2><p className="mt-7 text-base leading-8 text-slate-600">ZAIDOFFSHORING accompagne ses clients dans leurs projets d’installation nautique et d’interventions sur les structures immergées. Notre approche repose sur la préparation des opérations, l’adaptation aux contraintes du milieu marin et la recherche de solutions adaptées à chaque projet.</p><div className="mt-9 grid gap-5 border-t border-slate-200 pt-7"><div className="feature"><span>01</span><p>Approche adaptée à chaque projet.</p></div><div className="feature"><span>02</span><p>Attention portée aux contraintes du milieu marin.</p></div><div className="feature"><span>03</span><p>Accompagnement des besoins techniques.</p></div></div></div></div></section> }

function ServiceCard({ service }: { service: typeof services[number] }) { const [index, setIndex] = useState(0); return <article className="service-card"><div className="service-image" style={{ backgroundImage: `url(${service.images[index]})` }}><span className="service-number">{service.number}</span><div className="carousel-controls"><button onClick={() => setIndex((index - 1 + service.images.length) % service.images.length)} aria-label="Image précédente"><ChevronLeft size={17} /></button><span>{index + 1} / {service.images.length}</span><button onClick={() => setIndex((index + 1) % service.images.length)} aria-label="Image suivante"><ChevronRight size={17} /></button></div></div><div className="p-7 sm:p-9"><h3 className="text-2xl font-medium leading-tight text-slate-950">{service.title}</h3><p className="mt-4 min-h-20 text-sm leading-7 text-slate-600">{service.description}</p><div className="mt-7 flex items-center justify-between gap-4"><a href="#contact" className="service-link">Demander un devis <ArrowRight size={15} /></a><span className="text-xs uppercase tracking-widest text-slate-400">En savoir plus</span></div></div></article> }

function Services() { return <section id="services" className="section-pad services-bg"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="section-head"><p className="eyebrow dark-eyebrow">Nos expertises</p><h2 className="section-title mt-5">Des interventions pensées pour le <em>milieu maritime</em></h2><p className="mt-5 text-base leading-7 text-slate-500">Découvrez nos principaux domaines d’intervention et contactez-nous pour discuter de vos besoins.</p></div><div className="mt-14 grid gap-7 lg:grid-cols-2"><ServiceCard service={services[0]} /><ServiceCard service={services[1]} /></div></div></section> }

function Partners() {
  // Les logos sont répétés pour remplir toute la largeur, puis la liste est doublée pour une boucle sans coupure.
  const set = [...partners, ...partners, ...partners]
  return <section id="collaborateurs" className="bg-white py-16 lg:py-20"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="mb-10 flex flex-col items-center text-center"><p className="eyebrow dark-eyebrow">Nos collaborateurs</p><h2 className="mt-4 text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl">Ils nous font <em>confiance</em></h2></div></div><div className="logo-marquee" aria-label="Logos de nos collaborateurs"><div className="logo-track">{[0, 1].map((copy) => <div key={copy} className="flex" aria-hidden={copy === 1}>{set.map((p, i) => <div key={`${copy}-${i}`} className="logo-item"><img src={p.logo} alt={copy === 0 ? p.name : ''} loading="lazy" /></div>)}</div>)}</div></div></section>
}

function CTA() { return <section className="cta-section"><div className="cta-art" /><div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10"><p className="eyebrow">Un projet à construire</p><h2 className="mt-5 text-4xl font-bold leading-tight text-white sm:text-5xl">Vous avez un projet <em>maritime ?</em></h2><p className="mx-auto mt-6 max-w-lg text-base leading-7 text-white/70">Parlons de vos besoins et étudions ensemble les solutions adaptées à votre opération.</p><a href="#contact" className="button-primary mt-9">Discuter de votre projet <ArrowRight size={16} /></a></div></section> }

function Contact() { const [sent, setSent] = useState(false); const [error, setError] = useState(''); function submit(e: React.FormEvent<HTMLFormElement>) { e.preventDefault(); const data = new FormData(e.currentTarget); if (!data.get('name') || !data.get('email') || !data.get('subject') || !data.get('message')) { setError('Veuillez renseigner les champs obligatoires.'); return } const body = `Nom : ${data.get('name')}\nEntreprise : ${data.get('company') || ''}\nTéléphone : ${data.get('phone') || ''}\nService : ${data.get('service')}\n\n${data.get('message')}`; window.location.href = `mailto:${contact.email.includes('@') ? contact.email : ''}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`; setSent(true) } return <section id="contact" className="section-pad bg-white"><div className="mx-auto max-w-7xl px-6 lg:px-10"><div className="section-head"><p className="eyebrow dark-eyebrow">Contact</p><h2 className="section-title mt-5">Parlons de votre <em>projet</em></h2><p className="mt-5 text-base leading-7 text-slate-500">Vous souhaitez obtenir des informations sur nos services ou discuter d’une intervention ? Envoyez-nous votre demande.</p></div><div className="mt-14 grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16"><div><div className="grid gap-5 text-sm"><div className="contact-item"><Phone size={17} /><span>{contact.phone}</span></div><div className="contact-item"><Mail size={17} /><span>{contact.email}</span></div><div className="contact-item"><Waves size={17} /><span>{contact.location}</span></div><div className="contact-item"><Anchor size={17} /><span>{contact.availability}</span></div></div><SocialLinks className="mt-10" /></div><form onSubmit={submit} className="contact-form"><div className="grid gap-6 sm:grid-cols-2"><label>Nom complet *<input name="name" required placeholder="Votre nom" /></label><label>Entreprise<input name="company" placeholder="Votre entreprise" /></label><label>Adresse e-mail *<input name="email" type="email" required placeholder="vous@entreprise.com" /></label><label>Téléphone<input name="phone" placeholder="Votre numéro" /></label><label>Service concerné *<select name="service" defaultValue={services[0].title}><option>{services[0].title}</option><option>{services[1].title}</option></select></label><label>Objet *<input name="subject" required placeholder="Objet de votre demande" /></label></div><label className="mt-6 block">Message *<textarea name="message" required rows={5} placeholder="Parlez-nous de votre projet..." /></label>{error && <p className="mt-4 text-sm text-red-600" role="alert">{error}</p>}{sent && <p className="mt-4 text-sm text-cyan-700" role="status">Votre message est prêt à être envoyé dans votre client e-mail.</p>}<button className="button-dark mt-7" type="submit">Préparer mon message <ArrowRight size={16} /></button><p className="mt-4 text-xs text-slate-400">Ce formulaire ouvre votre client e-mail. Aucune donnée n’est transmise à un serveur.</p></form></div></div></section> }
const socialIcons = {
  facebook: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>,
  instagram: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="18" height="18" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
  linkedin: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  whatsapp: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>,
}

// Réseaux sociaux : renseignez ici vos liens (ex. https://facebook.com/votrepage, https://wa.me/212XXXXXXXXX)
const socials = [
  { key: 'facebook', label: 'Facebook', href: socialLinks.facebook },
  { key: 'instagram', label: 'Instagram', href: socialLinks.instagram },
  { key: 'linkedin', label: 'LinkedIn', href: socialLinks.linkedin },
  { key: 'whatsapp', label: 'WhatsApp', href: socialLinks.whatsapp },
] as const

function SocialLinks({ className = '' }: { className?: string }) {
  return <div className={`flex gap-3 ${className}`}>{socials.map((s) => <a key={s.key} href={s.href || '#'} className={`social social-${s.key}`} aria-label={s.label} title={s.label} target={s.href ? '_blank' : undefined} rel="noreferrer">{socialIcons[s.key]}</a>)}</div>
}

function Chatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState<{ text: string; user?: boolean }[]>([]); const ask = (q: string, a: string) => setMessages((m) => [...m, { text: q, user: true }, { text: a }]); return <div className="chatbot"><button className="chat-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer l’assistant' : 'Ouvrir l’assistant'}>{open ? <X /> : <MessageCircle />}<span className="chat-dot" /></button>{open && <div className="chat-window"><div className="chat-head"><div><span className="chat-status" /> <strong>Assistant ZAIDOFFSHORING</strong><small>Réponse instantanée</small></div><button onClick={() => setOpen(false)} aria-label="Fermer"><Minus size={18} /></button></div><div className="chat-body"><div className="chat-bubble">Bonjour et bienvenue chez ZAIDOFFSHORING ! Comment pouvons-nous vous aider ?</div>{messages.map((m, i) => <div key={i} className={`chat-bubble ${m.user ? 'user-bubble' : ''}`}>{m.text}</div>)}{messages.length > 0 && <button className="chat-back" onClick={() => setMessages([])}>← Revenir au menu</button>}<div className="chat-questions">{messages.length === 0 && questions.map(([q, a]) => <button key={q} onClick={() => ask(q, a)}>{q}<ArrowRight size={14} /></button>)}</div></div></div>}</div> }

function Footer() { return <footer className="footer"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:px-10"><div><Logo /><p className="mt-5 max-w-xs text-sm leading-6 text-white/50">Des solutions maritimes adaptées à vos projets nautiques et offshore.</p></div><div><h3>Navigation</h3><a href="#a-propos">À propos</a><a href="#services">Nos services</a><a href="#contact">Contact</a></div><div><h3>Expertises</h3><a href="#services">Bases nautiques</a><a href="#services">Travaux immergés</a></div><div><h3>Contact</h3><p>{contact.email}</p><p>{contact.phone}</p><SocialLinks className="mt-5" /></div></div><div className="border-t border-white/10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-6 py-5 text-xs text-white/35 sm:flex-row lg:px-10"><span>© {new Date().getFullYear()} ZAIDOFFSHORING. Tous droits réservés.</span><a href="#accueil" className="flex items-center gap-2">Retour en haut <Plus size={13} className="rotate-45" /></a></div></div></footer> }

export default function Page() { return <><Navbar /><main><Hero /><About /><Services /><Partners /><CTA /><Contact /></main><Footer /><Chatbot /></> }
