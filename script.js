const PROGRESSHOLDER = document.getElementById("progressHolder");

const PROGRESSPOSTS = [
    {year: 2022,
    month: "December",
    day: 30,
    mood: "Hopeful",
    tasks: ["Create basic skeleton for the progress tracker, including basic styling",
    "Create the GitHub repository"],
    comments: "This is basically just a test run of the progress tracker.  There's still some functionality to add in, like showing links (using objects, to set the href and the ext) and adding badges so I can display logos on the posts for aesthetitcs.",
    tags: [],
    links: {},
    badges: []
    },
    {year: 2022,
    month: "December",
    day: 31,
    mood: "Ill",
    tasks: ["Go to my parent's place and spend time with them"],
    comments: "So today I didn't do much because I started out the day by feeling pretty sick, and then later on in the day I went home to spend New Year's Eve with my parents.  This'll happen.",
    tags: [],
    links: {},
    badges: []
    },
    {year: 2023,
    month: "January",
    day: 1,
    mood: "Lethargic",
    tasks: ["Celebrate New Year's Day", "Get back home"],
    comments: "I don't like having the first post of the 2023 be less-than-productive, but I promised to spend most of the day with my parents, then we did a family game night with my brothers from around the country when I got back. Tomorrow, I'm going to get some actual code stuff done.  Maybe get the links and badges functionality working on this project to show off links to tutorials/repos I work on and display which programs/languages I'm using any given day.",
    tages: [],
    links: {},
    badges: []
    }
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
