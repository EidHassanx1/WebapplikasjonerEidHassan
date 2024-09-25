type ProjectProps = {
    title: String
};

export default function Project({title}: ProjectProps){
    return (
        <p>{title}</p>
    )
}