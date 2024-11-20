const changelogData = {
    "20/11/2024": [
        { category: "Added", description: "@User before closing the ticket to identify who closed the ticket (Macho)" },
        { category: "Added", description: "New close command to tickets (Macho)" },
        { category: "Added", description: "Custom emojis to the /Support drop menu (Macho)" },
        { category: "Added", description: "New commands to the bot: /myid & /ping (Jack)" },
        { category: "Added", description: "New command to add/remove users for temp tickets (Macho)" },
        { category: "Added", description: "New command to add/remove users from normal tickets (Macho)" },
        { category: "Added", description: "AFO Jaguar F-Pace command (Ross)" },
        { category: "Added", description: "Reskinned HEMS G31 (broken ELS) (Ross)" },
        { category: "Added", description: "HEMS Doctor category to LAS VS (Ross)" },
        { category: "Added", description: "Audi RS8 - Fixed ELS issue (Ross)" },
        { category: "Added", description: "5 new *secret* vehicles (Ross)" },
        { category: "Added", description: "New Change-log Web (Jack)" },
        { category: "Added", description: "New Website (Jack)" },
        { category: "Added", description: "Chat logs (Jack)" },
        { category: "Added", description: "LAS V60 (Ross)" },
        { category: "Added", description: "Auto Responses to Ticket Bot will Read these updates, support, guides (Macho)" },
        { category: "Added", description: "Better logging to Assessment checking (Jack)" },
        { category: "Added", description: "/cfx-status which uses an API to check the current cfx.re status. (Discord) (Jack)" },
        { category: "Added", description: "LOA System (Discord) (Jack)" },
        { category: "Added", description: "Email system for GC to track command emails. /add-email, /get-email, /list-emails, /remove-email (Jack)" },
        { category: "Added", description: "Entity deletion gun that properly takes control of networked entities and can delete vehicles with other players inside it. (Jack)" },
        { category: "Added", description: "/remove-loa (Discord) (Jack)" },
        { category: "Added", description: "Polac Reporting system (/polac) (Jack)" },
        { category: "Fixed", description: "/check-assessment breaking due to the fact I forgot to define the packages (Jack)" },
        { category: "Fixed", description: "Temp / Normal Ticket Buttons and a few Misc Spelling Errors (Macho)" },
        { category: "Fixed", description: "The bot crashing when using host-event buttons. (Discord bot) (Jack)" },
        { category: "Fixed", description: "RTPC having Dr Car (Ross)" },
        { category: "Fixed", description: "LAS Command Permissions (Ross)" },
        { category: "Fixed", description: "ELS on HEMS G31 (Ross)" },
        { category: "Fixed", description: "API error on closing tickets (Macho)" },
        { category: "Fixed", description: "Transcript errors crashing the bot (Macho)" },
        { category: "Fixed", description: "Close and delete buttons now only send transcripts to DM, and delete logs to the channel (Macho)" },
        { category: "Fixed", description: "Transcript buttons (Macho)" },
        { category: "Fixed", description: "@TicketRoleId now supports both removing and adding roles to tickets (Macho)" },
        { category: "Fixed", description: "Retro rotator light (actually spins) (Ross)" }
    ],
    "16/11/2024": [
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
      { category: "Fixed", description: "Wrong Textures on Vehicles (Ross)" },
      { category: "Fixed", description: "When Pressing E in a vehicle it stops a Ped (Jack)" },
      { category: "Fixed", description: "Ped not freezing after stopping one before (Jack)" },
      { category: "Fixed", description: "Errors with the Ticket bot and restrictions (Macho)" },
      { category: "Fixed", description: "Shooting logs spamming console (Jack)" },
      { category: "Fixed", description: "Civ armoury Perms (Ross)" },
      { category: "Fixed", description: "Wrong styling on ID Card, AI Interactions (Jasper)" },
      { category: "Removed", description: "The lastmessagetimes() function so Shoot logs function properly. (Jack)" },
      { category: "Removed", description: "LAS commands. (Jack)" }
    ],
};

const changelogContent = document.getElementById("changelog-content");

Object.entries(changelogData).forEach(([date, changes]) => {
    const dateSection = document.createElement("div");
    dateSection.classList.add("changelog-date-section");
    
    const dateHeader = document.createElement("div");
    dateHeader.classList.add("date-header");
    dateHeader.innerHTML = `
        <h3>${date}</h3>
        <i class="fas fa-chevron-down"></i>
    `;
    
    const changelogItems = document.createElement("div");
    changelogItems.classList.add("changelog-items");
    

    const groupedChanges = changes.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item.description);
        return acc;
    }, {});
    

    const sortedCategories = Object.entries(groupedChanges).sort(([a], [b]) => {
        const order = { "Added": 1, "Fixed": 2, "Removed": 3 };
        return (order[a] || 99) - (order[b] || 99);
    });
    
   
    sortedCategories.forEach(([category, descriptions], index) => {
        const categoryDiv = document.createElement("div");
        categoryDiv.classList.add("changelog-category");
        
  
        const categoryHeader = document.createElement("h3");
        categoryHeader.textContent = category;
        categoryDiv.appendChild(categoryHeader);
        
        descriptions.forEach(desc => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("changelog-item");
            itemDiv.innerHTML = `<p><strong>${category}</strong> - ${desc}</p>`;
            categoryDiv.appendChild(itemDiv);
        });
        
        changelogItems.appendChild(categoryDiv);
    });
    
    dateSection.appendChild(dateHeader);
    dateSection.appendChild(changelogItems);
    changelogContent.appendChild(dateSection);
    
   
    dateHeader.addEventListener("click", () => {
        dateHeader.classList.toggle("active");
        changelogItems.classList.toggle("active");
    });
});

const backToTopButton = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "flex";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll('.changelog-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('highlight');
        setTimeout(() => item.classList.remove('highlight'), 1000);
    });
});

document.body.style.cursor = 'url(path/to/christmas-cursor.png), auto';

document.querySelectorAll('.changelog-item, .join-server, h1, h2, h3')
    .forEach(element => {
        element.addEventListener('mousemove', addSparkle);
    });