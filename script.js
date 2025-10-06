// TechnoVibes small interactions
(function(){
  // update QR with real host if available (not file://)
  try {
    var host = window.location.href;
    if (!host.startsWith('file:') && !host.includes('localhost')) {
      var qr = document.getElementById('qr-img');
      if (qr) qr.src = 'https://chart.googleapis.com/chart?chs=260x260&cht=qr&chl=' + encodeURIComponent(host) + '&chld=L|1';
    }
  } catch(e){ console.warn(e) }

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click', function(ev){
      ev.preventDefault();
      var id = this.getAttribute('href').slice(1);
      var el = document.getElementById(id);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();