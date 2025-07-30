export interface PaginationDto<T> {
    page: number,
    count: number,
    recordsTotal: number,
    items: T[]
}