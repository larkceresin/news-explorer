class PracticumBackend {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers
    }
    saveArticle({keyword, title, text, date, source, link}) {
        return fetch(this._baseUrl + '/articles', {
            headers: this._headers,
            method:"POST",
            body: JSON.stringify({
                keyword,
                title,
                text,
                date,
                source,
                link
            })  
        }).then((res) => res.ok ? res.json() : Promise.reject(`Error!` + res.status + res.statusText))
    }
    getSavedArticles(){
        return fetch(this._baseUrl +'/articles',{
            headers: this._headers
        })
        .then((res) => res.ok ? res.json() : Promise.reject(`Error!` + res.status + res.statusText))
    }
    removeArticle(articleId){
        return fetch(this._baseUrl + `/articles/` + articleId, {
            headers: this._headers,
            method: "DELETE"
        })
            .then((res) => res.ok ? res.json() : Promise.reject(`Error!` + res.status + res.statusText))
    }
}


export default PracticumBackend
