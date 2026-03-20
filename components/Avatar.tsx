import Image from "next/image";

interface avatarProps {
  classname?: string;
}
const Avatar = (props: avatarProps) => {
  return (
    <div className="relative">
      <div
        className={`flex justify-center items-center rounded-full md:h-36 md:w-36 h-20 w-20 relative overflow-hidden ${props.classname}`}
      >
        <Image
          src="https://github.com/prathambalehosurr.png"
          alt="Pratham Balehosur"
          width={144}
          height={144}
          priority
          className="absolute md:h-36 md:w-36 h-20 w-20 scale-125 object-cover select-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default Avatar;
