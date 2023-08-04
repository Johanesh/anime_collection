interface PaginateProps {
    paginate: {
        page: number,
        lastPage: number,
    },
    handlePagination: (step: number) => void,
}