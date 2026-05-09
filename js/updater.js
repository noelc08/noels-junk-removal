class Updater {
    constructor(basic_info) {
        this.basic_info = basic_info;
    }

    getBusinessName() {
        return this.basic_info?.name?.data || "";
    }

    getTagline() {
        return this.basic_info?.tagline?.data || "";
    }

    getPhoneNumber() {
        return this.basic_info?.contact?.phone_num?.data || "";
    }

    getEmail() {
        return this.basic_info?.contact?.email?.data || "";
    }

    getServices() {
        return this.basic_info?.services?.data || [];
    }

    getServiceAreas() {
        return this.basic_info?.service_area?.data || [];
    }

    getPricing(type) {
        return this.basic_info?.pricing?.[type] || null;
    }

    getPriceRange(type) {
        const section = this.basic_info?.pricing?.[type];

        if (!section) return null;

        return {
            min: section.min_price?.data ?? null,
            max: section.max_price?.data ?? null
        };
    }

    getDocumentTitle(pageTitle = "") {
        const business = this.getBusinessName();

        return pageTitle
            ? `${pageTitle} | ${business}`
            : business;
    }

    getDescription(path) {
        // supports nested paths like "pricing.small.min_price"
        const parts = path.split(".");

        let current = this.basic_info;

        for (const part of parts) {
            current = current?.[part];
        }

        return current?.description || "";
    }

    getRaw(path) {
        const parts = path.split(".");

        let current = this.basic_info;

        for (const part of parts) {
            current = current?.[part];
        }

        return current?.data ?? null;
    }
}

export default Updater;