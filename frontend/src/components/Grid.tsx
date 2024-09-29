import { useState } from "react";
import { Student as StudentProp} from "./Types"
import StudentForm from "./StudentForm";
import Student from "./Student";


type GridProps = {
    students: StudentProp[];
}

export default function Grid(props: GridProps) {
    const [students, setStudents] = useState<StudentProp[]>(props.students ?? []);

    const addStudent = (student: Omit<StudentProp, 'id'>) => {
        setStudents((prev) => [...prev, { id: crypto.randomUUID(), ...student}]);
    };
    return (
    <>
    <section>
        <article>
            {students.map((student) => (
                <Student key={student.id} id={student.id} name={student.name} degree={student.degree} />
            ))}
        </article>
        <StudentForm addStudent={addStudent} />
    </section>
    </>
    );
}