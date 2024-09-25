import Experiences from "./components/Experiences";
import Projects from "./components/Projects"

  const project = [
    {title: "TITTEL"}
  ]

  const experience = [
    { name: "Figma UI for customer X" },
	  { name: "Website for customer Y" }
  ]

function App() {
  // const student {
  //   name: "Halgeir Geirson",
  //   degree: "Bachelor IT",
  //   points: 180,
  //   email: "student@hiof.no",
  //   experiences: [
	// 	  { name: "Figma UI for customer X" },
	// 	  { name: "Website for customer Y" }
	//   ]
  // }



  return (
    <>
	  <main>
		  {/* <Header student={student} />
		  <Experiences experiences={student} />
		  <Contact student={student} /> */}
      <Experiences experiences={experience} />
		  <Projects projects={project} />
	  </main>
    </>
  )
};

export default App;