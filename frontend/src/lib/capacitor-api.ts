import { Http } from "@capacitor/core";

const SERVER_URL_STORAGE_KEY = "qwen2api_server_url";

export function getServerUrl(): string {
  return localStorage.getItem(SERVER_URL_STORAGE_KEY) || "";
}

export function setServerUrl(url: string): void {
  localStorage.setItem(SERVER_URL_STORAGE_KEY, url);
}

export async function makeApiRequest(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: Record<string, unknown>,
  headers?: Record<string, string>
): Promise<{ data: unknown; status: number }> {
  const baseUrl = getServerUrl() || "http://localhost:7860";
  const url = `${baseUrl.replace(/\/+$/, "")}${endpoint}`;

  const defaultHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    ...headers,
  };

  try {
    const response = await Http.request({
      method,
      url,
      headers: defaultHeaders,
      data,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    console.error("API request error:", error);
    throw error;
  }
}

export function isCapacitor(): boolean {
  return typeof window !== "undefined" && !!(window as any).Capacitor;
}
