  document.getElementById('year').textContent = new Date().getFullYear();
  const menuBtn = document.getElementById('menuBtn');
  const navList = document.getElementById('navList');
  const header = document.getElementById('siteHeader');

  function closeMenu(){
    navList.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
  function openMenu(){
    navList.classList.add('open');
    menuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }
  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navList.classList.contains('open') ? closeMenu() : openMenu();
  });
  navList.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('click', (e) => {
    if (navList.classList.contains('open') && !navList.contains(e.target) && e.target !== menuBtn) closeMenu();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 760) closeMenu(); });
  function onScroll(){ header.classList.toggle('is-scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive:true });
  onScroll();