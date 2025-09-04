fetch('/admin/content/urunler.json')
  .then(res => res.text())
  .then(yamlText => {
    const tesbihler = jsyaml.load(yamlText); // jsyaml kütüphanesi lazım
    // Carousel içine ekleme işlemi
    const carouselInner = document.querySelector("#tesbihCarousel .carousel-inner");
    tesbihler.forEach((item, i) => {
      if (i % 5 === 0) {
        carouselInner.innerHTML += `<div class="carousel-item ${i===0 ? 'active' : ''}"><div class="row g-3"></div></div>`;
      }
      const row = carouselInner.querySelector(".carousel-item:last-child .row");
      row.innerHTML += `<div class="col"><div class="card"><img src="${item.image}" class="card-img-top"><div class="card-body"><p class="card-title text-center">${item.name}</p></div></div></div>`;
    });
  });
