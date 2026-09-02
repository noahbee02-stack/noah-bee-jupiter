const repositoriesButton = document.getElementById("repositoriesButton");
const profileButton = document.getElementById("profileButton");

const repositoriesContainer = document.getElementById("repositoriesContainer");
const profileContainer = document.getElementById("profileContainer");

// Repositories button
repositoriesButton.addEventListener("click", function () {
repositoriesContainer.innerHTML = "<p>Loading repositories...</p>";

fetch("https://api.github.com/users/noahbee02-stack/repos")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Unable to retrieve repositories.");
        }

        return response.json();
    })
    .then(function (repositories) {
        repositoriesContainer.innerHTML = "";

        const repositoryList = document.createElement("ul");

        for (let i = 0; i < repositories.length; i++) {
            const repository = document.createElement("li");

            const repositoryName = document.createElement("strong");
            repositoryName.innerText = repositories[i].name;

            const repositoryDescription = document.createElement("p");
            repositoryDescription.innerText =
                repositories[i].description || "No description available.";

            repository.appendChild(repositoryName);
            repository.appendChild(repositoryDescription);
            repositoryList.appendChild(repository);
        }

        repositoriesContainer.appendChild(repositoryList);
    })
    .catch(function (error) {
        repositoriesContainer.innerHTML =
            "<p>Error loading repositories: " + error.message + "</p>";
    });

});

// Profile button
profileButton.addEventListener("click", function () {
profileContainer.innerHTML = "<p>Loading profile...</p>";

fetch("https://api.github.com/users/noahbee02-stack")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Unable to retrieve GitHub profile.");
        }

        return response.json();
    })
    .then(function (profile) {
        profileContainer.innerHTML = "";

        const name = document.createElement("h3");
        name.innerText = profile.name || profile.login;

        const username = document.createElement("p");
        username.innerText = "Username: " + profile.login;

        const bio = document.createElement("p");
        bio.innerText = "Bio: " + (profile.bio || "No bio available.");

        const repositories = document.createElement("p");
        repositories.innerText =
            "Public Repositories: " + profile.public_repos;

        const followers = document.createElement("p");
        followers.innerText = "Followers: " + profile.followers;

        const following = document.createElement("p");
        following.innerText = "Following: " + profile.following;

        profileContainer.appendChild(name);
        profileContainer.appendChild(username);
        profileContainer.appendChild(bio);
        profileContainer.appendChild(repositories);
        profileContainer.appendChild(followers);
        profileContainer.appendChild(following);
    })
    .catch(function (error) {
        profileContainer.innerHTML =
            "<p>Error loading profile: " + error.message + "</p>";
    });

});
