const copyBtn = document.querySelector('.btn-copy')

if (copyBtn !== null) {
  copyBtn.addEventListener('click', (event) => {
    event.preventDefault()
    navigator.clipboard.writeText(copyBtn.dataset.copy)

  })
}

