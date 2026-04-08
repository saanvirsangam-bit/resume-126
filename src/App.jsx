import { useState, useEffect } from "react";

function App() {
  const [studentdata, detstudent] = useState({});
  const [collegedata, setcollege] = useState({});
  const [skilldata, setskilldata] = useState({});

  useEffect(() => {
    const data = {
      name: "Saanvii",
      age: 18,
      course: "BCA"
    };

    const college = {
      name: "MAPS",
      collegeaddress: "Manglore",
      phonenumber: "1234567890"
    };

    const skills = {
      Technical: "Jira, Asana, SQL, Tableau, Python (Basic)",
      Soft_Skills: "Leadership, Planning, Communication",
      name: "Alex",
      contact: 897989879,
      email: "alex@mail.com",
      experience: {
        company: "TechFlow Solutions",
        role: "Senior Project Coordinator",
        years: "2024-Present"
      }
    };


    

    detstudent(data);
    setcollege(college);
    setskilldata(skills);

  }, []);

  return (
    <div>
      <h2>Student Info</h2>
      <p>{studentdata.name}</p>
      <p>{studentdata.age}</p>
      <p>{studentdata.course}</p>

      <h2>College Info</h2>
      <p>{collegedata.name}</p>
      <p>{collegedata.collegeaddress}</p>

      <h2>Skills</h2>
      <p>{skilldata.Technical}</p>
      <p>{skilldata.Soft_Skills}</p>
    </div>
  );
}

export default App;