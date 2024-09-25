export type StudentXP = {
    name: String;
};

export default function Experience({name}: StudentXP){
    return (
        <p>{name}</p>
    )
}