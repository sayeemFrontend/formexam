export function scrollToRef(ref) {
  let div = window.document.getElementById(ref);
  div && window.scrollTo(0, div.offsetTop - 100);
}
