class SearchAdvance {
    constructor(title, name, phone) {
        this.title = title;
        this.name = name;
        this.phone = phone;
    }
    describe(sqlQuery) {
        return sqlQuery.where('title',this.title)
            .where('publisher.name', this.name)
            .where('publisher.phone', this.phone)
    }
}
module.exports = SearchAdvance;