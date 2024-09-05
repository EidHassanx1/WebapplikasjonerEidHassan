// import './style.css';
// import data from './data.json';

// type Member = {
//   name: string;
//   gender: string;
//   age: number;
// }

// type Prosjekt = {
//   title: string;
//   leader: string;
//   members: Member[];
// }

// const page = document.getElementById("page");

// function printProsjektInfo(prosjekt: Prosjekt): void {
//   const prosjektElement = document.createElement('div');
//   prosjektElement.className = 'prosjekt';

//   prosjektElement.innerHTML = `
//     <h3>${prosjekt.title}</h3>
//     <p>Leader: ${prosjekt.leader}</p>
//     <ul>
//       ${prosjekt.members.map(member => `
//         <li>${member.name}: ${member.age} år ${member.gender}</li>
//       `).join('')}
//     </ul>
//   `;

//   page?.appendChild(prosjektElement);
// }

// async function fetchProjects() {
//   try {
//     const response = await fetch('http://localhost:5454/json', {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//     if (!response.ok) {
//       throw new Error('Error fetching projects');
//     }

//     const projects = await response.json();
//     projects.forEach(printProsjektInfo);
//   } catch (error) {
//     console.error('Error fetching projects:', error);
//   }
// }

// const main = document.getElementById("main");
// const form = document.getElementById("project-form") as HTMLFormElement;
// const titleInput = document.getElementById("title") as HTMLInputElement;
// const leaderInput = document.getElementById("leader") as HTMLInputElement;
// const memberNameInput = document.getElementById("memberName") as HTMLInputElement;
// const memberAgeInput = document.getElementById("memberAge") as HTMLInputElement;
// const memberGenderInput = document.getElementById("memberGender") as HTMLInputElement;

// function newPrintProsjektInfo(event: Event): void {
//   event.preventDefault();

//   const inputTitle = titleInput.value;
//   const inputLeader = leaderInput.value;
//   const member = {
//     name: memberNameInput.value,
//     age: Number(memberAgeInput.value),
//     gender: memberGenderInput.value,
//   };

//   const newProsjekt: Prosjekt = {
//     title: inputTitle,
//     leader: inputLeader,
//     members: [member],
//   };

//   const newProsjektElement = document.createElement('div');
//   newProsjektElement.className = 'newProsjekt';

//   newProsjektElement.innerHTML = `
//     <h3>${newProsjekt.title}</h3>
//     <p>Leader: ${newProsjekt.leader}</p>
//     <ul>
//       ${newProsjekt.members.map(member => `
//         <li>${member.name}: ${member.age} år ${member.gender}</li>
//       `).join('')}
//     </ul>
//   `;

//   main?.appendChild(newProsjektElement);

//   titleInput.value = '';
//   leaderInput.value = '';
//   memberNameInput.value = '';
//   memberAgeInput.value = '';
//   memberGenderInput.value = '';
  
//   // Send the new project to the server
//   addNewProject(newProsjekt);
// }

// async function addNewProject(newProsjekt: Prosjekt) {
//   try {
//     const response = await fetch('http://localhost:5454/leggTil', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newProsjekt),  // Send the actual new project data
//     });

//     if (!response.ok) {
//       throw new Error('Error adding project');
//     }

//     // Refresh the project list
//     await fetchProjects();
//   } catch (error) {
//     console.error('Failed to add project:', error);
//   }
// }

// // Load initial data
// data.Prosjekt.forEach(printProsjektInfo);

// // Add event listener for the form
// form.addEventListener('submit', newPrintProsjektInfo);
