import Image from "next/image";

type VideoCardProps = {
  thumbnail: string;
  title: string;
  description?: string;
  views: string;
  uploadedAt: string;
  isLive?: boolean;
  channel: string;
};

export const VideoCard = ({
  thumbnail,
  title,
  description,
  views,
  uploadedAt,
  isLive = false,
  channel,
}: VideoCardProps) => {
  const defaultThumbnail = "/images/default-thumbnail.jpg";

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
      {/* サムネイル */}
      <div className="relative">
        <Image
          src={thumbnail || defaultThumbnail}
          alt={title}
          width={400}
          height={225}
          className="w-full h-auto"
        />
        {isLive && (
          <span className="absolute bottom-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            ライブ
          </span>
        )}
      </div>

      {/* 詳細 */}
      <div className="p-4">
        <h3 className="text-sm font-bold line-clamp-2">{title}</h3>
        {description && (
          <p className="text-xs text-gray-500 line-clamp-2 mb-1">
            {description}
          </p>
        )}
        <p className="text-xs text-gray-600 line-clamp-1">{channel}</p>
        <p className="text-xs text-gray-600">
          {views} ・ {uploadedAt}
        </p>
      </div>
    </div>
  );
};
