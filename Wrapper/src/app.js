const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 86,
  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 86,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 86,
    }
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
});

const toggleTabs = (target) => {
  const tabs = Array.from(document.querySelectorAll('.who-tabs .tab'))

  tabs.forEach(e =>  {
    e.classList.remove('active')
  })
  target.classList.add('active')
}

const scrollTo = (target) => {
  const dataAnchor = target.dataset.anchor
  const anchor = document.querySelector(dataAnchor)

  window.scrollTo({
    top: anchor.offsetTop,
    behavior: 'smooth'
  })
}

const windowClick = ($evt) => {
  const target = $evt.target
  if (target.closest('.tab')) {
    toggleTabs(target)
  } else if (target.closest('.qa-container')) {
     target.closest('.qa-container').classList.toggle('active')
  } else if (target.closest('.anchor-link')) {
    scrollTo(target)
  }
}

window.addEventListener('click', windowClick)
