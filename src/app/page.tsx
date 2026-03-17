//import { MyComponent } from "@/components/MyComponent";
"use client";
//import css from "../styles/home.module.css";
import Image from "next/image";
import image from "../../public/images/cat.jpg";

export default function Home() {

  return (
    <div style={{position: 'relative', minHeight: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
      <style jsx global>{`
        .title {
          color: red;
          font-size: 40px;
        }

        .title:hover {
          color: green;
        }

        @media (max-width: 600px) {
          .title {
            color: blue;
          }
        }
      `}</style>


      <h1 className="title animate__animated animate__tada animate__repeat-2 animate__delay-2s"> Hello </h1>
      
      <button className="btn btn-primary">Click me</button>

      <h1 className="text-3xl font-bold underline">
        Hello World!!!
      </h1>

      <Image placeholder="blur" src={image} alt="A cute cat" width={300} height={200} />
    
    </div>
  );
}
