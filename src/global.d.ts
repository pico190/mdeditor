/* eslint-disable @typescript-eslint/no-explicit-any */
export {};

declare global {
  interface Window {
    moveTimeout?: Timeout;
    pressedKeys?: Set<string>;
  }
}
