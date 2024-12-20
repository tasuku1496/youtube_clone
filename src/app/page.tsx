"use client";

import { useEffect, useState } from "react";
import { fetchRandomVideo, VideoData } from "@/app/lib/youtube";
import { VideoCard } from "@/app/components/VideoCard";

export default function Home() {
  const [videoList, setVideo] = useState<VideoData[] | null>(null);

  useEffect(() => {
    const getRandomVideo = async () => {
      const fetchedVideo = await fetchRandomVideo();
      const videoList = fetchedVideo as VideoData[];
      setVideo(videoList);
    };

    getRandomVideo();
  }, []);

  return (
    <main className="grid grid-cols-3 gap-4 p-4 bg-gray-100">
      {videoList && videoList.length > 0 ? (
        videoList.map((video, index) => <VideoCard key={index} video={video} />)
      ) : (
        <p className="col-span-3 text-center text-gray-600">
          動画を読み込んでいます...
        </p>
      )}
    </main>
  );
}
