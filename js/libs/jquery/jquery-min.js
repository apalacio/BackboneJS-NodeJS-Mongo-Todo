  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backbone-fundamentals/practicals/modular-todo-app/js/libs/jquery/jquery-min.js at master · addyosmani/backbone-fundamentals</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon-precomposed" sizes="57x57" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="apple-touch-icon-114.png" />
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="apple-touch-icon-144.png" />
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="apple-touch-icon-144.png" />
    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">

    
    
    <link rel="icon" type="image/x-icon" href="/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="wNUtmwlnbXeaJacMB8s8Z5gKOP0smeaHdp6Lc2qZ8TM=" name="csrf-token" />

    <link href="https://a248.e.akamai.net/assets.github.com/assets/github-8fe1e4a1e0551ad89f1b244e4b6de8214880aaf1.css" media="screen" rel="stylesheet" type="text/css" />
    <link href="https://a248.e.akamai.net/assets.github.com/assets/github2-2a55ab0ecdaadd0a5c5c6b87bf0c1d25ae547148.css" media="screen" rel="stylesheet" type="text/css" />
    


    <script src="https://a248.e.akamai.net/assets.github.com/assets/frameworks-971f385ccf2fcbf04f87e9ffca82e855620eb233.js" type="text/javascript"></script>
    <script src="https://a248.e.akamai.net/assets.github.com/assets/github-7f9cff56713bf383147d4e2aca4f8a9b7c9720b0.js" type="text/javascript"></script>
    

        <link rel='permalink' href='/addyosmani/backbone-fundamentals/blob/58553202f1e778b06ae2fae4684fdb431f0ad659/practicals/modular-todo-app/js/libs/jquery/jquery-min.js'>
    <meta property="og:title" content="backbone-fundamentals"/>
    <meta property="og:type" content="githubog:gitrepository"/>
    <meta property="og:url" content="https://github.com/addyosmani/backbone-fundamentals"/>
    <meta property="og:image" content="https://secure.gravatar.com/avatar/96270e4c3e5e9806cf7245475c00b275?s=420&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png"/>
    <meta property="og:site_name" content="GitHub"/>
    <meta property="og:description" content="backbone-fundamentals - A creative-commons book on Backbone.js for beginners and advanced users alike"/>

    <meta name="description" content="backbone-fundamentals - A creative-commons book on Backbone.js for beginners and advanced users alike" />

  <link href="https://github.com/addyosmani/backbone-fundamentals/commits/master.atom" rel="alternate" title="Recent Commits to backbone-fundamentals:master" type="application/atom+xml" />

  </head>


  <body class="logged_in page-blob linux vis-public env-production ">
    <div id="wrapper">

      

      

      


        <div class="header header-logged-in true">
          <div class="container clearfix">

            <a class="header-logo-blacktocat" href="https://github.com/">
  <span class="mega-icon mega-icon-blacktocat"></span>
</a>

            <div class="divider-vertical"></div>

              <a href="/notifications" class="notification-indicator tooltipped downwards" title="You have no unread notifications">
    <span class="mail-status all-read"></span>
  </a>
  <div class="divider-vertical"></div>


              
  <div class="topsearch command-bar-activated">
    <form accept-charset="UTF-8" action="/search" class="command_bar_form" id="top_search_form" method="get">
  <a href="/search/advanced" class="advanced-search tooltipped downwards command-bar-search" id="advanced_search" title="Advanced search"><span class="mini-icon mini-icon-advanced-search "></span></a>

  <input type="text" name="q" id="command-bar" placeholder="Search or type a command" tabindex="1" data-username="apalacio" autocapitalize="off">

  <span class="mini-icon help tooltipped downwards" title="Show command bar help">
    <span class="mini-icon mini-icon-help"></span>
  </span>

  <input type="hidden" name="ref" value="commandbar">

  <div class="divider-vertical"></div>
</form>



    <ul class="top-nav">
        <li class="explore"><a href="https://github.com/explore">Explore</a></li>
        <li><a href="https://gist.github.com">Gist</a></li>
        <li><a href="/blog">Blog</a></li>
      <li><a href="http://help.github.com">Help</a></li>
    </ul>
  </div>


            

  
    <ul id="user-links">
      <li>
        <a href="https://github.com/apalacio" class="name">
          <img height="20" src="https://secure.gravatar.com/avatar/0a22dd3b15d4ec72475e3542e2814feb?s=140&amp;d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-user-420.png" width="20" /> apalacio
        </a>
      </li>
      <li>
        <a href="/new" id="new_repo" class="tooltipped downwards" title="Create a new repo">
          <span class="mini-icon mini-icon-create"></span>
        </a>
      </li>
      <li>
        <a href="/settings/profile" id="account_settings"
          class="tooltipped downwards"
          title="Account settings ">
          <span class="mini-icon mini-icon-account-settings"></span>
        </a>
      </li>
      <li>
          <a href="/logout" data-method="post" id="logout" class="tooltipped downwards" title="Sign out">
            <span class="mini-icon mini-icon-logout"></span>
          </a>
      </li>
    </ul>



            
          </div>
        </div>


      

      


            <div class="site hfeed" itemscope itemtype="http://schema.org/WebPage">
      <div class="hentry">
        
        <div class="pagehead repohead instapaper_ignore readability-menu">
          <div class="container">
            <div class="title-actions-bar">
              


                  <ul class="pagehead-actions">

          <li class="subscription">
              <form accept-charset="UTF-8" action="/notifications/subscribe" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="authenticity_token" type="hidden" value="wNUtmwlnbXeaJacMB8s8Z5gKOP0smeaHdp6Lc2qZ8TM=" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="3022431" />
  <div class="context-menu-container js-menu-container js-context-menu">
    <span class="minibutton switcher bigger js-menu-target">
      <span class="js-context-button">
          <span class="mini-icon mini-icon-watching"></span>Watch
      </span>
    </span>

    <div class="context-pane js-menu-content">
      <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
      <div class="context-title">Notification status</div>

      <div class="context-body pane-selector">
        <ul class="js-navigation-container">
          <li class="selector-item js-navigation-item js-navigation-target selected">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input checked="checked" id="do_included" name="do" type="radio" value="included" />
              <h4>Not watching</h4>
              <p>You will only receive notifications when you participate or are mentioned.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-watching"></span>
              Watch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_subscribed" name="do" type="radio" value="subscribed" />
              <h4>Watching</h4>
              <p>You will receive all notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-unwatch"></span>
              Unwatch
            </span>
          </li>
          <li class="selector-item js-navigation-item js-navigation-target ">
            <span class="mini-icon mini-icon-confirm"></span>
            <label>
              <input id="do_ignore" name="do" type="radio" value="ignore" />
              <h4>Ignored</h4>
              <p>You will not receive notifications for this repository.</p>
            </label>
            <span class="context-button-text js-context-button-text">
              <span class="mini-icon mini-icon-mute"></span>
              Stop ignoring
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
          </li>

          <li class="js-toggler-container js-social-container starring-container ">
            <a href="/addyosmani/backbone-fundamentals/unstar" class="minibutton js-toggler-target starred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Unstar
            </a><a href="/addyosmani/backbone-fundamentals/star" class="minibutton js-toggler-target unstarred" data-remote="true" data-method="post" rel="nofollow">
              <span class="mini-icon mini-icon-star"></span>Star
            </a><a class="social-count js-social-count" href="/addyosmani/backbone-fundamentals/stargazers">5,320</a>
          </li>

              <li>
                <a href="/addyosmani/backbone-fundamentals/fork_select" class="minibutton js-toggler-target lighter" rel="facebox nofollow"><span class="mini-icon mini-icon-fork"></span>Fork</a><a href="/addyosmani/backbone-fundamentals/network" class="social-count">479</a>
              </li>


    </ul>

              <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
                <span class="repo-label"><span>public</span></span>
                <span class="mega-icon mega-icon-public-repo"></span>
                <span class="author vcard">
                  <a href="/addyosmani" class="url fn" itemprop="url" rel="author">
                  <span itemprop="title">addyosmani</span>
                  </a></span> /
                <strong><a href="/addyosmani/backbone-fundamentals" class="js-current-repository">backbone-fundamentals</a></strong>
              </h1>
            </div>

            

  <ul class="tabs">
    <li><a href="/addyosmani/backbone-fundamentals/tree/master" class="selected" highlight="repo_sourcerepo_downloadsrepo_commitsrepo_tagsrepo_branches">Code</a></li>
    <li><a href="/addyosmani/backbone-fundamentals/network" highlight="repo_network">Network</a></li>
    <li><a href="/addyosmani/backbone-fundamentals/pulls" highlight="repo_pulls">Pull Requests <span class='counter'>7</span></a></li>

      <li><a href="/addyosmani/backbone-fundamentals/issues" highlight="repo_issues">Issues <span class='counter'>18</span></a></li>

      <li><a href="/addyosmani/backbone-fundamentals/wiki" highlight="repo_wiki">Wiki</a></li>


    <li><a href="/addyosmani/backbone-fundamentals/graphs" highlight="repo_graphsrepo_contributors">Graphs</a></li>


  </ul>
  
<div class="tabnav">

  <span class="tabnav-right">
    <ul class="tabnav-tabs">
          <li><a href="/addyosmani/backbone-fundamentals/tags" class="tabnav-tab" highlight="repo_tags">Tags <span class="counter ">1</span></a></li>
    </ul>
    
  </span>

  <div class="tabnav-widget scope">


    <div class="context-menu-container js-menu-container js-context-menu">
      <a href="#"
         class="minibutton bigger switcher js-menu-target js-commitish-button btn-branch repo-tree"
         data-hotkey="w"
         data-ref="master">
         <span><em class="mini-icon mini-icon-branch"></em><i>branch:</i> master</span>
      </a>

      <div class="context-pane commitish-context js-menu-content">
        <a href="#" class="close js-menu-close"><span class="mini-icon mini-icon-remove-close"></span></a>
        <div class="context-title">Switch branches/tags</div>
        <div class="context-body pane-selector commitish-selector js-navigation-container">
          <div class="filterbar">
            <input type="text" id="context-commitish-filter-field" class="js-navigation-enable js-filterable-field js-ref-filter-field" placeholder="Filter branches/tags">
            <ul class="tabs">
              <li><a href="#" data-filter="branches" class="selected">Branches</a></li>
                <li><a href="#" data-filter="tags">Tags</a></li>
            </ul>
          </div>

          <div class="js-filter-tab js-filter-branches">
            <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/better-rest/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="js-navigation-open" data-name="better-rest" rel="nofollow">better-rest</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/gh-pages/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/labs/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="js-navigation-open" data-name="labs" rel="nofollow">labs</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
                  </h4>
                </div>
            </div>
            <div class="no-results">Nothing to show</div>


          </div>

            <div class="js-filter-tab js-filter-tags " style="display:none">
              <div data-filterable-for="context-commitish-filter-field" data-filterable-type=substring>
                  <div class="commitish-item tag-commitish selector-item js-navigation-item js-navigation-target ">
                    <span class="mini-icon mini-icon-confirm"></span>
                    <h4>
                        <a href="/addyosmani/backbone-fundamentals/blob/v0.9/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="js-navigation-open" data-name="v0.9" rel="nofollow">v0.9</a>
                    </h4>
                  </div>
              </div>
              <div class="no-results">Nothing to show</div>
            </div>

        </div>
      </div><!-- /.commitish-context-context -->
    </div>
  </div> <!-- /.scope -->

  <ul class="tabnav-tabs">
    <li><a href="/addyosmani/backbone-fundamentals/tree/master" class="selected tabnav-tab" highlight="repo_source">Files</a></li>
    <li><a href="/addyosmani/backbone-fundamentals/commits/master" class="tabnav-tab" highlight="repo_commits">Commits</a></li>
    <li><a href="/addyosmani/backbone-fundamentals/branches" class="tabnav-tab" highlight="repo_branches" rel="nofollow">Branches <span class="counter ">4</span></a></li>
  </ul>

</div>

  
  
  


            
          </div>
        </div><!-- /.repohead -->

        <div id="js-repo-pjax-container" class="container context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:01f1b8574b330d35da5959e8fe790b80 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:01f1b8574b330d35da5959e8fe790b80 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">backbone-fundamentals</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">practicals</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">modular-todo-app</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js/libs" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">libs</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js/libs/jquery" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">jquery</span></a></span> / <strong class="final-path">jquery-min.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="practicals/modular-todo-app/js/libs/jquery/jquery-min.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
      </div>

      <a href="/addyosmani/backbone-fundamentals/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/addyosmani/backbone-fundamentals/contributors/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1340659561" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/addyosmani/backbone-fundamentals/blob/58553202f1e778b06ae2fae4684fdb431f0ad659/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" data-title="backbone-fundamentals/practicals/modular-todo-app/js/libs/jquery/jquery-min.js at master · addyosmani/backbone-fundamentals · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>4 lines (4 sloc)</span>
                <span>93.868 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/addyosmani/backbone-fundamentals/edit/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/addyosmani/backbone-fundamentals/raw/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/addyosmani/backbone-fundamentals/blame/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/addyosmani/backbone-fundamentals/commits/master/practicals/modular-todo-app/js/libs/jquery/jquery-min.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
              </ul>
            </div>
                <div class="data type-javascript">
      <table cellpadding="0" cellspacing="0" class="lines">
        <tr>
          <td>
            <pre class="line_numbers"><span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'>/*! jQuery v1.7.1 jquery.com | jquery.org/license */</div><div class='line' id='LC2'>(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f(&quot;&lt;&quot;+a+&quot;&gt;&quot;).appendTo(b),e=d.css(&quot;display&quot;);d.remove();if(e===&quot;none&quot;||e===&quot;&quot;){cl||(cl=c.createElement(&quot;iframe&quot;),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode===&quot;CSS1Compat&quot;?&quot;&lt;!doctype html&gt;&quot;:&quot;&quot;)+&quot;&lt;html&gt;&lt;body&gt;&quot;),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,&quot;display&quot;),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&amp;&amp;(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g&lt;i;g++){if(g===1)for(h in a.converters)typeof h==&quot;string&quot;&amp;&amp;(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k===&quot;*&quot;)k=l;else if(l!==&quot;*&quot;&amp;&amp;l!==k){m=l+&quot; &quot;+k,n=e[m]||e[&quot;* &quot;+k];if(!n){p=b;for(o in e){j=o.split(&quot; &quot;);if(j[0]===l||j[0]===&quot;*&quot;){p=e[j[1]+&quot; &quot;+k];if(p){o=e[o],o===!0?n=p:p===!0&amp;&amp;(n=o);break}}}}!n&amp;&amp;!p&amp;&amp;f.error(&quot;No conversion from &quot;+m.replace(&quot; &quot;,&quot; to &quot;)),n!==!0&amp;&amp;(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&amp;&amp;(c[g[i]]=d[i]);while(f[0]===&quot;*&quot;)f.shift(),h===b&amp;&amp;(h=a.mimeType||c.getResponseHeader(&quot;content-type&quot;));if(h)for(i in e)if(e[i]&amp;&amp;e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+&quot; &quot;+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&amp;&amp;f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+&quot;[&quot;+(typeof e==&quot;object&quot;||f.isArray(e)?b:&quot;&quot;)+&quot;]&quot;,e,c,d)});else if(!c&amp;&amp;b!=null&amp;&amp;typeof b==&quot;object&quot;)for(var e in b)ca(a+&quot;[&quot;+e+&quot;]&quot;,b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&amp;&amp;((g[d]?a:e||(e={}))[d]=c[d]);e&amp;&amp;f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i&lt;j&amp;&amp;(k||!l);i++)l=h[i](c,d,e),typeof l==&quot;string&quot;&amp;&amp;(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&amp;&amp;!g[&quot;*&quot;]&amp;&amp;(l=b$(a,c,d,e,&quot;*&quot;,g));return l}function bZ(a){return function(b,c){typeof b!=&quot;string&quot;&amp;&amp;(c=b,b=&quot;*&quot;);if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e&lt;g;e++)h=d[e],j=/^\+/.test(h),j&amp;&amp;(h=h.substr(1)||&quot;*&quot;),i=a[h]=a[h]||[],i[j?&quot;unshift&quot;:&quot;push&quot;](c)}}}function bC(a,b,c){var d=b===&quot;width&quot;?a.offsetWidth:a.offsetHeight,e=b===&quot;width&quot;?bx:by,g=0,h=e.length;if(d&gt;0){if(c!==&quot;border&quot;)for(;g&lt;h;g++)c||(d-=parseFloat(f.css(a,&quot;padding&quot;+e[g]))||0),c===&quot;margin&quot;?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,&quot;border&quot;+e[g]+&quot;Width&quot;))||0;return d+&quot;px&quot;}d=bz(a,b,b);if(d&lt;0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g&lt;h;g++)d+=parseFloat(f.css(a,&quot;padding&quot;+e[g]))||0,c!==&quot;padding&quot;&amp;&amp;(d+=parseFloat(f.css(a,&quot;border&quot;+e[g]+&quot;Width&quot;))||0),c===&quot;margin&quot;&amp;&amp;(d+=parseFloat(f.css(a,c+e[g]))||0);return d+&quot;px&quot;}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:&quot;script&quot;}):f.globalEval((b.text||b.textContent||b.innerHTML||&quot;&quot;).replace(bf,&quot;/*$0*/&quot;)),b.parentNode&amp;&amp;b.parentNode.removeChild(b)}function bo(a){var b=c.createElement(&quot;div&quot;);bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||&quot;&quot;).toLowerCase();b===&quot;input&quot;?bm(a):b!==&quot;script&quot;&amp;&amp;typeof a.getElementsByTagName!=&quot;undefined&quot;&amp;&amp;f.grep(a.getElementsByTagName(&quot;input&quot;),bm)}function bm(a){if(a.type===&quot;checkbox&quot;||a.type===&quot;radio&quot;)a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!=&quot;undefined&quot;?a.getElementsByTagName(&quot;*&quot;):typeof a.querySelectorAll!=&quot;undefined&quot;?a.querySelectorAll(&quot;*&quot;):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&amp;&amp;b.clearAttributes(),b.mergeAttributes&amp;&amp;b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c===&quot;object&quot;)b.outerHTML=a.outerHTML;else if(c!==&quot;input&quot;||a.type!==&quot;checkbox&quot;&amp;&amp;a.type!==&quot;radio&quot;){if(c===&quot;option&quot;)b.selected=a.defaultSelected;else if(c===&quot;input&quot;||c===&quot;textarea&quot;)b.defaultValue=a.defaultValue}else a.checked&amp;&amp;(b.defaultChecked=b.checked=a.checked),b.value!==a.value&amp;&amp;(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&amp;&amp;!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d&lt;e;d++)f.event.add(b,c+(i[c][d].namespace?&quot;.&quot;:&quot;&quot;)+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&amp;&amp;(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,&quot;table&quot;)?a.getElementsByTagName(&quot;tbody&quot;)[0]||a.appendChild(a.ownerDocument.createElement(&quot;tbody&quot;)):a}function U(a){var b=V.split(&quot;|&quot;),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b==&quot;string&quot;){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)&gt;=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+&quot;defer&quot;,e=b+&quot;queue&quot;,g=b+&quot;mark&quot;,h=f._data(a,d);h&amp;&amp;(c===&quot;queue&quot;||!f._data(a,e))&amp;&amp;(c===&quot;mark&quot;||!f._data(a,g))&amp;&amp;setTimeout(function(){!f._data(a,e)&amp;&amp;!f._data(a,g)&amp;&amp;(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b===&quot;data&quot;&amp;&amp;f.isEmptyObject(a[b]))continue;if(b!==&quot;toJSON&quot;)return!1}return!0}function l(a,c,d){if(d===b&amp;&amp;a.nodeType===1){var e=&quot;data-&quot;+c.replace(k,&quot;-$1&quot;).toLowerCase();d=a.getAttribute(e);if(typeof d==&quot;string&quot;){try{d=d===&quot;true&quot;?!0:d===&quot;false&quot;?!1:d===&quot;null&quot;?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c&lt;d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll(&quot;left&quot;)}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#&lt;]*(&lt;[\w\W]+&gt;)[^&gt;]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:[&quot;\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/&quot;[^&quot;\\\n\r]*&quot;|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+&quot;&quot;).toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a===&quot;body&quot;&amp;&amp;!d&amp;&amp;c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a==&quot;string&quot;){a.charAt(0)!==&quot;&lt;&quot;||a.charAt(a.length-1)!==&quot;&gt;&quot;||a.length&lt;3?g=i.exec(a):g=[null,a,null];if(g&amp;&amp;(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&amp;&amp;h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&amp;&amp;(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:&quot;&quot;,jquery:&quot;1.7.1&quot;,length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a&lt;0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b===&quot;find&quot;?d.selector=this.selector+(this.selector?&quot; &quot;:&quot;&quot;)+c:b&amp;&amp;(d.selector=this.selector+&quot;.&quot;+b+&quot;(&quot;+c+&quot;)&quot;);return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),&quot;slice&quot;,F.call(arguments).join(&quot;,&quot;))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i==&quot;boolean&quot;&amp;&amp;(l=i,i=arguments[1]||{},j=2),typeof i!=&quot;object&quot;&amp;&amp;!e.isFunction(i)&amp;&amp;(i={}),k===j&amp;&amp;(i=this,--j);for(;j&lt;k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&amp;&amp;f&amp;&amp;(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&amp;&amp;e.isArray(d)?d:[]):h=d&amp;&amp;e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&amp;&amp;(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&amp;&amp;(a.$=g),b&amp;&amp;a.jQuery===e&amp;&amp;(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&amp;&amp;!--e.readyWait||a!==!0&amp;&amp;!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&amp;&amp;--e.readyWait&gt;0)return;A.fireWith(c,[e]),e.fn.trigger&amp;&amp;e(c).trigger(&quot;ready&quot;).off(&quot;ready&quot;)}},bindReady:function(){if(!A){A=e.Callbacks(&quot;once memory&quot;);if(c.readyState===&quot;complete&quot;)return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener(&quot;DOMContentLoaded&quot;,B,!1),a.addEventListener(&quot;load&quot;,e.ready,!1);else if(c.attachEvent){c.attachEvent(&quot;onreadystatechange&quot;,B),a.attachEvent(&quot;onload&quot;,e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&amp;&amp;b&amp;&amp;J()}}},isFunction:function(a){return e.type(a)===&quot;function&quot;},isArray:Array.isArray||function(a){return e.type(a)===&quot;array&quot;},isWindow:function(a){return a&amp;&amp;typeof a==&quot;object&quot;&amp;&amp;&quot;setInterval&quot;in a},isNumeric:function(a){return!isNaN(parseFloat(a))&amp;&amp;isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||&quot;object&quot;},isPlainObject:function(a){if(!a||e.type(a)!==&quot;object&quot;||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&amp;&amp;!D.call(a,&quot;constructor&quot;)&amp;&amp;!D.call(a.constructor.prototype,&quot;isPrototypeOf&quot;))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!=&quot;string&quot;||!b)return null;b=e.trim(b);if(a.JSON&amp;&amp;a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,&quot;@&quot;).replace(p,&quot;]&quot;).replace(q,&quot;&quot;)))return(new Function(&quot;return &quot;+b))();e.error(&quot;Invalid JSON: &quot;+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,&quot;text/xml&quot;)):(d=new ActiveXObject(&quot;Microsoft.XMLDOM&quot;),d.async=&quot;false&quot;,d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName(&quot;parsererror&quot;).length)&amp;&amp;e.error(&quot;Invalid XML: &quot;+c);return d},noop:function(){},globalEval:function(b){b&amp;&amp;j.test(b)&amp;&amp;(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,&quot;ms-&quot;).replace(v,x)},nodeName:function(a,b){return a.nodeName&amp;&amp;a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g&lt;h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g&lt;h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?&quot;&quot;:G.call(a)}:function(a){return a==null?&quot;&quot;:(a+&quot;&quot;).replace(k,&quot;&quot;).replace(l,&quot;&quot;)},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d===&quot;string&quot;||d===&quot;function&quot;||d===&quot;regexp&quot;||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c&lt;0?Math.max(0,d+c):c:0;for(;c&lt;d;c++)if(c in b&amp;&amp;b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length==&quot;number&quot;)for(var f=c.length;e&lt;f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f&lt;g;f++)e=!!b(a[f],f),c!==e&amp;&amp;d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&amp;&amp;typeof j==&quot;number&quot;&amp;&amp;(j&gt;0&amp;&amp;a[0]&amp;&amp;a[j-1]||j===0||e.isArray(a));if(k)for(;i&lt;j;i++)f=c(a[i],i,d),f!=null&amp;&amp;(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&amp;&amp;(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c==&quot;string&quot;){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c==&quot;object&quot;){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&amp;&amp;f&amp;&amp;e.isFunction(d);for(var k=0;k&lt;i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf(&quot;compatible&quot;)&lt;0&amp;&amp;u.exec(a)||[];return{browser:b[1]||&quot;&quot;,version:b[2]||&quot;0&quot;}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&amp;&amp;f instanceof e&amp;&amp;!(f instanceof a)&amp;&amp;(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each(&quot;Boolean Number String Function Array Date RegExp Object&quot;.split(&quot; &quot;),function(a,b){I[&quot;[object &quot;+b+&quot;]&quot;]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&amp;&amp;(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&amp;&amp;(e.browser.safari=!0),j.test(&quot; &quot;)&amp;&amp;(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener(&quot;DOMContentLoaded&quot;,B,!1),e.ready()}:c.attachEvent&amp;&amp;(B=function(){c.readyState===&quot;complete&quot;&amp;&amp;(c.detachEvent(&quot;onreadystatechange&quot;,B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d&lt;e;d++)g=b[d],h=f.type(g),h===&quot;array&quot;?m(g):h===&quot;function&quot;&amp;&amp;(!a.unique||!o.has(g))&amp;&amp;c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&amp;&amp;l&lt;k;l++)if(c[l].apply(b,f)===!1&amp;&amp;a.stopOnFalse){e=!0;break}i=!1,c&amp;&amp;(a.once?e===!0?o.disable():c=[]:d&amp;&amp;d.length&amp;&amp;(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&amp;&amp;e!==!0&amp;&amp;(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d&lt;e;d++)for(var f=0;f&lt;c.length;f++)if(b[d]===c[f]){i&amp;&amp;f&lt;=k&amp;&amp;(k--,f&lt;=l&amp;&amp;l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b&lt;d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&amp;&amp;o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&amp;&amp;(i?a.once||d.push([b,c]):(!a.once||!e)&amp;&amp;n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks(&quot;once memory&quot;),c=f.Callbacks(&quot;once memory&quot;),d=f.Callbacks(&quot;memory&quot;),e=&quot;pending&quot;,g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,&quot;resolve&quot;],fail:[b,&quot;reject&quot;],progress:[c,&quot;notify&quot;]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&amp;&amp;f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+&quot;With&quot;](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+&quot;With&quot;]=g[j].fireWith;i.done(function(){e=&quot;resolved&quot;},c.disable,d.lock).fail(function(){e=&quot;rejected&quot;},b.disable,d.lock),a&amp;&amp;a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length&gt;1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length&gt;1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d&lt;=1&amp;&amp;a&amp;&amp;f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d&gt;1){for(;c&lt;d;c++)b[c]&amp;&amp;b[c].promise&amp;&amp;f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&amp;&amp;j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement(&quot;div&quot;),r=c.documentElement;q.setAttribute(&quot;className&quot;,&quot;t&quot;),q.innerHTML=&quot;   &lt;link/&gt;&lt;table&gt;&lt;/table&gt;&lt;a href='/a' style='top:1px;float:left;opacity:.55;'&gt;a&lt;/a&gt;&lt;input type='checkbox'/&gt;&quot;,d=q.getElementsByTagName(&quot;*&quot;),e=q.getElementsByTagName(&quot;a&quot;)[0];if(!d||!d.length||!e)return{};g=c.createElement(&quot;select&quot;),h=g.appendChild(c.createElement(&quot;option&quot;)),i=q.getElementsByTagName(&quot;input&quot;)[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName(&quot;tbody&quot;).length,htmlSerialize:!!q.getElementsByTagName(&quot;link&quot;).length,style:/top/.test(e.getAttribute(&quot;style&quot;)),hrefNormalized:e.getAttribute(&quot;href&quot;)===&quot;/a&quot;,opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value===&quot;on&quot;,optSelected:h.selected,getSetAttribute:q.className!==&quot;t&quot;,enctype:!!c.createElement(&quot;form&quot;).enctype,html5Clone:c.createElement(&quot;nav&quot;).cloneNode(!0).outerHTML!==&quot;&lt;:nav&gt;&lt;/:nav&gt;&quot;,submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&amp;&amp;q.attachEvent&amp;&amp;q.fireEvent&amp;&amp;(q.attachEvent(&quot;onclick&quot;,function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent(&quot;onclick&quot;)),i=c.createElement(&quot;input&quot;),i.value=&quot;t&quot;,i.setAttribute(&quot;type&quot;,&quot;radio&quot;),b.radioValue=i.value===&quot;t&quot;,i.setAttribute(&quot;checked&quot;,&quot;checked&quot;),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML=&quot;&quot;,a.getComputedStyle&amp;&amp;(j=c.createElement(&quot;div&quot;),j.style.width=&quot;0&quot;,j.style.marginRight=&quot;0&quot;,q.style.width=&quot;2px&quot;,q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n=&quot;on&quot;+o,p=n in q,p||(q.setAttribute(n,&quot;return;&quot;),p=typeof q[n]==&quot;function&quot;),b[o+&quot;Bubbles&quot;]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName(&quot;body&quot;)[0];!r||(j=1,k=&quot;position:absolute;top:0;left:0;width:1px;height:1px;margin:0;&quot;,m=&quot;visibility:hidden;border:0;&quot;,n=&quot;style='&quot;+k+&quot;border:5px solid #000;padding:0;'&quot;,o=&quot;&lt;div &quot;+n+&quot;&gt;&lt;div&gt;&lt;/div&gt;&lt;/div&gt;&quot;+&quot;&lt;table &quot;+n+&quot; cellpadding='0' cellspacing='0'&gt;&quot;+&quot;&lt;tr&gt;&lt;td&gt;&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;,a=c.createElement(&quot;div&quot;),a.style.cssText=m+&quot;width:0;height:0;position:static;top:0;margin-top:&quot;+j+&quot;px&quot;,r.insertBefore(a,r.firstChild),q=c.createElement(&quot;div&quot;),a.appendChild(q),q.innerHTML=&quot;&lt;table&gt;&lt;tr&gt;&lt;td style='padding:0;border:0;display:none'&gt;&lt;/td&gt;&lt;td&gt;t&lt;/td&gt;&lt;/tr&gt;&lt;/table&gt;&quot;,l=q.getElementsByTagName(&quot;td&quot;),p=l[0].offsetHeight===0,l[0].style.display=&quot;&quot;,l[1].style.display=&quot;none&quot;,b.reliableHiddenOffsets=p&amp;&amp;l[0].offsetHeight===0,q.innerHTML=&quot;&quot;,q.style.width=q.style.paddingLeft=&quot;1px&quot;,f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!=&quot;undefined&quot;&amp;&amp;(q.style.display=&quot;inline&quot;,q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display=&quot;&quot;,q.innerHTML=&quot;&lt;div style='width:4px;'&gt;&lt;/div&gt;&quot;,b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position=&quot;fixed&quot;,e.style.top=&quot;20px&quot;,i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top=&quot;&quot;,d.style.overflow=&quot;hidden&quot;,d.style.position=&quot;relative&quot;,i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:&quot;jQuery&quot;+(f.fn.jquery+Math.random()).replace(/\D/g,&quot;&quot;),noData:{embed:!0,object:&quot;clsid:D27CDB6E-AE6D-11cf-96B8-444553540000&quot;,applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&amp;&amp;!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c==&quot;string&quot;,l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&amp;&amp;j,o=c===&quot;events&quot;;if((!n||!m[n]||!o&amp;&amp;!e&amp;&amp;!m[n].data)&amp;&amp;k&amp;&amp;d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c==&quot;object&quot;||typeof c==&quot;function&quot;)e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&amp;&amp;(h[f.camelCase(c)]=d);if(o&amp;&amp;!h[c])return g.events;k?(i=h[c],i==null&amp;&amp;(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(&quot; &quot;)));for(e=0,g=b.length;e&lt;g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&amp;&amp;(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&amp;&amp;a.getAttribute(&quot;classid&quot;)===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a==&quot;undefined&quot;){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&amp;&amp;!f._data(this[0],&quot;parsedAttrs&quot;)){e=this[0].attributes;for(var i=0,j=e.length;i&lt;j;i++)g=e[i].name,g.indexOf(&quot;data-&quot;)===0&amp;&amp;(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],&quot;parsedAttrs&quot;,!0)}}return h}if(typeof a==&quot;object&quot;)return this.each(function(){f.data(this,a)});d=a.split(&quot;.&quot;),d[1]=d[1]?&quot;.&quot;+d[1]:&quot;&quot;;if(c===b){h=this.triggerHandler(&quot;getData&quot;+d[1]+&quot;!&quot;,[d[0]]),h===b&amp;&amp;this.length&amp;&amp;(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&amp;&amp;d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler(&quot;setData&quot;+d[1]+&quot;!&quot;,e),f.data(this,a,c),b.triggerHandler(&quot;changeData&quot;+d[1]+&quot;!&quot;,e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&amp;&amp;(b=(b||&quot;fx&quot;)+&quot;mark&quot;,f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&amp;&amp;(c=b,b=a,a=!1);if(b){c=c||&quot;fx&quot;;var d=c+&quot;mark&quot;,e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,&quot;mark&quot;))}},queue:function(a,b,c){var d;if(a){b=(b||&quot;fx&quot;)+&quot;queue&quot;,d=f._data(a,b),c&amp;&amp;(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||&quot;fx&quot;;var c=f.queue(a,b),d=c.shift(),e={};d===&quot;inprogress&quot;&amp;&amp;(d=c.shift()),d&amp;&amp;(b===&quot;fx&quot;&amp;&amp;c.unshift(&quot;inprogress&quot;),f._data(a,b+&quot;.run&quot;,e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+&quot;queue &quot;+b+&quot;.run&quot;,!0),n(a,b,&quot;queue&quot;))}}),f.fn.extend({queue:function(a,c){typeof a!=&quot;string&quot;&amp;&amp;(c=a,a=&quot;fx&quot;);if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a===&quot;fx&quot;&amp;&amp;b[0]!==&quot;inprogress&quot;&amp;&amp;f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||&quot;fx&quot;;return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||&quot;fx&quot;,[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!=&quot;string&quot;&amp;&amp;(c=a,a=b),a=a||&quot;fx&quot;;var d=f.Deferred(),e=this,g=e.length,h=1,i=a+&quot;defer&quot;,j=a+&quot;queue&quot;,k=a+&quot;mark&quot;,l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&amp;&amp;f.data(e[g],i,f.Callbacks(&quot;once memory&quot;),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&quot;string&quot;){b=a.split(p);for(c=0,d=this.length;c&lt;d;c++){e=this[c];if(e.nodeType===1)if(!e.className&amp;&amp;b.length===1)e.className=a;else{g=&quot; &quot;+e.className+&quot; &quot;;for(h=0,i=b.length;h&lt;i;h++)~g.indexOf(&quot; &quot;+b[h]+&quot; &quot;)||(g+=b[h]+&quot; &quot;);e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&amp;&amp;typeof a==&quot;string&quot;||a===b){c=(a||&quot;&quot;).split(p);for(d=0,e=this.length;d&lt;e;d++){g=this[d];if(g.nodeType===1&amp;&amp;g.className)if(a){h=(&quot; &quot;+g.className+&quot; &quot;).replace(o,&quot; &quot;);for(i=0,j=c.length;i&lt;j;i++)h=h.replace(&quot; &quot;+c[i]+&quot; &quot;,&quot; &quot;);g.className=f.trim(h)}else g.className=&quot;&quot;}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b==&quot;boolean&quot;;if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c===&quot;string&quot;){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?&quot;addClass&quot;:&quot;removeClass&quot;](e)}else if(c===&quot;undefined&quot;||c===&quot;boolean&quot;)this.className&amp;&amp;f._data(this,&quot;__className__&quot;,this.className),this.className=this.className||a===!1?&quot;&quot;:f._data(this,&quot;__className__&quot;)||&quot;&quot;})},hasClass:function(a){var b=&quot; &quot;+a+&quot; &quot;,c=0,d=this.length;for(;c&lt;d;c++)if(this[c].nodeType===1&amp;&amp;(&quot; &quot;+this[c].className+&quot; &quot;).replace(o,&quot; &quot;).indexOf(b)&gt;-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h=&quot;&quot;:typeof h==&quot;number&quot;?h+=&quot;&quot;:f.isArray(h)&amp;&amp;(h=f.map(h,function(a){return a==null?&quot;&quot;:a+&quot;&quot;})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!(&quot;set&quot;in c)||c.set(this,h,&quot;value&quot;)===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&amp;&amp;&quot;get&quot;in c&amp;&amp;(d=c.get(g,&quot;value&quot;))!==b)return d;d=g.value;return typeof d==&quot;string&quot;?d.replace(q,&quot;&quot;):d==null?&quot;&quot;:d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type===&quot;select-one&quot;;if(g&lt;0)return null;c=j?g:0,d=j?g+1:i.length;for(;c&lt;d;c++){e=i[c];if(e.selected&amp;&amp;(f.support.optDisabled?!e.disabled:e.getAttribute(&quot;disabled&quot;)===null)&amp;&amp;(!e.parentNode.disabled||!f.nodeName(e.parentNode,&quot;optgroup&quot;))){b=f(e).val();if(j)return b;h.push(b)}}if(j&amp;&amp;!h.length&amp;&amp;i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find(&quot;option&quot;).each(function(){this.selected=f.inArray(f(this).val(),c)&gt;=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&amp;&amp;j!==3&amp;&amp;j!==8&amp;&amp;j!==2){if(e&amp;&amp;c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute==&quot;undefined&quot;)return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&amp;&amp;(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&amp;&amp;&quot;set&quot;in h&amp;&amp;i&amp;&amp;(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,&quot;&quot;+d);return d}if(h&amp;&amp;&quot;get&quot;in h&amp;&amp;i&amp;&amp;(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&amp;&amp;a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h&lt;g;h++)e=d[h],e&amp;&amp;(c=f.propFix[e]||e,f.attr(a,e,&quot;&quot;),a.removeAttribute(v?e:c),u.test(e)&amp;&amp;c in a&amp;&amp;(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&amp;&amp;a.parentNode)f.error(&quot;type property can't be changed&quot;);else if(!f.support.radioValue&amp;&amp;b===&quot;radio&quot;&amp;&amp;f.nodeName(a,&quot;input&quot;)){var c=a.value;a.setAttribute(&quot;type&quot;,b),c&amp;&amp;(a.value=c);return b}}},value:{get:function(a,b){if(w&amp;&amp;f.nodeName(a,&quot;button&quot;))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&amp;&amp;f.nodeName(a,&quot;button&quot;))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:&quot;tabIndex&quot;,readonly:&quot;readOnly&quot;,&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,cellpadding:&quot;cellPadding&quot;,rowspan:&quot;rowSpan&quot;,colspan:&quot;colSpan&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;,contenteditable:&quot;contentEditable&quot;},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&amp;&amp;i!==3&amp;&amp;i!==8&amp;&amp;i!==2){h=i!==1||!f.isXMLDoc(a),h&amp;&amp;(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&amp;&amp;&quot;set&quot;in g&amp;&amp;(e=g.set(a,d,c))!==b?e:a[c]=d:g&amp;&amp;&quot;get&quot;in g&amp;&amp;(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode(&quot;tabindex&quot;);return c&amp;&amp;c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&amp;&amp;a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!=&quot;boolean&quot;&amp;&amp;(d=a.getAttributeNode(c))&amp;&amp;d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&amp;&amp;(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&amp;&amp;(y[c]?d.nodeValue!==&quot;&quot;:d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+&quot;&quot;}},f.attrHooks.tabindex.set=w.set,f.each([&quot;width&quot;,&quot;height&quot;],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===&quot;&quot;){a.setAttribute(b,&quot;auto&quot;);return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===&quot;&quot;&amp;&amp;(b=&quot;false&quot;),w.set(a,b,c)}}),f.support.hrefNormalized||f.each([&quot;href&quot;,&quot;src&quot;,&quot;width&quot;,&quot;height&quot;],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=&quot;&quot;+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&amp;&amp;(b.selectedIndex,b.parentNode&amp;&amp;b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype=&quot;encoding&quot;),f.support.checkOn||f.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){f.valHooks[this]={get:function(a){return a.getAttribute(&quot;value&quot;)===null?&quot;on&quot;:a.value}}}),f.each([&quot;radio&quot;,&quot;checkbox&quot;],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)&gt;=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&amp;&amp;(b[1]=(b[1]||&quot;&quot;).toLowerCase(),b[3]=b[3]&amp;&amp;new RegExp(&quot;(?:^|\\s)&quot;+b[3]+&quot;(?:\\s|$)&quot;));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&amp;&amp;(!b[2]||(c.id||{}).value===b[2])&amp;&amp;(!b[3]||b[3].test((c[&quot;class&quot;]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,&quot;mouseenter$1 mouseleave$1&quot;)};</div><div class='line' id='LC3'>f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&amp;&amp;(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!=&quot;undefined&quot;&amp;&amp;(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(&quot; &quot;);for(k=0;k&lt;c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||&quot;&quot;).split(&quot;.&quot;).sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(&quot;.&quot;)},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&amp;&amp;a.attachEvent(&quot;on&quot;+m,i)}s.add&amp;&amp;(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&amp;&amp;f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&amp;&amp;!!(o=g.events)){b=f.trim(I(b||&quot;&quot;)).split(&quot; &quot;);for(h=0;h&lt;b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp(&quot;(^|\\.)&quot;+l.split(&quot;.&quot;).sort().join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;):null;for(n=0;n&lt;r.length;n++)s=r[n],(e||k===s.origType)&amp;&amp;(!c||c.guid===s.guid)&amp;&amp;(!l||l.test(s.namespace))&amp;&amp;(!d||d===s.selector||d===&quot;**&quot;&amp;&amp;s.selector)&amp;&amp;(r.splice(n--,1),s.selector&amp;&amp;r.delegateCount--,p.remove&amp;&amp;p.remove.call(a,s));r.length===0&amp;&amp;m!==r.length&amp;&amp;((!p.teardown||p.teardown.call(a,l)===!1)&amp;&amp;f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&amp;&amp;(q=g.handle,q&amp;&amp;(q.elem=null),f.removeData(a,[&quot;events&quot;,&quot;handle&quot;],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&amp;&amp;e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf(&quot;!&quot;)&gt;=0&amp;&amp;(h=h.slice(0,-1),k=!0),h.indexOf(&quot;.&quot;)&gt;=0&amp;&amp;(i=h.split(&quot;.&quot;),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&amp;&amp;!f.event.global[h])return;c=typeof c==&quot;object&quot;?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join(&quot;.&quot;),c.namespace_re=c.namespace?new RegExp(&quot;(^|\\.)&quot;+i.join(&quot;\\.(?:.*\\.)?&quot;)+&quot;(\\.|$)&quot;):null,o=h.indexOf(&quot;:&quot;)&lt;0?&quot;on&quot;+h:&quot;&quot;;if(!e){j=f.cache;for(l in j)j[l].events&amp;&amp;j[l].events[h]&amp;&amp;f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&amp;&amp;p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&amp;&amp;!p.noBubble&amp;&amp;!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&amp;&amp;n===e.ownerDocument&amp;&amp;r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l&lt;r.length&amp;&amp;!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,&quot;events&quot;)||{})[c.type]&amp;&amp;f._data(m,&quot;handle&quot;),q&amp;&amp;q.apply(m,d),q=o&amp;&amp;m[o],q&amp;&amp;f.acceptData(m)&amp;&amp;q.apply(m,d)===!1&amp;&amp;c.preventDefault();c.type=h,!g&amp;&amp;!c.isDefaultPrevented()&amp;&amp;(!p._default||p._default.apply(e.ownerDocument,d)===!1)&amp;&amp;(h!==&quot;click&quot;||!f.nodeName(e,&quot;a&quot;))&amp;&amp;f.acceptData(e)&amp;&amp;o&amp;&amp;e[h]&amp;&amp;(h!==&quot;focus&quot;&amp;&amp;h!==&quot;blur&quot;||c.target.offsetWidth!==0)&amp;&amp;!f.isWindow(e)&amp;&amp;(n=e[o],n&amp;&amp;(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&amp;&amp;(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,&quot;events&quot;)||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&amp;&amp;!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&amp;&amp;!c.target.disabled&amp;&amp;(!c.button||c.type!==&quot;click&quot;)){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j&lt;e;j++)r=d[j],s=r.selector,o[s]===b&amp;&amp;(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&amp;&amp;q.push(r);q.length&amp;&amp;i.push({elem:l,matches:q})}}d.length&gt;e&amp;&amp;i.push({elem:this,matches:d.slice(e)});for(j=0;j&lt;i.length&amp;&amp;!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k&lt;p.matches.length&amp;&amp;!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&amp;&amp;!r.namespace||c.namespace_re&amp;&amp;c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&amp;&amp;(c.result=n,n===!1&amp;&amp;(c.preventDefault(),c.stopPropagation()))}}return c.result},props:&quot;attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which&quot;.split(&quot; &quot;),fixHooks:{},keyHooks:{props:&quot;char charCode key keyCode&quot;.split(&quot; &quot;),filter:function(a,b){a.which==null&amp;&amp;(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:&quot;button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement&quot;.split(&quot; &quot;),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&amp;&amp;d.clientX!=null&amp;&amp;(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&amp;&amp;f.scrollLeft||g&amp;&amp;g.scrollLeft||0)-(f&amp;&amp;f.clientLeft||g&amp;&amp;g.clientLeft||0),a.pageY=d.clientY+(f&amp;&amp;f.scrollTop||g&amp;&amp;g.scrollTop||0)-(f&amp;&amp;f.clientTop||g&amp;&amp;g.clientTop||0)),!a.relatedTarget&amp;&amp;i&amp;&amp;(a.relatedTarget=i===a.target?d.toElement:i),!a.which&amp;&amp;h!==b&amp;&amp;(a.which=h&amp;1?1:h&amp;2?3:h&amp;4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&amp;&amp;(a.target=a.target.parentNode),a.metaKey===b&amp;&amp;(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:&quot;focusin&quot;},blur:{delegateType:&quot;focusout&quot;},beforeunload:{setup:function(a,b,c){f.isWindow(this)&amp;&amp;(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&amp;&amp;(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&amp;&amp;c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&amp;&amp;a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&amp;&amp;a.detachEvent(&quot;on&quot;+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&amp;&amp;a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&amp;&amp;a.getPreventDefault()?K:J):this.type=a,b&amp;&amp;f.extend(this,b),this.timeStamp=a&amp;&amp;a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&amp;&amp;a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&amp;&amp;!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,&quot;form&quot;))return!1;f.event.add(this,&quot;click._submit keypress._submit&quot;,function(a){var c=a.target,d=f.nodeName(c,&quot;input&quot;)||f.nodeName(c,&quot;button&quot;)?c.form:b;d&amp;&amp;!d._submit_attached&amp;&amp;(f.event.add(d,&quot;submit._submit&quot;,function(a){this.parentNode&amp;&amp;!a.isTrigger&amp;&amp;f.event.simulate(&quot;submit&quot;,this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,&quot;form&quot;))return!1;f.event.remove(this,&quot;._submit&quot;)}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type===&quot;checkbox&quot;||this.type===&quot;radio&quot;)f.event.add(this,&quot;propertychange._change&quot;,function(a){a.originalEvent.propertyName===&quot;checked&quot;&amp;&amp;(this._just_changed=!0)}),f.event.add(this,&quot;click._change&quot;,function(a){this._just_changed&amp;&amp;!a.isTrigger&amp;&amp;(this._just_changed=!1,f.event.simulate(&quot;change&quot;,this,a,!0))});return!1}f.event.add(this,&quot;beforeactivate._change&quot;,function(a){var b=a.target;z.test(b.nodeName)&amp;&amp;!b._change_attached&amp;&amp;(f.event.add(b,&quot;change._change&quot;,function(a){this.parentNode&amp;&amp;!a.isSimulated&amp;&amp;!a.isTrigger&amp;&amp;f.event.simulate(&quot;change&quot;,this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!==&quot;radio&quot;&amp;&amp;b.type!==&quot;checkbox&quot;)return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,&quot;._change&quot;);return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&amp;&amp;c.addEventListener(a,e,!0)},teardown:function(){--d===0&amp;&amp;c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a==&quot;object&quot;){typeof c!=&quot;string&quot;&amp;&amp;(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&amp;&amp;e==null?(e=c,d=c=b):e==null&amp;&amp;(typeof c==&quot;string&quot;?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&amp;&amp;(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&amp;&amp;a.preventDefault&amp;&amp;a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+&quot;.&quot;+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a==&quot;object&quot;){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c==&quot;function&quot;)d=c,c=b;d===!1&amp;&amp;(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||&quot;**&quot;,b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,&quot;**&quot;):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,&quot;lastToggle&quot;+a.guid)||0)%d;f._data(this,&quot;lastToggle&quot;+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d&lt;b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each(&quot;blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu&quot;.split(&quot; &quot;),function(a,b){f.fn[b]=function(a,c){c==null&amp;&amp;(c=a,a=null);return arguments.length&gt;0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&amp;&amp;(f.attrFn[b]=!0),C.test(b)&amp;&amp;(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&amp;&amp;(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h&lt;i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!=&quot;string&quot;){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length&gt;0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h&lt;i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&amp;&amp;!g&amp;&amp;(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['&quot;][^'&quot;]*['&quot;]|[^\[\]'&quot;]+)+\]|\\.|[^ &gt;+~,(\[\\]+)+|[&gt;+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d=&quot;sizcache&quot;+(Math.random()+&quot;&quot;).replace(&quot;.&quot;,&quot;&quot;),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&amp;&amp;d.nodeType!==9)return[];if(!b||typeof b!=&quot;string&quot;)return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(&quot;&quot;),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length&gt;1&amp;&amp;p.exec(b))if(w.length===2&amp;&amp;o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&amp;&amp;(b+=w.shift()),j=y(b,j,f)}else{!f&amp;&amp;w.length&gt;1&amp;&amp;d.nodeType===9&amp;&amp;!v&amp;&amp;o.match.ID.test(w[0])&amp;&amp;!o.match.ID.test(w[w.length-1])&amp;&amp;(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&amp;&amp;(w[0]===&quot;~&quot;||w[0]===&quot;+&quot;)&amp;&amp;d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length&gt;0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q=&quot;&quot;,r==null&amp;&amp;(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)===&quot;[object Array]&quot;)if(!u)e.push.apply(e,k);else if(d&amp;&amp;d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&amp;&amp;(k[t]===!0||k[t].nodeType===1&amp;&amp;m.contains(d,k[t]))&amp;&amp;e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&amp;&amp;k[t].nodeType===1&amp;&amp;e.push(j[t]);else s(k,e);l&amp;&amp;(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b&lt;a.length;b++)a[b]===a[b-1]&amp;&amp;a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length&gt;0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e&lt;f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!==&quot;\\&quot;){g[1]=(g[1]||&quot;&quot;).replace(j,&quot;&quot;),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],&quot;&quot;);break}}}}d||(d=typeof b.getElementsByTagName!=&quot;undefined&quot;?b.getElementsByTagName(&quot;*&quot;):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&amp;&amp;c[0]&amp;&amp;m.isXML(c[0]);while(a&amp;&amp;c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&amp;&amp;f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)===&quot;\\&quot;)continue;s===r&amp;&amp;(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&amp;&amp;(i=k(j,f,n,s),p=e^i,d&amp;&amp;i!=null?p?g=!0:s[n]=!1:p&amp;&amp;(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],&quot;&quot;);if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error(&quot;Syntax error, unrecognized expression: &quot;+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e=&quot;&quot;;if(d){if(d===1||d===9){if(typeof a.textContent==&quot;string&quot;)return a.textContent;if(typeof a.innerText==&quot;string&quot;)return a.innerText.replace(k,&quot;&quot;);for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&amp;&amp;(e+=n(c));return e},o=m.selectors={order:[&quot;ID&quot;,&quot;NAME&quot;,&quot;TAG&quot;],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['&quot;]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['&quot;]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['&quot;])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['&quot;]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{&quot;class&quot;:&quot;className&quot;,&quot;for&quot;:&quot;htmlFor&quot;},attrHandle:{href:function(a){return a.getAttribute(&quot;href&quot;)},type:function(a){return a.getAttribute(&quot;type&quot;)}},relative:{&quot;+&quot;:function(a,b){var c=typeof b==&quot;string&quot;,d=c&amp;&amp;!l.test(b),e=c&amp;&amp;!d;d&amp;&amp;(b=b.toLowerCase());for(var f=0,g=a.length,h;f&lt;g;f++)if(h=a[f]){while((h=h.previousSibling)&amp;&amp;h.nodeType!==1);a[f]=e||h&amp;&amp;h.nodeName.toLowerCase()===b?h||!1:h===b}e&amp;&amp;m.filter(b,a,!0)},&quot;&gt;&quot;:function(a,b){var c,d=typeof b==&quot;string&quot;,e=0,f=a.length;if(d&amp;&amp;!l.test(b)){b=b.toLowerCase();for(;e&lt;f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e&lt;f;e++)c=a[e],c&amp;&amp;(a[e]=d?c.parentNode:c.parentNode===b);d&amp;&amp;m.filter(b,a,!0)}},&quot;&quot;:function(a,b,c){var d,f=e++,g=x;typeof b==&quot;string&quot;&amp;&amp;!l.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=w),g(&quot;parentNode&quot;,b,f,a,d,c)},&quot;~&quot;:function(a,b,c){var d,f=e++,g=x;typeof b==&quot;string&quot;&amp;&amp;!l.test(b)&amp;&amp;(b=b.toLowerCase(),d=b,g=w),g(&quot;previousSibling&quot;,b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!=&quot;undefined&quot;&amp;&amp;!c){var d=b.getElementById(a[1]);return d&amp;&amp;d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!=&quot;undefined&quot;){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e&lt;f;e++)d[e].getAttribute(&quot;name&quot;)===a[1]&amp;&amp;c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!=&quot;undefined&quot;)return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=&quot; &quot;+a[1].replace(j,&quot;&quot;)+&quot; &quot;;if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&amp;&amp;(e^(h.className&amp;&amp;(&quot; &quot;+h.className+&quot; &quot;).replace(/[\t\n\r]/g,&quot; &quot;).indexOf(a)&gt;=0)?c||d.push(h):c&amp;&amp;(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,&quot;&quot;)},TAG:function(a,b){return a[1].replace(j,&quot;&quot;).toLowerCase()},CHILD:function(a){if(a[1]===&quot;nth&quot;){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,&quot;&quot;);var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]===&quot;even&quot;&amp;&amp;&quot;2n&quot;||a[2]===&quot;odd&quot;&amp;&amp;&quot;2n+1&quot;||!/\D/.test(a[2])&amp;&amp;&quot;0n+&quot;+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&amp;&amp;m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,&quot;&quot;);!f&amp;&amp;o.attrMap[g]&amp;&amp;(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||&quot;&quot;).replace(j,&quot;&quot;),a[2]===&quot;~=&quot;&amp;&amp;(a[4]=&quot; &quot;+a[4]+&quot; &quot;);return a},PSEUDO:function(b,c,d,e,f){if(b[1]===&quot;not&quot;)if((a.exec(b[3])||&quot;&quot;).length&gt;1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&amp;&amp;a.type!==&quot;hidden&quot;},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&amp;&amp;a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute(&quot;type&quot;),c=a.type;return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;text&quot;===c&amp;&amp;(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;radio&quot;===a.type},checkbox:function(a){return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;checkbox&quot;===a.type},file:function(a){return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;file&quot;===a.type},password:function(a){return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;password&quot;===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b===&quot;input&quot;||b===&quot;button&quot;)&amp;&amp;&quot;submit&quot;===a.type},image:function(a){return a.nodeName.toLowerCase()===&quot;input&quot;&amp;&amp;&quot;image&quot;===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b===&quot;input&quot;||b===&quot;button&quot;)&amp;&amp;&quot;reset&quot;===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b===&quot;input&quot;&amp;&amp;&quot;button&quot;===a.type||b===&quot;button&quot;},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b&lt;c[3]-0},gt:function(a,b,c){return b&gt;c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e===&quot;contains&quot;)return(a.textContent||a.innerText||n([a])||&quot;&quot;).indexOf(b[3])&gt;=0;if(e===&quot;not&quot;){var g=b[3];for(var h=0,i=g.length;h&lt;i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case&quot;only&quot;:case&quot;first&quot;:while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k===&quot;first&quot;)return!0;l=a;case&quot;last&quot;:while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case&quot;nth&quot;:c=b[2],e=b[3];if(c===1&amp;&amp;e===0)return!0;f=b[0],g=a.parentNode;if(g&amp;&amp;(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&amp;&amp;(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&amp;&amp;j/c&gt;=0}},ID:function(a,b){return a.nodeType===1&amp;&amp;a.getAttribute(&quot;id&quot;)===b},TAG:function(a,b){return b===&quot;*&quot;&amp;&amp;a.nodeType===1||!!a.nodeName&amp;&amp;a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(&quot; &quot;+(a.className||a.getAttribute(&quot;class&quot;))+&quot; &quot;).indexOf(b)&gt;-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+&quot;&quot;,f=b[2],g=b[4];return d==null?f===&quot;!=&quot;:!f&amp;&amp;m.attr?d!=null:f===&quot;=&quot;?e===g:f===&quot;*=&quot;?e.indexOf(g)&gt;=0:f===&quot;~=&quot;?(&quot; &quot;+e+&quot; &quot;).indexOf(g)&gt;=0:g?f===&quot;!=&quot;?e!==g:f===&quot;^=&quot;?e.indexOf(g)===0:f===&quot;$=&quot;?e.substr(e.length-g.length)===g:f===&quot;|=&quot;?e===g||e.substr(0,g.length+1)===g+&quot;-&quot;:!1:e&amp;&amp;d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return&quot;\\&quot;+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)===&quot;[object Array]&quot;)Array.prototype.push.apply(d,a);else if(typeof a.length==&quot;number&quot;)for(var e=a.length;c&lt;e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&amp;4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&amp;&amp;b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k&lt;c&amp;&amp;k&lt;d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement(&quot;div&quot;),d=&quot;script&quot;+(new Date).getTime(),e=c.documentElement;a.innerHTML=&quot;&lt;a name='&quot;+d+&quot;'/&gt;&quot;,e.insertBefore(a,e.firstChild),c.getElementById(d)&amp;&amp;(o.find.ID=function(a,c,d){if(typeof c.getElementById!=&quot;undefined&quot;&amp;&amp;!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!=&quot;undefined&quot;&amp;&amp;e.getAttributeNode(&quot;id&quot;).nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=&quot;undefined&quot;&amp;&amp;a.getAttributeNode(&quot;id&quot;);return a.nodeType===1&amp;&amp;c&amp;&amp;c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement(&quot;div&quot;);a.appendChild(c.createComment(&quot;&quot;)),a.getElementsByTagName(&quot;*&quot;).length&gt;0&amp;&amp;(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]===&quot;*&quot;){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&amp;&amp;d.push(c[e]);c=d}return c}),a.innerHTML=&quot;&lt;a href='#'&gt;&lt;/a&gt;&quot;,a.firstChild&amp;&amp;typeof a.firstChild.getAttribute!=&quot;undefined&quot;&amp;&amp;a.firstChild.getAttribute(&quot;href&quot;)!==&quot;#&quot;&amp;&amp;(o.attrHandle.href=function(a){return a.getAttribute(&quot;href&quot;,2)}),a=null}(),c.querySelectorAll&amp;&amp;function(){var a=m,b=c.createElement(&quot;div&quot;),d=&quot;__sizzle__&quot;;b.innerHTML=&quot;&lt;p class='TEST'&gt;&lt;/p&gt;&quot;;if(!b.querySelectorAll||b.querySelectorAll(&quot;.TEST&quot;).length!==0){m=function(b,e,f,g){e=e||c;if(!g&amp;&amp;!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&amp;&amp;(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&amp;&amp;o.find.CLASS&amp;&amp;e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b===&quot;body&quot;&amp;&amp;e.body)return s([e.body],f);if(h&amp;&amp;h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&amp;&amp;e.nodeName.toLowerCase()!==&quot;object&quot;){var k=e,l=e.getAttribute(&quot;id&quot;),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,&quot;\\$&amp;&quot;):e.setAttribute(&quot;id&quot;,n),q&amp;&amp;p&amp;&amp;(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll(&quot;[id='&quot;+n+&quot;'] &quot;+b),f)}catch(r){}finally{l||k.removeAttribute(&quot;id&quot;)}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement(&quot;div&quot;),&quot;div&quot;),e=!1;try{b.call(c.documentElement,&quot;[test!='']:sizzle&quot;)}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'&quot;\]]*)\s*\]/g,&quot;='$1']&quot;);if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&amp;&amp;!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&amp;&amp;a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length&gt;0}}}(),function(){var a=c.createElement(&quot;div&quot;);a.innerHTML=&quot;&lt;div class='test e'&gt;&lt;/div&gt;&lt;div class='test'&gt;&lt;/div&gt;&quot;;if(!!a.getElementsByClassName&amp;&amp;a.getElementsByClassName(&quot;e&quot;).length!==0){a.lastChild.className=&quot;e&quot;;if(a.getElementsByClassName(&quot;e&quot;).length===1)return;o.order.splice(1,0,&quot;CLASS&quot;),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=&quot;undefined&quot;&amp;&amp;!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&amp;&amp;(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&amp;16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!==&quot;HTML&quot;:!1};var y=function(a,b,c){var d,e=[],f=&quot;&quot;,g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,&quot;&quot;);a=o.relative[a]?a+&quot;*&quot;:a;for(var h=0,i=g.length;h&lt;i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[&quot;:&quot;]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!=&quot;string&quot;)return f(a).filter(function(){for(c=0,d=b.length;c&lt;d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack(&quot;&quot;,&quot;find&quot;,a),g,h,i;for(c=0,d=this.length;c&lt;d;c++){g=e.length,f.find(a,this[c],e);if(c&gt;0)for(h=g;h&lt;e.length;h++)for(i=0;i&lt;g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a&lt;c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),&quot;not&quot;,a)},filter:function(a){return this.pushStack(T(this,a,!0),&quot;filter&quot;,a)},is:function(a){return!!a&amp;&amp;(typeof a==&quot;string&quot;?Q.test(a)?f(a,this.context).index(this[0])&gt;=0:f.filter(a,this).length&gt;0:this.filter(a).length&gt;0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&amp;&amp;g.ownerDocument&amp;&amp;g!==b){for(d=0;d&lt;a.length;d++)f(g).is(a[d])&amp;&amp;c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!=&quot;string&quot;?f(a,b||this.context):0;for(d=0,e=this.length;d&lt;e;d++){g=this[d];while(g){if(i?i.index(g)&gt;-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length&gt;1?f.unique(c):c;return this.pushStack(c,&quot;closest&quot;,a)},index:function(a){if(!a)return this[0]&amp;&amp;this[0].parentNode?this.prevAll().length:-1;if(typeof a==&quot;string&quot;)return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a==&quot;string&quot;?f(a,b):f.makeArray(a&amp;&amp;a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&amp;&amp;b.nodeType!==11?b:null},parents:function(a){return f.dir(a,&quot;parentNode&quot;)},parentsUntil:function(a,b,c){return f.dir(a,&quot;parentNode&quot;,c)},next:function(a){return f.nth(a,2,&quot;nextSibling&quot;)},prev:function(a){return f.nth(a,2,&quot;previousSibling&quot;)},nextAll:function(a){return f.dir(a,&quot;nextSibling&quot;)},prevAll:function(a){return f.dir(a,&quot;previousSibling&quot;)},nextUntil:function(a,b,c){return f.dir(a,&quot;nextSibling&quot;,c)},prevUntil:function(a,b,c){return f.dir(a,&quot;previousSibling&quot;,c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,&quot;iframe&quot;)?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&amp;&amp;typeof d==&quot;string&quot;&amp;&amp;(e=f.filter(d,e)),e=this.length&gt;1&amp;&amp;!R[a]?f.unique(e):e,(this.length&gt;1||N.test(d))&amp;&amp;M.test(a)&amp;&amp;(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(&quot;,&quot;))}}),f.extend({filter:function(a,b,c){c&amp;&amp;(a=&quot;:not(&quot;+a+&quot;)&quot;);return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&amp;&amp;g.nodeType!==9&amp;&amp;(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&amp;&amp;e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&amp;&amp;++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&amp;&amp;a!==b&amp;&amp;c.push(a);return c}});var V=&quot;abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video&quot;,W=/ jQuery\d+=&quot;(?:\d+|null)&quot;/g,X=/^\s+/,Y=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/ig,Z=/&lt;([\w:]+)/,$=/&lt;tbody/i,_=/&lt;|&amp;#?\w+;/,ba=/&lt;(?:script|style)/i,bb=/&lt;(?:script|object|embed|option|style)/i,bc=new RegExp(&quot;&lt;(?:&quot;+V+&quot;)&quot;,&quot;i&quot;),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*&lt;!(?:\[CDATA\[|\-\-)/,bg={option:[1,&quot;&lt;select multiple='multiple'&gt;&quot;,&quot;&lt;/select&gt;&quot;],legend:[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;],thead:[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;],tr:[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;],td:[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;],col:[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;],area:[1,&quot;&lt;map&gt;&quot;,&quot;&lt;/map&gt;&quot;],_default:[0,&quot;&quot;,&quot;&quot;]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,&quot;div&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!=&quot;object&quot;&amp;&amp;a!==b)return this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&amp;&amp;b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&amp;&amp;a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,&quot;body&quot;)||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&amp;&amp;this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,&quot;before&quot;,arguments)}},after:function(){if(this[0]&amp;&amp;this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,&quot;after&quot;,arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&amp;&amp;d.nodeType===1&amp;&amp;(f.cleanData(d.getElementsByTagName(&quot;*&quot;)),f.cleanData([d])),d.parentNode&amp;&amp;d.parentNode.removeChild(d);return this},empty:function()</div><div class='line' id='LC4'>{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&amp;&amp;f.cleanData(b.getElementsByTagName(&quot;*&quot;));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&amp;&amp;this[0].nodeType===1?this[0].innerHTML.replace(W,&quot;&quot;):null;if(typeof a==&quot;string&quot;&amp;&amp;!ba.test(a)&amp;&amp;(f.support.leadingWhitespace||!X.test(a))&amp;&amp;!bg[(Z.exec(a)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase()]){a=a.replace(Y,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);try{for(var c=0,d=this.length;c&lt;d;c++)this[c].nodeType===1&amp;&amp;(f.cleanData(this[c].getElementsByTagName(&quot;*&quot;)),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&amp;&amp;this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!=&quot;string&quot;&amp;&amp;(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),&quot;replaceWith&quot;,a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&amp;&amp;arguments.length===3&amp;&amp;typeof j==&quot;string&quot;&amp;&amp;bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&amp;&amp;j.parentNode,f.support.parentNode&amp;&amp;i&amp;&amp;i.nodeType===11&amp;&amp;i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&amp;&amp;f.nodeName(g,&quot;tr&quot;);for(var l=0,m=this.length,n=m-1;l&lt;m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m&gt;1&amp;&amp;l&lt;n?f.clone(h,!0,!0):h)}k.length&amp;&amp;f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&amp;&amp;b[0]&amp;&amp;(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&amp;&amp;typeof j==&quot;string&quot;&amp;&amp;j.length&lt;512&amp;&amp;i===c&amp;&amp;j.charAt(0)===&quot;&lt;&quot;&amp;&amp;!bb.test(j)&amp;&amp;(f.support.checkClone||!bd.test(j))&amp;&amp;(f.support.html5Clone||!bc.test(j))&amp;&amp;(g=!0,h=f.fragments[j],h&amp;&amp;h!==1&amp;&amp;(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&amp;&amp;(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&amp;&amp;this[0].parentNode;if(g&amp;&amp;g.nodeType===11&amp;&amp;g.childNodes.length===1&amp;&amp;e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h&lt;i;h++){var j=(h&gt;0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test(&quot;&lt;&quot;+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&amp;&amp;(a.nodeType===1||a.nodeType===11)&amp;&amp;!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&amp;&amp;bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement==&quot;undefined&quot;&amp;&amp;(b=b.ownerDocument||b[0]&amp;&amp;b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k==&quot;number&quot;&amp;&amp;(k+=&quot;&quot;);if(!k)continue;if(typeof k==&quot;string&quot;)if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;);var l=(Z.exec(k)||[&quot;&quot;,&quot;&quot;])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement(&quot;div&quot;);b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l===&quot;table&quot;&amp;&amp;!p?o.firstChild&amp;&amp;o.firstChild.childNodes:m[1]===&quot;&lt;table&gt;&quot;&amp;&amp;!p?o.childNodes:[];for(i=q.length-1;i&gt;=0;--i)f.nodeName(q[i],&quot;tbody&quot;)&amp;&amp;!q[i].childNodes.length&amp;&amp;q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&amp;&amp;X.test(k)&amp;&amp;o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&amp;&amp;typeof (r=k.length)==&quot;number&quot;)for(i=0;i&lt;r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&amp;&amp;f.nodeName(h[j],&quot;script&quot;)&amp;&amp;(!h[j].type||h[j].type.toLowerCase()===&quot;text/javascript&quot;))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName(&quot;script&quot;),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&amp;&amp;f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&amp;&amp;b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&amp;&amp;(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&amp;&amp;i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},bx=[&quot;Left&quot;,&quot;Right&quot;],by=[&quot;Top&quot;,&quot;Bottom&quot;],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&amp;&amp;c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,&quot;opacity&quot;,&quot;opacity&quot;);return c===&quot;&quot;?&quot;1&quot;:c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{&quot;float&quot;:f.support.cssFloat?&quot;cssFloat&quot;:&quot;styleFloat&quot;},style:function(a,c,d,e){if(!!a&amp;&amp;a.nodeType!==3&amp;&amp;a.nodeType!==8&amp;&amp;!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&amp;&amp;&quot;get&quot;in k&amp;&amp;(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h===&quot;string&quot;&amp;&amp;(g=bv.exec(d))&amp;&amp;(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h=&quot;number&quot;);if(d==null||h===&quot;number&quot;&amp;&amp;isNaN(d))return;h===&quot;number&quot;&amp;&amp;!f.cssNumber[i]&amp;&amp;(d+=&quot;px&quot;);if(!k||!(&quot;set&quot;in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c===&quot;cssFloat&quot;&amp;&amp;(c=&quot;float&quot;);if(g&amp;&amp;&quot;get&quot;in g&amp;&amp;(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each([&quot;height&quot;,&quot;width&quot;],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b&gt;=0)return b+&quot;px&quot;}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&amp;&amp;a.currentStyle?a.currentStyle.filter:a.style.filter)||&quot;&quot;)?parseFloat(RegExp.$1)/100+&quot;&quot;:b?&quot;1&quot;:&quot;&quot;},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?&quot;alpha(opacity=&quot;+b*100+&quot;)&quot;:&quot;&quot;,g=d&amp;&amp;d.filter||c.filter||&quot;&quot;;c.zoom=1;if(b&gt;=1&amp;&amp;f.trim(g.replace(bq,&quot;&quot;))===&quot;&quot;){c.removeAttribute(&quot;filter&quot;);if(d&amp;&amp;!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+&quot; &quot;+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:&quot;inline-block&quot;},function(){b?c=bz(a,&quot;margin-right&quot;,&quot;marginRight&quot;):c=a.style.marginRight});return c}})}),c.defaultView&amp;&amp;c.defaultView.getComputedStyle&amp;&amp;(bA=function(a,b){var c,d,e;b=b.replace(bs,&quot;-$1&quot;).toLowerCase(),(d=a.ownerDocument.defaultView)&amp;&amp;(e=d.getComputedStyle(a,null))&amp;&amp;(c=e.getPropertyValue(b),c===&quot;&quot;&amp;&amp;!f.contains(a.ownerDocument.documentElement,a)&amp;&amp;(c=f.style(a,b)));return c}),c.documentElement.currentStyle&amp;&amp;(bB=function(a,b){var c,d,e,f=a.currentStyle&amp;&amp;a.currentStyle[b],g=a.style;f===null&amp;&amp;g&amp;&amp;(e=g[b])&amp;&amp;(f=e),!bt.test(f)&amp;&amp;bu.test(f)&amp;&amp;(c=g.left,d=a.runtimeStyle&amp;&amp;a.runtimeStyle.left,d&amp;&amp;(a.runtimeStyle.left=a.currentStyle.left),g.left=b===&quot;fontSize&quot;?&quot;1em&quot;:f||0,f=g.pixelLeft+&quot;px&quot;,g.left=c,d&amp;&amp;(a.runtimeStyle.left=d));return f===&quot;&quot;?&quot;auto&quot;:f}),bz=bA||bB,f.expr&amp;&amp;f.expr.filters&amp;&amp;(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&amp;&amp;c===0||!f.support.reliableHiddenOffsets&amp;&amp;(a.style&amp;&amp;a.style.display||f.css(a,&quot;display&quot;))===&quot;none&quot;},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&amp;])_=[^&amp;]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=[&quot;*/&quot;]+[&quot;*&quot;];try{bV=e.href}catch(bY){bV=c.createElement(&quot;a&quot;),bV.href=&quot;&quot;,bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!=&quot;string&quot;&amp;&amp;bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(&quot; &quot;);if(e&gt;=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h=&quot;GET&quot;;c&amp;&amp;(f.isFunction(c)?(d=c,c=b):typeof c==&quot;object&quot;&amp;&amp;(c=f.param(c,f.ajaxSettings.traditional),h=&quot;POST&quot;));var i=this;f.ajax({url:a,type:h,dataType:&quot;html&quot;,data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&amp;&amp;(a.done(function(a){c=a}),i.html(g?f(&quot;&lt;div&gt;&quot;).append(c.replace(bN,&quot;&quot;)).find(g):c)),d&amp;&amp;i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,&quot;\r\n&quot;)}}):{name:b.name,value:c.replace(bF,&quot;\r\n&quot;)}}).get()}}),f.each(&quot;ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend&quot;.split(&quot; &quot;),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each([&quot;get&quot;,&quot;post&quot;],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&amp;&amp;(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,&quot;script&quot;)},getJSON:function(a,b,c){return f.get(a,b,c,&quot;json&quot;)},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:&quot;GET&quot;,contentType:&quot;application/x-www-form-urlencoded&quot;,processData:!0,async:!0,accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,text:&quot;text/plain&quot;,json:&quot;application/json, text/javascript&quot;,&quot;*&quot;:bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:&quot;responseXML&quot;,text:&quot;responseText&quot;},converters:{&quot;* text&quot;:a.String,&quot;text html&quot;:!0,&quot;text json&quot;:f.parseJSON,&quot;text xml&quot;:f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&amp;&amp;clearTimeout(q),p=b,n=m||&quot;&quot;,v.readyState=a&gt;0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a&gt;=200&amp;&amp;a&lt;300||a===304){if(d.ifModified){if(y=v.getResponseHeader(&quot;Last-Modified&quot;))f.lastModified[k]=y;if(z=v.getResponseHeader(&quot;Etag&quot;))f.etag[k]=z}if(a===304)w=&quot;notmodified&quot;,o=!0;else try{r=cc(d,x),w=&quot;success&quot;,o=!0}catch(A){w=&quot;parsererror&quot;,u=A}}else{u=w;if(!w||a)w=&quot;error&quot;,a&lt;0&amp;&amp;(a=0)}v.status=a,v.statusText=&quot;&quot;+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&amp;&amp;g.trigger(&quot;ajax&quot;+(o?&quot;Success&quot;:&quot;Error&quot;),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&amp;&amp;(g.trigger(&quot;ajaxComplete&quot;,[v,d]),--f.active||f.event.trigger(&quot;ajaxStop&quot;))}}typeof a==&quot;object&quot;&amp;&amp;(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&amp;&amp;(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks(&quot;once memory&quot;),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||&quot;abort&quot;,p&amp;&amp;p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s&lt;2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+&quot;&quot;).replace(bG,&quot;&quot;).replace(bL,bW[1]+&quot;//&quot;),d.dataTypes=f.trim(d.dataType||&quot;*&quot;).toLowerCase().split(bP),d.crossDomain==null&amp;&amp;(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&amp;&amp;r[2]==bW[2]&amp;&amp;(r[3]||(r[1]===&quot;http:&quot;?80:443))==(bW[3]||(bW[1]===&quot;http:&quot;?80:443)))),d.data&amp;&amp;d.processData&amp;&amp;typeof d.data!=&quot;string&quot;&amp;&amp;(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&amp;&amp;f.active++===0&amp;&amp;f.event.trigger(&quot;ajaxStart&quot;);if(!d.hasContent){d.data&amp;&amp;(d.url+=(bM.test(d.url)?&quot;&amp;&quot;:&quot;?&quot;)+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,&quot;$1_=&quot;+x);d.url=y+(y===d.url?(bM.test(d.url)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+x:&quot;&quot;)}}(d.data&amp;&amp;d.hasContent&amp;&amp;d.contentType!==!1||c.contentType)&amp;&amp;v.setRequestHeader(&quot;Content-Type&quot;,d.contentType),d.ifModified&amp;&amp;(k=k||d.url,f.lastModified[k]&amp;&amp;v.setRequestHeader(&quot;If-Modified-Since&quot;,f.lastModified[k]),f.etag[k]&amp;&amp;v.setRequestHeader(&quot;If-None-Match&quot;,f.etag[k])),v.setRequestHeader(&quot;Accept&quot;,d.dataTypes[0]&amp;&amp;d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!==&quot;*&quot;?&quot;, &quot;+bX+&quot;; q=0.01&quot;:&quot;&quot;):d.accepts[&quot;*&quot;]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&amp;&amp;(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,&quot;No Transport&quot;);else{v.readyState=1,t&amp;&amp;g.trigger(&quot;ajaxSend&quot;,[v,d]),d.async&amp;&amp;d.timeout&gt;0&amp;&amp;(q=setTimeout(function(){v.abort(&quot;timeout&quot;)},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s&lt;2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+&quot;=&quot;+encodeURIComponent(b)};c===b&amp;&amp;(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&amp;&amp;!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join(&quot;&amp;&quot;).replace(bD,&quot;+&quot;)}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&amp;|$)|\?\?/i;f.ajaxSetup({jsonp:&quot;callback&quot;,jsonpCallback:function(){return f.expando+&quot;_&quot;+cd++}}),f.ajaxPrefilter(&quot;json jsonp&quot;,function(b,c,d){var e=b.contentType===&quot;application/x-www-form-urlencoded&quot;&amp;&amp;typeof b.data==&quot;string&quot;;if(b.dataTypes[0]===&quot;jsonp&quot;||b.jsonp!==!1&amp;&amp;(ce.test(b.url)||e&amp;&amp;ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l=&quot;$1&quot;+h+&quot;$2&quot;;b.jsonp!==!1&amp;&amp;(j=j.replace(ce,l),b.url===j&amp;&amp;(e&amp;&amp;(k=k.replace(ce,l)),b.data===k&amp;&amp;(j+=(/\?/.test(j)?&quot;&amp;&quot;:&quot;?&quot;)+b.jsonp+&quot;=&quot;+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&amp;&amp;f.isFunction(i)&amp;&amp;a[h](g[0])}),b.converters[&quot;script json&quot;]=function(){g||f.error(h+&quot; was not called&quot;);return g[0]},b.dataTypes[0]=&quot;json&quot;;return&quot;script&quot;}}),f.ajaxSetup({accepts:{script:&quot;text/javascript, application/javascript, application/ecmascript, application/x-ecmascript&quot;},contents:{script:/javascript|ecmascript/},converters:{&quot;text script&quot;:function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter(&quot;script&quot;,function(a){a.cache===b&amp;&amp;(a.cache=!1),a.crossDomain&amp;&amp;(a.type=&quot;GET&quot;,a.global=!1)}),f.ajaxTransport(&quot;script&quot;,function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName(&quot;head&quot;)[0]||c.documentElement;return{send:function(f,g){d=c.createElement(&quot;script&quot;),d.async=&quot;async&quot;,a.scriptCharset&amp;&amp;(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&amp;&amp;d.parentNode&amp;&amp;e.removeChild(d),d=b,c||g(200,&quot;success&quot;)},e.insertBefore(d,e.firstChild)},abort:function(){d&amp;&amp;d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&amp;&amp;ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&amp;&amp;&quot;withCredentials&quot;in a})}(f.ajaxSettings.xhr()),f.support.ajax&amp;&amp;f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&amp;&amp;h.overrideMimeType&amp;&amp;h.overrideMimeType(c.mimeType),!c.crossDomain&amp;&amp;!e[&quot;X-Requested-With&quot;]&amp;&amp;(e[&quot;X-Requested-With&quot;]=&quot;XMLHttpRequest&quot;);try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&amp;&amp;c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&amp;&amp;(e||h.readyState===4)){d=b,i&amp;&amp;(h.onreadystatechange=f.noop,cf&amp;&amp;delete ch[i]);if(e)h.readyState!==4&amp;&amp;h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&amp;&amp;n.documentElement&amp;&amp;(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=&quot;&quot;}!j&amp;&amp;c.isLocal&amp;&amp;!c.crossDomain?j=m.text?200:404:j===1223&amp;&amp;(j=204)}}}catch(p){e||g(-1,p)}m&amp;&amp;g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&amp;&amp;(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&amp;&amp;d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[[&quot;height&quot;,&quot;marginTop&quot;,&quot;marginBottom&quot;,&quot;paddingTop&quot;,&quot;paddingBottom&quot;],[&quot;width&quot;,&quot;marginLeft&quot;,&quot;marginRight&quot;,&quot;paddingLeft&quot;,&quot;paddingRight&quot;],[&quot;opacity&quot;]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu(&quot;show&quot;,3),a,b,c);for(var g=0,h=this.length;g&lt;h;g++)d=this[g],d.style&amp;&amp;(e=d.style.display,!f._data(d,&quot;olddisplay&quot;)&amp;&amp;e===&quot;none&quot;&amp;&amp;(e=d.style.display=&quot;&quot;),e===&quot;&quot;&amp;&amp;f.css(d,&quot;display&quot;)===&quot;none&quot;&amp;&amp;f._data(d,&quot;olddisplay&quot;,cv(d.nodeName)));for(g=0;g&lt;h;g++){d=this[g];if(d.style){e=d.style.display;if(e===&quot;&quot;||e===&quot;none&quot;)d.style.display=f._data(d,&quot;olddisplay&quot;)||&quot;&quot;}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu(&quot;hide&quot;,3),a,b,c);var d,e,g=0,h=this.length;for(;g&lt;h;g++)d=this[g],d.style&amp;&amp;(e=f.css(d,&quot;display&quot;),e!==&quot;none&quot;&amp;&amp;!f._data(d,&quot;olddisplay&quot;)&amp;&amp;f._data(d,&quot;olddisplay&quot;,e));for(g=0;g&lt;h;g++)this[g].style&amp;&amp;(this[g].style.display=&quot;none&quot;);return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a==&quot;boolean&quot;;f.isFunction(a)&amp;&amp;f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(&quot;:hidden&quot;);f(this)[b?&quot;show&quot;:&quot;hide&quot;]()}):this.animate(cu(&quot;toggle&quot;,3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(&quot;:hidden&quot;).css(&quot;opacity&quot;,0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&amp;&amp;f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&amp;&amp;f(this).is(&quot;:hidden&quot;),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&amp;&amp;(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&amp;&amp;b.specialEasing[g]||b.easing||&quot;swing&quot;;if(h===&quot;hide&quot;&amp;&amp;d||h===&quot;show&quot;&amp;&amp;!d)return b.complete.call(this);c&amp;&amp;(g===&quot;height&quot;||g===&quot;width&quot;)&amp;&amp;(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,&quot;display&quot;)===&quot;inline&quot;&amp;&amp;f.css(this,&quot;float&quot;)===&quot;none&quot;&amp;&amp;(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)===&quot;inline&quot;?this.style.display=&quot;inline-block&quot;:this.style.zoom=1))}b.overflow!=null&amp;&amp;(this.style.overflow=&quot;hidden&quot;);for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,&quot;toggle&quot;+i)||(h===&quot;toggle&quot;?d?&quot;show&quot;:&quot;hide&quot;:0),o?(f._data(this,&quot;toggle&quot;+i,o===&quot;show&quot;?&quot;hide&quot;:&quot;show&quot;),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?&quot;&quot;:&quot;px&quot;),n!==&quot;px&quot;&amp;&amp;(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&amp;&amp;(m=(k[1]===&quot;-=&quot;?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,&quot;&quot;));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!=&quot;string&quot;&amp;&amp;(d=c,c=a,a=b),c&amp;&amp;a!==!1&amp;&amp;this.queue(a||&quot;fx&quot;,[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&amp;&amp;g[b].stop&amp;&amp;b.indexOf(&quot;.run&quot;)===b.length-4&amp;&amp;h(this,g,b);else g[b=a+&quot;.run&quot;]&amp;&amp;g[b].stop&amp;&amp;h(this,g,b);for(b=e.length;b--;)e[b].elem===this&amp;&amp;(a==null||e[b].queue===a)&amp;&amp;(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&amp;&amp;f.dequeue(this,a)})}}),f.each({slideDown:cu(&quot;show&quot;,1),slideUp:cu(&quot;hide&quot;,1),slideToggle:cu(&quot;toggle&quot;,1),fadeIn:{opacity:&quot;show&quot;},fadeOut:{opacity:&quot;hide&quot;},fadeToggle:{opacity:&quot;toggle&quot;}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&amp;&amp;typeof a==&quot;object&quot;?f.extend({},a):{complete:c||!c&amp;&amp;b||f.isFunction(a)&amp;&amp;a,duration:a,easing:c&amp;&amp;b||b&amp;&amp;!f.isFunction(b)&amp;&amp;b};d.duration=f.fx.off?0:typeof d.duration==&quot;number&quot;?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue=&quot;fx&quot;;d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&amp;&amp;d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&amp;&amp;f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&amp;&amp;this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&amp;&amp;(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b===&quot;auto&quot;?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?&quot;&quot;:&quot;px&quot;),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&amp;&amp;f._data(e.elem,&quot;fxshow&quot;+e.prop)===b&amp;&amp;f._data(e.elem,&quot;fxshow&quot;+e.prop,e.start)},h()&amp;&amp;f.timers.push(h)&amp;&amp;!cp&amp;&amp;(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,&quot;fxshow&quot;+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop===&quot;width&quot;||this.prop===&quot;height&quot;?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,&quot;fxshow&quot;+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e&gt;=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&amp;&amp;(g=!1);if(g){i.overflow!=null&amp;&amp;!f.support.shrinkWrapBlocks&amp;&amp;f.each([&quot;&quot;,&quot;X&quot;,&quot;Y&quot;],function(a,b){h.style[&quot;overflow&quot;+b]=i.overflow[a]}),i.hide&amp;&amp;f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,&quot;fxshow&quot;+b,!0),f.removeData(h,&quot;toggle&quot;+b,!0);d=i.complete,d&amp;&amp;(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c&lt;b.length;c++)a=b[c],!a()&amp;&amp;b[c]===a&amp;&amp;b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,&quot;opacity&quot;,a.now)},_default:function(a){a.elem.style&amp;&amp;a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each([&quot;width&quot;,&quot;height&quot;],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&amp;&amp;f.expr.filters&amp;&amp;(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;&quot;getBoundingClientRect&quot;in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&amp;&amp;g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&amp;&amp;g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&amp;&amp;b!==i&amp;&amp;b!==h){if(f.support.fixedPosition&amp;&amp;k.position===&quot;fixed&quot;)break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&amp;&amp;(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&amp;&amp;(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&amp;&amp;c.overflow!==&quot;visible&quot;&amp;&amp;(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position===&quot;relative&quot;||k.position===&quot;static&quot;)l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&amp;&amp;k.position===&quot;fixed&quot;&amp;&amp;(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&amp;&amp;(b+=parseFloat(f.css(a,&quot;marginTop&quot;))||0,c+=parseFloat(f.css(a,&quot;marginLeft&quot;))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,&quot;position&quot;);d===&quot;static&quot;&amp;&amp;(a.style.position=&quot;relative&quot;);var e=f(a),g=e.offset(),h=f.css(a,&quot;top&quot;),i=f.css(a,&quot;left&quot;),j=(d===&quot;absolute&quot;||d===&quot;fixed&quot;)&amp;&amp;f.inArray(&quot;auto&quot;,[h,i])&gt;-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&amp;&amp;(b=b.call(a,c,g)),b.top!=null&amp;&amp;(k.top=b.top-g.top+m),b.left!=null&amp;&amp;(k.left=b.left-g.left+n),&quot;using&quot;in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,&quot;marginTop&quot;))||0,c.left-=parseFloat(f.css(a,&quot;marginLeft&quot;))||0,d.top+=parseFloat(f.css(b[0],&quot;borderTopWidth&quot;))||0,d.left+=parseFloat(f.css(b[0],&quot;borderLeftWidth&quot;))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&amp;&amp;!cx.test(a.nodeName)&amp;&amp;f.css(a,&quot;position&quot;)===&quot;static&quot;)a=a.offsetParent;return a})}}),f.each([&quot;Left&quot;,&quot;Top&quot;],function(a,c){var d=&quot;scroll&quot;+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?&quot;pageXOffset&quot;in g?g[a?&quot;pageYOffset&quot;:&quot;pageXOffset&quot;]:f.support.boxModel&amp;&amp;g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each([&quot;Height&quot;,&quot;Width&quot;],function(a,c){var d=c.toLowerCase();f.fn[&quot;inner&quot;+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,&quot;padding&quot;)):this[d]():null},f.fn[&quot;outer&quot;+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?&quot;margin&quot;:&quot;border&quot;)):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement[&quot;client&quot;+c],h=e.document.body;return e.document.compatMode===&quot;CSS1Compat&quot;&amp;&amp;g||h&amp;&amp;h[&quot;client&quot;+c]||g}if(e.nodeType===9)return Math.max(e.documentElement[&quot;client&quot;+c],e.body[&quot;scroll&quot;+c],e.documentElement[&quot;scroll&quot;+c],e.body[&quot;offset&quot;+c],e.documentElement[&quot;offset&quot;+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a==&quot;string&quot;?a:a+&quot;px&quot;)}}),a.jQuery=a.$=f,typeof define==&quot;function&quot;&amp;&amp;define.amd&amp;&amp;define.amd.jQuery&amp;&amp;define(&quot;jquery&quot;,[],function(){return f})})(window);</div></pre></div>
          </td>
        </tr>
      </table>
  </div>

          </div>
        </div>
      </div>

      <a href="#jump-to-line" rel="facebox" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
      <div id="jump-to-line" style="display:none">
        <h2>Jump to Line</h2>
        <form accept-charset="UTF-8" class="js-jump-to-line-form">
          <input class="textfield js-jump-to-line-field" type="text">
          <div class="full-button">
            <button type="submit" class="classy">
              Go
            </button>
          </div>
        </form>
      </div>

    </div>
</div>

<div id="js-frame-loading-template" class="frame frame-loading large-loading-area" style="display:none;">
  <img class="js-frame-loading-spinner" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-128.gif?1347543527" height="64" width="64">
</div>


        </div>
      </div>
      <div class="context-overlay"></div>
    </div>

      <div id="footer-push"></div><!-- hack for sticky footer -->
    </div><!-- end of wrapper - hack for sticky footer -->

      <!-- footer -->
      <div id="footer">
  <div class="container clearfix">

      <dl class="footer_nav">
        <dt>GitHub</dt>
        <dd><a href="https://github.com/about">About us</a></dd>
        <dd><a href="https://github.com/blog">Blog</a></dd>
        <dd><a href="https://github.com/contact">Contact &amp; support</a></dd>
        <dd><a href="http://enterprise.github.com/">GitHub Enterprise</a></dd>
        <dd><a href="http://status.github.com/">Site status</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Applications</dt>
        <dd><a href="http://mac.github.com/">GitHub for Mac</a></dd>
        <dd><a href="http://windows.github.com/">GitHub for Windows</a></dd>
        <dd><a href="http://eclipse.github.com/">GitHub for Eclipse</a></dd>
        <dd><a href="http://mobile.github.com/">GitHub mobile apps</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Services</dt>
        <dd><a href="http://get.gaug.es/">Gauges: Web analytics</a></dd>
        <dd><a href="http://speakerdeck.com">Speaker Deck: Presentations</a></dd>
        <dd><a href="https://gist.github.com">Gist: Code snippets</a></dd>
        <dd><a href="http://jobs.github.com/">Job board</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>Documentation</dt>
        <dd><a href="http://help.github.com/">GitHub Help</a></dd>
        <dd><a href="http://developer.github.com/">Developer API</a></dd>
        <dd><a href="http://github.github.com/github-flavored-markdown/">GitHub Flavored Markdown</a></dd>
        <dd><a href="http://pages.github.com/">GitHub Pages</a></dd>
      </dl>

      <dl class="footer_nav">
        <dt>More</dt>
        <dd><a href="http://training.github.com/">Training</a></dd>
        <dd><a href="https://github.com/edu">Students &amp; teachers</a></dd>
        <dd><a href="http://shop.github.com">The Shop</a></dd>
        <dd><a href="/plans">Plans &amp; pricing</a></dd>
        <dd><a href="http://octodex.github.com/">The Octodex</a></dd>
      </dl>

      <hr class="footer-divider">


    <p class="right">&copy; 2013 <span title="0.11078s from fe18.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
    <a class="left" href="https://github.com/">
      <span class="mega-icon mega-icon-invertocat"></span>
    </a>
    <ul id="legal">
        <li><a href="https://github.com/site/terms">Terms of Service</a></li>
        <li><a href="https://github.com/site/privacy">Privacy</a></li>
        <li><a href="https://github.com/security">Security</a></li>
    </ul>

  </div><!-- /.container -->

</div><!-- /.#footer -->


    

    

<div id="keyboard_shortcuts_pane" class="instapaper_ignore readability-extra" style="display:none">
  <h2>Keyboard Shortcuts <small><a href="#" class="js-see-all-keyboard-shortcuts">(see all)</a></small></h2>

  <div class="columns threecols">
    <div class="column first">
      <h3>Site wide shortcuts</h3>
      <dl class="keyboard-mappings">
        <dt>s</dt>
        <dd>Focus command bar</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>?</dt>
        <dd>Bring up this help dialog</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column middle" style='display:none'>
      <h3>Commit list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>c <em>or</em> o <em>or</em> enter</dt>
        <dd>Open commit</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>y</dt>
        <dd>Expand URL to its canonical form</dd>
      </dl>
    </div><!-- /.column.first -->

    <div class="column last js-hidden-pane" style='display:none'>
      <h3>Pull request list</h3>
      <dl class="keyboard-mappings">
        <dt>j</dt>
        <dd>Move selection down</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>k</dt>
        <dd>Move selection up</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt>o <em>or</em> enter</dt>
        <dd>Open issue</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
        <dd>Submit comment</dd>
      </dl>
      <dl class="keyboard-mappings">
        <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
        <dd>Preview comment</dd>
      </dl>
    </div><!-- /.columns.last -->

  </div><!-- /.columns.equacols -->

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>x</dt>
          <dd>Toggle selection</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> shift p</dt>
          <dd>Preview comment</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>c</dt>
          <dd>Create issue</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Create label</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>i</dt>
          <dd>Back to inbox</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>u</dt>
          <dd>Back to issues</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>/</dt>
          <dd>Focus issues search</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Issues Dashboard</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open issue</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>

    <h3>Network Graph</h3>
    <div class="columns equacols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt><span class="badmono">←</span> <em>or</em> h</dt>
          <dd>Scroll left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">→</span> <em>or</em> l</dt>
          <dd>Scroll right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↑</span> <em>or</em> k</dt>
          <dd>Scroll up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt><span class="badmono">↓</span> <em>or</em> j</dt>
          <dd>Scroll down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Toggle visibility of head labels</dd>
        </dl>
      </div><!-- /.column.first -->
      <div class="column last">
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">←</span> <em>or</em> shift h</dt>
          <dd>Scroll all the way left</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">→</span> <em>or</em> shift l</dt>
          <dd>Scroll all the way right</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↑</span> <em>or</em> shift k</dt>
          <dd>Scroll all the way up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift <span class="badmono">↓</span> <em>or</em> shift j</dt>
          <dd>Scroll all the way down</dd>
        </dl>
      </div><!-- /.column.last -->
    </div>
  </div>

  <div class="js-hidden-pane" >
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first js-hidden-pane" >
        <h3>Source Code Browsing</h3>
        <dl class="keyboard-mappings">
          <dt>t</dt>
          <dd>Activates the file finder</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>l</dt>
          <dd>Jump to line</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>w</dt>
          <dd>Switch branch/tag</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>y</dt>
          <dd>Expand URL to its canonical form</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <div class="columns threecols">
      <div class="column first">
        <h3>Browsing Commits</h3>
        <dl class="keyboard-mappings">
          <dt><span class="platform-mac">⌘</span><span class="platform-other">ctrl</span> <em>+</em> enter</dt>
          <dd>Submit comment</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>escape</dt>
          <dd>Close form</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>p</dt>
          <dd>Parent commit</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o</dt>
          <dd>Other parent commit</dd>
        </dl>
      </div>
    </div>
  </div>

  <div class="js-hidden-pane" style='display:none'>
    <div class="rule"></div>
    <h3>Notifications</h3>

    <div class="columns threecols">
      <div class="column first">
        <dl class="keyboard-mappings">
          <dt>j</dt>
          <dd>Move selection down</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>k</dt>
          <dd>Move selection up</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>o <em>or</em> enter</dt>
          <dd>Open notification</dd>
        </dl>
      </div><!-- /.column.first -->

      <div class="column second">
        <dl class="keyboard-mappings">
          <dt>e <em>or</em> shift i <em>or</em> y</dt>
          <dd>Mark as read</dd>
        </dl>
        <dl class="keyboard-mappings">
          <dt>shift m</dt>
          <dd>Mute thread</dd>
        </dl>
      </div><!-- /.column.first -->
    </div>
  </div>

</div>

    <div id="markdown-help" class="instapaper_ignore readability-extra">
  <h2>Markdown Cheat Sheet</h2>

  <div class="cheatsheet-content">

  <div class="mod">
    <div class="col">
      <h3>Format Text</h3>
      <p>Headers</p>
      <pre>
# This is an &lt;h1&gt; tag
## This is an &lt;h2&gt; tag
###### This is an &lt;h6&gt; tag</pre>
     <p>Text styles</p>
     <pre>
*This text will be italic*
_This will also be italic_
**This text will be bold**
__This will also be bold__

*You **can** combine them*
</pre>
    </div>
    <div class="col">
      <h3>Lists</h3>
      <p>Unordered</p>
      <pre>
* Item 1
* Item 2
  * Item 2a
  * Item 2b</pre>
     <p>Ordered</p>
     <pre>
1. Item 1
2. Item 2
3. Item 3
   * Item 3a
   * Item 3b</pre>
    </div>
    <div class="col">
      <h3>Miscellaneous</h3>
      <p>Images</p>
      <pre>
![GitHub Logo](/images/logo.png)
Format: ![Alt Text](url)
</pre>
     <p>Links</p>
     <pre>
http://github.com - automatic!
[GitHub](http://github.com)</pre>
<p>Blockquotes</p>
     <pre>
As Kanye West said:

> We're living the future so
> the present is our past.
</pre>
    </div>
  </div>
  <div class="rule"></div>

  <h3>Code Examples in Markdown</h3>
  <div class="col">
      <p>Syntax highlighting with <a href="http://github.github.com/github-flavored-markdown/" title="GitHub Flavored Markdown" target="_blank">GFM</a></p>
      <pre>
```javascript
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```</pre>
    </div>
    <div class="col">
      <p>Or, indent your code 4 spaces</p>
      <pre>
Here is a Python code example
without syntax highlighting:

    def foo:
      if not bar:
        return true</pre>
    </div>
    <div class="col">
      <p>Inline code for comments</p>
      <pre>
I think you should use an
`&lt;addr&gt;` element here instead.</pre>
    </div>
  </div>

  </div>
</div>


    <div id="ajax-error-message" class="flash flash-error">
      <span class="mini-icon mini-icon-exclamation"></span>
      Something went wrong with that request. Please try again.
      <a href="#" class="mini-icon mini-icon-remove-close ajax-error-dismiss"></a>
    </div>

    
    
    <span id='server_response_time' data-time='0.11217' data-host='fe18'></span>
    
  </body>
</html>

