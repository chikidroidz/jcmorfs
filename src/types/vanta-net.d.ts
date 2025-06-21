declare module "vanta/dist/vanta.net.min" {
  import * as THREE from "three";

  interface VantaOptions {
    el: HTMLElement | null;
    THREE: typeof THREE;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    showDots?: boolean;
    spacing?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    scale?: number;
    scaleMobile?: number;
    [key: string]: any;
  }

  interface VantaEffect {
    destroy: () => void;
  }

  export default function vantaNet(options: VantaOptions): VantaEffect;
}
