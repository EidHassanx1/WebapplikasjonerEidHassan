import { ExperienceType } from './Types';

type ExperienceProps = {
    experiences: ExperienceType[];
}

export default function Experiences({experiences}: ExperienceProps) {
    return (
        <>
        {experiences.map((experience, index) => (
            <p key={index}>{experience.name}</p>
        ))}
        </>
    )
}