import StudentXP from "./Experience";

// type StudentXP = {
//     experienceOne: String;
//     experienceTwo: String;
// }
type ExperienceType = {
    name: String;
}

type ExperienceProps = {
    experiences: ExperienceType[];
}

export default function Experiences({experiences}: ExperienceProps) {
    return (
        <>
        {experiences.map((experience, index) => (
            <StudentXP key={index} name={experience.name} />
        ))}
        </>
    )
}