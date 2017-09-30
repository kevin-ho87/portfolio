export default {
  bind (el, binding, vnode) {
    el.className += ' scroll-fade'

    let f = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 3 / 4) {
        el.className += ' scroll-fade_over'
        window.removeEventListener('scroll', f)
      }
    }

    window.addEventListener('scroll', f)
  }
}
