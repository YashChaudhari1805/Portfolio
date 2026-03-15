/**
 * Lightweight className merger.
 * Joins truthy strings and filters falsy values.
 * Install `clsx` + `tailwind-merge` for production projects that need
 * conflict resolution (e.g. `px-2 px-4` → `px-4`).
 *
 * @param  {...(string|undefined|null|false)} classes
 * @returns {string}
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
