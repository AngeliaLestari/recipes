export function show (id) {
  const menu = document.querySelector('#' + id)
  if (menu.classList.contains('hidden')) {
    return menu.classList.remove('hidden')
  } else {
    return menu.classList.add('hidden')
  }
}
