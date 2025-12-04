import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ autoRaf: true });
    lenis.on("scroll", (e) => console.log(e));
    return () => lenis.destroy();
  }, []);
}
