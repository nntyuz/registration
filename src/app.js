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

  tabs.forEach(e => {
    e.classList.remove('active')
  })
  target.classList.add('active')

  const tabsTxt = Array.from(document.querySelectorAll('.advantages'))
  tabsTxt.forEach(e => {
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

// Бургер и модалка
const menu = document.querySelector('.menu-container')
const close = document.querySelector('.close')
const burger = document.querySelector('.burger')

const modal = document.querySelector('.modal-window')
const crossModal = document.querySelector('.close-modal')
const phoneLink = document.querySelector('.phone-txt')


function openMenu() {
  menu.classList.toggle('open')
}

function closeMenu() {
  if (menu.classList.contains('open')) {
    menu.classList.remove('open')
  }
}


function closeModal() {
  if (modal.classList.contains('open')) {
    modal.classList.remove('open')
  }
}


burger.addEventListener('click', openMenu)
menu.addEventListener('click', closeMenu)
close.addEventListener('click', closeMenu)

phoneLink.addEventListener('click', function () {Swal.fire({
  width: 1000,
  showConfirmButton: false,
  showCloseButton: true,
  html: `<form
    enctype="multipart/form-data"
    method="post"
    id="form"
    onsubmit="send(event, './phpmailer/send.php')"
    class="modal-container flex a-center column">
    <h2 class="modal-title">Получить косультацию</h2>
    <input class="modal-input" type="text" placeholder="Ваше имя" />
    <input class="modal-input" type="tel" placeholder="Ваш телефон" />
    <button
      value="Свяжитесь со мной"
      type="submit"
      id="modal-button"
      class="act-button flex a-center j-center">
      Свяжитесь со мной
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
      <svg
        width="7"
        height="11"
        viewBox="0 0 7 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
      <path
        d="M5.85379 6.33438C6.11289 6.07528 6.11289 5.6552 5.85379 5.3961L1.63157 1.17384C1.37247 0.914742 0.952388 0.914741 0.693289 1.17384C0.43419 1.43293 0.434189 1.85302 0.693285 2.11211L4.44638 5.86523L0.693257 9.61832C0.434159 9.87742 0.434157 10.2975 0.693254 10.5566C0.952351 10.8157 1.37243 10.8157 1.63153 10.5566L5.85379 6.33438ZM4.72119 6.5287L5.38465 6.5287L5.38466 5.20178L4.72119 5.20177L4.72119 6.5287Z"
        fill="#3E3E3E"/>
      </svg>
    </button>
  </form>`
})});

const formLink = document.querySelector('.form-link')
const application = document.querySelector('.application-section')
const formBtn = document.querySelector('#form-button')


function openFormLink () {
 application.classList.toggle('open')
}

formLink.addEventListener('click', openFormLink)
formBtn.addEventListener('click', openFormLink)


// Анимация 
function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('steps-show');
    }
  });
}

let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.steps');

for (let elm of elements) {
  observer.observe(elm);
}

// Отправка данных на сервер
function send(event, php){
  console.log("Отправка запроса");
  event.preventDefault ? event.preventDefault() : event.returnValue = false;
  var req = new XMLHttpRequest();
  req.open('POST', php, true);
  req.onload = function() {
    if (req.status >= 200 && req.status < 400) {
    json = JSON.parse(this.response); 
        console.log(json);
          
        if (json.result == "success") {
          // Если сообщение отправлено
          alert("Сообщение отправлено");
        } else {
          // Если произошла ошибка
          alert("Ошибка. Сообщение не отправлено");
        }
      // Если не удалось связаться с php файлом
      } else {alert("Ошибка сервера. Номер: "+req.status);}}; 
  
  // Если не удалось отправить запрос. Стоит блок на хостинге
  req.onerror = function() {alert("Ошибка отправки запроса");};
  req.send(new FormData(event.target));
}