class NewsApi {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._today = new Date();
    }
    _getLastWeek() {
        this._lastWeek = new Date(this._today.getFullYear(), this._today.getMonth(), this._today.getDate() - 7);
        return this._lastWeek;
    }
    _getTodayDisplay() {
        const day = this._today.getDate();
        const month = this._today.getMonth();
        const year = this._today.getFullYear();
        this._todayDisplay = year + '-' + month + '-' + day;
        return this._todayDisplay
    }
    _getLastWeekDisplay() {
        const lastWeekYear = this._lastWeek.getFullYear();
        const lastWeekMonth = this._lastWeek.getMonth();
        const lastWeekDay = this._lastWeek.getDate();
        this._lastWeekDisplay = lastWeekYear + '-' + lastWeekMonth + '-' + lastWeekDay;
        return this._lastWeekDisplay
    }
    getArticles(keyword) {
        return fetch(this._baseUrl + '/v2/everything?q=' + keyword + '&from=' + this._lastWeekDisplay + '&to=' + this._todayDisplay + '&pageSize=100', {
            headers: {
                authorization: "4f6e4e7d0f1443aeab5a8dc6dcb3d632",
                'content-type':'application/json'
            }
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error!` + res.status + res.statusText))

    }
}

const newsApi = new NewsApi('https://nomoreparties.co/news')

export default newsApi;
