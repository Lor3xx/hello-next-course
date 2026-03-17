import axios from "axios";
import Link from "next/link";
import { Gadget } from "../../../model/gadget";
import { redirect } from "next/navigation";

const API = 'https://jsonplaceholder.typicode.com/posts';

export const dynamic = "force-static";

export default async function Catalog() {
  let data: Gadget[] = [];

  try {
    const res = await fetch(API); //SSG
    //axios.get<Gadget[]>(API); //SSR
    data = await res.json();
    data = data.slice(0, 3);
  } catch (error) {
    console.error("Errore nel fetch dei dati:", error);
    redirect("/");
  }

  if (data.length === 0) {
    return (
      <div className="page">
        <h1 className="title">Catalog</h1>
        <p>Nessun dato disponibile al momento. Riprova più tardi.</p>
      </div>
    );
  }

  return (
    <div className="page">


      <h1 className="title"> Catalog </h1>

      <div className="flex flex-wrap justify-center">
        {data.map((item) => (
          <div key={item.id} className="card m-2" style={{width: '18rem'}}>
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.body}</p>
              <Link href={`/catalog/${item.id}`}> View Details </Link>
            </div>
          </div>
        ))}


      </div>


    </div>
  );
}