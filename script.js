const menuBtn=document.getElementById('menuBtn');
const nav=document.getElementById('navlinks');
menuBtn?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

const sections=[...document.querySelectorAll('section[id],header[id]')];
const links=[...document.querySelectorAll('.navlinks a')];
window.addEventListener('scroll',()=>{
  const y=scrollY+130;
  let id='home';
  sections.forEach(s=>{if(s.offsetTop<=y) id=s.id});
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')===`#${id}`));
});

const hero=document.getElementById('heroVisual');
window.addEventListener('mousemove',e=>{
  if(!hero || innerWidth<900) return;
  const x=(e.clientX/innerWidth-.5)*9;
  const y=(e.clientY/innerHeight-.5)*-7;
  hero.style.transform=`rotateY(${x}deg) rotateX(${y}deg)`;
});
window.addEventListener('mouseleave',()=>{if(hero)hero.style.transform=''});


// page load animation
window.addEventListener('load',()=>document.body.classList.add('loaded'));

// subtle parallax for page glow and sections
const glows=document.querySelectorAll('.page-glow');
window.addEventListener('scroll',()=>{
  const sy=window.scrollY;
  glows.forEach((g,i)=>{
    const speed=i===0?0.08:0.05;
    g.style.transform=`translateY(${sy*speed}px)`;
  });
});
