/**
 * ng-ReadTime v1.0.0
 * http://github.com/jketcham/ng-readtime
 *
 * Copyright 2014, Jack Ketcham http://jackketcham.com
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */

angular.module('ngReadTime', [])
.directive('readtime', [function() {
  'use strict';
  return {
    restrict: 'A',
    scope: true,
    link: function(scope, element, attrs) {
      scope.context = attrs.readtimeContent;

      function grabWords() {
        words = '';
        var element = scope.context;
        var length = element.childNodes.length;
        for (var i = 0; i < length; i++) {
          var node = element.childNodes[i];
          if (node.nodeType !== 8) {
            words += node.nodeType !== 1 ? node.nodeValue : contextWords(node);
          }
        }
        return words.split(/\s+/).length;
      }
      $scope.wordCount = grabWords();

      //Average adult WPM is 300
      var findReadtime = function() {
        scope.readtime = wordCount/300;
      };
      return findReadTime();
    },
    template: function(element, attrs) {
      return '<span>' + scope.readtime + ' minute read</span>';
    }
  };
}]);