import React from "react";
import "./styles.css";

const background = require("../../_images/Header-image/Godfather-header.jpg");

const vito = require("../../profile-pics/Vito-Corleone.jpg");
const carmelia = require("../../profile-pics/Carmelia-Corleone.jpg");
const carlo = require("../../profile-pics/carlo-rizzi.jpg");
const lucy = require("../../profile-pics/Luci-Mancini.jpg");

const img = [vito, carmelia, carlo, lucy];

const employeeData = [
  {
    name: "Vito Corleone",
    popularity: 5,
    biography:
      "Vito Andolini's story starts in Corleone, Sicily. In 1901, the local mafia chieftain, Don Ciccio, murders Vito's father Antonio when he refuses to pay him tribute. Paolo, Vito's older brother, swears revenge, but Ciccio's men kill him too. Ciccio then sends his men to fetch nine-year old Vito. However, Vito's mother insists on going as well and begs Ciccio to spare Vito. Ciccio refuses, reasoning the boy will seek revenge as a grown man. Upon Ciccio's refusal, Vito's mother holds a knife to Ciccio's throat, allowing her son to escape while Ciccio's men kill her. Family friends smuggle Vito out of Sicily, putting him on a ship with immigrants traveling to America. Ellis Island immigration officials rename him Vito Corleone, using his village for his surname. He later uses Andolini as his middle name in acknowledgement of his family heritage.",
    image: img[0],
    colleagues: ["Carlo Rizzi", "Luci Mancini"],
  },
  {
    name: "Carmelia Corleone",
    popularity: 2,
    biography:
      "Carmela was born in Sicily Italy in 1897, and emigrated to the United States shortly after the turn of the century. She married Vito Corleone in 1914; they were married for just over 40 years until Vito's death in 1955. They had four children – Sonny, Fredo, Michael and Connie. They also took in Sonny's friend Tom Hagen, who later served as the family consigliere. In the novel, Carmela Corleone is portrayed as a traditional Italian immigrant woman who speaks in very broken English. In the movies, however, she speaks fluent English as an adult, with a marked New York accent. In the novel, she develops a close relationship with Michael's girlfriend and future wife, Kay. She is given more expansive dialogue in The Godfather Part II, notably when she confronts her daughter Connie about her behavior early in the film, and when she discusses family life with Michael, who fears that his role as Don of the Corleone criminal empire will cost him his family. Carmela Corleone dies toward the end of the sequel.",
    image: img[1],
    colleagues: [],
  },
  {
    name: "Carlo Rizzi",
    popularity: 5,
    biography:
      "A half northern Italian, half Sicilian native of Nevada and former labourer, Rizzi migrated to New York City following trouble with the law and became a friend of Sonny Corleone, through whom he met Sonny's sister Connie in 1941 at a surprise birthday party for Sonny's father Vito. They were married on the last Saturday of August 1945 in a traditional Italian wedding at the Corleone mall, a compromise made in order to appease Vito, who was disappointed with his daughter's choice in a husband.",
    image: img[2],
    colleagues: ["Vito Corleone", "Carmelia Corleone"],
  },
  {
    name: "Luci Mancini",
    popularity: 5,
    biography:
      "In the novel, Lucy is a fairly important supporting character, with several chapters dedicated to her story. After Sonny's death, Vito's consigliere, Tom Hagen sends Lucy to Las Vegas. She is given a small interest (five and later ten) in one of the family's hotels, primarily so that she can keep an eye on Vito's middle son, Fredo, who is learning the hotel and casino business. She also serves as a shareholder-of-record who has no criminal record: several such owners are necessary for a valid gaming license. On paper she is a millionaire, although she does not vote her shares in the casinos.",
    image: img[3],
    colleagues: ["Carmelia Corleone"],
  },
];

const Home = () => {
  let currentItem = 0;
  const [currentEmployee, setCurrentEmployee] = React.useState(
    employeeData[currentItem]
  );
  //  render each employee if seclected by name
  const renderEmployee = (employee) => {
    if (currentEmployee.name === employee.name) {
      return (
        <div className="employee-card" key={employee.name}>
          <h1>{employee.name}</h1>
          <img
            className="profile-img"
            src={employee.image}
            alt={employee.name}
          />
          <p>Biography: {employee.biography}</p>
          <p>Popularity: {employee.popularity}</p>
          <p>Colleagues: {employee.colleagues.join(", ")}</p>
        </div>
      );
    }
  };

  return (
    <div className="bg-img" style={{ backgroundImage: `url(${background})` }}>
      <div className="employee-list">
        <img className="logo-img" src="" alt="logo" />
        {employeeData.map((employee) => (
          // render the style conditionally
          // if else...
          <button
            className={employee.name === "Vito Corleone" ? "employee-btn" : ""}
            key={employee.name}
            onClick={() => setCurrentEmployee(employee)}
          >
            {employee.name}
          </button>
        ))}
      </div>
      <div className="employee-container">
        {employeeData.map((employee) => renderEmployee(employee))}
      </div>
    </div>
  );
};

export default Home;
