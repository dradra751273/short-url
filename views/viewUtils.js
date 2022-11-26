const copyBtn = document.querySelector('.btn-copy')
const alertPlaceholder = document.querySelector('#liveAlertPlaceholder')


const alert = (message, type) => {
  const wrapper = document.createElement('div')
  console.log(456)
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div class="copy-msg">${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}


if (copyBtn) {
  copyBtn.addEventListener('click', (event) => {
    event.preventDefault()
    // copy text
    navigator.clipboard.writeText(copyBtn.dataset.copy)
    // trigger alert
    const copyMsg = document.querySelector('.copy-msg')
    if (copyMsg === null) {
      console.log(123)
      alert(`Nice, You copied URL!`, 'success')
    }
  })
}

