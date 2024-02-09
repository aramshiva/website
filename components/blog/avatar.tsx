import Image from "next/image";

type Props = {
   name: string;
   picture: string;
};

const Avatar = ({ name, picture }: Props) => {
   return (
      <div className="flex items-center">
         <Image
            src={picture}
            className="mr-4 h-12 w-12 rounded-full"
            alt={name}
            height={100}
            width={100}
         />
         <div className="text-xl font-bold">{name}</div>
      </div>
   );
};

export default Avatar;
