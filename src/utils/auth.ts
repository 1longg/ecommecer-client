export function getAccessTokenFormLocalStorage() {
  if (typeof window === "undefined") return "";
  else {
    return JSON.parse(localStorage.getItem("accessToken") as string);
  }
}
export function getRefreshTokenFormLocalStorage() {
  if (typeof window === "undefined") return "";
  else {
    return localStorage.getItem("refreshToken") || "";
  }
}
export function setAccessTokenToLocalStorage(accessToken: string) {
  if (typeof window === "undefined") return "";
  else {
    localStorage.setItem("accessToken", JSON.stringify(accessToken));
  }
}
export function setRefreshTokenToLocalStorage(refreshToken: string) {
  if (typeof window === "undefined") return "";
  else {
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
  }
}

export function setUserIdToLocalStorage(_id: string) {
  if (typeof window === "undefined") return "";
  else {
    localStorage.setItem("id", JSON.stringify(_id));
  }
}
export function getRefreshTokenFromLocalStorage() {
  if (typeof window === "undefined") return "";
  else {
    const token = localStorage.getItem("refreshToken") || "";
    return JSON.parse(token);
  }
}
export function getUserIdFromLocalStorage() {
  if (typeof window === "undefined") return "";
  else {
    const id = localStorage.getItem("id") || "";
    return JSON.parse(id);
  }
}
export const clearAppContext = new EventTarget();

export function clearLocalStorage() {
  if (typeof window === "undefined") return "";
  else {
    localStorage.clear();
    const clearLSEvent = new Event("clearLS");
    clearAppContext.dispatchEvent(clearLSEvent);
  }
}
