const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export type VideoData = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishTime: string;
  channelTitle: string;
};

export const fetchRandomVideo = async (): Promise<VideoData[] | null> => {
  try {
    const response = await fetch(
      `${YOUTUBE_API_URL}?part=snippet&chart=mostPopular&maxResults=10&type=video&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch YouTube videos");
    }

    const data = await response.json();
    const videos = data.items;

    if (videos.length === 0) return null;

    // 最大10個の動画を取得
    const videoList = videos.map((video: any) => ({
      id: video.id.videoId,
      title: video.snippet.title,
      description: video.snippet.description,
      thumbnail: video.snippet.thumbnails.high.url,
      publishTime: video.snippet.publishTime,
      channelTitle: video.snippet.channelTitle,
    }));

    return videoList;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
};
