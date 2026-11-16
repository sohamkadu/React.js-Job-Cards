import Card from "./components/Card";

const App = () => {

  const jobs = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6U-KSnY_r4hsTsVxDuaaM1suHkBJRHcyaf65xF5PJQ&s=10",
    company: "Amazon",
    posted: "5 days ago",
    name: "Senior UI/UX Designer",
    tags: ["Part Time", "Senior Level"],
    price: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7iq1rjeI1_G4jRG6O_uENX1rCbgsQeCAMw5ySJBerjQ&s=10",
    company: "Google",
    posted: "2 days ago",
    name: "Frontend Developer",
    tags: ["Full Time", "Mid Level"],
    price: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-QAx3_pv1EjNiyRVsPhsSIZC88jdH--frNlkOUFqeg&s=10",
    company: "Microsoft",
    posted: "1 day ago",
    name: "Python Developer",
    tags: ["Full Time", "Senior Level"],
    price: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoMznz1zJ3fNTFggg26u-HrG1L7P1uQHJ4uqv7cishUA&s=10",
    company: "Netflix",
    posted: "3 days ago",
    name: "Product Designer",
    tags: ["Part Time", "Junior Level"],
    price: "$90/hr",
    location: "London, UK"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN3yNxSP2ubs9y_cDIJg9ZzMUYoMhEPqKehE2eBoOhKg&s=10",
    company: "Spotify",
    posted: "4 days ago",
    name: "React Developer",
    tags: ["Full Time", "Mid Level"],
    price: "$95/hr",
    location: "Berlin, Germany"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVhxIOBdwbEGXJ4d1Vp-TNJu_0_s7ur-TqW553Idjlxw&s=10",
    company: "Adobe",
    posted: "6 days ago",
    name: "UI/UX Designer",
    tags: ["Part Time", "Senior Level"],
    price: "$130/hr",
    location: "Toronto, Canada"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0_D4nFNOnLAogu3zdDdJbOT1tcU6AdxojJ6eulZ44gQ&s=10",
    company: "Uber",
    posted: "2 days ago",
    name: "Backend Developer",
    tags: ["Full Time", "Senior Level"],
    price: "$115/hr",
    location: "New York, USA"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt0e7hEPAUYCOM01IuozERntbXQTG4sFSCPKl2C5Npuw&s=10",
    company: "Airbnb",
    posted: "1 week ago",
    name: "UX Researcher",
    tags: ["Part Time", "Mid Level"],
    price: "$85/hr",
    location: "Paris, France"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXawZOPHKFMThNV8E-ja5Bmb5KD_KDLdGKiVg3NGA3_A&s=10",
    company: "Tesla",
    posted: "3 days ago",
    name: "Full Stack Developer",
    tags: ["Full Time", "Junior Level"],
    price: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnFC8b4Y36NgmC8OJbWDlVXFenH3_h2bPBQI1wL0yfQw&s=10",
    company: "IBM",
    posted: "5 days ago",
    name: "Software Engineer",
    tags: ["Full Time", "Senior Level"],
    price: "$125/hr",
    location: "Singapore"
  }
];
  return (
    <div className="parent">
      {jobs.map((elem)=>{
        return <Card company={elem.company} name={elem.name} tag={elem.tags} price={elem.price} brandlogo={elem.brandLogo} dateposted={elem.posted} />
      })}
    </div>
  )
}

export default App