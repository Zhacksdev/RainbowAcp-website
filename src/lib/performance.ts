// Performance monitoring utilities untuk optimasi website

// Interface for LayoutShift entry
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

export class PerformanceMonitor {
  private static instance: PerformanceMonitor;
  private metrics: Map<string, number[]> = new Map();

  private constructor() {}

  static getInstance(): PerformanceMonitor {
    if (!PerformanceMonitor.instance) {
      PerformanceMonitor.instance = new PerformanceMonitor();
    }
    return PerformanceMonitor.instance;
  }

  // Measure First Contentful Paint (FCP)
  measureFCP(): void {
    if (typeof window === "undefined") return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === "first-contentful-paint") {
            console.log("FCP:", entry.startTime);
            this.recordMetric("FCP", entry.startTime);
          }
        }
      });
      observer.observe({ type: "paint", buffered: true });
    } catch {
      console.warn("FCP measurement not supported");
    }
  }

  // Measure Largest Contentful Paint (LCP)
  measureLCP(): void {
    if (typeof window === "undefined") return;

    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log("LCP:", lastEntry.startTime);
        this.recordMetric("LCP", lastEntry.startTime);
      });
      observer.observe({ type: "largest-contentful-paint", buffered: true });
    } catch {
      console.warn("LCP measurement not supported");
    }
  }

  // Measure First Input Delay (FID)
  measureFID(): void {
    if (typeof window === "undefined") return;

    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEventTiming;
          const fid = fidEntry.processingStart - fidEntry.startTime;
          console.log("FID:", fid);
          this.recordMetric("FID", fid);
        }
      });
      observer.observe({ type: "first-input", buffered: true });
    } catch {
      console.warn("FID measurement not supported");
    }
  }

  // Measure Cumulative Layout Shift (CLS)
  measureCLS(): void {
    if (typeof window === "undefined") return;

    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as LayoutShift;
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        console.log("CLS:", clsValue);
        this.recordMetric("CLS", clsValue);
      });
      observer.observe({ type: "layout-shift", buffered: true });
    } catch {
      console.warn("CLS measurement not supported");
    }
  }

  // Measure Time to First Byte (TTFB)
  measureTTFB(): void {
    if (typeof window === "undefined") return;

    try {
      const navigationEntry = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const ttfb =
          navigationEntry.responseStart - navigationEntry.requestStart;
        console.log("TTFB:", ttfb);
        this.recordMetric("TTFB", ttfb);
      }
    } catch {
      console.warn("TTFB measurement not supported");
    }
  }

  // Measure Total Page Load Time
  measurePageLoadTime(): void {
    if (typeof window === "undefined") return;

    window.addEventListener("load", () => {
      const navigationEntry = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;
      if (navigationEntry) {
        const loadTime =
          navigationEntry.loadEventEnd - navigationEntry.fetchStart;
        console.log("Page Load Time:", loadTime);
        this.recordMetric("PageLoadTime", loadTime);
      }
    });
  }

  // Record custom metric
  recordMetric(name: string, value: number): void {
    if (!this.metrics.has(name)) {
      this.metrics.set(name, []);
    }
    this.metrics.get(name)?.push(value);
  }

  // Get metric average
  getMetricAverage(name: string): number | null {
    const values = this.metrics.get(name);
    if (!values || values.length === 0) return null;
    return values.reduce((a, b) => a + b, 0) / values.length;
  }

  // Get all metrics
  getAllMetrics(): Record<string, number | null> {
    const result: Record<string, number | null> = {};
    this.metrics.forEach((_, key) => {
      result[key] = this.getMetricAverage(key);
    });
    return result;
  }

  // Initialize all measurements
  initializeAllMeasurements(): void {
    this.measureFCP();
    this.measureLCP();
    this.measureFID();
    this.measureCLS();
    this.measureTTFB();
    this.measurePageLoadTime();
  }
}

// Helper function to measure function execution time
export function measureExecutionTime<T>(fn: () => T, label: string): T {
  const start = performance.now();
  const result = fn();
  const end = performance.now();
  console.log(`${label} execution time:`, end - start, "ms");
  return result;
}

// Helper function to measure async function execution time
export async function measureAsyncExecutionTime<T>(
  fn: () => Promise<T>,
  label: string,
): Promise<T> {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${label} execution time:`, end - start, "ms");
  return result;
}

// Debounce utility for performance optimization
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number,
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

// Throttle utility for performance optimization
export function throttle<T extends (...args: unknown[]) => void>(
  func: T,
  limit: number,
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

// Lazy load images utility
export function lazyLoadImage(img: HTMLImageElement): void {
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const image = entry.target as HTMLImageElement;
          const src = image.dataset.src;
          if (src) {
            image.src = src;
            image.classList.add("loaded");
          }
          observer.unobserve(image);
        }
      });
    });

    imageObserver.observe(img);
  } else {
    // Fallback for browsers that don't support IntersectionObserver
    const src = img.dataset.src;
    if (src) {
      img.src = src;
    }
  }
}

// Preload critical resources
export function preloadResource(href: string, as: string, type?: string): void {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.href = href;
  link.as = as;
  if (type) {
    link.type = type;
  }
  document.head.appendChild(link);
}

// Prefetch resource
export function prefetchResource(href: string): void {
  if (typeof document === "undefined") return;

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.href = href;
  document.head.appendChild(link);
}

// Check if resource is in cache
export function isResourceCached(url: string): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);

  return fetch(url, { method: "HEAD" })
    .then((response) => {
      const cacheControl = response.headers.get("cache-control");
      return cacheControl !== null && !cacheControl.includes("no-cache");
    })
    .catch(() => false);
}

// Get connection speed
export function getConnectionSpeed(): string {
  if (typeof navigator === "undefined") return "unknown";

  const nav = navigator as Navigator & {
    connection?: { effectiveType?: string; downlink?: number };
    mozConnection?: { effectiveType?: string; downlink?: number };
    webkitConnection?: { effectiveType?: string; downlink?: number };
  };

  const connection =
    nav.connection || nav.mozConnection || nav.webkitConnection;

  if (!connection) return "unknown";

  if (connection.effectiveType) {
    return connection.effectiveType;
  }

  if (connection.downlink) {
    if (connection.downlink > 10) return "4g";
    if (connection.downlink > 1.5) return "3g";
    if (connection.downlink > 0.4) return "2g";
    return "slow-2g";
  }

  return "unknown";
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Report Web Vitals to analytics (customize based on your analytics provider)
export function reportWebVitals(metric: { name: string; value: number }): void {
  // Send to Google Analytics
  const w = window as Window & {
    gtag?: (
      command: string,
      eventName: string,
      eventParams: Record<string, unknown>,
    ) => void;
  };

  if (typeof window !== "undefined" && w.gtag) {
    w.gtag("event", metric.name, {
      value: Math.round(
        metric.name === "CLS" ? metric.value * 1000 : metric.value,
      ),
      event_category: "Web Vitals",
      event_label: metric.name,
      non_interaction: true,
    });
  }

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vital:", metric.name, metric.value);
  }
}

// Memory usage monitoring (if available)
export function getMemoryUsage(): {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
  percentage: string;
} | null {
  if (typeof window === "undefined") return null;

  const perf = performance as Performance & {
    memory?: {
      usedJSHeapSize: number;
      totalJSHeapSize: number;
      jsHeapSizeLimit: number;
    };
  };

  const memory = perf.memory;
  if (memory) {
    return {
      usedJSHeapSize: memory.usedJSHeapSize,
      totalJSHeapSize: memory.totalJSHeapSize,
      jsHeapSizeLimit: memory.jsHeapSizeLimit,
      percentage: (
        (memory.usedJSHeapSize / memory.jsHeapSizeLimit) *
        100
      ).toFixed(2),
    };
  }
  return null;
}

// Resource timing helper
export function getResourceTimings(): PerformanceResourceTiming[] {
  if (typeof window === "undefined") return [];
  return performance.getEntriesByType(
    "resource",
  ) as PerformanceResourceTiming[];
}

// Get slow resources
export function getSlowResources(
  threshold: number = 1000,
): PerformanceResourceTiming[] {
  return getResourceTimings().filter(
    (resource) => resource.duration > threshold,
  );
}

// Initialize performance monitoring
export function initPerformanceMonitoring(): void {
  if (typeof window === "undefined") return;

  const monitor = PerformanceMonitor.getInstance();
  monitor.initializeAllMeasurements();

  // Log performance metrics after page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      console.log("=== Performance Metrics ===");
      console.log(monitor.getAllMetrics());
      console.log("Connection Speed:", getConnectionSpeed());
      console.log("Memory Usage:", getMemoryUsage());

      const slowResources = getSlowResources(1000);
      if (slowResources.length > 0) {
        console.warn("Slow Resources (>1s):", slowResources);
      }
    }, 3000);
  });
}
