const list_thesis = Vue.component('list_thesis', {
    data() {
        return {
            userRole: window.localStorage.getItem('userRole'),
            loading: true,
            theses: []
        }
    },
    methods: {
        getListThesis() {
            request('/thesis/info', 'GET')
                .then (result => {
                    this.theses = result.result
                    this.loading = false;
                })
        },
        joinThesis(thesisId) {
            request('/thesis/info', 'POST')
                .then (result => {
                    console.log(result)
                    return result.json()
                })
        }
    },
    created: function () {
        this.getListThesis()
    }
})