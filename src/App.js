import logo from './logo.svg';
import './App.css';
import ReactCV from "react-cv";

function App() {
    return (
        <ReactCV
            personalData={{
                name: "Sarah Falconer",
                title: "Ph.D Engineering",
                image: "https://robohash.org/fhdskfhdsjf.png",
                contacts: [
                    {type: "email", value: "sarahelizabethfalconer@gmail.com"},
                    {type: "location", value: "Sheffield, UK"},
                    {type: "website", value: "https://sarahfalconer.github.io/"},
                ]
            }}
            sections={[
                {
                    type: "text",
                    title: "Profile",
                    content: "An enthusiastic and persistent worker in both individual and team-based tasks." +
                        " I thoroughly enjoy all aspects of research, data analysis, and presenting new results and techniques." +
                        " I strive to perform well within groups and individually, and have excellent management and communication skills.",
                    icon: "usertie"
                }
            ]}
            branding={false}
        />
    );
}

export default App;
