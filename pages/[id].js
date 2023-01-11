import { useRouter } from "next/router";


const listaDePaths = [
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
function DetailPage() {
    const router = useRouter()
    const id = router.query.id
    return (
        <section className="detail-container">
            <h1>Esta é a futura página para o grupo <span style={{color:"#88179d"}}>{id}</span></h1>           
        </section>
    );
}

export async function getStaticPaths() {
        const allPaths = listaDePaths.map((el) => {
            return { params: { id: el.nome}}
        })
    return {
      paths: allPaths,
      fallback: false, // can also be true or 'blocking'
    }
  }

  export async function getStaticProps(context) {
    return {
      // Passed to the page component as props
      props: { post: {} },
    }
  }

export default DetailPage;