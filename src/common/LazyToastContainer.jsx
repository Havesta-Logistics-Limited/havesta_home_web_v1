import { useEffect, useState } from "react";

export default function LazyToastContainer() {
  const [ToastContainer, setToastContainer] = useState(null);

  useEffect(() => {
    let cancelled = false;

    const loadToast = async () => {
      await import("react-toastify/dist/ReactToastify.css");
      const mod = await import("react-toastify");
      if (!cancelled) {
        setToastContainer(() => mod.ToastContainer);
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const id = window.requestIdleCallback(loadToast);
      return () => {
        cancelled = true;
        window.cancelIdleCallback?.(id);
      };
    }

    const timeoutId = window.setTimeout(loadToast, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(timeoutId);
    };
  }, []);

  if (!ToastContainer) return null;

  return <ToastContainer />;
}
