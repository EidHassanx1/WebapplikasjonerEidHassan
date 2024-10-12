import { useState } from "react";

type StudentFormProps = {
    addStudent: (student: {name: string, degree?: string}) => void;
        // {
        //     name: string,
        //     degree: string
        // }) => void;
    //({name}: {name: string}) => void;
};

export default function StudentForm(props: StudentFormProps){
    const { addStudent } = props;
    const [ name, setName ] = useState("");
    const [ degree, setDegree ] = useState("");

    const [senderName, setSenderName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState<{ senderName: string; message: string } | null>(null);


    const addSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) return;
        addStudent({ name, degree });
        setName("");
        setDegree("");
        };
    //     if (!degree) {
    //     setDegree("${name} har ikke en utdanning enda")
    // }
    const handleContactSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!senderName || !message) {
            alert("Navn og melding må fylles ut.");
            return;
        }

    const formData = {
            senderName,
            message,
        };

        setSubmittedData(formData);
        setSenderName("");
        setMessage("");
    };

    return (
        <>
        <form onSubmit={addSubmit}>
            <label htmlFor="name">NAVN:</label>
            <input 
                type="text"
                id="name"
                placeholder="STUDENTENS NAVN"
                value={name}
                onChange={(e) => setName(e.target.value)}
             />
             <input 
                type="text"
                id="degree"
                placeholder="UTDANNING"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
             />
             <button type="submit">LEGG TIL STUDENTEN</button>
        </form>
        <form onSubmit={handleContactSubmit}>
        <h3>Kontakt Studenten</h3>
        <div>
            <label htmlFor="senderName">NAVNET DITT</label>
            <input type="text"
            id="senderName"
            value={senderName}
            onChange={(e) => setSenderName(e.target.value)}
            placeholder="NAVNET DITT"
            />
            <br />
            <label htmlFor="message">MELDING</label>
            <br />
            <textarea 
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="DIN MELDING"
            />
            <button type="submit">SEND MELDINGEN</button>
        </div>

        </form>
        {submittedData && (
                <div>
                    <h3>Data sendt inn:</h3>
                    <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                </div>
            )}
        </>
    );
}