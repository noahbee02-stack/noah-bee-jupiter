const today = new Date();

const thisYear = today.getFullYear();

const footer = document.querySelector("footer");

const copyright = document.createElement("p");

copyright.innerHTML = "© Noah Bouey " + thisYear;

footer.appendChild(copyright);

const skills = [
    "JavaScript",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Visual Studio Code",
    "Cybersecurity"
];
const skillsSection = document.getElementById("Skills");

const skillsList = skillsSection.querySelector("ul");


for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
const messageForm = document.querySelector('form[name="leave_message"]');

messageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = event.target.usersName.value;
    const email = event.target.usersEmail.value;
    const message = event.target.usersMessage.value;

    console.log(name);
    console.log(email);
    console.log(message);

    const messageSection = document.getElementById("messages");

    const messageList = messageSection.querySelector("ul");

    const newMessage = document.createElement("li");

    newMessage.innerHTML = `<a href="mailto:${email}">${name}</a>: <span>${message}</span>`;

    const removeButton = document.createElement("button");

    removeButton.innerText = "remove";

    removeButton.type = "button";

    removeButton.addEventListener("click", function() {
        const entry = removeButton.parentNode;
        entry.remove();
    });

    newMessage.appendChild(removeButton);

    messageList.appendChild(newMessage);

    event.target.reset();
});