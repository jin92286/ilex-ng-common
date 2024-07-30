angular.module('app').factory('ApiClient', function ($http, urlTool, $q) {
    function errorCatcher(e) {
        var msg;
        if (!!e.data) {
            msg = e.data;
            return $q.reject(e.data);
        } else {
            msg = e.toString();
        }
        return $q.reject(msg);
    }

    function ApiClient(baseUrl) {
        this.baseUrl = baseUrl;
    }

    ApiClient.prototype.setAuthorization = function (auth) {
        $http.defaults.headers.common.Authorization = auth;//'Basic ' + authData;
        return this;
    };

    ApiClient.prototype.get = function (url, params) {
        var finalUrl = this.baseUrl + urlTool.joinUrl(url, params);

        return $http.get(finalUrl).then(function (data) {
            return data.data;
        }).catch(errorCatcher);
    };

    ApiClient.prototype.post = function (url, data) {
        var finalUrl = this.baseUrl + url;

        return $http.post(finalUrl, data).then(function (data) {
            return data.data;
        }).catch(errorCatcher);
    };
    ApiClient.prototype.put = function (url, data) {
        var finalUrl = baseUrl + url;
        return $http.put(finalUrl, data).then(function (data) {
            return data.data;
        }).catch(errorCatcher);
    };
    ApiClient.prototype.del = function (url) {
        var finalUrl = baseUrl + url;
        return $http.delete(finalUrl).then(function (data) {
            return data.data;
        }).catch(errorCatcher);
    };

    return ApiClient;
});