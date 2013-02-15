/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-02-15 08:08 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-gcwu-intranet",psnb:null,search:null,bcrumb:null,title:null,sft:null,gcft:null,wmms:c("#gcwu-wmms"),menu:null,init:function(){b.gcnb=pe.header.find("#gcwu-gcnb");b.psnb=pe.header.find("#gcwu-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#gcwu-srchbx");b.bcrumb=pe.header.find("#gcwu-bc");b.title=pe.header.find("#gcwu-title");b.sft=pe.footer.find("#gcwu-sft");b.gcft=pe.footer.find("#gcwu-gcft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){e=pe.menu.navcurrent(pe.secnav,b.bcrumb);d=e.parents("ul");d.prev().children("a").addClass("nav-current")}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var w,z,I="",e,n,P=pe.dic.get("%settings"),y,s,f,m,N,S="",u='<a data-role="button" data-iconpos="notext"',B=' data-rel="popup" data-position-to="window"',p=u+B,C='<div data-role="popup" data-overlay-theme="a"',E='<div data-role="header"',R=E+"><h1>",A=' data-theme="c" class="ui-corner-all">',q=E+' class="ui-corner-top"><h1>',h='<div data-role="content" data-theme="c" class="ui-corner-bottom ui-content">',O=u+' href="javascript:;" data-icon="delete" data-rel="back" class="ui-btn-right">'+pe.dic.get("%close")+"</a>",L=p+' data-icon="back" class="ui-btn-left"',J=">"+pe.dic.get("%back")+"</a>",Q="</div></div>",o='<ul data-role="listview"',x="",G,k,t,r,F,g,d,M,v,H,D,l,K,j;if(b.sft.length!==0){if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){e=pe.dic.get("%menu");g=b.menubar.find("ul.mb-menu li");s=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");z=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?s:b.bcrumb.children(":header")[0])).innerHTML;w=C+' id="jqm-wb-mb">'+R+e+"</h1>"+O+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){D=b.bcrumb[0];K=D.getElementsByTagName("a")[0].href;w+='<section><div id="jqm-mb-location-text">'+D.innerHTML+"</div></section>"}else{w+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){I+="<section><div><h2>"+s.innerHTML+"</h2>"+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></section>";D=pe.secnav[0]}if(b.menubar.length!==0){I+="<section><div><h2>"+z+"</h2>"+pe.menu.buildmobile(g,3,"a",true,true,"c",true,true)+"</div></section>"}w+='<div id="jqm-mb-menu"></div></nav></div></div></div>';S+=w;b.menu=I;x+=p+' data-icon="bars" href="#jqm-wb-mb">'+e+"</a>"}if(b.search.length!==0){n=pe.dic.get("%search");f=b.search[0];m=f.innerHTML;f=f.getElementsByTagName("input");v=f.length;while(v--){f[v].setAttribute("data-role","none")}N=C+' id="jqm-wb-search">'+R+n+"</h1>"+O+'</div><div data-role="content"><div>'+m.substring(m.indexOf("<form"))+"</div></div></div>";S+=N;x+=p+' data-icon="search" href="#jqm-wb-search">'+n+"</a>"}j='<div data-role="header">';if(b.wmms.length!==0){D=b.wmms[0].getElementsByTagName("img")[0];l=navigator.userAgent.match(/WebKit\/53(\d)\.(\d{1,2})/i);if(l===null||parseInt(l[1],10)>4||(parseInt(l[1],10)===4&&parseInt(l[2],10)>=46)){j+='<div class="ui-title"><object type="image/svg+xml" width="90" height="22" data="'+D.getAttribute("src").replace(".gif","-r.svg")+'"><img src="'+D.getAttribute("src").replace(".gif","-wm.gif")+'" width="90" alt="'+D.getAttribute("alt")+'" /></object></div>'}else{j+='<div class="ui-title"><img src="'+D.getAttribute("src").replace(".gif","-wm.gif")+'" width="90" alt="'+D.getAttribute("alt")+'" /></div>'}}else{j+='<div class="ui-title"></div>'}j+='<map id="gcwu-mnavbar" data-role="controlgroup" data-type="horizontal" class="ui-btn-right wb-hide">';if(typeof K!=="undefined"){j+=u+' href="'+K+'" data-icon="home">'+pe.dic.get("%home")+"</a>"}else{if(true===false){j+=u+' href="#back-href" data-icon="back">'+pe.dic.get("%back")+"</a>"}}if(x.length!==0){j+=x}j+=p+' href="#popupSettings" data-icon="gear">'+P+"</a></map></div>";b.gcnb.children("#gcwu-gcnb-in").before(j);b.title[0].className+=" ui-bar-b";r=b.gcnb.find('li[id*="-lang"]');y=C+' id="popupSettings"'+A;y+=q+P+"</h1>"+O+"</div>";y+=h+o+">";if(r.length>0){y+='<li><a href="#popupLanguages"'+B+">"+pe.dic.get("%languages")+"</a></li>"}y+='<li class="ui-corner-bottom"><a href="#popupAbout"'+B+">"+pe.dic.get("%about")+"</a></li>";y+="</ul>"+Q;if(r.length>0){y+=C+' id="popupLanguages"'+A;y+=q+pe.dic.get("%languages")+"</h1>"+L+' href="#popupSettings"'+J+O+"</div>";y+=h+o+">";if(r.filter('[id*="-lang-current"]').length===0){y+='<li><a href="javascript:;" class="ui-disabled">'+pe.dic.get("%lang-native")+pe.dic.get("%current")+"</a></li>"}H=r.get();for(M=0,v=H.length;M!==v;M+=1){D=H[M];k=D.childNodes[0];y+="<li"+(M===(v-1)?' class="ui-corner-bottom"':"");if(D.id.indexOf("-lang-current")!==-1){y+='><a href="javascript:;" class="ui-disabled">'+D.innerHTML+pe.dic.get("%current")+"</a></li>"}else{y+='><a href="'+k.href+'" lang="'+k.getAttribute("lang")+'">'+k.innerHTML+"</a></li>"}}y+="</ul>"+Q}y+=C+' id="popupAbout"'+A;y+=q+pe.dic.get("%about")+"</h1>"+L+' href="#popupSettings"'+J+O+"</div>";y+=h;y+='<div class="site-app-title"><div class="ui-title">'+b.title.text()+"</div></div>";D=pe.main.find("#gcwu-date-mod").children();if(D.length!==0){d=D[1];if(d.getElementsByTagName("time").length===0){y+='<div class="app-version">'+D[0].innerHTML+" "+d.innerHTML+"</div>"}}y+=o+' data-inset="true">';G=document.getElementById("gcwu-tctr").getElementsByTagName("a");for(M=0,v=G.length;M!==v;M+=1){k=G[M];y+='<li><a href="'+k.href+'">'+k.innerHTML+"</a></li>"}G=b.sft.find(".gcwu-col-head a").get();for(M=0,v=G.length;M!==v;M+=1){k=G[M];D=k.innerHTML;d=D.toLowerCase();y+="<li"+(M===(v-1)?' class="ui-corner-bottom"':"")+'><a href="'+k.href+'">'+D+"</a></li>"}y+="</ul>"+Q;pe.bodydiv.append(S+y)}else{r=document.getElementById("gcwu-lang");if(r!==null){H=r.getElementsByTagName("li");F='<div data-role="navbar"><ul>';for(M=0,v=H.length;M<v;M+=1){D=H[M];k=D.getElementsByTagName("a")[0];F+='<li><a href="'+k.href+'"'+(D.hasAttribute("lang")?' lang="'+D.getAttribute("lang")+'"':"")+' data-theme="a">'+k.innerHTML+"</a></li>"}F+="</ul></div>";document.getElementById("gcwu-ef-lang").parentNode.innerHTML=F;r=document.getElementById("gcwu-other-lang");if(r!==null){r.parentNode.removeChild(r)}}d=document.getElementById("gcwu-tc");if(d!==null){H=d.getElementsByTagName("li");t='<ul class="ui-grid-a">';for(M=0,v=H.length;M<v;M+=1){D=H[M];k=D.getElementsByTagName("a")[0];t+='<li class="ui-block-'+(M%2!==0?"b":"a")+'"><a href="'+k.href+'"'+(D.hasAttribute("lang")?' lang="'+D.getAttribute("lang")+'"':"")+' data-role="button" data-theme="c" data-corners="false">'+k.innerHTML+"</a></li>"}t+="</ul>";d.id="";d.className="";d.setAttribute("data-role","footer");d.innerHTML=t}if(b.wmms.length!==0){D=b.wmms[0];pe.footer[0].getElementsByTagName("footer")[0].appendChild(D.cloneNode(true));D.parentNode.removeChild(D)}}c(document).on("pagecreate",function(){if(x.length!==0){var W=b.gcnb.find("#gcwu-mnavbar"),Y=pe.bodydiv.find("#jqm-mb-menu"),X,V,T,U;W.removeClass("wb-hide");if(Y.length!==0){Y.append(b.menu);W.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){Y.trigger("create");X=Y.find(".ui-controlgroup");V=X.get();v=V.length;while(v--){D=V[v];U=D.getElementsByTagName("li")[0];if(U.parentNode.parentNode.className.indexOf("ui-collapsible")===-1&&U.className.indexOf("ui-corner-top")===-1){U.className+=" ui-corner-top"}T=X.eq(v).find(".ui-btn").get();D=T[T.length-1];if(D.className.indexOf("ui-corner-bottom")===-1){D.className+=" ui-corner-bottom"}}})}}function i(aa,Z,ad,ac){var ab;c.mobile.showPageLoadingMsg();ab=c.mobile.transitionHandlers.simultaneous("pop",Z,ad,ac);ab.done(function(){c.mobile.hidePageLoadingMsg()});return ab}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));