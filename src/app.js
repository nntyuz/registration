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

  const tabsTxt = Array.from(document.querySelectorAll('.adv'))
  tabsTxt.forEach(e => {
    e.classList.remove('active')
    if(e.dataset.id === target.dataset.id) {
      e.classList.add('active')
    }
  })

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
  } else if (target.closest('.footer-button')) {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}

const initDatepickers = () => {
  const datepickers = Array.from(document.querySelectorAll('.date-input'))

  datepickers.forEach(e => {
    const inputDataName = e.dataset.name

    window.datepicker(`input[name=${inputDataName}]`, {
      customDays: ['Пн', 'Вт', 'Ср', 'Чт', 'Пн', 'Сб', 'Вс'],
      customMonths: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
      formatter: (input, date, instance) => {
        const value = date.toLocaleDateString()
        input.value = value // => '1/1/2099'
      }
    })
  })
}

window.addEventListener('click', windowClick)
initDatepickers()

const citizenship = new window.Select({
  placeholder: 'Выберите гражданство:',
	dataset: [
    {
      value: 'Россия'
    },
    {
      value: 'Иностранное'
    },
    {
      value: 'Другое'
    },
    {
      value: 'Лицо без гражданства'
    }
  ],
	selected: '',
}).componentMount({
	el: document.querySelector('[ref="select-box-citizenship"]')
})


const documentType = new window.Select({
  placeholder: 'Выберите документ:',
	dataset: [
    {
      value: 'Паспорт'
    },
    {
      value: 'Свидетельство о рождении,'
    },
    {
      value: 'Другое'
    }
  ],
	selected: '',
}).componentMount({
	el: document.querySelector('[ref="select-box-document"]')
})

const period = new window.Select({
  placeholder: 'Выберите срок регистрации:',
	dataset: [
    {
      value: '3 месяца'
    },
    {
      value: '6 месяца'
    },
    {
      value: '1 год'
    },
    {
      value: '3 года'
    },
    {
      value: '5 лет'
    }
  ],
	selected: '',
}).componentMount({
	el: document.querySelector('[ref="select-box-period"]')
})
