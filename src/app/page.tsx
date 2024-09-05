import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <title>Assignment Page</title>
      <meta name="description" content="Assignment details" />
      <div className="bg-white p-10 rounded-2xl shadow-2xl max-w-xl text-center transform transition duration-500 hover:scale-105">
      <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Assignment # 1</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Submitted to Sir Ibtasaam</h2>
      <div className="space-y-4">
      <Link href={"/stationary/books"} className="text-lg font-medium text-blue-600 hover:text-blue-800"> Books </Link>
      <br />
      <Link href={"stationary/books/notebooks/pencils"} className="text-lg font-medium text-blue-600 hover:text-blue-800">Pencils</Link>
      <br />
      <Link href={"stationary/books/notebooks"} className="text-lg font-medium text-blue-600 hover:text-blue-800">NoteBooks</Link>
      <br />
      <Link href={"/dynamicfolder"} className="text-lg font-medium text-blue-600 hover:text-blue-800">Mobiles</Link>
      <br />
      <Link href={"/nestedfolder/nestedone"} className="text-lg font-medium text-blue-600 hover:text-blue-800">first nested Page</Link>
      <br />
      <Link href={"/nestedfolder/nestedone/nestedtwo"} className="text-lg font-medium text-blue-600 hover:text-blue-800">Second nested page</Link>
      <br />
      <Link href={"folderone"} className="text-lg font-medium text-blue-600 hover:text-blue-800" > Folder One</Link>
      <br />
      <Link href={"foldertwo"} className="text-lg font-medium text-blue-600 hover:text-blue-800" > Folder Two</Link>
      <footer className="mt-6 text-gray-600">Submitted by Aminah Ali</footer>
      </div>
      </div>
    </div>
  );
}
