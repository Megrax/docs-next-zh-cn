(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{684:function(e,t,o){"use strict";o.r(t);var r=o(57),i=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"writing-universal-code"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#writing-universal-code"}},[e._v("#")]),e._v(" Writing Universal Code")]),e._v(" "),o("p",[e._v('Before going further, let\'s take a moment to discuss the constraints when writing "universal" code - that is, code that runs on both the server and the client. Due to use case and platform API differences, the behavior of our code will not be exactly the same when running in different environments. Here we will go over the key things you need to be aware of.')]),e._v(" "),o("h2",{attrs:{id:"data-reactivity-on-the-server"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#data-reactivity-on-the-server"}},[e._v("#")]),e._v(" Data Reactivity on the Server")]),e._v(" "),o("p",[e._v("In a client-only app, every user will be using a fresh instance of the app in their browser. For server-side rendering we want the same: each request should have a fresh, isolated app instance so that there is no cross-request state pollution.")]),e._v(" "),o("p",[e._v('Because the actual rendering process needs to be deterministic, we will also be "pre-fetching" data on the server - this means our application state will be already resolved when we start rendering. This means data reactivity is unnecessary on the server, so it is disabled by default. Disabling data reactivity also avoids the performance cost of converting data into reactive objects.')]),e._v(" "),o("h2",{attrs:{id:"component-lifecycle-hooks"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#component-lifecycle-hooks"}},[e._v("#")]),e._v(" Component Lifecycle Hooks")]),e._v(" "),o("p",[e._v("Since there are no dynamic updates, the only "),o("RouterLink",{attrs:{to:"/guide/instance.html#lifecycle-hooks"}},[e._v("lifecycle hooks")]),e._v(" that will be called during SSR are "),o("code",[e._v("beforeCreate")]),e._v(" and "),o("code",[e._v("created")]),e._v(". This means any code inside other lifecycle hooks such as "),o("code",[e._v("beforeMount")]),e._v(" or "),o("code",[e._v("mounted")]),e._v(" will only be executed on the client.")],1),e._v(" "),o("p",[e._v("Another thing to note is that you should avoid code that produces global side effects in "),o("code",[e._v("beforeCreate")]),e._v(" and "),o("code",[e._v("created")]),e._v(", for example setting up timers with "),o("code",[e._v("setInterval")]),e._v(". In client-side only code we may setup a timer and then tear it down in "),o("code",[e._v("beforeUnmount")]),e._v(" or "),o("code",[e._v("unmounted")]),e._v(". However, because the destroy hooks will not be called during SSR, the timers will stay around forever. To avoid this, move your side-effect code into "),o("code",[e._v("beforeMount")]),e._v(" or "),o("code",[e._v("mounted")]),e._v(" instead.")]),e._v(" "),o("h2",{attrs:{id:"access-to-platform-specific-apis"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#access-to-platform-specific-apis"}},[e._v("#")]),e._v(" Access to Platform-Specific APIs")]),e._v(" "),o("p",[e._v("Universal code cannot assume access to platform-specific APIs, so if your code directly uses browser-only globals like "),o("code",[e._v("window")]),e._v(" or "),o("code",[e._v("document")]),e._v(", they will throw errors when executed in Node.js, and vice-versa.")]),e._v(" "),o("p",[e._v("For tasks shared between server and client but using different platform APIs, it's recommended to wrap the platform-specific implementations inside a universal API, or use libraries that do this for you. For example, "),o("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[e._v("axios"),o("OutboundLink")],1),e._v(" is an HTTP client that exposes the same API for both server and client.")]),e._v(" "),o("p",[e._v("For browser-only APIs, the common approach is to lazily access them inside client-only lifecycle hooks.")]),e._v(" "),o("p",[e._v("Note that if a 3rd party library is not written with universal usage in mind, it could be tricky to integrate it into an server-rendered app. You "),o("em",[e._v("might")]),e._v(" be able to get it working by mocking some of the globals, but it would be hacky and may interfere with the environment detection code of other libraries.")]),e._v(" "),o("h2",{attrs:{id:"custom-directives"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#custom-directives"}},[e._v("#")]),e._v(" Custom Directives")]),e._v(" "),o("p",[e._v("Most "),o("RouterLink",{attrs:{to:"/guide/custom-directive.html#custom-directives"}},[e._v("custom directives")]),e._v(" directly manipulate the DOM, which will cause errors during SSR. We recommend to prefer using components as the abstraction mechanism instead of directives.")],1)])}),[],!1,null,null,null);t.default=i.exports}}]);