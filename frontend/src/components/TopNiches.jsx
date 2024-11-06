import React from "react";

const TopNiches = () => {
  const services = [
    {
      id: 1,
      service: "Software Development",
      description:
        "Cutting-edge software development services designed to create, enhance, and maintain applications that adhere to the highest industry standards.",
    },
    {
      id: 2,
      service: "Web Development",
      description:
        "End-to-end web development solutions that encompass everything from eye-catching front-end design to robust back-end integration, ensuring responsive and user-centric websites.",
    },
    {
      id: 3,
      service: "Data Science",
      description:
        "Sophisticated data science services that delve into complex datasets, delivering valuable insights and strategic data-driven solutions for informed decision-making.",
    },
    {
      id: 4,
      service: "Cloud Computing",
      description:
        "Dependable cloud computing services that optimize data management, storage, and processing capabilities, providing scalable and adaptive cloud solutions tailored to your needs.",
    },
    {
      id: 5,
      service: "DevOps",
      description:
        "Comprehensive DevOps services that enhance collaboration between development and operations teams, improving deployment speed and significantly reducing time to market.",
    },
    {
      id: 6,
      service: "Mobile App Development",
      description:
        "Professional mobile app development services for both iOS and Android platforms, focusing on creating seamless and engaging mobile experiences that resonate with users.",
    },    
  ];
  return (
    <section className="services">
      <h3>Top Niches</h3>
      <div className="grid">
        {services.map((element) => {
          return (
            <div className="card" key={element.id}>
              <h4>{element.service}</h4>
              <p>{element.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TopNiches;
