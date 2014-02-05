/**
 * ng-ReadTime v1.0.0
 * http://github.com/jketcham/ng-readtime
 *
 * Copyright 2014, Jack Ketcham http://jackketcham.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */

angular.module('ngReadTime', [])
.directive('readtime', [function(element) {
  return {
    restrict: 'A',
    scope: true,
//    transclude: true,
//    replace: true,
    template: function(element, attrs) {
     var tag = element[0].nodeName;
     return "<span>" + readtime + " minute read</span>";
    },
    link: function(scope, element, attrs) {
      scope.context = attrs.context;

      function contextWords(scope.context) {
          words = "";
          var element = scope.context;
          var length = element.childNodes.length;
          for (var i = 0; i < length; i++) {
              var node = element.childNodes[i];
              if (node.nodeType != 8) {
                  words += node.nodeType != 1 ? node.nodeValue : contextWords(node);
              }
          }
          return words;
      }
      var words = get_text(document.getElementById('content'));
      var count = words.split(/\s+/).length;

      scope.readtime = function() {
        
      };

      angular.element(document).ready(function() {
        findReadTime();
      });

    }
  }
}]);
