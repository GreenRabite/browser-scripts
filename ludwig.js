const selector = document
  .querySelector("tfl-dev-ludwig-site-0-0-185-routes-layout-tsx")
  .shadowRoot.querySelector(
    "tfl-dev-ludwig-site-0-0-185-routes-channel-points-page-tsx"
  ).shadowRoot;

setInterval(() => {
  const claim = selector.querySelector(".claim");
  if (claim) {
    console.log("click");
    claim.click();
  }
}, 500);
