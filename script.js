const D=[
["Flat White","coffee","Double ristretto, silky microfoam, a touch of caramel sweetness.",4.5,"cup","#8A4F2B","#E9C58B"],
["Cold Brew","coffee","Steeped 18 hours, served over ice with orange zest.",5,"glass","#4A2A18","#D7C3A0"],
["Matcha Latte","tea","Ceremonial matcha whisked with oat milk, lightly sweet.",5.5,"cup","#7C8F45","#DCE0BD"],
["Masala Chai","tea","Slow-simmered black tea with ginger, cardamom and cinnamon.",4.8,"cup","#B8702F","#F0D3A4"],
["Cardamom Bun","dessert","Baked each morning, rolled with butter and crushed cardamom.",4.2,"bun","#C98A4B","#EBCB9A"],
["Basque Cheesecake","dessert","Burnt top, creamy centre, served with seasonal berry compote.",6,"slice","#3F2515","#E8C8B8"]];
const g=document.getElementById('grid'),cn=document.getElementById('cn'),cart=document.getElementById('cart');let n=0;
D.forEach(d=>{const c=document.createElement('article');c.className='card rev';c.dataset.c=d[1];
c.innerHTML=`<div class="art" style="background:${d[6]}"><svg viewBox="0 0 120 120" style="--a:${d[5]}"><use href="#${d[4]}"/></svg></div><div class="body"><h3>${d[0]}</h3><p>${d[2]}</p><div class="row"><span class="price">$${d[3].toFixed(2)}</span><button class="add">Add +</button></div></div>`;
c.querySelector('.add').onclick=e=>{const b=e.currentTarget,on=b.classList.toggle('in');b.textContent=on?'Added ✓':'Add +';n+=on?1:-1;cn.textContent=n;cart.classList.remove('bump');void cart.offsetWidth;cart.classList.add('bump')};
g.appendChild(c)});
document.getElementById('tabs').onclick=e=>{const b=e.target.closest('button');if(!b)return;
document.querySelectorAll('#tabs button').forEach(x=>x.setAttribute('aria-pressed',x===b));
g.querySelectorAll('.card').forEach(c=>{const s=b.dataset.f==='all'||c.dataset.c===b.dataset.f;c.classList.toggle('hide',!s);if(s){c.classList.remove('in');void c.offsetWidth;c.classList.add('in')}})};
const hd=document.getElementById('hd'),bg=document.getElementById('bg');
const setOpen=o=>{hd.classList.toggle('open',o);bg.setAttribute('aria-expanded',o)};
bg.onclick=()=>setOpen(!hd.classList.contains('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>setOpen(false)));
addEventListener('scroll',()=>hd.classList.toggle('on',scrollY>30),{passive:true});
document.getElementById('vm').onclick=e=>{e.preventDefault();document.getElementById('menu').scrollIntoView({behavior:'smooth'})};
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rev').forEach((el,i)=>{el.style.transitionDelay=(i%3)*90+'ms';io.observe(el)});
