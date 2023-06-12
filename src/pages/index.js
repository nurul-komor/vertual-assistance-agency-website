import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import indexStyle from "../styles/index.module.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section className="bg-gradientCommon">
        {/* navbar  */}
        <div className="flex justify-between items-center w-full max-w-[1300px] mx-auto py-10 px-4">
          <h4 className="text-4xl font-bold">
            <Link href="/">Locus.</Link>
          </h4>
          <ul className="flex items-center space-x-4 font-medium">
            <li className="text-lg">
              <Link href="#" className="p-3">
                Portfolio
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                About Us
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                Join Us
              </Link>
            </li>
            <li className="text-lg">
              <Link href="#" className="p-3">
                News & Events
              </Link>
            </li>
          </ul>
          <div>
            <Link
              href=""
              className="inline-block px-10 py-4 rounded-full ring-1 ring-slate-800 font-medium hover:bg-slate-800 hover:text-white duration-200"
            >
              Register
            </Link>
          </div>
        </div>
        {/* hero section  */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full max-w-[1300px] mx-auto px-4">
          <div className="basis-full md:basis-[50%] min-h-[80vh] flex flex-col justify-center item-center md:items-start p-4">
            <p className="common-before">20 Cities and growing</p>
            <h1 className="text-5xl md:text-6xl font-bold my-8">
              Being Founders
              <br /> Takes Guts
            </h1>
            <p className="leading-8">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Reprehenderit suscipit possimus atque ipsam doloremque. Molestias
            </p>
            <div className="flex flex-wrap justify-center items-center space-x-8 mt-10">
              <Link
                href="#"
                className="inline-block relative px-10 py-4 rounded-full ring-1 focus:ring-2 outline-none ring-slate-800 font-bold text-white bg-slate-800  hover:bg-slate-900 drop-shadow-6xl"
              >
                Book Demo
              </Link>
              <Link
                href=""
                className="px-[1rem] pt-4 pb-2 text-2xl rounded-full ring-1 focus:ring-2 outline-none ring-slate-800 font-bold text-white bg-slate-800  hover:bg-slate-900 "
              >
                <ion-icon name="play"></ion-icon>
              </Link>
              <p className="font-bold text-md">Watch Showreel</p>
            </div>
          </div>
          <div className="basis-full lg:basis-[50%] w-full  flex items-center relative justify-center lg:justify-end  min-h-[80vh] p-4">
            <div className="w-[60%] h-auto flex items-center justify-center rounded-full p-6 border-2  border-slate-600 relative  ">
              <div className="w-full h-[65vh] rounded-full border-2 border-white  relative before:absolute before:content-[''] before:w-full before:h-full before:left-0 before:top-0 before:bg-[red] before:grayscale-0 before:opacity-[0.5] z-5 overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  width={100}
                  height={100}
                  alt=""
                />
              </div>
            </div>
            <h1
              className={
                "text-[120px] md:text-[200px] font-bold absolute bottom-0 lg:right-[-8%] z-[2] text-transparent " +
                indexStyle.commonStroke1
              }
            >
              Locus.
            </h1>
            <h1
              className={
                "text-[120px] md:text-[200px] font-bold absolute bottom-0 lg:right-[-8%] z-[1] text-transparent " +
                indexStyle.commonStroke2
              }
            >
              Locus.
            </h1>
          </div>
        </div>
      </section>
    </main>
  );
}
