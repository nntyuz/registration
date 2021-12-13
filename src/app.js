const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  spaceBetween: 0,
  breakpoints: {
    600: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.next',
    prevEl: '.prev',
  },
})

const toggleTabs = (target) => {
  const tabs = Array.from(document.querySelectorAll('.who-tabs .tab'))

  tabs.forEach((e) => {
    e.classList.remove('active')
  })
  target.classList.add('active')

  const tabsTxt = Array.from(document.querySelectorAll('.advantages'))
  tabsTxt.forEach((e) => {
    e.classList.remove('active')
    if (e.dataset.id === target.dataset.id) {
      e.classList.add('active')
    }
  })
}

const scrollTo = (target) => {
  const dataAnchor = target.dataset.anchor
  const anchor = document.querySelector(dataAnchor)

  window.scrollTo({
    top: anchor.offsetTop,
    behavior: 'smooth',
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
  } else if (target.closest('.footer-button')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}

const initDatepickers = () => {
  console.log('initDatepickers')

  const datepickers = Array.from(document.querySelectorAll('.date-input'))

  datepickers.forEach((e) => {
    const inputDataName = e.dataset.name

    window.datepicker(`input[name=${inputDataName}]`, {
      customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
      customMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
      },
    })
  })
}

document.addEventListener('click', windowClick)

// Анимация
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add('steps-show')
    }
  })
}

let options = {
  threshold: [0.5],
}
let observer = new IntersectionObserver(onEntry, options)
let elements = document.querySelectorAll('.steps')

for (let elm of elements) {
  observer.observe(elm)
}

// Phone Mask
function phoneMask (selector) {
  [].forEach.call( document.querySelectorAll(selector), function(input) {
  let keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      let pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      let matrix = "+7 (___)-___-____",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      let reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)

})
};

phoneMask('.tel')
