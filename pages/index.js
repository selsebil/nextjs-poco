import Image from 'next/image';
import nextjsIcon from './nextjs.png';
export default function Index() {
 
  return (
    <div className="flex mt-52 justify-center items-center flex-col">
    <Image width={100} height={100} src={nextjsIcon} alt="Picture of the author" />
    <p className="text-pink-500 text-5xl font-extrabold">NEXT.JS 13 WORKSHOP</p>
  </div>

   
  );
}

