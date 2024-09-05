import './style.css';
import data from './data.json';

type Member = {
  name: string;
  gender: string;
  age: number;
}

type Prosjekt = {
  title: string;
  leader: string;
  members: Member[];
}

const page = document.getElementById("page");

function printProsjektInfo(prosjekt: Prosjekt): void {
  const prosjektElement = document.createElement('div');
  prosjektElement.className = 'prosjekt';

  prosjektElement.innerHTML = `
    <h3>${prosjekt.title}</h3>
    <p>Leader: ${prosjekt.leader}</p>
    <ul>
      ${prosjekt.members.map(member => `
        <li>${member.name}: ${member.age} år ${member.gender}</li>
      `).join('')}
    </ul>
  `;

  page?.appendChild(prosjektElement);
}

console.log(data.Prosjekt);

const main = document.getElementById("main");
const form = document.getElementById("project-form") as HTMLFormElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const leaderInput = document.getElementById("leader") as HTMLInputElement;
const memberNameInput = document.getElementById("memberName") as HTMLInputElement;
const memberAgeInput = document.getElementById("memberAge") as HTMLInputElement;
const memberGenderInput = document.getElementById("memberGender") as HTMLInputElement;

function newPrintProsjektInfo(event: Event): void {
  event.preventDefault();

  const inputTitle = titleInput.value;
  const inputLeader = leaderInput.value;
  const member = {
    name: memberNameInput.value,
    age: Number(memberAgeInput.value),
    gender: memberGenderInput.value,
  };

  const newProsjekt: Prosjekt = {
    title: inputTitle,
    leader: inputLeader,
    members: [member],
  };

  const newProsjektElement = document.createElement('div');
  newProsjektElement.className = 'newProsjekt';

  newProsjektElement.innerHTML = `
    <h3>${newProsjekt.title}</h3>
    <p>Leader: ${newProsjekt.leader}</p>
    <ul>
      ${newProsjekt.members.map(member => `
        <li>${member.name}: ${member.age} år ${member.gender}</li>
      `).join('')}
    </ul>
  `;

  main?.appendChild(newProsjektElement);

  titleInput.value = '';
  leaderInput.value = '';
  memberNameInput.value = '';
  memberAgeInput.value = '';
  memberGenderInput.value = '';
}

form.addEventListener('submit', newPrintProsjektInfo);

data.Prosjekt.forEach(printProsjektInfo);





//VIL IKKE SLETTE NOE I TILFELLE JEG TREGNER Å VITE HVOR JEG HAR TINGENE
//HVIS JEG "HUSKER" PÅ Å SLETTE DEM NÅR JEG ER FERDIG GJØR JEG DET SENERE :)


// import typescriptLogo from './typescript.svg'
// import viteLogo from '/vite.svg'
// // import { setupCounter } from './counter.ts'

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1>Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `

// // setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
