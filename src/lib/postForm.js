/**
 * POST a <form> to a Google Apps Script endpoint.
 * Rejects on network failure, non-2xx responses, or after `timeoutMs`,
 * so callers can always leave the loading state.
 */
export async function postForm(url, formEl, timeoutMs = 15000) {
  const body = new FormData(formEl); // capture before any reset()
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { method: "POST", body, signal: controller.signal });
    if (!res.ok) throw new Error(`Request failed with status ${res.status}`);
    return res;
  } finally {
    clearTimeout(timer);
  }
}
