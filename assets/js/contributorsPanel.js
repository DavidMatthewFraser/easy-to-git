// add github name here
const contributors = [
		{
			githubName: "DavidMatthewFraser",
			displayName: "david fraser",
		},
		{
			githubName: "Syntappz",
			displayName: "Biscuitmanz",
		},
		{
			githubName: "RandellDawson",
			displayName: "Randell Dawson",
		},
	 	{
			githubName: "thetradecoder",
			displayName: "Mamun Abdullah",
		},
		{
			githubName: "misterybodon",
			displayName: "Mister Nobody",
		},
		{
			githubName: "fort3",
			displayName: "Fortune Okon",
		},
		{
			githubName: "EmmaVZ89",
			displayName: "Emmanuel Zelarayan",
		},
		{
			githubName: "benjithorpe",
			displayName: "Benjamin I. Thorpe",
		},
		{
			githubName: "gwmatthews",
			displayName: "George W. Matthews",
    }
	];

const sidePanel = document.querySelector(".panel");
const panelButton = document.querySelector(".contributors-btn");
const main = document.querySelector(".main");
let panelOpen = false;

const panel = () => {
  const githubUrl = (name) => `https://github.com/${name}`;

  const contributorComponent = ({ githubName, displayName }) => {
    const url = githubUrl(githubName);
    const defaultAvatar = `https://api.adorable.io/avatars/60/${displayName}.png`;

    const href = githubName ? `href="${url}"` : null;
    const avatar = githubName ? `${url}.png` : defaultAvatar;
    const github = githubName ? "github" : "no link";
    const noLink = githubName ? "" : "no-link";

    return ` <div class="contributor">
						<div class="flex">
							<div class="avatar">
								<img src="${avatar}" alt="github-avatar" />
							</div>

							<h4 class="name">${displayName}</h4>
						</div>

						<div class="github-wrap">
							<a class="github-btn ${noLink}" target="_" ${href}>
								<i class="fab fa-github-alt"></i>
							</a>
							<p class="link-text ${noLink}">${github}</p>
						</div>
					</div>`;
  };

  contributors.forEach((contributor) => {
    const component = contributorComponent(contributor);
    sidePanel.innerHTML += component;
  });
};

const closeFromMain = () => {
  console.log("clicked");
  if (panelOpen) {
    closePanel();
  }
};

const closePanel = () => {
  sidePanel.style.right = "-400px";
  sidePanel.style.opacity = 0;
  panelOpen = !panelOpen;
  main.removeEventListener("click", closeFromMain);
};

const openPanel = () => {
  sidePanel.style.right = 0;
  sidePanel.style.opacity = 1;
  panelOpen = !panelOpen;
  console.log(panelOpen);
  main.addEventListener("click", closeFromMain);
};

const togglePanel = () => {
  if (panelOpen) {
    closePanel();
  } else {
    openPanel();
  }
};

window.onload = () => {
  panel();
  panelButton.addEventListener("click", togglePanel);
};
