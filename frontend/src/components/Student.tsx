import { Student as StudentProps } from "./Types";

export default function Student({ id, name, degree, email }: StudentProps) {
    const visEmail = () => {
        alert(`Studenten sin e-post: ${email}`)
    }
    
    return (
        <div>
            <h2>{name}</h2>
            {/* <p>ID: {id}</p> */}
            {degree ? (
                <p>Degree: {degree}</p>
            ) : (
                <h3 style={{ color: "yellow" }}>Studenten har ikke utdanning/erfaring</h3>
            )}
            <button onClick={visEmail}>VIS E-POSTEN TIL {name}</button>
        </div>
    );
}
