interface AnimeListFilterProps {
    page: number,
    lastPage: number,
    search: string,
}

interface AnimeListModel {
    paginate: {
        current: number,
        lastPage: number,
    },
    data: {
        id: number,
        bannerImage: string,
        title: string,
    }[]
}