export interface ClsConfig {
  [name: string]: boolean | null | undefined;
}

export function cls(items: any[] | ClsConfig) {
  if (Array.isArray(items)) {
    return items.filter(Boolean).join(' ');
  }
  return Object.entries(items)
    .filter(([, value]) => !!value)
    .map(([key]) => key)
    .join(' ');
}
