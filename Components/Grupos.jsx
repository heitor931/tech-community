import { useMemo } from "react";
import Grupo from "./Grupo";

function Grupos() {
  const listaDeGrupos = useMemo(() => {
    return [
      { nome: "Software Development",imageName: "swdev" },
      { nome: "Project Manager",imageName:"manager" },
      { nome: "Educação", imageName: "education" },
      { nome: "Saúde",imageName: "saude" },
      { nome: "Engenharia Civil",imageName:"civil" },
      { nome: "Data science",imageName:"datascience" },
      { nome: "Telecommunication",imageName: "telco" },
      { nome: "Security",imageName:"security" },
      { nome: "Empreendedorismo",imageName:"entrepeneur" },
      { nome: "Cloud",imageName:"cloud" },
      { nome: "Geral ou Diversos",imageName:"geral" },
    ];
  }, []);

  const grupos = listaDeGrupos.map((grupo, idx) => {
    return <Grupo key={idx} {...grupo} />;
  });

  return (
    <section className="grupos-container">
      <h2>Lista de grupos</h2>
      <div className="grupos-subcontainer">{grupos}</div>
    </section>
  );
}

export default Grupos;
