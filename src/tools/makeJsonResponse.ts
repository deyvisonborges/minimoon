export function makeJsonResponse<T extends Record<string, unknown>>(object: T) {
  return JSON.stringify(object);
}