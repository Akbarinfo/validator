const elForm = document.querySelector('#form');
const elLogin = document.querySelector('#login');
const elName = document.querySelector('#name');
const elMail = document.querySelector('#mail');
const elNumber = document.querySelector('#number');
const elPass = document.querySelector('#pass');
const elPassTwo = document.querySelector('#passtwo');
const elSubmit = document.querySelector('#btnsub');
const elSigned = document.querySelector('#signed');
const elListbox = document.querySelector('#listbox');

//error
let elLogErr = document.querySelector('#logerr')
let elNamErr = document.querySelector('#namerr')
let elMailErr = document.querySelector('#mailerr')
let elNumErr = document.querySelector('#numerr')
let elPassErr = document.querySelector('#errpass')
let elPassErrTwo = document.querySelector('#errpasstwo')

//pass eye
let elEyePass = document.querySelector('#btnpass')
let elTwoPass = document.querySelector('#btnpasstwo')

//checked
let count = 0
let checkeds = false

//MYSQL

let mysql = [
  {
    login: '',
    name: '',
    email: '',
    number: '',
    pass: ''
  }
]

let c = 0

elEyePass.addEventListener('click', () => {
  if(c == 0) {
    elEyePass.className = 'fa fa-eye reg__iconeye'
    elPass.setAttribute('type', 'password')
    c++
  } else {
    elEyePass.className = 'fa fa-eye-slash reg__iconeye'
    elPass.setAttribute('type', 'text')
    c = 0
  }
})

let s = 0
elTwoPass.addEventListener('click', () => {
  if(s == 0) {
    elTwoPass.className = 'fa fa-eye reg__iconeye'
    elPassTwo.setAttribute('type', 'password')
    s++
  } else {
    elTwoPass.className = 'fa fa-eye-slash reg__iconeye'
    elPassTwo.setAttribute('type', 'text')
    s = 0
  }
})


elForm.addEventListener('submit', (e) => {
  e.preventDefault()
  elForm.style.display = "none"
  elSigned.style.display = "block"

  elListbox.innerHTML = `
    <li class="reg__item"><span class="reg__type">Your login:</span>${mysql[0].login}</li>
    <li class="reg__item"><span class="reg__type">Your E-mail:</span>${mysql[0].email}</li>
    <li class="reg__item"><span class="reg__type">Your password:</span>${mysql[0].pass}</li>
  `
})

elLogin.addEventListener('focusout', () => {
  let keys = elLogin.value;
  try {
    if(keys.length == 0) {
      elLogin.className = 'reg__input reg__bag'
      elLogErr.className = 'reg__error reg__errbag'
      throw '* You did not enter anything'
    }
    else if(keys.match(/[0-9]/) == null) {
      elLogin.className = 'reg__input reg__check'
      elLogErr.className = 'reg__error reg__errcheck'
      elLogErr.textContent = '* Sucsess'
      mysql[0].login = keys
      checkeds = true
      ++count
    }
    else {
      elLogin.className = 'reg__input reg__bag'
      elLogErr.className = 'reg__error reg__errbag'
      throw '* Numbers cannot be entered in the login'
    }

  } catch(e) {
    checkeds = false
    elLogErr.textContent = e
  }
})

elName.addEventListener('focusout', () => {
  let keys = elName.value;
  try {
    if(keys.length == 0) {
      elName.className = 'reg__input reg__bag'
      elNamErr.className = 'reg__error reg__errbag'
      throw '* You did not enter anything'
    }
    else if(keys.match(/[0-9]/) == null) {
      elName.className = 'reg__input reg__check'
      elNamErr.className = 'reg__error reg__errcheck'
      elNamErr.textContent = '* Sucsess'
      mysql[0].name = keys
      checkeds = true
      ++count
    }
    else {
      elName.className = 'reg__input reg__bag'
      elNamErr.className = 'reg__error reg__errbag'
      throw '* Numbers cannot be entered in the login'
    }

  } catch(e) {
    elNamErr.textContent = e
    checkeds = false
  }
})

elMail.addEventListener('focusout', () => {
  let keys = elMail.value

  try{
    if(keys.length == 0) {
      elMail.className = 'reg__input reg__bag'
      elMailErr.className = 'reg__error reg__errbag'
      throw '* You did not enter anything'
    }
    else if(keys.includes('@') && keys.includes('.')) {
      elMail.className = 'reg__input reg__check'
      elMailErr.className = 'reg__error reg__errcheck'
      elMailErr.textContent = '* Sucsess'
      mysql[0].email = keys
      checkeds = true
      ++count
    }
    else {
      elMail.className = 'reg__input reg__bag'
      elMailErr.className = 'reg__error reg__errbag'
      throw `* Please include an '@' and '.' the email address.`
    }
  }
  catch(e) {
    elMailErr.textContent = e
    checkeds = false
  }
})

elNumber.addEventListener('focusout', () => {
  let keys = elNumber.value.trim()
  let num = +keys.slice(1, 13)

  try {
    if(keys.length == 0) {
      elNumber.className = 'reg__input reg__bag'
      elNumErr.className = 'reg__error reg__errbag'
      throw '* You did not enter anything'
    }
    else if(keys.length != 13) {
      elNumber.className = 'reg__input reg__bag'
      elNumErr.className = 'reg__error reg__errbag'
      throw '* You did not enter the full number'
    }
    else if(+num && keys[0] == '+') {
      elNumber.className = 'reg__input reg__check'
      elNumErr.className = 'reg__error reg__errcheck'
      elNumErr.textContent = '* Sucsess'
      mysql[0].number = keys
      checkeds = true
      ++count
    }
    else {
      elNumber.className = 'reg__input reg__bag'
      elNumErr.className = 'reg__error reg__errbag'
      throw '* Characters cannot be entered in the number'
    }
  } catch(e) {
    elNumErr.textContent = e
    checkeds = false
  }
})

elPass.addEventListener('focusout', () => {
  let keys = elPass.value.trim()
  try {
      if(keys.length == 0) {
        elPass.className = 'reg__input reg__bag'
        elPassErr.className = 'reg__error reg__errbag'
        throw '* You did not enter anything'
      }

      else if(keys.match(/[A-Z]/) == null) {
        elPass.className = 'reg__input reg__bag'
        elPassErr.className = 'reg__error reg__errbag'
        throw '* Must be at least an uppercase letter'
      }
      else if(keys.match(/[0-9]/) == null) {
        elPass.className = 'reg__input reg__bag'
        elPassErr.className = 'reg__error reg__errbag'
        throw '* Must be at least an number'
      }
      else if(keys.length < 8) {
        elPass.className = 'reg__input reg__bag'
        elPassErr.className = 'reg__error reg__errbag'
        throw '* Must be more than 8 characters'
      }
      else {
        elPass.className = 'reg__input reg__check'
        elPassErr.className = 'reg__error reg__errcheck'
        elPassErr.textContent = '* Sucsess'
        checkeds = true
        mysql[0].pass = keys
        ++count
        console.log(mysql[0])
      }
  } catch(e) {

    elPassErr.textContent = e
    checkeds = false
  }
})

elPassTwo.addEventListener('keyup', () => {
  let keys = elPassTwo.value.trim()
  try {
      if(elPass.value != keys) {
        elPassTwo.className = 'reg__input reg__bag'
        elPassErrTwo.className = 'reg__error reg__errbag'
        throw '* Password did not match'
      }
      else {
        elPassTwo.className = 'reg__input reg__check'
        elPassErrTwo.className = 'reg__error reg__errcheck'
        elPassErrTwo.textContent = '* Sucsess'
        checkeds = true

          elSubmit.removeAttribute('disabled')
          elSubmit.className = 'reg__btn reg__opac'
          
      }
  } catch(e) {
    elPassErrTwo.textContent = e
    checkeds = false
  }
})
