(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(139);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},134:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(133),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var o=a(135),s=a.n(o);a.d(t,"PageRenderer",function(){return s.a});var d=a(28);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},135:function(e,t,a){var n;e.exports=(n=a(137))&&n.default||n},136:function(e){e.exports={data:{site:{siteMetadata:{title:"Project CARE"}}}}},137:function(e,t,a){"use strict";a.r(t);a(29);var n=a(0),r=a.n(n),i=a(4),u=a.n(i),c=a(46),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=o},138:function(e,t,a){},139:function(e,t,a){"use strict";var n=a(136),r=a(0),i=a.n(r),u=a(4),c=a.n(u),l=a(140),o=a.n(l),s=a(134),d=function(e){var t=e.siteTitle;return i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("div",{id:"topbar",style:{marginBottom:"50px"}},i.a.createElement("div",{className:"ui container fluid"},i.a.createElement("div",{className:"ui large menu inverted blue header"},i.a.createElement("div",{className:"ui container"},i.a.createElement(s.Link,{className:"item header",to:"/"},t),i.a.createElement("div",{className:"right menu"}),i.a.createElement("div",{className:"item"},i.a.createElement("a",{href:"#"},"Log in or Sign Up"))))))))};d.propTypes={siteTitle:c.a.string},d.defaultProps={siteTitle:""};var m=d,p=(a(141),a(138),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",null,t))},data:n})});p.propTypes={children:c.a.node.isRequired};t.a=p}}]);
//# sourceMappingURL=component---src-pages-404-js-02e57307151321d2029f.js.map