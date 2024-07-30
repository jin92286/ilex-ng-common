angular.module('app').factory('stringTool', function () {

    return {
        format: function (tpl) {
            var args = arguments;
            return tpl.replace(/\{(\d+)\}/g, function (m, i) {
                var v = args[parseInt(i)+1];
                return typeof(v) !== 'undefined' ? v : '';
            });
        }
    };
});