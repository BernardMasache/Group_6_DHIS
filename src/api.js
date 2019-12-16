const basicAuth = 'Basic '+btoa('admin:district');

const headers = new Headers({
    'Authorization': basicAuth,
    'Content-type': 'application/json',
    Accept: 'application/json',
});

class Api {
    config = {
        baseUrl: '',
    };

    setConfig = config => {
        this.config = config;
    };

   getTheDashboard = () => {
       
        return fetch(`${this.config.baseUrl}/dashboards`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getTheDashboardIds = (id) => {
       
        const specifiedFields = `${id}.json?fields=dashboardItems`;
        return fetch(`${this.config.baseUrl}/dashboards/${specifiedFields}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    getCharts = (chartId) => {
       
        const specifiedFields = `${chartId}.json`;
        return fetch(`${this.config.baseUrl}/charts/${specifiedFields}`, {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers,
        })
            .catch(error => error)
            .then(response => response.json());
    };

    // getAnalytics = () => {
       
    //     const specifiedFields = 'fields=id,displayName';
    //     return fetch(`${this.config.baseUrl}/analytics.json?dimension=dx:fbfJHSPpUQD;cYeuwXTCPkU&filter=pe:
    //     2014Q1;2014Q2&filter=ou:O6uvpzGd5pu;lc3eMKXaEfw`, {
    //         method: 'GET',
    //         mode: 'cors',
    //         credentials: 'include',
    //         headers,
    //     })
    //         .catch(error => error)
    //         .then(response => response.json());
    // };

    
}

export default new Api();