export function addQueryParam(key: string, value: string | null | undefined) {
  const currentUrl = new URL(window.location.href);
  const params = new URLSearchParams(currentUrl.search);

  if (value) {
    params.set(key, value);
  } else {
    params.delete(key);
  }

  currentUrl.search = params.toString();

  window.history.replaceState({ path: currentUrl.href }, "", currentUrl.href);
}

export function getQueryParam(key: string) {
  const currentUrl = new URL(window.location.href);

  const params = new URLSearchParams(currentUrl.search);

  return params.get(key);
}
