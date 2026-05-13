const express = require('express');
const app = express();
const port = 8080;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/professional', (req, res) => {
  res.json({
    professionalName: "Jesus Figueroa",
    base64Image: "",
    nameLink: {
      firstName: "Jesus",
      url: "https://github.com/tu-usuario"
    },
    primaryDescription: "Estudiante de CS en BYU-Idaho",
    workDescription1: "Descripción 1",
    workDescription2: "Descripción 2",
    linkTitleText: "Mis redes:",
    linkedInLink: {
      text: "LinkedIn",
      link: "https://linkedin.com/in/tu-perfil"
    },
    githubLink: {
      text: "GitHub",
      link: "https://github.com/jks162426"
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
