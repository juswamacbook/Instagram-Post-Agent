export type DesignFormat = "square" | "portrait" | "story";

export type OverlayType = "none" | "gradient" | "solid_bar" | "blur_bar";

export type DesignVariant = {
  template_id: string;
  style_id: string;
  format: DesignFormat;
  copy: {
    headline: string;
    subtitle: string;
  };
  layout: {
    headline_align: "left" | "center" | "right";
    subtitle_align: "left" | "center" | "right";
    badge: {
      enabled: boolean;
      text: string;
    };
  };
  colors: {
    accent: string;
    text: string;
    overlay: {
      type: OverlayType;
      opacity: number;
    };
  };
};

export type DesignDirectorOutput = {
  variants: DesignVariant[];
};

export type SafeZone = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
};
