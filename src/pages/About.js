import React from "react";

function About() {
  return (
    <section style={{ color: 'white', backgroundColor: '#004C54', padding: "2rem", textAlign: "center" }}>
      <h1>Hey dere</h1>
      <p>Go IGgleS</p>
      <p>
        Welcome to my About page! I'm a big fan of the Philadelphia Eagles and love building cool web apps like this one.
      </p>
      <img src="/public/mog1.jpg" alt="Me" style={{ width: "300px" }} />
      <p>
        When I'm not coding, you can find me cheering for my team or exploring new technologies. Fly, Eagles, Fly!
      </p>
      <img
        src="https://media1.tenor.com/m/9ZXH_ll8PW8AAAAd/text-wall-ace.gif"
        alt="Didn't read GIF"
        style={{ width: "300px", marginTop: "1rem" }}
      />
    </section>
  );
}

export default About;
