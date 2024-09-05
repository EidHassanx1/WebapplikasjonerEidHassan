import './style.css';

const page = document.getElementById("page");
// const main = document.getElementById("main");
const form = document.getElementById("project-form");
const titleInput = document.getElementById("title");
const leaderInput = document.getElementById("leader");
const memberNameInput = document.getElementById("memberName");
const memberAgeInput = document.getElementById("memberAge");
const memberGenderInput = document.getElementById("memberGender");

function printProsjektInfo(prosjekt) {
    const prosjektElement = document.createElement('div');
    prosjektElement.className = 'prosjekt';

    prosjektElement.innerHTML = `
        <h3>${prosjekt.title}</h3>
        <p>Leader: ${prosjekt.leader}</p>
        <ul>
            ${prosjekt.members.map(member => `
                <li>${member.name}: ${member.age} years old (${member.gender})</li>
            `).join('')}
        </ul>
    `;

    page?.appendChild(prosjektElement);
}

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:5454/json', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Error fetching projects');
        }

        const projects = await response.json();
        projects.Prosjekt.forEach(printProsjektInfo);
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

function newPrintProsjektInfo(event) {
    event.preventDefault();

    const inputTitle = titleInput.value;
    const inputLeader = leaderInput.value;
    const member = {
        name: memberNameInput.value,
        age: Number(memberAgeInput.value),
        gender: memberGenderInput.value,
    };

    const newProsjekt = {
        title: inputTitle,
        leader: inputLeader,
        members: [member],
    };

    titleInput.value = '';
    leaderInput.value = '';
    memberNameInput.value = '';
    memberAgeInput.value = '';
    memberGenderInput.value = '';

    addNewProject(newProsjekt);
}

async function addNewProject(newProsjekt) {
    try {
        const response = await fetch('http://localhost:5454/leggTil', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProsjekt),
        });

        if (!response.ok) {
            throw new Error('Error adding project');
        }

        await fetchProjects();
    } catch (error) {
        console.error('Failed to add project:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchProjects);

form.addEventListener('submit', newPrintProsjektInfo);
