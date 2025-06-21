declare module "vanta/dist/vanta.*.min" {
  import * as THREE from "three";
  interface VantaOptions {
    el: HTMLElement | null;
    THREE: typeof THREE;
    [key: string]: any;
  }
  interface VantaEffect {
    destroy: () => void;
  }
  export default function vantaEffect(options: VantaOptions): VantaEffect;
}
