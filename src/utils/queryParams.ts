export function addQueryParam(key: string, value: string) {
  const currentUrl = new URL(window.location.href);

  const params = new URLSearchParams(currentUrl.search);

  params.set(key, value);

  currentUrl.search = params.toString();

  window.history.replaceState({ path: currentUrl.href }, "", currentUrl.href);
}

export function getQueryParam(key: string) {
  const currentUrl = new URL(window.location.href);

  const params = new URLSearchParams(currentUrl.search);

  return params.get(key);
}
