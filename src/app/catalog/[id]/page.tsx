import { redirect } from "next/navigation";
import { Gadget } from "../../../../model/gadget";
import axios from "axios";
import Link from "next/link";

const API = 'https://jsonplaceholder.typicode.com/posts';

type Props = {
  params: {
    id: number;
  };
};

export default async function CatalogDetails({ params }: Props) {
  let data: Gadget;
  const {id} = await params;
  try {
      const res = await axios.get<Gadget>(`${API}/${id}`);
      data = res.data;
  } catch (error) {
      console.error("Errore nel fetch dei dati:", error);
      redirect("/catalog");
  }

  return (
    <div className="page">
      <h1 className="title"> Catalog Details </h1>
      <div className="card m-3" style={{width: '30rem'}}>
        <div className="card-body">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">{data.body}</p>
        </div>
      </div>
      <Link href="/catalog"> Back to Catalog </Link>
    </div>
  );
}