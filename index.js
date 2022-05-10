window.addEventListener("load", () => {
  const blocks = document.querySelectorAll(".anchor");

  const needHesh = window.location.toString().split("#")[1];
  if (needHesh !== undefined) {
    const needElement = document.getElementById(needHesh);
    window.scrollTo(0, needElement.offsetTop);
  }

  const blocksObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const location = window.location.toString().split("#")[0];
          history.replaceState(null, null, location + "#" + entry.target.id);
        }
      });
    },
    { threshold: [0.2, 0.5, 0.8] }
  );

  blocks.forEach((item) => blocksObserver.observe(item));
});
