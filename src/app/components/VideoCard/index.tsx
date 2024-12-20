import Image from "next/image";

type VideoCardProps = {
  video: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishTime: string;
    channelTitle: string;
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
          {video.description && (
            <p className="text-xs text-gray-500 line-clamp-2 mb-1">
              {video.description}
            </p>
          )}
          <p className="text-xs text-gray-600 line-clamp-1">
            {video.channelTitle}
          </p>
          <p className="text-xs text-gray-600">
            1000回再生 ・ {video.publishTime}
          </p>
        </div>
      </a>
    </div>
  );
};
