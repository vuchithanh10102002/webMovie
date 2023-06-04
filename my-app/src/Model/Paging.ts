export class PagePaging<Values> {
    page?: number = 1;
    results?: Values[] = [];
    total_pages?: number;
    total_results?: number;
};