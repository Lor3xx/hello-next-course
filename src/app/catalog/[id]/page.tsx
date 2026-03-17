"use client";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";


export default function CatalogDetails() {

  const router = useRouter();
  const params = useParams();
  console.log(params.id);

  return (
    <div className="page">
      <h1 className="title"> Catalog Details </h1>
    </div>
  );
}