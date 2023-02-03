export function getToken() {
  return localStorage.getItem('WEITOKEN');
}

export function setToken(token: any) {
  localStorage.setItem('WEITOKEN', token);
}

export function removeToken() {
  localStorage.removeItem('WEITOKEN');
}
