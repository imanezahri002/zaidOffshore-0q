'use client'

import { useEffect, useState } from 'react'
import {
  Anchor,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Facebook,
  Instagram,
  Mail,
  Menu,
  MessageCircle,
  Minus,
  Phone,
  Send,
  Ship,
  Waves,
  X,
} from 'lucide-react'

const contact = {
  phone: 'À compléter',
  email: 'À compléter',
  location: 'À compléter',
  availability: 'À compléter',
  socials: { instagram: '', facebook: '', x: '', whatsapp: '' },
}

const services = [
  {
    number: '01',
    title: 'Installation des bases nautiques',
    description: 'Installation et aménagement de bases nautiques selon les caractéristiques du site et les besoins du projet.',
    images: [
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1400&q=85',
    ],
  },
  {
    number: '02',
    title: 'Renflouage & travaux sur corps immergés',
    description: 'Interventions destinées au renflouage des bateaux et aux travaux sur les éléments immergés, selon les contraintes de chaque opération.',
    images: [
      'https://images.unsplash.com/photo-1544550285-f813152fb2fd?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?auto=format&fit=crop&w=1400&q=85',
      'https://images.unsplash.com/photo-1530053969600-caed2596d242?auto=format&fit=crop&w=1400&q=85',
    ],
  },
]

const faq = [
  ['Quels sont vos services ?', 'Nous intervenons dans l'installation des bases nautiques et le renflouage des bateaux ou travaux sur corps immergés.'],
  ['Installation des bases nautiques', 'Nous adaptons l'installation et l'aménagement aux caractéristiques du site et aux besoins du projet.'],
  ['Renflouage des bateaux', 'Les modalités d'intervention dépendent de l'opération, du contexte et des caractéristiques de l'élément immergé.'],
  ['Comment demander un devis ?', 'Utilisez le formulaire de contact ci-dessous pour nous transmettre les premières informations de votre projet.'],
  ['Comment vous contacter ?', 'Vous pouvez utiliser le formulaire. Les coordonnées directes seront ajoutées dès qu'elles seront disponibles.'],
]

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const navigate = (id: string) => { setOpen(false); scrollToId(id) }
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${scrolled ? 'bg-[#071c2c]/95 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-10">
        <button className="group flex items-center gap-3 text-left" onClick={() => navigate('accueil')} aria-label="Retour à l'accueil">
          <span className="grid size-9 place-items-center rounded-full border border-[#16b8c4]/60 text-[#16b8c4] transition group-hover:bg-[#16b8c4] group-hover:text-[#071c2c]"><Anchor size={17} /></span>
          <span className="font-mono text-[11px] font-bold tracking-[0.22em] text-white sm:text-xs">ZAID<span className="text-[#16b8c4]">OFFSHORING</span></span>
        </button>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigation principale">
          {[['Accueil', 'accueil'], ['À propos', 'a-propos'], ['Nos services', 'services'], ['Contact', 'contact']].map(([label, id]) => <button key={id} onClick={() => navigate(id)} className="text-[11px] font-medium uppercase tracking-[0.18em] text-white/70 transition hover:text-[#16b8c4]">{label}</button>)}
          <button onClick={() => navigate('contact')} className="inline-flex items-center gap-2 rounded-full bg-[#16b8c4] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#071c2c] transition hover:bg-white"><span>Demander un devis</span><ArrowUpRight size={14} /></button>
        </nav>
        <button className="grid size-11 place-items-center rounded-full border border-white/20 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="flex flex-col gap-5 border-t border-white/10 bg-[#071c2c] px-6 py-7 md:hidden">{[['Accueil', 'accueil'], ['À propos', 'a-propos'], ['Nos services', 'services'], ['Contact', 'contact']].map(([label, id]) => <button key={id} onClick={() => navigate(id)} className="text-left text-sm uppercase tracking-[0.18em] text-white/80">{label}</button>)}<button onClick={() => navigate('contact')} className="rounded-full bg-[#16b8c4] px-5 py-3 text-xs font-bold uppercase tracking-widest text-[#071c2c]">Demander un devis</button></nav>}
    </header>
  )
}

export function Hero() {
  return <section id="accueil" className="relative flex min-h-[720px] items-end overflow-hidden bg-[#071c2c] pb-20 pt-32 text-white lg:min-h-screen lg:pb-28">
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" aria-hidden="true" />
    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,28,44,.96)_0%,rgba(7,28,44,.68)_45%,rgba(7,28,44,.22)_100%)]" />
    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(7,28,44,.75),transparent_55%)]" />
    <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-10">
      <div className="max-w-3xl">
        <div className="mb-7 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#16b8c4]"><span className="h-px w-10 bg-[#16b8c4]" /> Expertise maritime & offshore</div>
        <h1 className="max-w-3xl text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">L'expertise maritime <span className="text-[#16b8c4]">au service</span> de vos projets.</h1>
        <p className="mt-8 max-w-xl text-base leading-7 text-white/70 sm:text-lg">ZAIDOFFSHORING vous accompagne dans vos opérations maritimes, l'installation de bases nautiques et les interventions sur les structures immergées.</p>
        <div className="mt-9 flex flex-wrap gap-3"><button onClick={() => scrollToId('services')} className="inline-flex items-center gap-3 rounded-full bg-[#16b8c4] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#071c2c] transition hover:bg-white">Découvrir nos services <ArrowDown size={15} /></button><button onClick={() => scrollToId('contact')} className="inline-flex items-center gap-3 rounded-full border border-white/30 px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#16b8c4] hover:text-[#16b8c4]">Nous contacter <ArrowUpRight size={15} /></button></div>
      </div>
      <div className="mt-20 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-white/50"><span className="grid size-8 place-items-center rounded-full border border-white/20"><ArrowDown size={13} /></span> Défiler pour explorer</div>
    </div>
  </section>
}

export function About() {
  return <section id="a-propos" className="bg-[#f3f6f8] py-24 text-[#071c2c] lg:py-36"><div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24 lg:px-10"><div className="relative overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=85" alt="Bateau naviguant sur une mer calme" className="aspect-[4/5] w-full object-cover" /><div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-xl bg-[#071c2c]/90 px-4 py-3 text-white backdrop-blur"><Waves className="text-[#16b8c4]" size={18} /><span className="text-[10px] uppercase tracking-[0.15em]">Au cœur du milieu marin</span></div></div><div><div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#0b7180]"><span className="h-px w-8 bg-[#16b8c4]" /> À propos</div><h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Des solutions maritimes adaptées à vos projets</h2><p className="mt-7 max-w-lg text-base leading-7 text-[#071c2c]/65">ZAIDOFFSHORING accompagne ses clients dans leurs projets d'installation nautique et d'interventions sur les structures immergées. Notre approche repose sur la préparation des opérations, l'adaptation aux contraintes du milieu marin et la recherche de solutions adaptées à chaque projet.</p><div className="mt-9 flex flex-col gap-4">{['Approche adaptée à chaque projet.', 'Attention portée aux contraintes du milieu marin.', 'Accompagnement des besoins techniques.'].map((item) => <div key={item} className="flex items-center gap-3 text-sm font-medium"><span className="grid size-7 place-items-center rounded-full bg-[#d4f3f3] text-[#0b7180]"><Check size={14} /></span>{item}</div>)}</div></div></div></section>
}

function ServiceCard({ service }: { service: typeof services[number] }) {
  const [index, setIndex] = useState(0)
  const change = (direction: number) => setIndex((index + direction + service.images.length) % service.images.length)
  return <article className="group overflow-hidden rounded-[1.5rem] bg-white shadow-[0_20px_55px_rgba(7,28,44,.08)]"><div className="relative aspect-[1.12/1] overflow-hidden"><img src={service.images[index]} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><div className="absolute inset-0 bg-gradient-to-t from-[#071c2c]/75 via-transparent to-transparent" /><span className="absolute left-5 top-5 font-mono text-sm text-white/80">/{service.number}</span><div className="absolute bottom-5 left-5 right-5 flex items-end justify-between"><span className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/70">Opération maritime</span><div className="flex gap-2"><button onClick={() => change(-1)} aria-label="Image précédente" className="grid size-9 place-items-center rounded-full border border-white/35 text-white backdrop-blur transition hover:bg-white hover:text-[#071c2c]"><ArrowLeft size={14} /></button><button onClick={() => change(1)} aria-label="Image suivante" className="grid size-9 place-items-center rounded-full border border-white/35 text-white backdrop-blur transition hover:bg-white hover:text-[#071c2c]"><ArrowRight size={14} /></button></div></div></div><div className="p-7"><div className="mb-5 flex gap-1">{service.images.map((_, i) => <button key={i} onClick={() => setIndex(i)} aria-label={`Afficher l'image ${i + 1}`} className={`h-1 rounded-full transition-all ${i === index ? 'w-8 bg-[#16b8c4]' : 'w-2 bg-[#d8e3e7]'}`} />)}</div><h3 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#071c2c]">{service.title}</h3><p className="mt-4 min-h-14 text-sm leading-6 text-[#071c2c]/60">{service.description}</p><div className="mt-7 flex items-center justify-between border-t border-[#071c2c]/10 pt-5"><button onClick={() => scrollToId('contact')} className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#0b7180] transition hover:text-[#071c2c]">Demander un devis <ArrowUpRight size={14} /></button><span className="text-xs text-[#071c2c]/30">{String(index + 1).padStart(2, '0')} / 0{service.images.length}</span></div></div></article>
}

export function Services() { return <section id="services" className="bg-[#f3f6f8] py-24 lg:py-36"><div className="mx-auto max-w-7xl px-5 lg:px-10"><div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#0b7180]"><span className="h-px w-8 bg-[#16b8c4]" /> Nos expertises</div><h2 className="max-w-2xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] text-[#071c2c] sm:text-5xl">Des interventions pensées pour le milieu maritime</h2></div><p className="max-w-sm text-sm leading-6 text-[#071c2c]/60">Découvrez nos principaux domaines d'intervention et contactez-nous pour discuter de vos besoins.</p></div><div className="mt-14 grid gap-6 lg:grid-cols-2">{services.map((service) => <ServiceCard key={service.number} service={service} />)}</div></div></section> }

export function CallToAction() { return <section className="relative overflow-hidden bg-[#0b3550] py-20 text-white lg:py-28"><div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498623116890-37e912163d5d?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center opacity-20" /><div className="absolute inset-0 bg-[#071c2c]/50" /><div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-5 lg:flex-row lg:items-end lg:px-10"><div><div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#16b8c4]"><span className="h-px w-8 bg-[#16b8c4]" /> Votre projet</div><h2 className="max-w-2xl text-4xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl">Vous avez un projet maritime ?</h2><p className="mt-5 max-w-lg text-base leading-7 text-white/65">Parlons de vos besoins et étudions ensemble les solutions adaptées à votre opération.</p></div><button onClick={() => scrollToId('contact')} className="inline-flex w-fit items-center gap-3 rounded-full bg-[#16b8c4] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#071c2c] transition hover:bg-white">Discuter de votre projet <ArrowUpRight size={15} /></button></div></section> }

export function Contact() {
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const submit = (event: React.FormEvent<HTMLFormElement>) => { event.preventDefault(); setError(''); const form = event.currentTarget; if (!form.checkValidity()) { setError('Veuillez compléter les champs obligatoires.'); form.reportValidity(); return } const data = new FormData(form); const body = [`Nom : ${data.get('name')}`, `Entreprise : ${data.get('company') || 'Non renseignée'}`, `Téléphone : ${data.get('phone') || 'Non renseigné'}`, `Service : ${data.get('service')}`, '', `${data.get('message')}`].join('\n'); window.location.href = `mailto:${contact.email.includes('@') ? contact.email : ''}?subject=${encodeURIComponent(String(data.get('subject')))}&body=${encodeURIComponent(body)}`; setSent(true) }
  return <section id="contact" className="bg-[#071c2c] py-24 text-white lg:py-36"><div className="mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[.75fr_1.25fr] lg:px-10"><div><div className="mb-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.28em] text-[#16b8c4]"><span className="h-px w-8 bg-[#16b8c4]" /> Contact</div><h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl">Parlons de votre projet</h2><p className="mt-6 max-w-sm text-base leading-7 text-white/60">Vous souhaitez obtenir des informations sur nos services ou discuter d'une intervention ? Envoyez-nous votre demande.</p><div className="mt-10 flex flex-col gap-5 text-sm">{[[Phone, 'Téléphone', contact.phone], [Mail, 'E-mail', contact.email], [Waves, 'Localisation', contact.location], [Ship, 'Disponibilité', contact.availability]].map(([Icon, label, value]) => <div key={label as string} className="flex items-center gap-4"><span className="grid size-10 place-items-center rounded-full border border-white/10 text-[#16b8c4]"><Icon size={16} /></span><div><div className="text-[10px] uppercase tracking-widest text-white/35">{label as string}</div><div className="mt-1 text-white/80">{value as string}</div></div></div>)}</div></div><form onSubmit={submit} className="rounded-[1.5rem] border border-white/10 bg-white/[.045] p-6 backdrop-blur sm:p-9"><div className="grid gap-5 sm:grid-cols-2"><label className="text-xs text-white/60">Nom complet *<input name="name" required className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="Votre nom" /></label><label className="text-xs text-white/60">Entreprise<input name="company" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="Votre entreprise" /></label><label className="text-xs text-white/60">Adresse e-mail *<input name="email" type="email" required className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="vous@entreprise.com" /></label><label className="text-xs text-white/60">Téléphone<input name="phone" className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="+212 ..." /></label><label className="text-xs text-white/60">Service concerné *<select name="service" required className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none focus:border-[#16b8c4]"><option className="text-[#071c2c]" value="">Sélectionner</option><option className="text-[#071c2c]">Installation des bases nautiques</option><option className="text-[#071c2c]">Renflouage & travaux immergés</option></select></label><label className="text-xs text-white/60">Objet *<input name="subject" required className="mt-2 w-full border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="Objet de votre demande" /></label><label className="text-xs text-white/60 sm:col-span-2">Message *<textarea name="message" required rows={4} className="mt-2 w-full resize-none border-b border-white/20 bg-transparent px-0 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-[#16b8c4]" placeholder="Décrivez brièvement votre projet..." /></label></div>{error && <p className="mt-5 text-sm text-[#ffb4a8]" role="alert">{error}</p>}{sent && <p className="mt-5 text-sm text-[#8de7df]" role="status">Votre message est prêt à être ouvert dans votre client e-mail.</p>}<button type="submit" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#16b8c4] px-6 py-4 text-xs font-bold uppercase tracking-[0.14em] text-[#071c2c] transition hover:bg-white">Préparer le message <Send size={15} /></button><p className="mt-4 text-[11px] leading-5 text-white/35">Ce formulaire prépare un e-mail dans votre messagerie. Aucune donnée n'est envoyée par ce site.</p></form></div></section>
}

export function Chatbot() { const [open, setOpen] = useState(false); const [messages, setMessages] = useState<{from: 'bot' | 'user'; text: string}[]>([{ from: 'bot', text: 'Bonjour et bienvenue chez ZAIDOFFSHORING ! Comment pouvons-nous vous aider ?' }]); const ask = (question: string, answer: string) => setMessages((current) => [...current, { from: 'user', text: question }, { from: 'bot', text: answer }]); return <div className="fixed bottom-5 right-5 z-50 sm:bottom-7 sm:right-7">{open && <div className="mb-3 flex h-[min(560px,calc(100vh-110px))] w-[min(370px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[#071c2c]/10 bg-white shadow-2xl"><div className="flex items-center justify-between bg-[#071c2c] p-5 text-white"><div><div className="text-sm font-semibold">Assistant ZAIDOFFSHORING</div><div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-widest text-[#16b8c4]"><span className="size-1.5 rounded-full bg-[#16b8c4]" /> Assistant statique</div></div><div className="flex gap-1"><button onClick={() => setOpen(false)} aria-label="Minimiser le chatbot" className="grid size-8 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"><Minus size={16} /></button><button onClick={() => setOpen(false)} aria-label="Fermer le chatbot" className="grid size-8 place-items-center rounded-full text-white/60 hover:bg-white/10 hover:text-white"><X size={16} /></button></div></div><div className="flex-1 overflow-y-auto bg-[#f3f6f8] p-4"><div className="flex flex-col gap-3">{messages.map((message, index) => <div key={`${message.text}-${index}`} className={`max-w-[88%] rounded-2xl px-4 py-3 text-xs leading-5 ${message.from === 'bot' ? 'self-start rounded-tl-sm bg-white text-[#071c2c]' : 'self-end rounded-tr-sm bg-[#16b8c4] text-[#071c2c]'}`}>{message.text}</div>)}</div>{messages.length > 1 && <button onClick={() => setMessages([{ from: 'bot', text: 'Bonjour et bienvenue chez ZAIDOFFSHORING ! Comment pouvons-nous vous aider ?' }])} className="mt-5 text-[10px] font-bold uppercase tracking-widest text-[#0b7180]">Retour au menu</button>}</div><div className="flex flex-col gap-2 border-t border-[#071c2c]/10 bg-white p-3">{faq.map(([question, answer]) => <button key={question} onClick={() => ask(question, answer)} className="rounded-lg border border-[#071c2c]/10 px-3 py-2 text-left text-[11px] text-[#071c2c]/75 transition hover:border-[#16b8c4] hover:bg-[#f3f6f8]">{question}</button>)}</div></div>}<button onClick={() => setOpen(!open)} aria-label={open ? 'Fermer le chatbot' : 'Ouvrir le chatbot'} className="grid size-14 place-items-center rounded-full bg-[#16b8c4] text-[#071c2c] shadow-lg shadow-[#16b8c4]/20 transition hover:scale-105 hover:bg-white">{open ? <X /> : <MessageCircle />}</button></div> }

export function Footer() { return <footer className="bg-[#061621] py-10 text-white"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 lg:px-10"><div className="flex flex-col justify-between gap-7 border-b border-white/10 pb-8 md:flex-row md:items-center"><div><div className="font-mono text-xs font-bold tracking-[0.22em]">ZAID<span className="text-[#16b8c4]">OFFSHORING</span></div><p className="mt-3 max-w-xs text-sm leading-6 text-white/45">Solutions maritimes et interventions sur structures immergées.</p></div><div className="flex items-center gap-3"><a href={contact.socials.instagram || undefined} aria-label="Instagram" className="grid size-9 place-items-center rounded-full border border-white/10 text-white/60 hover:border-[#16b8c4] hover:text-[#16b8c4]"><Instagram size={15} /></a><a href={contact.socials.facebook || undefined} aria-label="Facebook" className="grid size-9 place-items-center rounded-full border border-white/10 text-white/60 hover:border-[#16b8c4] hover:text-[#16b8c4]"><Facebook size={15} /></a><a href={contact.socials.whatsapp || undefined} aria-label="WhatsApp" className="grid size-9 place-items-center rounded-full border border-white/10 text-white/60 hover:border-[#16b8c4] hover:text-[#16b8c4]"><MessageCircle size={15} /></a></div></div><div className="flex flex-col justify-between gap-5 text-xs text-white/40 md:flex-row"><span>© {new Date().getFullYear()} ZAIDOFFSHORING. Tous droits réservés.</span><button onClick={() => scrollToId('accueil')} className="flex items-center gap-2 text-left uppercase tracking-widest hover:text-[#16b8c4]">Retour en haut <ArrowUp size={14} /></button></div></div></footer> }

export function ZaidOffshoringPage() { return <><Navbar /><main><Hero /><About /><Services /><CallToAction /><Contact /></main><Footer /><Chatbot /></> }

export { contact }
export function ArrowUp() { return <ArrowUpRight /> }
