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
    links: [],
    badges: []
    },
    {year: 2022,
    month: "December",
    day: 31,
    mood: "Ill",
    tasks: ["Go to my parent's place and spend time with them"],
    comments: "So today I didn't do much because I started out the day by feeling pretty sick, and then later on in the day I went home to spend New Year's Eve with my parents.  This'll happen.",
    tags: [],
    links: [],
    badges: []
    },
    {year: 2023,
    month: "January",
    day: 1,
    mood: "Lethargic",
    tasks: ["Celebrate New Year's Day", "Get back home"],
    comments: "I don't like having the first post of the 2023 be less-than-productive, but I promised to spend most of the day with my parents, then we did a family game night with my brothers from around the country when I got back. Tomorrow, I'm going to get some actual code stuff done.  Maybe get the links and badges functionality working on this project to show off links to tutorials/repos I work on and display which programs/languages I'm using any given day.",
    tags: [],
    links: [],
    badges: []
    },
    {year: 2023,
    month: "January",
    day: 2,
    mood: "Exhausted",
    tasks: ["Catch up on sleep", "Sigh forlornly"],
    comments: "I spent a good chunk of today feeling not great and sleeping.  Not super great, but I'm aiming to get some actual work done tomorrow during work hours.",
    tags: [],
    links: [],
    badges: []
    },
    {year: 2023,
     month: "January",
     day: 3,
     mood: "Low",
     tasks: ["First day of work of the new year"],
     comments: "Ended up getting distracted by a lot during work today.  Lot of fun things happened with regards to politics today, what with the House votes and all the Santos stuff.  Trying to pull myself together and work, despite still feeling gross and tired.",
     tags: [],
     links: [],
     badges: []
    },
    {year: 2023,
     month: "January",
     day: 4,
     mood: "Distracted",
     tasks: ["Add link functionality to this project"],
     comments: "It isn't much, but I'm trying to get into gear for 2023.  I didn't expect to come out of the gate swinging, but I will admit that I'm dragging my feet harder than I would like.  Making these sorts of changes is hard and, especially when you live alone, there's no one to hold you accountable but yourself.",
     tags: [],
     links: [["https://javascript.info/","javascript.info, which I've been casually perusing for the past few days"]],
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
                return '<div class="task">' + thing + '</div>'
            }).join("")}
            </div>
            
            <div class="showComments">${x.comments}</div>
            
            <div class="showLinks">${x.links.map(function (thing) {
                return '<a href="'+ thing[0] +'">'+ thing[1] +'</a>'
            })}</div>
            
            <div class="showBadges"><div>
        `;

        PROGRESSHOLDER.appendChild(holder);
    });
});
