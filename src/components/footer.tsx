import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer(){
    return (
      <div className="flex justify-between mt-24 w-full h-[22vh] p-12 bg-black text-gray-300 text-lg">
        <div className="w-28">
            <img src="images/logo2.png" alt=""  />
        </div>
        <div className="flex space-x-4">
            <Facebook width={30} height={30} />
            <Instagram width={30} height={30} />
            <Twitter width={30} height={30} />
        </div>
      </div>
    );
}