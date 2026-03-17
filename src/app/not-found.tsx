import {NextPage} from "next";
import Link from "next/link";

const Page404: NextPage = () => {
    return (
        <div className="page">
            Pagina non esistente
            <Link href="/" className="text-blue-500 mt-4">Torna alla Home</Link>
        </div>
    );
}

export default Page404;