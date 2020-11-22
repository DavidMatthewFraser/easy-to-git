// Add yourself as a contributor to the contributor panel.
// To see yourself, click on the Contributors Panel in the top
// right of the home page.  The 'role' refers to your roll here
// at easytogit.com. Leaving it blank will default to 'Contributor'.

const contributors = [{
        githubName: "DavidMatthewFraser",
        displayName: "david fraser",
        role: "Owner",
    },
    {
        githubName: "Syntappz",
        displayName: "Biscuitmanz",
        role: "UX/UI",
    },
    {
        githubName: "RandellDawson",
        displayName: "Randell Dawson",
        role: "",
    },
    {
        githubName: "thetradecoder",
        displayName: "Mamun Abdullah",
        role: "",
    },
    {
        githubName: "misterybodon",
        displayName: "Mister Nobody",
        role: "",
    },
    {
        githubName: "fort3",
        displayName: "Fortune Okon",
        role: "",
    },
    {
        githubName: "EmmaVZ89",
        displayName: "Emmanuel Zelarayan",
        role: "",
    },
    {
        githubName: "benjithorpe",
        displayName: "Benjamin I. Thorpe",
        role: "",
    },
    {
        githubName: "gwmatthews",
        displayName: "George W. Matthews",
        role: "",
    },
    {
        githubName: "VJ1224",
        displayName: "Vansh Jain",
        role: "",
    },
    {
        githubName: "Devansh3712",
        displayName: "Devansh Singh",
        role: "",
    },
    {
        githubName: "terrifricker",
        displayName: "Terri Fricker",
        roll: "",
    },
    {
        githubName: "boulderresident",
        displayName: "Boulderresident",
        roll: "",
    },
    {
        githubName: "mrterranova",
        displayName: "Michal Terranova",
        roll: "",
    },
    {
        githubName: "BrianLoveGa",
        displayName: "Brian Loveless",
        roll: "",
    },
    {
        githubName: "satyamrastogi",
        displayName: "Satyam Rastogi",
        roll: "",
    },
    {
        githubName: "unclebay143",
        displayName: "Ayodele Samuel Adebayo",
        roll: "",
    },
    {
        githubName: "sauravk7077",
        displayName: "Saurav Kumar",
        roll: "",
    },
    {
        githubName: "Anushri20",
        displayName: "Amushri",
        role: "",
    },
    {
        githubName: "Sonechca",
        displayName: "Mintae Kim",
        role: "",
    },
    {
        githubName: "tmott13",
        displayName: "Tanya Mott",
        role: "",
    },
    {
        githubName: "malikmukhtar",
        displayName: "Malik Mukhtar",
        role: "",
    },
    {
        githubName: "Adityachaturvedi2906",
        displayName: "Aditya Chaturvedi",
        role: "",
    },
    {
        githubName: "mViolet",
        displayName: "Maria Belan-Crawford",
        role: "",
    },

    {
        githubName: "imrushikesh",
        displayName: "Rushikesh Patil",
        role: "Web Dev",
    }
];

const sidePanel = document.querySelector(".panel");
const panelButton = document.querySelector(".contributors-btn");
const main = document.querySelector(".main");
let panelOpen = false;

const getFollowers = async(name) => {
    const url = `https://api.github.com/users/${name}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.message) {
            throw data.message;
        } else {
            return { followers: data.followers, repos: data.public_repos };
        }
    } catch (error) {
        console.error(error);
        return { followers: 0, repos: 0 };
    }
};

const appendComponents = (contributorComponent) => {
    contributors.forEach(async(contributor) => {
        const component = contributorComponent(contributor);
        sidePanel.innerHTML += component;
    });
};

const fetchFollowers = async(contributorComponent) => {
    for (let contributor of contributors) {
        if (contributor.githubName) {
            const { followers } = await getFollowers(contributor.githubName);
            contributor.followers = followers;
        }
    }
    appendComponents(contributorComponent);
};

const panel = () => {
    const githubUrl = (name) => `https://github.com/${name}`;
    const contributorComponent = ({
        githubName,
        displayName,
        role,
        followers,
    }) => {
        displayName =
            displayName.length > 18 ? displayName.slice(0, 18) + "..." : displayName;
        const url = githubUrl(githubName);
        const defaultAvatar = `https://api.adorable.io/avatars/60/${displayName}.png`;

        const href = githubName ? `href="${url}"` : null;
        const avatar = githubName ? `${url}.png` : defaultAvatar;
        const github = githubName ? "github" : "no link";
        const noLink = githubName ? "" : "no-link";

        return `
  <div class="contributor">
    <div class="flex">
      <div class="avatar-wrap">
        <div class="avatar">
          <img src="${avatar}" alt="github-avatar" />
        </div>
      </div>
      <div>
         <h4 class="name">${displayName}</h4>
         <p class="followers">followers: ${followers || 0}</p>
         <div class="role">
           <p>${role || "contributor"}</p>
         </div>
      </div>
    </div>
    <div class="github-wrap">
      <a class="github-btn ${noLink}" target="_" ${href}>
        <i class="fab fa-github-alt"></i>
      </a>
      <p class="link-text ${noLink}">${github}</p>
    </div>
</div>`;
    };
    fetchFollowers(contributorComponent);
};

const closePanel = () => {
    sidePanel.style.height = "0px";
    sidePanel.style.opacity = 0;
    panelOpen = !panelOpen;
};

const openPanel = () => {
    sidePanel.style.height = "100%";
    sidePanel.style.opacity = 1;
    panelOpen = !panelOpen;
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