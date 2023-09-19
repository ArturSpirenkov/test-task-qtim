import type { UseFetchOptions } from 'nuxt/app';
import { defu } from 'defu';

export function useCustomFetch<T>(url: string, options: UseFetchOptions<T> = {}) {
  const config = useRuntimeConfig();

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.apiBase,
    key: url,
    onResponse(_ctx) {},
  };

  const params = defu(options, defaults);

  return useFetch(url, params);
}
