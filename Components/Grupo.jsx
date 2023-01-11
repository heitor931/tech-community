import Image from "next/image";
import { useRouter } from "next/router";
function Grupo({ nome, imageName }) {
  const router = useRouter()

  const handleClick = (nome) => { 
    router.push(`/${nome}`)
   }
  return (
    <div className="grupo" onClick={handleClick.bind(null, nome)}>
      <h2>{nome}</h2>
      
      <Image
        className="image"
          src={`/${imageName}.jpg`}
          alt={imageName}
          width="700"
          height="500"
        />
  
    </div>
  );
}

export default Grupo;
