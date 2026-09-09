import {ArrowUpRight,ArrowRight,MessageCircle,Camera as Instagram,Scissors,Waves,Sparkles,Flower2} from 'lucide-react';
import {content as c,whatsappHref} from './content';
import Header,{Wordmark} from './header';
const icons={scissors:Scissors,waves:Waves,sparkles:Sparkles,flower:Flower2};
export default function Home(){return <>
<div className="page-scroll">
<a href="#conteudo" className="skip-link">{c.ui.skip}</a>
<Header/>
<main id="conteudo" tabIndex={-1}>
<section className="hero container" id="inicio" aria-labelledby="hero-title" tabIndex={-1}>
<div className="hero-copy"><p className="eyebrow"><span className="gold-line"/>{c.hero.eyebrow}</p>
<h1 id="hero-title">{c.hero.title}<br/><em>{c.hero.accent}</em></h1>
<p className="hero-description">{c.hero.description}</p>
<a className="button hero-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer">{c.hero.primary}<ArrowUpRight size={18}/></a>
<a className="text-link hero-secondary" href="#trabalhos">{c.hero.secondary}<ArrowRight size={17}/></a></div>
<div className="hero-visual"><div className="hero-photo-frame"><img {...c.images.hero} loading="eager" fetchPriority="high" className="hero-photo"/><span className="photo-label">{c.name.toLocaleUpperCase('pt-BR')}</span></div><div className="hero-note"><span>{c.branding.photoNote}</span><p>{c.hero.caption}</p></div></div>
</section>
<section className="facts" aria-label="Sobre o atendimento"><div className="container facts-inner">{c.facts.map((f,i)=><div className="fact" key={f.title}><span className="fact-number">0{i+1}</span><div><p className="fact-title">{f.title}</p><p className="fact-description">{f.description}</p></div></div>)}</div></section>
<section className="services section-space container" id="servicos" aria-labelledby="services-title" tabIndex={-1}>
 <div className="section-heading"><div><p className="eyebrow">{c.servicesIntro.eyebrow}</p><h2 id="services-title">{c.servicesIntro.title}</h2></div><p className="section-description">{c.servicesIntro.description}</p></div>
 <div className="services-grid">{c.services.map((s,i)=>{const Icon=icons[s.icon];return <article className="service" key={s.id}><div className="service-top"><Icon size={27} strokeWidth={1.2}/><span>0{i+1}</span></div><h3>{s.name}</h3><p>{s.description}</p><a className="text-link service-link" href={whatsappHref(s.name)} target="_blank" rel="noopener noreferrer" aria-label={c.servicesIntro.action+' '+s.name+' pelo WhatsApp'}>{c.servicesIntro.action} {s.name.toLocaleLowerCase('pt-BR')}<ArrowUpRight size={17}/></a></article>})}</div>
</section>
<section className="gallery-section" id="trabalhos" aria-labelledby="gallery-title" tabIndex={-1}><div className="container section-space">
 <div className="section-heading"><div><p className="eyebrow">{c.galleryIntro.eyebrow}</p><h2 id="gallery-title">{c.galleryIntro.title}</h2><p className="gallery-description">{c.galleryIntro.description}</p></div><a className="text-link instagram-link" href={c.instagram} target="_blank" rel="noopener noreferrer">{c.galleryIntro.action}<ArrowUpRight size={17}/></a></div>
 <div className="gallery-grid">{c.gallery.map((photo,i)=><figure key={photo.src} className={'gallery-item gallery-item-'+i}><div className="gallery-photo"><img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async"/></div><figcaption><span>{photo.label}</span><p>{photo.caption}</p></figcaption></figure>)}</div>
</div></section>
<section className="about container section-space" id="sobre" aria-labelledby="about-title" tabIndex={-1}>
 <figure className="about-visual"><div className="about-photo"><img {...c.images.salon} loading="lazy" decoding="async"/></div><figcaption><span className="gold-line"/>{c.about.imageCaption}</figcaption></figure>
 <div className="about-copy"><p className="eyebrow">{c.about.eyebrow}</p><h2 id="about-title">{c.about.title}</h2>{c.about.paragraphs.map(p=><p className="about-paragraph" key={p}>{p}</p>)}<blockquote>“{c.about.quote}”</blockquote><a className="text-link" href={whatsappHref()} target="_blank" rel="noopener noreferrer">{c.about.action}<ArrowUpRight size={17}/></a></div>
</section>
<section className="steps-section"><div className="container section-space"><div className="steps-heading"><p className="eyebrow">{c.stepsIntro.eyebrow}</p><h2>{c.stepsIntro.title}</h2></div><ol className="steps">{c.steps.map((step,i)=><li key={step.title}><span className="step-number">0{i+1}</span><h3>{step.title}</h3><p>{step.description}</p></li>)}</ol></div></section>
<section className="contact-section" id="contato" aria-labelledby="contact-title" tabIndex={-1}><div className="container contact-inner"><p className="eyebrow">{c.contact.eyebrow}</p><h2 id="contact-title">{c.contact.title}</h2><p className="contact-description">{c.contact.description}</p><a className="button contact-button" href={whatsappHref()} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} strokeWidth={1.5}/>{c.contact.action}<ArrowUpRight size={18}/></a><p className="contact-phone">{c.phone}</p><a className="contact-instagram" href={c.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={17}/>{c.instagramHandle}<ArrowUpRight size={15}/></a><p className="contact-note">{c.contact.note}</p></div></section>
</main>
<footer className="site-footer"><div className="container"><div className="footer-top"><div><Wordmark/><p className="footer-tagline">{c.footer.tagline}</p></div><nav aria-label="Navegação do rodapé">{c.navigation.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</nav><div className="footer-socials"><a href={c.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram do Espaço Beth Souza"><Instagram size={19}/></a><a href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label="Conversar com o Espaço Beth Souza pelo WhatsApp"><MessageCircle size={20}/></a></div></div><div className="footer-bottom"><span>{c.name}</span><p>{c.footer.note}</p></div></div></footer>
</div>
<div className="contact-dock"><a className="floating-whatsapp" href={whatsappHref()} target="_blank" rel="noopener noreferrer" aria-label={'Abrir conversa com o '+c.name+' pelo WhatsApp'}><MessageCircle size={24} strokeWidth={1.5}/><span>{c.contact.action}</span><ArrowUpRight className="dock-arrow" size={17}/></a></div>
</>}
