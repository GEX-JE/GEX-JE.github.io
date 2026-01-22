
  const yaziElementleri = document.querySelectorAll('.degisen-yazi');

  yaziElementleri.forEach(element => {
    const orijinalMetin = element.innerText;
    const yeniMetin = element.getAttribute('data-hover');
    let zamanlayici; // Her element için özel sayaç değişkeni

    element.parentElement.addEventListener('mouseenter', () => {
      // 1. Varsa eski zamanlayıcıyı iptal et (Bug'ı önleyen satır)
      clearTimeout(zamanlayici);

      // Yazıyı gizle
      element.classList.add('gizle');

      // Animasyon süresi kadar bekle ve metni değiştir
      zamanlayici = setTimeout(() => {
        element.innerText = yeniMetin;
        element.style.color = "#0cf704"; 
        
        // Tarayıcının DOM güncellemesini algılaması için ufak bir gecikme (requestAnimationFrame)
        requestAnimationFrame(() => {
             element.classList.remove('gizle');
        });
      }, 200); // CSS transition süresi ile eşleşmeli (0.2s)
    });

    element.parentElement.addEventListener('mouseleave', () => {
      // 1. Varsa eski zamanlayıcıyı iptal et
      clearTimeout(zamanlayici);

      // Yazıyı gizle
      element.classList.add('gizle');

      // Animasyon süresi kadar bekle ve metni geri al
      zamanlayici = setTimeout(() => {
        element.innerText = orijinalMetin;
        element.style.color = ""; // Rengi sıfırla
        
        requestAnimationFrame(() => {
            element.classList.remove('gizle');
        });
      }, 200);
    });
  });