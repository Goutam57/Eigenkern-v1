const b=document.querySelector('.burger'),n=document.querySelector('.nav');
b.addEventListener('click',()=>{const o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)});
n.addEventListener('click',e=>{if(e.target.tagName==='A'){n.classList.remove('open');b.setAttribute('aria-expanded',false)}});
const flow=document.getElementById('flow');
if(flow){const f=[...flow.querySelectorAll('.fl')];
new IntersectionObserver((e,o)=>{if(e[0].isIntersecting){o.disconnect();f.forEach((x,i)=>setTimeout(()=>{x.classList.add('on');if(i===1)f[0].classList.add('red')},i*900))}},{threshold:.35}).observe(flow)}
const v=document.getElementById('v'),cs=[...document.querySelectorAll('#chap li')];
if(v){const T=cs.map(l=>+l.firstElementChild.dataset.t);
const set=t=>{let k=0;T.forEach((x,i)=>{if(t>=x)k=i});cs.forEach((l,i)=>l.classList.toggle('on',i===k))};
cs.forEach((l,i)=>l.firstElementChild.addEventListener('click',()=>{v.currentTime=T[i];v.play();set(T[i])}));
v.addEventListener('timeupdate',()=>set(v.currentTime));set(0)}
