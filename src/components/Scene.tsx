import { CharacterCarousel } from "@designcodeio/threeui";
import "@designcodeio/threeui/style.css";

interface SceneProps {
  speed?: number;
  scale?: number;
  opacity?: number;
  hue?: number;
  saturation?: number;
  brightness?: number;
}

export function Scene({
  speed = 2.50,
  scale = 1.00,
  opacity = 1.00,
  hue = 0,
  saturation = 1.00,
  brightness = 1.33
}: SceneProps) {
  return (
    <div className="shader-frame">
      <CharacterCarousel
        variant="wave"
        speed={speed}
        scale={scale}
        opacity={opacity}
        hue={hue}
        saturation={saturation}
        brightness={brightness}
      />
    </div>
  );
}
