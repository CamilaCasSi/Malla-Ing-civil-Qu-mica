const ramos = [
  // Semestre 1
  { nombre: "EIQ1010 - Fundamentos de procesos químicos", semestre: 1, prerequisitos: [] },
  { nombre: "FIN1110 - Desarrollo personal y comunicación", semestre: 1, prerequisitos: [] },
  { nombre: "MAT1001 - Fundamentos de matemáticas para la ingeniería", semestre: 1, prerequisitos: [] },
  { nombre: "QUI1000 - Química para la ingeniería", semestre: 1, prerequisitos: [] },
  { nombre: "ICR1010 - Antropología cristiana", semestre: 1, prerequisitos: [] },

  // Semestre 2
  { nombre: "EIQ1020 - Procesos químicos I", semestre: 2, prerequisitos: ["EIQ1010"] },
  { nombre: "MAT1002 - Álgebra", semestre: 2, prerequisitos: ["MAT1001"] },
  { nombre: "QUI161 - Química inorgánica", semestre: 2, prerequisitos: ["QUI1000"] },
  { nombre: "XX - Formación fundamental 1", semestre: 2, prerequisitos: [] },

  // Semestre 3
  { nombre: "EIQ2020 - Balances de materia", semestre: 3, prerequisitos: ["EIQ1020"] },
  { nombre: "FIS1002 - Física mecánica", semestre: 3, prerequisitos: ["MAT1002"] },
  { nombre: "ICA213 - Economía", semestre: 3, prerequisitos: ["MAT1001"] },
  { nombre: "MAT1003 - Cálculo en varias variables", semestre: 3, prerequisitos: ["MAT1002"] },
  { nombre: "ING9001 - Inglés 1", semestre: 3, prerequisitos: [] },

  // Semestre 4
  { nombre: "EIQ2042 - Elementos de físico-química", semestre: 4, prerequisitos: ["EIQ1020"] },
  { nombre: "EIQ288 - Métodos estadísticos en ciencias e ingeniería", semestre: 4, prerequisitos: ["MAT1003"] },
  { nombre: "MAT1005 - Ecuaciones diferenciales", semestre: 4, prerequisitos: ["MAT1003"] },
  { nombre: "QUI263 - Química orgánica", semestre: 4, prerequisitos: ["QUI1000"] },
  { nombre: "ING9002 - Inglés 2", semestre: 4, prerequisitos: ["ING9001"] },

  // Semestre 5
  { nombre: "EIQ311 - Termodinámica de procesos", semestre: 5, prerequisitos: ["EIQ2042"] },
  { nombre: "EIQ314 - Interpretación de planos", semestre: 5, prerequisitos: ["EIQ2020"] },
  { nombre: "EIQ262 - Ciencia de los materiales", semestre: 5, prerequisitos: ["QUI161"] },
  { nombre: "EIQ312 - Administración de la producción", semestre: 5, prerequisitos: ["ICA213"] },
  { nombre: "XX - Formación fundamental 2", semestre: 5, prerequisitos: [] },
  { nombre: "ING9003 - Inglés 3", semestre: 5, prerequisitos: ["ING9002"] },

  // Semestre 6
  { nombre: "EIQ359 - Termodinámica de equilibrio", semestre: 6, prerequisitos: ["EIQ311"] },
  { nombre: "EIQ356 - Mecánica de fluidos", semestre: 6, prerequisitos: ["FIS1002"] },
  { nombre: "EIQ366 - Métodos numéricos en ingeniería", semestre: 6, prerequisitos: ["MAT1005"] },
  { nombre: "EIQ377 - Sistemas eléctricos de procesos", semestre: 6, prerequisitos: ["FIS1002"] },
  { nombre: "ING9004 - Inglés 4", semestre: 6, prerequisitos: ["ING9003"] },

  // Semestre 7
  { nombre: "EIQ432 - Cálculo de procesos", semestre: 7, prerequisitos: ["EIQ359"] },
  { nombre: "EIQ453 - Transferencia de calor", semestre: 7, prerequisitos: ["EIQ356"] },
  { nombre: "EIQ415 - Química aplicada", semestre: 7, prerequisitos: ["QUI263"] },
  { nombre: "EIQ414 - Ingeniería económica 2", semestre: 7, prerequisitos: ["EIQ312"] },
  { nombre: "XX - Optativo 1", semestre: 7, prerequisitos: [] },
  { nombre: "XX - Formación fundamental 3", semestre: 7, prerequisitos: [] },

  // Semestre 8
  { nombre: "EIQ474 - Reactores químicos 1", semestre: 8, prerequisitos: ["EIQ359"] },
  { nombre: "EIQ484 - Electroquímica", semestre: 8, prerequisitos: ["EIQ453"] },
  { nombre: "EIQ451 - Transferencia de masa", semestre: 8, prerequisitos: ["EIQ453"] },
  { nombre: "EIQ476 - Ingeniería económica 3", semestre: 8, prerequisitos: ["EIQ312"] },
  { nombre: "XX - Optativo 2", semestre: 8, prerequisitos: [] },
  { nombre: "ICR2020 - Ética cristiana", semestre: 8, prerequisitos: [] },

  // Semestre 9
  { nombre: "EIQ536 - Reactores químicos 2", semestre: 9, prerequisitos: ["EIQ474"] },
  { nombre: "EIQ525 - Diseño de equipos de procesos", semestre: 9, prerequisitos: ["EIQ262"] },
  { nombre: "EIQ512 - Separación de procesos", semestre: 9, prerequisitos: ["EIQ451"] },
  { nombre: "EIQ500 - Simulación de procesos", semestre: 9, prerequisitos: ["EIQ366"] },
  { nombre: "EIQ522 - Ingeniería ambiental", semestre: 9, prerequisitos: ["EIQ414"] },

  // Semestre 10
  { nombre: "EIQ582 - Proyecto de título 1", semestre: 10, prerequisitos: ["EIQ512"] },
  { nombre: "EIQ597 - Laboratorio de operaciones", semestre: 10, prerequisitos: ["EIQ451"] },
  { nombre: "EIQ553 - Control de procesos químicos", semestre: 10, prerequisitos: ["EIQ500"] },
  { nombre: "EIQ577 - Plantas de procesos", semestre: 10, prerequisitos: ["EIQ476"] },
  { nombre: "XX - Optativo 3", semestre: 10, prerequisitos: [] },

  // Semestre 11
  { nombre: "EIQ625 - Proyecto de título 2", semestre: 11, prerequisitos: ["EIQ582"] }
];

const aprobados = new Set();

function renderMalla() {
  const malla = document.getElementById("malla");
  malla.innerHTML = "";
  const porSemestre = {};

  ramos.forEach(r => {
    if (!porSemestre[r.semestre]) porSemestre[r.semestre] = [];
    porSemestre[r.semestre].push(r);
  });

  Object.keys(porSemestre).sort((a, b) => a - b).forEach(sem => {
    const contenedor = document.createElement("div");
    contenedor.className = "semestre";
    const titulo = document.createElement("h3");
    titulo.textContent = `Semestre ${sem}`;
    contenedor.appendChild(titulo);

    porSemestre[sem].forEach(r => {
      const div = document.createElement("div");
      div.textContent = r.nombre;

      const requisitosCumplidos = r.prerequisitos.every(pr => aprobados.has(pr));
      if (!requisitosCumplidos && r.prerequisitos.length > 0) {
        div.className = "ramo bloqueado";
      } else {
        div.className = "ramo";
        if (aprobados.has(r.nombre)) div.classList.add("aprobado");
        div.addEventListener("click", () => {
          if (!requisitosCumplidos) return;
          if (aprobados.has(r.nombre)) {
            aprobados.delete(r.nombre);
          } else {
            aprobados.add(r.nombre);
          }
          renderMalla();
        });
      }
      contenedor.appendChild(div);
    });
    malla.appendChild(contenedor);
  });
}

renderMalla();
