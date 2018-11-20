class SearchBasic {
    constructor(keyword){
        this.keyword = keyword;
    }
    describe(sqlQuery){
        let keyword = this.keyword;
        return sqlQuery.where(function() {
            this.where('title' , 'like' , '%' + keyword + '%')
                .orWhere('publisher.name' , 'like' , '%' + keyword + '%')
                .orWhere('publisher.phone' , 'like' , '%' + keyword + '%')
        }).where('books.deleted_at', null)
    }
}
module.exports = SearchBasic;