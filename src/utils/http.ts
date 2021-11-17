export function getUrl(action: string): string {
  const requestPath = process.env.REACT_APP_API || '';
  if (requestPath) {
    return `${requestPath}/${action}`;
  }
  return '';
}
