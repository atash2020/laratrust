(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{200:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"middleware"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware","aria-hidden":"true"}},[t._v("#")]),t._v(" Middleware")]),t._v(" "),a("h2",{attrs:{id:"configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),a("p",[t._v("The middleware are registered automatically as "),a("code",[t._v("role")]),t._v(", "),a("code",[t._v("permission")]),t._v(" and "),a("code",[t._v("ability")]),t._v(" . If you want to change or customize them, go to your "),a("code",[t._v("config/laratrust.php")]),t._v(" and set the "),a("code",[t._v("middleware.register")]),t._v(" value to "),a("code",[t._v("false")]),t._v(" and add  the following to the "),a("code",[t._v("routeMiddleware")]),t._v(" array in "),a("code",[t._v("app/Http/Kernel.php")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Laratrust"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LaratrustRole")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Laratrust"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LaratrustPermission")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ability'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" \\"),a("span",{attrs:{class:"token package"}},[t._v("Laratrust"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Middleware"),a("span",{attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("LaratrustAbility")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token keyword"}},[t._v("class")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"concepts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concepts","aria-hidden":"true"}},[t._v("#")]),t._v(" Concepts")]),t._v(" "),a("p",[t._v("You can use a middleware to filter routes and route groups by permission, role or ability:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("Route"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("group")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'prefix'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'admin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role:admin'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("function")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    Route"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'AdminController@welcome'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Route"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("get")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/manage'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission:manage-admins'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'uses'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'AdminController@manageAdmins'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If you use the pipe symbol it will be an "),a("em",[t._v("OR")]),t._v(" operation:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role:admin|root'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->hasRole(['admin', 'root']);")]),t._v("\n\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission:edit-post|edit-user'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->hasRole(['edit-post', 'edit-user']);")]),t._v("\n")])])]),a("p",[t._v("To emulate "),a("em",[t._v("AND")]),t._v(" functionality you can do:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role:owner|writer,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->hasRole(['owner', 'writer'], true);")]),t._v("\n\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission:edit-post|edit-user,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->can(['edit-post', 'edit-user'], true);")]),t._v("\n")])])]),a("p",[t._v("For more complex situations use "),a("code",[t._v("ability")]),t._v(" middleware which accepts 3 parameters; roles, permissions and options:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ability:admin|owner,create-post|edit-user,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->ability(['admin', 'owner'], ['create-post', 'edit-user'], true)")]),t._v("\n")])])]),a("p",[t._v("If you want yo use a different guard for the user check you can specify it as an option:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role:owner|writer,require_all|guard:api'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission:edit-post|edit-user,guard:some_new_guard'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ability:admin|owner,create-post|edit-user,require_all|guard:web'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"teams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#teams","aria-hidden":"true"}},[t._v("#")]),t._v(" Teams")]),t._v(" "),a("p",[t._v("If you are using the teams feature and want to use the middleware checking for your teams, you can use:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'role:admin|root,my-awesome-team,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->hasRole(['admin', 'root'], 'my-awesome-team', true);")]),t._v("\n\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'permission:edit-post|edit-user,my-awesome-team,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->hasRole(['edit-post', 'edit-user'], 'my-awesome-team', true);")]),t._v("\n\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'middleware'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'ability:admin|owner,create-post|edit-user,my-awesome-team,require_all'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("// $user->ability(['admin', 'owner'], ['create-post', 'edit-user'], 'my-awesome-team', true);")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("require_all")]),t._v(" and "),a("code",[t._v("guard")]),t._v(" parameters are optional.")])]),t._v(" "),a("h2",{attrs:{id:"middleware-return"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#middleware-return","aria-hidden":"true"}},[t._v("#")]),t._v(" Middleware Return")]),t._v(" "),a("p",[t._v("The middleware supports two types of returns in case the check fails. You can configure the return type and the value in the "),a("code",[t._v("config/laratrust.php")]),t._v(" file.")]),t._v(" "),a("h2",{attrs:{id:"abort"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abort","aria-hidden":"true"}},[t._v("#")]),t._v(" Abort")]),t._v(" "),a("p",[t._v("By default the middleware aborts with a code "),a("code",[t._v("403")]),t._v(" but you can customize it by changing the "),a("code",[t._v("middleware.handlers.abort.code")]),t._v(" value.")]),t._v(" "),a("h2",{attrs:{id:"redirect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redirect","aria-hidden":"true"}},[t._v("#")]),t._v(" Redirect")]),t._v(" "),a("p",[t._v("To make a redirection in case the middleware check fails, you will need to change the "),a("code",[t._v("middleware.handling")]),t._v(" value to "),a("code",[t._v("redirect")]),t._v(" and the "),a("code",[t._v("middleware.handlers.redirect.url")]),t._v(" to the route you need to be redirected. Leaving the configuration like this:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handling'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'redirect'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'handlers'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'abort'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'code'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("403")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'redirect'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'url'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'/home'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),a("span",{attrs:{class:"token comment"}},[t._v("// Change this to the route you need")]),t._v("\n        "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'message'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("          "),a("span",{attrs:{class:"token comment"}},[t._v("// Key value message to be flashed into the session.")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'key'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'error'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("'content'")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{attrs:{class:"token single-quoted-string string"}},[t._v("''")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("// If the content is empty nothing will be flashed to the session.")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}],!1,null,null,null);e.options.__file="middleware.md";s.default=e.exports}}]);