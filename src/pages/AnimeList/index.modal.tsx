export const AnimesModel = (data?: AnimeListResponse) => {
    return {
        paginate: {
            current: data?.Page.pageInfo.currentPage || 1,
            lastPage: data?.Page.pageInfo.lastPage || 1,
        },
        data: data?.Page ? data.Page.media.map((item) => {
            return ({
                id: item.id,
                bannerImage: item.coverImage.medium,
                title: item.title.userPreferred,
            })
        }) : [],
    }
}
