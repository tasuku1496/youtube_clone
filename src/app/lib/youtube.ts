const YOUTUBE_API_KEY = ""; // 仮置き
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export type VideoData = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishTime: string;
  channelTitle: string;
};

export const fetchRandomVideo = async (): Promise<VideoData | null> => {
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

    // ランダムに1つの動画を選ぶ
    const randomVideo = videos[Math.floor(Math.random() * videos.length)];

    return {
      id: randomVideo.id.videoId,
      title: randomVideo.snippet.title,
      description: randomVideo.snippet.description,
      thumbnail: randomVideo.snippet.thumbnails.high.url,
      publishTime: randomVideo.snippet.publishTime,
      channelTitle: randomVideo.snippet.channelTitle,
    };
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
};
