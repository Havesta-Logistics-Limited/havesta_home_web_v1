export default function useVendorTemplate() {
  useEffect(() => {
    let input = document.querySelector(".phoneNum");

    input.addEventListener("input", (e) => {
      if (input.value.length > 11) {
        input.value = input.value.slice(0, 11);
      }

      if (input.value.length === 11 && document.activeElement === input) {
        input.classList.add(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        input.classList.remove("border-red-300", "focus:outline-none");
        input.classList.remove("border-red-300");
      }
      // if (input.value.length < 11 && document.activeElement !== input) {
      //   // input.classList.remove("focus:outline","focus:outline-harvestaLightGreen")
      //   // input.classList.add("outline-red-500", "outline-none")
      //   console.log("grtrbthny4tbgerwefvcds")

      //   // input.classList.add("focus:outline-none")
      // }
      if (input.value.length < 11 && document.activeElement === input) {
        input.classList.add("border-red-300", "focus:outline-none");
        input.classList.remove(
          "focus:outline",
          "focus:outline-harvestaLightGreen"
        );
        // input.classList.add("focus:border-transparent")
      }
      setFormData((prev) => ({ ...prev, phone_number: input.value }));

      input.value = input.value.replace(/[^0-9]/g, "");
    });
  }, []);

  const validateEmailFormat = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.(com|net|org)$/i;
    return re.test(email);
  };
  return <div></div>;
}
