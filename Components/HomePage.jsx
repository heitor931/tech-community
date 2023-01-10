import Image from "next/image";

function HomePage() {
  return (
    <main>
      <div className="contrib">
        <h2>
          Esta pode ser uma futura aplicação WEB, simples ou de larga
          escala construída pela nossa comunidade!
        </h2>
      </div>
      <div className="image1">
        <Image
          src="/hannah-busing-Zyx1bK9mqmA-unsplash.jpg"
          alt="community"
          width="1030"
          height="600"
        />
      </div>
      <div className="image1">
        <Image
          src="/pexels-belle-co-1000445.jpg"
          alt="community"
          width="1030"
          height="600"
        />
      </div>
    </main>
  );
}

export default HomePage;
