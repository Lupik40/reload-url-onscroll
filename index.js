window.addEventListener("load", () => {
  const blocks = document.querySelectorAll("div[data-title]");

  const blocksObserver = new IntersectionObserver(
    (entries) => {
      console.log(entries);
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const location = window.location.toString().split("#")[0];
          history.replaceState(
            null,
            null,
            location + "#" + entry.target.dataset.title
          );
        }
      });
    },
    { threshold: [0.2, 0.5, 0.8] }
  );

  blocks.forEach((item) => blocksObserver.observe(item));
});
