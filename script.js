const PROGRESSHOLDER = document.getElementById("progressHolder");

const PROGRESSPOSTS = [
    {year: 2022,
    month: "December",
    day: 30,
    mood: "Hopeful",
    tasks: ["Create basic skeleton for the progress tracker, including basic styling",
    "Creating the GitHub repository"],
    comments: "This is basically just a test run of the progress tracker.  There's still some functionality to add in, like showing links (using objects, to set the href and the ext) and adding badges so I can display logos on the posts for aesthetitcs.",
    tags: [],
    bgcolor: "",
    links: [],
    badges: []
    },
]

document.addEventListener("DOMContentLoaded", function() {
    PROGRESSPOSTS.forEach(x => {
        let holder = document.createElement("div");
        holder.setAttribute("id", x.day + x.month + x.year);
        holder.classList.add("post");

        holder.innerHTML = `
            <div class="showDate">${x.month} ${x.day}</div>
            <div class="showMood">Feelin' ${x.mood}</div>
            <div class="taskList">
            ${x.tasks.map(function (thing) {
                return "<div class='task'>" + thing + "</div>"
            }).join("")}
            </div>
            <div class="showComments">${x.comments}</div>
            <div class="showLinks"></div>
            <div class="showBadges"><div>
        `;

        PROGRESSHOLDER.appendChild(holder);
    });
});
