const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search";

export type VideoData = {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    description: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
    publishTime: string;
    channelTitle: string;
  };
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

    return videos;
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
};
