let chatIsOpen = false
const chat = document.querySelector('.chat')
const chatToggleBtn = document.querySelector('.chat-toggle-btn')

chatToggleBtn.addEventListener('click', () => {
  if (chatIsOpen) {
    chat.classList.remove('chat-is-open')
  } else {
    chat.classList.add('chat-is-open')
  }
  chatIsOpen = !chatIsOpen
})
