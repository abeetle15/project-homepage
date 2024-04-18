const toggleBtn = document.querySelector('.toggleBtn');
const navLinkList = document.querySelector('.navLinkList');

toggleBtn.addEventListener('click', () => {
  navLinkList.classList.toggle('active')
})