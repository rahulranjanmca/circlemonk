(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{328:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(334),m=t(338),c=t(330);var i=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(c.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(c.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=e.metadata,n=a.frontMatter;return r.a.createElement(l.a,{title:t.title,description:t.description},a&&r.a.createElement("div",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:n,metadata:t},r.a.createElement(a,null)),r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(i,{nextItem:t.nextItem,prevItem:t.prevItem}))))))}},338:function(e,a,t){"use strict";t(93);var n=t(0),r=t.n(n),l=t(333),m=t.n(l),c=t(329),i=t(330),s=t(341),o=t(339),v=t.n(o);a.a=function(e){var a,t,n,l,o,u=e.children,E=e.frontMatter,p=e.metadata,g=e.truncated,_=p.date,d=p.permalink,N=p.tags,h=E.author,b=E.authorURL,k=E.authorTitle,f=E.authorFBID,w=E.title;return r.a.createElement("div",null,(a=_.substring(0,10).split("-"),t=a[0],n=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(a[1],10)-1],l=parseInt(a[2],10),o=f?"https://graph.facebook.com/"+f+"/picture/?height=200&width=200":E.authorImageURL,r.a.createElement("header",null,r.a.createElement("h1",{className:m()("margin-bottom--sm",v.a.blogPostTitle)},r.a.createElement(i.a,{to:d},w)),r.a.createElement("div",{className:"margin-bottom--sm"},r.a.createElement("small",null,n," ",l,", ",t)),r.a.createElement("div",{className:"avatar margin-bottom--md"},o&&r.a.createElement("a",{className:"avatar__photo-link",href:b,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{className:"avatar__photo",src:o,alt:h})),r.a.createElement("div",{className:"avatar__intro"},h&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:b,target:"_blank",rel:"noreferrer noopener"},h)),r.a.createElement("small",{className:"avatar__subtitle"},k)))))),r.a.createElement("article",{className:"markdown"},r.a.createElement(c.a,{components:s.a},u)),r.a.createElement("div",{className:"row margin-vert--lg"},r.a.createElement("div",{className:"col"},N.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Tags:"),N.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(i.a,{key:t,className:"margin-horiz--sm",to:t},a)})))),r.a.createElement("div",{className:"col text--right"},g&&r.a.createElement(i.a,{to:p.permalink},r.a.createElement("strong",null,"Read More")))))}},339:function(e,a,t){e.exports={blogPostTitle:"blogPostTitle_2RZH"}}}]);