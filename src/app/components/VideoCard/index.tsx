import Image from "next/image";

type VideoCardProps = {
  video: {
    id: string;
    title: string;
    thumbnail: string;
  };
};

export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={video.thumbnail}
          alt={video.title}
          width={400}
          height={225}
          className="w-full h-auto"
        />
        <div className="p-4">
          <h3 className="text-sm font-bold line-clamp-2">{video.title}</h3>
        </div>
      </a>
    </div>
  );
};
