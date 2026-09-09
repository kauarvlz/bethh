'use client';
import {useEffect,useRef,useState} from 'react';
import {Menu,X,ArrowUpRight} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {content as c,whatsappHref} from './content';

export function Wordmark(){return <a className="wordmark" href="#inicio" aria-label={c.name+', início'}><span>{c.branding.prefix.toLocaleUpperCase('pt-BR')}</span><b>{c.branding.signature}<span className="wordmark-dot">.</span></b></a>}
export default function Header(){
 const [open,setOpen]=useState(false);
 const trigger=useRef<HTMLButtonElement>(null);
 const header=useRef<HTMLElement>(null);
 useEffect(()=>{
  const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}};
  const outside=(e:PointerEvent)=>{if(!header.current?.contains(e.target as Node))setOpen(false)};
  const wide=window.matchMedia('(min-width: 851px)');
  const resize=()=>{if(wide.matches)setOpen(false)};
  if(open){document.addEventListener('keydown',close);document.addEventListener('pointerdown',outside)}
  wide.addEventListener('change',resize);
  return()=>{document.removeEventListener('keydown',close);document.removeEventListener('pointerdown',outside);wide.removeEventListener('change',resize)};
 },[open]);
 function navigate(href:string){
  setOpen(false);
  requestAnimationFrame(()=>document.getElementById(href.slice(1))?.focus({preventScroll:true}));
 }
 return <header ref={header} className="site-header" onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget as Node))setOpen(false)}}>
 <div className="container header-inner"><Wordmark/>
 <nav className="desktop-nav" aria-label="Navegação principal">{c.navigation.map(n=><a key={n.href} href={n.href}>{n.label}</a>)}</nav>
 <a className="button header-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer">{c.ui.schedule}<ArrowUpRight size={16}/></a>
 <Button ref={trigger} className="menu-toggle" variant="ghost" size="icon-lg" aria-label={open?c.ui.closeMenu:c.ui.openMenu} aria-expanded={open} aria-controls="mobile-menu" onClick={()=>setOpen(!open)}>{open?<X size={23}/>:<Menu size={23}/>}</Button>
 </div>
 <nav id="mobile-menu" className="mobile-menu" aria-label="Navegação no celular" hidden={!open}>
 <div className="container">{c.navigation.map((n,i)=><a key={n.href} href={n.href} onClick={()=>navigate(n.href)}><span><small>0{i+1}</small>{n.label}</span><ArrowUpRight size={17}/></a>)}
 <a className="button mobile-menu-cta" href={whatsappHref()} target="_blank" rel="noopener noreferrer" onClick={()=>setOpen(false)}>{c.ui.schedule}<ArrowUpRight size={17}/></a></div>
 </nav></header>;
}
