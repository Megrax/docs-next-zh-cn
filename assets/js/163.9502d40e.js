(window.webpackJsonp=window.webpackJsonp||[]).push([[163],{679:function(t,e,a){"use strict";a.r(e);var s=a(57),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"client-side-hydration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#client-side-hydration"}},[t._v("#")]),t._v(" Client Side Hydration")]),t._v(" "),a("p",[t._v("Hydration refers to the client-side process during which Vue takes over the static HTML sent by the server and turns it into dynamic DOM that can react to client-side data changes.")]),t._v(" "),a("p",[t._v("In "),a("code",[t._v("entry-client.js")]),t._v(", we are simply mounting the app with this line:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v('Since the server has already rendered the markup, we obviously do not want to throw that away and re-create all the DOM elements. Instead, we want to "hydrate" the static markup and make it interactive.')]),t._v(" "),a("p",[t._v("Vue provides a "),a("code",[t._v("createSSRApp")]),t._v(" method for use in client-side code (in this case, in our "),a("code",[t._v("entry-client.js")]),t._v(") to tell Vue to hydrate the existing static HTML instead of re-creating all the DOM elements.")]),t._v(" "),a("h3",{attrs:{id:"hydration-caveats"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hydration-caveats"}},[t._v("#")]),t._v(" Hydration Caveats")]),t._v(" "),a("p",[t._v("Vue will assert the client-side generated virtual DOM tree matches the DOM structure rendered from the server. If there is a mismatch, it will bail hydration, discard existing DOM and render from scratch. There will be a warning in the browser console but your site will still work.")]),t._v(" "),a("p",[t._v("The first key way to ensure that SSR is working to ensuring your application state is the same on client and server. Take special care not to depend on APIs specific to the browser (like window width, device capability or localStorage) or server (such as Node built-ins), and take care where the same code will give different results when run in different places (such as when using timezones, timestamps, normalizing URLs or generating random numbers). See "),a("RouterLink",{attrs:{to:"/guide/ssr/universal.html"}},[t._v("Writing Universal Code")]),t._v(" for more details.")],1),t._v(" "),a("p",[t._v("A second key thing to be aware of when using SSR + client hydration is that invalid HTML may be altered by the browser. For example, when you write this in a Vue template:")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("hi"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("td")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("tr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("table")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("The browser will automatically inject "),a("code",[t._v("<tbody>")]),t._v(" inside "),a("code",[t._v("<table>")]),t._v(", however, the virtual DOM generated by Vue does not contain "),a("code",[t._v("<tbody>")]),t._v(", so it will cause a mismatch. To ensure correct matching, make sure to write valid HTML in your templates.")]),t._v(" "),a("p",[t._v("You might consider using a HTML validator like "),a("a",{attrs:{href:"https://validator.w3.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the W3C Markup Validation Service"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://html-validate.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML-validate"),a("OutboundLink")],1),t._v(" to check your templates in development.")])])}),[],!1,null,null,null);e.default=n.exports}}]);