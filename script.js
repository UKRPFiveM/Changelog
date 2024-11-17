
const changelogData = [
    { category: "Added", description: "AI Menu (Jack)" },
    { category: "Added", description: "Questions to AI Menu (Jack)" },
    { category: "Added", description: "Searching to AI Menu (Jack)" },
    { category: "Added", description: "Freeze Ped Function for AI Interactions (Jasper)" },
    { category: "Added", description: "Cuff Ped Function for AI Interactions (Jasper)" },
    { category: "Added", description: "ID System with Ped Face Headshot AI Interactions (Jack)" },
    { category: "Added", description: "British Licence Template (Jasper)" },
    { category: "Added", description: "PNC Checking and Markers to AI Interactions (Jack)" },
    { category: "Added", description: "/pnc-check [NAME] to AI Interactions (Jack)" },
    { category: "Added", description: "Send to Custody to AI Interactions (Jack)" },
    { category: "Added", description: "Drag AI Peds to AI Interactions (Jack)" },
    { category: "Added", description: "/openspawnselect to welcome message (Jack)" },
    { category: "Added", description: "Ticket System (Macho)" },
    { category: "Added", description: "Multiple LAS/Doctor Cars (Ross)" },
    { category: "Added", description: "New MO19 Vehicles (Ross)" },
    { category: "Added", description: "Function to stop all AI Tasks AI Interactions (Jasper)" },
    { category: "Added", description: "Blips for Stations and MLOs (Jasper)" },
    { category: "Added", description: "Hairmenu (Jasper)" },
    { category: "Added", description: "Shooting Logs (Jasper / Jack)" },
    { category: "Added", description: "Discord Chat Roles (Jack)" },
    { category: "Added", description: "LAS EUP Menus (Ross)" },
    { category: "Added", description: "LAS Vehicle Spawners (Ross)" },
    { category: "Added", description: "Custody EUP Menu's (Ross)" },
    { category: "Added", description: "LAS and Custody Locations to spawn select (Ross)" },
    { category: "Added", description: "Ace Permed Medical Menu (Jack)" },
    { category: "Added", description: "Christmas Legion (Jack)" },
    { category: "Fixed", description: "Wrong Textures on Vehicles (Ross)" },
    { category: "Fixed", description: "When Pressing E in a vehicle it stops a Ped (Jack)" },
    { category: "Fixed", description: "Ped not freezing after stopping one before (Jack)" },
    { category: "Fixed", description: "Errors with the Ticket bot and restrictions (Macho)" },
    { category: "Fixed", description: "Shooting logs spamming console (Jack)" },
    { category: "Fixed", description: "Civ armoury Perms (Ross)" },
    { category: "Fixed", description: "Wrong styling on ID Card, AI Interactions (Jasper)" },
    { category: "Removed", description: "The lastmessagetimes() function so Shoot logs function properly. (Jack)" },
    { category: "Removed", description: "LAS commands. (Jack)" },
  ];
  

  const changelogContent = document.getElementById("changelog-content");


function groupByCategory(data) {
    return data.reduce((acc, item) => {
      acc[item.category] = acc[item.category] || [];
      acc[item.category].push(item.description);
      return acc;
    }, {});
  }
  

  const groupedData = groupByCategory(changelogData);
  
  for (const category in groupedData) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("changelog-category");
  
    categoryDiv.innerHTML = `<h3>${category}</h3>`;
  
    groupedData[category].forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.classList.add("changelog-item");
      itemDiv.innerHTML = `<strong>${item}</strong><span>${category}</span>`;
      categoryDiv.appendChild(itemDiv);
    });
  
    changelogContent.appendChild(categoryDiv);
  }
  

  const backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });