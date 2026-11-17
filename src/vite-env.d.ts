/// <reference types="vite/client" />
interface Element {
  onclick: ((this: GlobalEventHandlers, event: MouseEvent) => any) | null;
}
