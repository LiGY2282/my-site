export default function (defaultDataValue) {
    return {
        data() {
            return {
                isLoading: true,
                data: defaultDataValue
            }
        },
        async created() {
            this.data = await this.getRemoteData();
            this.isLoading = false;
        }
    }
}