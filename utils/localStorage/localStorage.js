export const LocalData = {
    getUser() {
        const data = localStorage.getItem('_userData')
        if(data) {
            return JSON.parse(data)
        }
    },
    setUser(values) {
        localStorage.setItem('_userData', JSON.stringify(values))
    }
}