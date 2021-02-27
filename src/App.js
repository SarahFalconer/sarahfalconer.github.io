import './App.css';
import ReactCV from "react-cv";
import profile from "./parts/profile";
import education from "./parts/education";
import career from "./parts/career";
import conferences from "./parts/conferences";
import projects from "./parts/projects";
import otherQualifications from "./parts/other-qualifications";
import volunteering from "./parts/volunteering";

function App() {
    return (
        <ReactCV
            personalData={{
                name: "Dr. Sarah Falconer",
                image: "/sarah-256.png",
                contacts: [
                    {type: "email", value: "sarahelizabethfalconer@gmail.com"},
                    {type: "location", value: "Sheffield, UK"},
                    {type: "website", value: "https://sarahfalconer.github.io/"},
                ]
            }}
            sections={[
                profile,
                education,
                career,
                conferences,
                projects,
                otherQualifications,
                volunteering
            ]}
            branding={false}
        />
    );
}

export default App;
