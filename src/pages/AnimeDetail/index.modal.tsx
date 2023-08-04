export const AnimeDataModel = (data?: AnimeListResponse) => {
    let studiosData: string[] = [];
    data?.Page.media[0].studios.nodes.map((item) => studiosData.push(item.name));

    return {
        id: data?.Page.media[0].id || 0,
        averageScore: data?.Page.media[0].averageScore || 0,
        trending: data?.Page.media[0].trending || 0,
        popularity: data?.Page.media[0].popularity || 0,
        bannerImage: data?.Page.media[0].bannerImage || "",
        coverImage: data?.Page.media[0].coverImage.large || "",
        description: data?.Page.media[0].description || "",
        episodes: data?.Page.media[0].episodes || 0,
        format: data?.Page.media[0].format || "",
        genres: data?.Page.media[0].genres || [],
        seasonYear: data?.Page.media[0].seasonYear || 0,
        status: data?.Page.media[0].status || "",
        streamingEpisodes: data?.Page.media[0].streamingEpisodes.map((item) => (
            {
                thumbnail: item.thumbnail || "",
                title: item.title || "",
                url: item.url || "",
            }
        )) || [],
        studios: studiosData,
        title: data?.Page.media[0].title.userPreferred || "",
    }
}
