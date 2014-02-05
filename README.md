ng-ReadTime
===========

AngularJS directive to find the average read time for a selection of text.

----------


###**Getting Started**

####Installation
Eventually, I'd like to upload this as a package on Bower, but for now, just download the script from the repo here and add it to your scripts folder.

####Usage

 - Be sure to include the script after your AngularJS script.
``<script type='text/javascript' src='path/to/angular.min.js'></script>
<script type='text/javascript' src='path/to/ng-infinite-scroll.min.js'></script>``
 - Ensure that your application module specifies ``ng-ReadTime`` as a dependency:
``angular.module('myApplication', ['ng-ReadTime']);``
 - Use the directive by specifying a ``readtime`` attribute on an element, and including the class/id name of the element that contains the content you want to estimate a read time for.
``<div readtime=".element"></div>``
 - Add styling to the outputted estimated read time, which looks like:
``<span>3 minute read</span>``
within the readtime element you specified.

Note that directive does not use the ``ng`` prefix, as that prefix is reserved for the core Angular module.

###**License**
ng-ReadTime is licensed under the MIT license.
