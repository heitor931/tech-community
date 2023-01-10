import { useRouter } from "next/router";

function DetailPage({ groupName }) {
    const router = useRouter()
    const id = router.query.id[0]
    return (
        <section>
            <h1>Esta é a futura página para o grupo <span style={{color:"#88179d"}}>{id}</span></h1>
            
        </section>
    );
}

export default DetailPage;