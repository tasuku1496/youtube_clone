import Image from "next/image";
import { VideoData } from "@/app/lib/youtube";

type props = {
  key: number;
  video: VideoData;
};

export const VideoCard = ({ video }: props) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
          width={400}
          height={225}
          className="w-full h-auto"
        />
        <div className="p-4">
          <h3 className="text-sm font-bold line-clamp-2">
            {video.snippet.title}
          </h3>
          {video.snippet.description && (
            <p className="text-xs text-gray-500 line-clamp-2 mb-1">
              {video.snippet.description}
            </p>
          )}
          <p className="text-xs text-gray-600 line-clamp-1">
            {video.snippet.title}
          </p>
          <p className="text-xs text-gray-600">
            1000回再生 ・ {video.snippet.publishTime}
          </p>
        </div>
      </a>
    </div>
  );
};
