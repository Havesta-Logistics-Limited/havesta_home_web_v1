// This file previously contained DOM-mutation logic and undefined references,
// which broke lint/typechecking. It's currently unused, so keep it as a no-op
// hook for backward compatibility.
export default function useVendorTemplate() {
  return {};
}
