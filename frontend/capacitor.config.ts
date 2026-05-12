import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.qwen2api",
  appName: "Qwen2API",
  webDir: "dist",
  server: {
    androidScheme: "https",
    allowNavigation: ["*"],
  },
  android: {
    backgroundColor: "#ffffff",
    allowMixedContent: true,
  },
};

export default config;
