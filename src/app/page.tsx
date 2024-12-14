import { BASE_PATH } from "@/constants/AppConstants";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex items-center justify-center space-x-8 p-8">
        <p className="text-4xl">Thoughts for lifelong learners. Free, forever.</p>
        <Image src={`${BASE_PATH}/intuit.png`} width={300} height={300} alt="Intuit logo"></Image>
      </div>
    </div>
  );
}
