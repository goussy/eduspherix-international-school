const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.textContent=open?'×':'☰';});}
const current=location.pathname.split('/').pop()||'index.html';
document.querySelectorAll('.nav-links a').forEach(a=>{if(a.getAttribute('href')===current)a.classList.add('active');});
const topButton=document.querySelector('.back-top');
if(topButton){window.addEventListener('scroll',()=>topButton.classList.toggle('show',window.scrollY>500));topButton.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));}
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.gallery-item').forEach(item=>item.hidden=filter!=='all'&&item.dataset.category!==filter);}));
document.querySelectorAll('.enquiry-form').forEach(form=>form.addEventListener('submit',event=>{event.preventDefault();const data=new FormData(form);const lines=[`School enquiry — EduSpherix International School`,`Name: ${data.get('name')||''}`,`Parent/Guardian: ${data.get('parent')||''}`,`Phone: ${data.get('phone')||''}`,`Email: ${data.get('email')||''}`,`Grade: ${data.get('grade')||''}`,`Message: ${data.get('message')||''}`];const url='https://wa.me/918861639473?text='+encodeURIComponent(lines.join('\\n'));window.open(url,'_blank','noopener');}));
const year=document.querySelector('[data-year]');if(year)year.textContent=new Date().getFullYear();
