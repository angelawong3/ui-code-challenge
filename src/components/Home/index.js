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
        <img
          className="logo-img"
          src="data:image/png;base64,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"
          alt="logo"
        />
        {employeeData.map((employee) => (
          <button
            className="employee-btn"
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
