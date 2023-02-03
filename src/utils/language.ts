export function getLanguage() {
  return localStorage.getItem('LANG');
}

export function setLanguage(lang: any) {
  localStorage.setItem('LANG', lang);
}

export function removeLanguage() {
  localStorage.removeItem('LANG');
}
