angular.module('app').factory('urlTool', function () {

    return {
        joinUrl: function (urlPrefix, queryParams) {
            if (!queryParams || _.size(queryParams) === 0) {
                return urlPrefix;
            }

            var qps = {};
            _.forOwn(queryParams, function (v, k) {
                if (typeof v!=='undefined' && v!=null) {
                    qps[k] = v;
                }
            });

            var queryKeys = _.keys(qps);
            if (!queryKeys.length) {
                return urlPrefix;
            }

            queryKeys = queryKeys.sort();
            var sortedQueryStrs = _.map(queryKeys, function (key) {
                return key + '=' + qps[key];
            }).join('&');

            if (urlPrefix.indexOf('?') === -1) {
                urlPrefix += "?";
            }

            var endsWithQm = urlPrefix.charAt(urlPrefix.length - 1) === '?';

            return urlPrefix + (endsWithQm ? '' : '&') + sortedQueryStrs;

        },
        getBaseUrl: function () {
            return window.location.protocol+"//"+window.location.host;
        }
    };
});
