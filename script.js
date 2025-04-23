document.addEventListener('DOMContentLoaded', function() {
  // Accordion FAQ
  const accordionItems = document.querySelectorAll('.accordion__item');
  
  accordionItems.forEach(item => {
      const question = item.querySelector('.accordion__question');
      
      question.addEventListener('click', () => {
          // Fecha todos os outros itens
          accordionItems.forEach(otherItem => {
              if (otherItem !== item) {
                  otherItem.classList.remove('active');
              }
          });
          
          // Abre/fecha o item clicado
          item.classList.toggle('active');
      });
  });
  
  // Efeito de scroll no header
  window.addEventListener('scroll', function() {
      const header = document.querySelector('.header__nav');
      if (window.scrollY > 100) {
          header.style.background = '#000';
      } else {
          header.style.background = 'transparent';
      }
  });
  
  // Simulação de carregamento de filmes (poderia ser uma API real)
  function loadMovies() {
      // Aqui você faria uma requisição para uma API de filmes
      console.log('Carregando filmes...');
      // Exemplo com fetch:
      // fetch('https://api.themoviedb.org/3/discover/movie?api_key=SUA_CHAVE')
      //     .then(response => response.json())
      //     .then(data => console.log(data));
  }
  
  loadMovies();
});

// Adicione isso ao seu arquivo script.js existente

// Player de Vídeo do YouTube
document.addEventListener('DOMContentLoaded', function() {
  // ... (código existente)
  
  // Player de Vídeo
  const modal = document.getElementById('videoModal');
  const trailers = document.querySelectorAll('.trailer');
  const closeBtn = document.querySelector('.video-modal__close');
  const videoContainer = document.getElementById('videoContainer');
  
  trailers.forEach(trailer => {
      trailer.addEventListener('click', function() {
          const videoId = this.getAttribute('data-id');
          videoContainer.innerHTML = `
              <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&enablejsapi=1" 
                      frameborder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowfullscreen></iframe>
          `;
          modal.style.display = "block";
          document.body.style.overflow = "hidden"; // Previne scroll da página
      });
  });
  
  closeBtn.addEventListener('click', function() {
      modal.style.display = "none";
      videoContainer.innerHTML = ""; // Remove o iframe
      document.body.style.overflow = "auto"; // Restaura scroll da página
  });
  
  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = "none";
          videoContainer.innerHTML = "";
          document.body.style.overflow = "auto";
      }
  });
  
  // Fecha o modal quando pressionar ESC
  document.addEventListener('keydown', function(event) {
      if (event.key === "Escape" && modal.style.display === "block") {
          modal.style.display = "none";
          videoContainer.innerHTML = "";
          document.body.style.overflow = "auto";
      }
  });
});

