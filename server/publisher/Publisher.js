class Publisher {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }

    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }

    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
}
module.exports = Publisher;