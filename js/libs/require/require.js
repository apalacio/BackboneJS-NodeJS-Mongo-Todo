  


<!DOCTYPE html>
<html>
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# githubog: http://ogp.me/ns/fb/githubog#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>backbone-fundamentals/practicals/modular-todo-app/js/libs/require/require.js at master · addyosmani/backbone-fundamentals</title>
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
    

        <link rel='permalink' href='/addyosmani/backbone-fundamentals/blob/58553202f1e778b06ae2fae4684fdb431f0ad659/practicals/modular-todo-app/js/libs/require/require.js'>
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
                      <a href="/addyosmani/backbone-fundamentals/blob/better-rest/practicals/modular-todo-app/js/libs/require/require.js" class="js-navigation-open" data-name="better-rest" rel="nofollow">better-rest</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/gh-pages/practicals/modular-todo-app/js/libs/require/require.js" class="js-navigation-open" data-name="gh-pages" rel="nofollow">gh-pages</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target ">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/labs/practicals/modular-todo-app/js/libs/require/require.js" class="js-navigation-open" data-name="labs" rel="nofollow">labs</a>
                  </h4>
                </div>
                <div class="commitish-item branch-commitish selector-item js-navigation-item js-navigation-target selected">
                  <span class="mini-icon mini-icon-confirm"></span>
                  <h4>
                      <a href="/addyosmani/backbone-fundamentals/blob/master/practicals/modular-todo-app/js/libs/require/require.js" class="js-navigation-open" data-name="master" rel="nofollow">master</a>
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
                        <a href="/addyosmani/backbone-fundamentals/blob/v0.9/practicals/modular-todo-app/js/libs/require/require.js" class="js-navigation-open" data-name="v0.9" rel="nofollow">v0.9</a>
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
          


<!-- blob contrib key: blob_contributors:v21:9ae9a2a078ab24e4a5aba47d4e952f19 -->
<!-- blob contrib frag key: views10/v8/blob_contributors:v21:9ae9a2a078ab24e4a5aba47d4e952f19 -->

<div id="slider">


    <div class="frame-meta">

      <p title="This is a placeholder element" class="js-history-link-replace hidden"></p>
      <div class="breadcrumb">
        <span class='bold'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">backbone-fundamentals</span></a></span></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">practicals</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">modular-todo-app</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">js</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js/libs" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">libs</span></a></span> / <span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/addyosmani/backbone-fundamentals/tree/master/practicals/modular-todo-app/js/libs/require" class="js-slide-to" data-direction="back" itemscope="url"><span itemprop="title">require</span></a></span> / <strong class="final-path">require.js</strong> <span class="js-zeroclipboard zeroclipboard-button" data-clipboard-text="practicals/modular-todo-app/js/libs/require/require.js" data-copied-hint="copied!" title="copy to clipboard"><span class="mini-icon mini-icon-clipboard"></span></span>
      </div>

      <a href="/addyosmani/backbone-fundamentals/find/master" class="js-slide-to" data-hotkey="t" style="display:none">Show File Finder</a>

        <div class="commit commit-loader file-history-tease js-deferred-content" data-url="/addyosmani/backbone-fundamentals/contributors/master/practicals/modular-todo-app/js/libs/require/require.js">
          Fetching contributors…

          <div class="participation">
            <p class="loader-loading"><img alt="Octocat-spinner-32-eaf2f5" height="16" src="https://a248.e.akamai.net/assets.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif?1340659511" width="16" /></p>
            <p class="loader-error">Cannot retrieve contributors at this time</p>
          </div>
        </div>

    </div><!-- ./.frame-meta -->

    <div class="frames">
      <div class="frame" data-permalink-url="/addyosmani/backbone-fundamentals/blob/58553202f1e778b06ae2fae4684fdb431f0ad659/practicals/modular-todo-app/js/libs/require/require.js" data-title="backbone-fundamentals/practicals/modular-todo-app/js/libs/require/require.js at master · addyosmani/backbone-fundamentals · GitHub" data-type="blob">

        <div id="files" class="bubble">
          <div class="file">
            <div class="meta">
              <div class="info">
                <span class="icon"><b class="mini-icon mini-icon-text-file"></b></span>
                <span class="mode" title="File Mode">file</span>
                  <span>32 lines (31 sloc)</span>
                <span>12.866 kb</span>
              </div>
              <ul class="button-group actions">
                  <li>
                        <a class="grouped-button minibutton bigger lighter tooltipped leftwards"
                           title="Clicking this button will automatically fork this project so you can edit the file"
                           href="/addyosmani/backbone-fundamentals/edit/master/practicals/modular-todo-app/js/libs/require/require.js"
                           data-method="post" rel="nofollow">Edit</a>
                  </li>
                <li><a href="/addyosmani/backbone-fundamentals/raw/master/practicals/modular-todo-app/js/libs/require/require.js" class="minibutton grouped-button bigger lighter" id="raw-url">Raw</a></li>
                  <li><a href="/addyosmani/backbone-fundamentals/blame/master/practicals/modular-todo-app/js/libs/require/require.js" class="minibutton grouped-button bigger lighter">Blame</a></li>
                <li><a href="/addyosmani/backbone-fundamentals/commits/master/practicals/modular-todo-app/js/libs/require/require.js" class="minibutton grouped-button bigger lighter" rel="nofollow">History</a></li>
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
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
</pre>
          </td>
          <td width="100%">
                <div class="highlight"><pre><div class='line' id='LC1'><span class="cm">/*</span></div><div class='line' id='LC2'><span class="cm"> RequireJS 1.0.2 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.</span></div><div class='line' id='LC3'><span class="cm"> Available via the MIT or new BSD license.</span></div><div class='line' id='LC4'><span class="cm"> see: http://github.com/jrburke/requirejs for details</span></div><div class='line' id='LC5'><span class="cm">*/</span></div><div class='line' id='LC6'><span class="kd">var</span> <span class="nx">requirejs</span><span class="p">,</span><span class="nx">require</span><span class="p">,</span><span class="nx">define</span><span class="p">;</span></div><div class='line' id='LC7'><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">function</span> <span class="nx">J</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">M</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">===</span><span class="s2">&quot;[object Function]&quot;</span><span class="p">}</span><span class="kd">function</span> <span class="nx">E</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">M</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">===</span><span class="s2">&quot;[object Array]&quot;</span><span class="p">}</span><span class="kd">function</span> <span class="nx">Z</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">k</span> <span class="k">in</span> <span class="nx">c</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">K</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">k</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="o">||</span><span class="nx">h</span><span class="p">))</span><span class="nx">a</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span><span class="k">return</span> <span class="nx">d</span><span class="p">}</span><span class="kd">function</span> <span class="nx">N</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="nx">a</span><span class="o">=</span><span class="nb">Error</span><span class="p">(</span><span class="nx">c</span><span class="o">+</span><span class="s2">&quot;\nhttp://requirejs.org/docs/errors.html#&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">originalError</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">$</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">q</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">k</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">q</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">k</span><span class="p">];</span><span class="nx">k</span><span class="o">++</span><span class="p">){</span><span class="nx">q</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">q</span><span class="o">===</span><span class="s2">&quot;string&quot;</span><span class="o">?</span><span class="p">{</span><span class="nx">name</span><span class="o">:</span><span class="nx">q</span><span class="p">}</span><span class="o">:</span><span class="nx">q</span><span class="p">;</span><span class="nx">j</span><span class="o">=</span><span class="nx">q</span><span class="p">.</span><span class="nx">location</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="nx">j</span><span class="o">||</span><span class="nx">j</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span><span class="o">!==</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;:&quot;</span><span class="p">)</span><span class="o">===-</span><span class="mi">1</span><span class="p">))</span><span class="nx">j</span><span class="o">=</span><span class="nx">d</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">j</span><span class="o">||</span><span class="nx">q</span><span class="p">.</span><span class="nx">name</span><span class="p">);</span><span class="nx">a</span><span class="p">[</span><span class="nx">q</span><span class="p">.</span><span class="nx">name</span><span class="p">]</span><span class="o">=</span><span class="p">{</span><span class="nx">name</span><span class="o">:</span><span class="nx">q</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="nx">location</span><span class="o">:</span><span class="nx">j</span><span class="o">||</span></div><div class='line' id='LC8'><span class="nx">q</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="nx">main</span><span class="o">:</span><span class="p">(</span><span class="nx">q</span><span class="p">.</span><span class="nx">main</span><span class="o">||</span><span class="s2">&quot;main&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">ea</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">)}}}</span><span class="kd">function</span> <span class="nx">V</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">holdReady</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">holdReady</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="o">?</span><span class="nx">a</span><span class="p">.</span><span class="nx">readyWait</span><span class="o">+=</span><span class="mi">1</span><span class="o">:</span><span class="nx">a</span><span class="p">.</span><span class="nx">ready</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">fa</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">function</span> <span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">l</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="p">,</span><span class="nx">a</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">===</span><span class="s2">&quot;.&quot;</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">){</span><span class="nx">p</span><span class="p">.</span><span class="nx">pkgs</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span><span class="o">?</span><span class="nx">l</span><span class="o">=</span><span class="p">[</span><span class="nx">l</span><span class="p">]</span><span class="o">:</span><span class="p">(</span><span class="nx">l</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">l</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">));</span><span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">));</span><span class="kd">var</span> <span class="nx">c</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="nx">f</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span><span class="nx">a</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="o">===</span><span class="s2">&quot;.&quot;</span><span class="p">)</span><span class="nx">f</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="mi">1</span><span class="p">),</span><span class="nx">a</span><span class="o">-=</span><span class="mi">1</span><span class="p">;</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="o">===</span><span class="s2">&quot;..&quot;</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">===</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="p">[</span><span class="mi">2</span><span class="p">]</span><span class="o">===</span><span class="s2">&quot;..&quot;</span><span class="o">||</span><span class="nx">f</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="s2">&quot;..&quot;</span><span class="p">))</span><span class="k">break</span><span class="p">;</span><span class="k">else</span> <span class="nx">a</span><span class="o">&gt;</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">a</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">),</span><span class="nx">a</span><span class="o">-=</span><span class="mi">2</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">pkgs</span><span class="p">[</span><span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]];</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="o">===</span><span class="nx">f</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">.</span><span class="nx">main</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">f</span><span class="p">)}</span><span class="k">else</span> <span class="nx">b</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;./&quot;</span><span class="p">)</span><span class="o">===</span></div><div class='line' id='LC9'><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">2</span><span class="p">));</span><span class="k">return</span> <span class="nx">b</span><span class="p">}</span><span class="kd">function</span> <span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">l</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="o">?</span><span class="nx">b</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;!&quot;</span><span class="p">)</span><span class="o">:-</span><span class="mi">1</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">l</span><span class="o">?</span><span class="nx">l</span><span class="p">.</span><span class="nx">name</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">h</span><span class="p">;</span><span class="nx">f</span><span class="o">!==-</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="p">),</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">f</span><span class="o">+</span><span class="mi">1</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="p">));</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">));</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">?</span><span class="nx">e</span><span class="o">=</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">a</span><span class="p">])</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">normalize</span><span class="o">?</span><span class="nx">f</span><span class="p">.</span><span class="nx">normalize</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">return</span> <span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">)})</span><span class="o">:</span><span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">E</span><span class="p">[</span><span class="nx">e</span><span class="p">],</span><span class="nx">h</span><span class="o">||</span><span class="p">(</span><span class="nx">h</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">nameToUrl</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="nx">l</span><span class="p">),</span><span class="nx">E</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">h</span><span class="p">)));</span><span class="k">return</span><span class="p">{</span><span class="nx">prefix</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">name</span><span class="o">:</span><span class="nx">e</span><span class="p">,</span><span class="nx">parentMap</span><span class="o">:</span><span class="nx">l</span><span class="p">,</span><span class="nx">url</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">originalName</span><span class="o">:</span><span class="nx">i</span><span class="p">,</span><span class="nx">fullName</span><span class="o">:</span><span class="nx">a</span><span class="o">?</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;!&quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">e</span><span class="o">||</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">:</span><span class="nx">e</span><span class="p">}}</span><span class="kd">function</span> <span class="nx">k</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">priorityWait</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">a</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">=</span><span class="nx">l</span><span class="p">[</span><span class="nx">a</span><span class="p">];</span><span class="nx">a</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">s</span><span class="p">[</span><span class="nx">f</span><span class="p">]){</span><span class="nx">b</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="k">break</span><span class="p">}</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="k">delete</span> <span class="nx">p</span><span class="p">.</span><span class="nx">priorityWait</span><span class="p">}</span><span class="k">return</span> <span class="nx">b</span><span class="p">}</span></div><div class='line' id='LC10'><span class="kd">function</span> <span class="nx">j</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">l</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="k">return</span> <span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">ga</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span><span class="mi">0</span><span class="p">),</span><span class="nx">c</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">J</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]))</span><span class="nx">c</span><span class="p">.</span><span class="nx">__requireJsBuild</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span><span class="k">return</span> <span class="nx">b</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">a</span><span class="p">)}}</span><span class="kd">function</span> <span class="nx">q</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">l</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">j</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">require</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">l</span><span class="p">);</span><span class="nx">Z</span><span class="p">(</span><span class="nx">a</span><span class="p">,{</span><span class="nx">nameToUrl</span><span class="o">:</span><span class="nx">j</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">nameToUrl</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">toUrl</span><span class="o">:</span><span class="nx">j</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">toUrl</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">defined</span><span class="o">:</span><span class="nx">j</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireDefined</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">specified</span><span class="o">:</span><span class="nx">j</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireSpecified</span><span class="p">,</span><span class="nx">b</span><span class="p">),</span><span class="nx">isBrowser</span><span class="o">:</span><span class="nx">d</span><span class="p">.</span><span class="nx">isBrowser</span><span class="p">});</span><span class="k">return</span> <span class="nx">a</span><span class="p">}</span><span class="kd">function</span> <span class="nx">o</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">l</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">C</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">i</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">ba</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">deps</span><span class="p">;</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">listeners</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">C</span><span class="o">&amp;&amp;</span><span class="nx">J</span><span class="p">(</span><span class="nx">C</span><span class="p">)){</span><span class="k">if</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">catchError</span><span class="p">.</span><span class="nx">define</span><span class="p">)</span><span class="k">try</span><span class="p">{</span><span class="nx">a</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">execCb</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span><span class="nx">ba</span><span class="p">,</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">])}</span><span class="k">catch</span><span class="p">(</span><span class="nx">k</span><span class="p">){</span><span class="nx">l</span><span class="o">=</span><span class="nx">k</span><span class="p">}</span><span class="k">else</span> <span class="nx">a</span><span class="o">=</span></div><div class='line' id='LC11'><span class="nx">d</span><span class="p">.</span><span class="nx">execCb</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">callback</span><span class="p">,</span><span class="nx">ba</span><span class="p">,</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]);</span><span class="k">if</span><span class="p">(</span><span class="nx">e</span><span class="p">)(</span><span class="nx">C</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">cjsModule</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">C</span><span class="p">.</span><span class="nx">exports</span><span class="o">!==</span><span class="k">void</span> <span class="mi">0</span><span class="o">&amp;&amp;</span><span class="nx">C</span><span class="p">.</span><span class="nx">exports</span><span class="o">!==</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">?</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">cjsModule</span><span class="p">.</span><span class="nx">exports</span><span class="o">:</span><span class="nx">a</span><span class="o">===</span><span class="k">void</span> <span class="mi">0</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">usingExports</span><span class="o">?</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">:</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">F</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">))}</span><span class="k">else</span> <span class="nx">e</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=</span><span class="nx">C</span><span class="p">,</span><span class="nx">F</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">Q</span><span class="p">[</span><span class="nx">e</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">D</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">])</span><span class="k">delete</span> <span class="nx">D</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">],</span><span class="nx">b</span><span class="p">.</span><span class="nx">isDone</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">waitCount</span><span class="o">-=</span><span class="mi">1</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">waitCount</span><span class="o">===</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">I</span><span class="o">=</span><span class="p">[]);</span><span class="k">delete</span> <span class="nx">R</span><span class="p">[</span><span class="nx">e</span><span class="p">];</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">onResourceLoad</span><span class="o">&amp;&amp;!</span><span class="nx">b</span><span class="p">.</span><span class="nx">placeholder</span><span class="p">)</span><span class="nx">d</span><span class="p">.</span><span class="nx">onResourceLoad</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">depArray</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">l</span><span class="p">)</span><span class="k">return</span> <span class="nx">a</span><span class="o">=</span><span class="p">(</span><span class="nx">e</span><span class="o">?</span><span class="nx">h</span><span class="p">(</span><span class="nx">e</span><span class="p">).</span><span class="nx">url</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">||</span><span class="nx">l</span><span class="p">.</span><span class="nx">fileName</span><span class="o">||</span><span class="nx">l</span><span class="p">.</span><span class="nx">sourceURL</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">l</span><span class="p">.</span><span class="nx">moduleTree</span><span class="p">,</span><span class="nx">l</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="s2">&quot;defineerror&quot;</span><span class="p">,</span><span class="s1">&#39;Error evaluating module &quot;&#39;</span><span class="o">+</span><span class="nx">e</span><span class="o">+</span><span class="s1">&#39;&quot; at location &quot;&#39;</span><span class="o">+</span></div><div class='line' id='LC12'><span class="nx">a</span><span class="o">+</span><span class="s1">&#39;&quot;:\n&#39;</span><span class="o">+</span><span class="nx">l</span><span class="o">+</span><span class="s2">&quot;\nfileName:&quot;</span><span class="o">+</span><span class="nx">a</span><span class="o">+</span><span class="s2">&quot;\nlineNumber: &quot;</span><span class="o">+</span><span class="p">(</span><span class="nx">l</span><span class="p">.</span><span class="nx">lineNumber</span><span class="o">||</span><span class="nx">l</span><span class="p">.</span><span class="nx">line</span><span class="p">),</span><span class="nx">l</span><span class="p">),</span><span class="nx">l</span><span class="p">.</span><span class="nx">moduleName</span><span class="o">=</span><span class="nx">e</span><span class="p">,</span><span class="nx">l</span><span class="p">.</span><span class="nx">moduleTree</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">l</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">l</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">C</span><span class="o">=</span><span class="nx">c</span><span class="p">[</span><span class="nx">l</span><span class="p">];</span><span class="nx">l</span><span class="o">++</span><span class="p">)</span><span class="nx">C</span><span class="p">(</span><span class="nx">a</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">r</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="kd">function</span><span class="p">(</span><span class="nx">f</span><span class="p">){</span><span class="nx">b</span><span class="p">.</span><span class="nx">depDone</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">depDone</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">deps</span><span class="p">[</span><span class="nx">a</span><span class="p">]</span><span class="o">=</span><span class="nx">f</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">depCount</span><span class="o">-=</span><span class="mi">1</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">depCount</span><span class="o">||</span><span class="nx">o</span><span class="p">(</span><span class="nx">b</span><span class="p">))}}</span><span class="kd">function</span> <span class="nx">u</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">h</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">L</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">L</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">b</span><span class="p">]),</span><span class="nx">e</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">a</span><span class="p">.</span><span class="nx">loading</span><span class="p">)</span><span class="nx">a</span><span class="p">.</span><span class="nx">loading</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">a</span><span class="p">.</span><span class="nx">callback</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">b</span><span class="p">};</span><span class="nx">o</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">s</span><span class="p">[</span><span class="nx">a</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">w</span><span class="p">()},</span><span class="nx">e</span><span class="p">.</span><span class="nx">fromText</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">l</span><span class="o">=</span><span class="nx">O</span><span class="p">;</span><span class="nx">s</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">fake</span><span class="p">[</span><span class="nx">b</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">O</span><span class="o">=!</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span></div><div class='line' id='LC13'><span class="nx">l</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">O</span><span class="o">=!</span><span class="mi">0</span><span class="p">);</span><span class="nx">g</span><span class="p">.</span><span class="nx">completeLoad</span><span class="p">(</span><span class="nx">b</span><span class="p">)},</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">m</span><span class="o">?</span><span class="nx">e</span><span class="p">(</span><span class="nx">m</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="o">:</span><span class="nx">i</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">q</span><span class="p">(</span><span class="nx">f</span><span class="p">.</span><span class="nx">parentMap</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="nx">e</span><span class="p">,</span><span class="nx">p</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">v</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">D</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">D</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">I</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">waitCount</span><span class="o">+=</span><span class="mi">1</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">B</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">this</span><span class="p">.</span><span class="nx">listeners</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">t</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">f</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">prefix</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="o">?</span><span class="nx">L</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">L</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="o">:</span><span class="kc">null</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">;</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nx">R</span><span class="p">[</span><span class="nx">f</span><span class="p">]);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">i</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">e</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="p">{</span><span class="nx">id</span><span class="o">:</span><span class="p">(</span><span class="nx">c</span><span class="o">&amp;&amp;!</span><span class="nx">d</span><span class="o">?</span><span class="nx">M</span><span class="o">++</span> <span class="o">+</span><span class="s2">&quot;__p@:&quot;</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nx">f</span><span class="o">||</span><span class="s2">&quot;__r@&quot;</span><span class="o">+</span><span class="nx">M</span><span class="o">++</span><span class="p">),</span><span class="nx">map</span><span class="o">:</span><span class="nx">b</span><span class="p">,</span><span class="nx">depCount</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">depDone</span><span class="o">:</span><span class="p">[],</span><span class="nx">depCallbacks</span><span class="o">:</span><span class="p">[],</span><span class="nx">deps</span><span class="o">:</span><span class="p">[],</span><span class="nx">listeners</span><span class="o">:</span><span class="p">[],</span><span class="nx">add</span><span class="o">:</span><span class="nx">B</span><span class="p">},</span><span class="nx">y</span><span class="p">[</span><span class="nx">i</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="nx">c</span><span class="o">||</span><span class="nx">L</span><span class="p">[</span><span class="nx">c</span><span class="p">])))</span><span class="nx">R</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">i</span><span class="p">;</span><span class="nx">c</span><span class="o">&amp;&amp;!</span><span class="nx">d</span><span class="o">?</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">h</span><span class="p">(</span><span class="nx">c</span><span class="p">),</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="nx">f</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">originalName</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">parentMap</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span></div><div class='line' id='LC14'><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="nx">i</span><span class="p">.</span><span class="nx">placeholder</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">a</span><span class="p">.</span><span class="nx">add</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">i</span><span class="p">.</span><span class="nx">callback</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">b</span><span class="p">};</span><span class="nx">o</span><span class="p">(</span><span class="nx">i</span><span class="p">)})}))</span><span class="o">:</span><span class="nx">e</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">.</span><span class="nx">id</span><span class="p">]</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">i</span><span class="p">),</span><span class="nx">v</span><span class="p">(</span><span class="nx">i</span><span class="p">));</span><span class="k">return</span> <span class="nx">i</span><span class="p">}</span><span class="kd">function</span> <span class="nx">x</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">name</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">e</span><span class="o">=</span><span class="nx">t</span><span class="p">(</span><span class="nx">b</span><span class="p">),</span><span class="nx">k</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">id</span><span class="p">,</span><span class="nx">j</span><span class="o">=</span><span class="nx">e</span><span class="p">.</span><span class="nx">deps</span><span class="p">,</span><span class="nx">n</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">m</span><span class="o">||</span><span class="nx">s</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">===!</span><span class="mi">0</span><span class="o">||</span><span class="nx">i</span><span class="o">===</span><span class="s2">&quot;jquery&quot;</span><span class="o">&amp;&amp;</span><span class="nx">p</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">&amp;&amp;</span><span class="nx">p</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">!==</span><span class="nx">f</span><span class="p">().</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="p">)</span><span class="k">return</span><span class="p">;</span><span class="nx">y</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">s</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">===</span><span class="s2">&quot;jquery&quot;</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">S</span><span class="p">(</span><span class="nx">f</span><span class="p">())}</span><span class="nx">e</span><span class="p">.</span><span class="nx">depArray</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="nx">e</span><span class="p">.</span><span class="nx">callback</span><span class="o">=</span><span class="nx">f</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">f</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">f</span><span class="o">&lt;</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">f</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span><span class="p">])</span><span class="nx">k</span><span class="o">=</span><span class="nx">h</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">d</span><span class="o">?</span><span class="nx">b</span><span class="o">:</span><span class="nx">c</span><span class="p">),</span><span class="nx">n</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">n</span><span class="p">,</span><span class="nx">n</span><span class="o">===</span><span class="s2">&quot;require&quot;</span><span class="o">?</span><span class="nx">j</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">q</span><span class="p">(</span><span class="nx">b</span><span class="p">)</span><span class="o">:</span><span class="nx">n</span><span class="o">===</span><span class="s2">&quot;exports&quot;</span><span class="o">?</span><span class="p">(</span><span class="nx">j</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">=</span><span class="p">{},</span><span class="nx">e</span><span class="p">.</span><span class="nx">usingExports</span><span class="o">=!</span><span class="mi">0</span><span class="p">)</span><span class="o">:</span><span class="nx">n</span><span class="o">===</span></div><div class='line' id='LC15'><span class="s2">&quot;module&quot;</span><span class="o">?</span><span class="nx">e</span><span class="p">.</span><span class="nx">cjsModule</span><span class="o">=</span><span class="nx">j</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="p">{</span><span class="nx">id</span><span class="o">:</span><span class="nx">d</span><span class="p">,</span><span class="nx">uri</span><span class="o">:</span><span class="nx">d</span><span class="o">?</span><span class="nx">g</span><span class="p">.</span><span class="nx">nameToUrl</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="kc">null</span><span class="p">,</span><span class="nx">c</span><span class="p">)</span><span class="o">:</span><span class="k">void</span> <span class="mi">0</span><span class="p">,</span><span class="nx">exports</span><span class="o">:</span><span class="nx">m</span><span class="p">[</span><span class="nx">i</span><span class="p">]}</span><span class="o">:</span><span class="nx">n</span> <span class="k">in</span> <span class="nx">m</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">n</span> <span class="k">in</span> <span class="nx">D</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">F</span><span class="p">)</span><span class="o">||</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">F</span><span class="o">&amp;&amp;</span><span class="nx">Q</span><span class="p">[</span><span class="nx">n</span><span class="p">])</span><span class="o">?</span><span class="nx">j</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">m</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">:</span><span class="p">(</span><span class="nx">i</span> <span class="k">in</span> <span class="nx">F</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">F</span><span class="p">[</span><span class="nx">n</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="k">delete</span> <span class="nx">m</span><span class="p">[</span><span class="nx">n</span><span class="p">],</span><span class="nx">T</span><span class="p">[</span><span class="nx">k</span><span class="p">.</span><span class="nx">url</span><span class="p">]</span><span class="o">=!</span><span class="mi">1</span><span class="p">),</span><span class="nx">e</span><span class="p">.</span><span class="nx">depCount</span><span class="o">+=</span><span class="mi">1</span><span class="p">,</span><span class="nx">e</span><span class="p">.</span><span class="nx">depCallbacks</span><span class="p">[</span><span class="nx">f</span><span class="p">]</span><span class="o">=</span><span class="nx">r</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">f</span><span class="p">),</span><span class="nx">t</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">).</span><span class="nx">add</span><span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">depCallbacks</span><span class="p">[</span><span class="nx">f</span><span class="p">]));</span><span class="nx">e</span><span class="p">.</span><span class="nx">depCount</span><span class="o">?</span><span class="nx">v</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span><span class="o">:</span><span class="nx">o</span><span class="p">(</span><span class="nx">e</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">n</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="nx">x</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">b</span><span class="p">)}</span><span class="kd">function</span> <span class="nx">z</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">b</span><span class="p">.</span><span class="nx">isDone</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">map</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">d</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">depArray</span><span class="p">,</span><span class="nx">g</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">k</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">])</span><span class="k">return</span> <span class="nx">m</span><span class="p">[</span><span class="nx">c</span><span class="p">];</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">g</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">g</span><span class="o">&lt;</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">g</span><span class="o">++</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nx">d</span><span class="p">[</span><span class="nx">g</span><span class="p">])</span><span class="k">if</span><span class="p">((</span><span class="nx">e</span><span class="o">=</span><span class="nx">h</span><span class="p">(</span><span class="nx">i</span><span class="p">).</span><span class="nx">prefix</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">k</span><span class="o">=</span><span class="nx">D</span><span class="p">[</span><span class="nx">e</span><span class="p">])</span><span class="o">&amp;&amp;</span><span class="nx">z</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">a</span><span class="p">),(</span><span class="nx">e</span><span class="o">=</span><span class="nx">D</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span><span class="o">&amp;&amp;!</span><span class="nx">e</span><span class="p">.</span><span class="nx">isDone</span><span class="o">&amp;&amp;</span></div><div class='line' id='LC16'><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">])</span><span class="nx">i</span><span class="o">=</span><span class="nx">z</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span><span class="nx">a</span><span class="p">),</span><span class="nx">b</span><span class="p">.</span><span class="nx">depCallbacks</span><span class="p">[</span><span class="nx">g</span><span class="p">](</span><span class="nx">i</span><span class="p">);</span><span class="k">return</span> <span class="nx">c</span><span class="o">?</span><span class="nx">m</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">:</span><span class="k">void</span> <span class="mi">0</span><span class="p">}}</span><span class="kd">function</span> <span class="nx">A</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">waitSeconds</span><span class="o">*</span><span class="mi">1</span><span class="nx">E3</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">startTime</span><span class="o">+</span><span class="nx">b</span><span class="o">&lt;</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">(),</span><span class="nx">b</span><span class="o">=</span><span class="s2">&quot;&quot;</span><span class="p">,</span><span class="nx">c</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">h</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">j</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">pausedCount</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">)){</span><span class="k">if</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">priorityWait</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">k</span><span class="p">())</span><span class="nx">w</span><span class="p">();</span><span class="k">else</span> <span class="k">return</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">j</span> <span class="k">in</span> <span class="nx">s</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">j</span> <span class="k">in</span> <span class="nx">K</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="o">!</span><span class="nx">s</span><span class="p">[</span><span class="nx">j</span><span class="p">]))</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="nx">b</span><span class="o">+=</span><span class="nx">j</span><span class="o">+</span><span class="s2">&quot; &quot;</span><span class="p">;</span><span class="k">else</span><span class="p">{</span><span class="nx">h</span><span class="o">=!</span><span class="mi">0</span><span class="p">;</span><span class="k">break</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">c</span><span class="o">||</span><span class="nx">g</span><span class="p">.</span><span class="nx">waitCount</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">)</span><span class="k">return</span> <span class="nx">j</span><span class="o">=</span><span class="nx">N</span><span class="p">(</span><span class="s2">&quot;timeout&quot;</span><span class="p">,</span><span class="s2">&quot;Load timeout for modules: &quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">),</span><span class="nx">j</span><span class="p">.</span><span class="nx">requireType</span><span class="o">=</span><span class="s2">&quot;timeout&quot;</span><span class="p">,</span><span class="nx">j</span><span class="p">.</span><span class="nx">requireModules</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">h</span><span class="o">||</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="p">){</span><span class="k">if</span><span class="p">((</span><span class="nx">G</span><span class="o">||</span><span class="nx">ca</span><span class="p">)</span><span class="o">&amp;&amp;!</span><span class="nx">W</span><span class="p">)</span><span class="nx">W</span><span class="o">=</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">W</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">A</span><span class="p">()},</span><span class="mi">50</span><span class="p">)}</span><span class="k">else</span><span class="p">{</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">waitCount</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">H</span><span class="o">=</span></div><div class='line' id='LC17'><span class="mi">0</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">I</span><span class="p">[</span><span class="nx">H</span><span class="p">];</span><span class="nx">H</span><span class="o">++</span><span class="p">)</span><span class="nx">z</span><span class="p">(</span><span class="nx">b</span><span class="p">,{});</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">w</span><span class="p">();</span><span class="nx">X</span><span class="o">&lt;</span><span class="mi">5</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">X</span><span class="o">+=</span><span class="mi">1</span><span class="p">,</span><span class="nx">A</span><span class="p">())}</span><span class="nx">X</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">checkReadyState</span><span class="p">()}}}}</span><span class="kd">var</span> <span class="nx">g</span><span class="p">,</span><span class="nx">w</span><span class="p">,</span><span class="nx">p</span><span class="o">=</span><span class="p">{</span><span class="nx">waitSeconds</span><span class="o">:</span><span class="mi">7</span><span class="p">,</span><span class="nx">baseUrl</span><span class="o">:</span><span class="s2">&quot;./&quot;</span><span class="p">,</span><span class="nx">paths</span><span class="o">:</span><span class="p">{},</span><span class="nx">pkgs</span><span class="o">:</span><span class="p">{},</span><span class="nx">catchError</span><span class="o">:</span><span class="p">{}},</span><span class="nx">P</span><span class="o">=</span><span class="p">[],</span><span class="nx">y</span><span class="o">=</span><span class="p">{</span><span class="nx">require</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">exports</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">module</span><span class="o">:!</span><span class="mi">0</span><span class="p">},</span><span class="nx">E</span><span class="o">=</span><span class="p">{},</span><span class="nx">m</span><span class="o">=</span><span class="p">{},</span><span class="nx">s</span><span class="o">=</span><span class="p">{},</span><span class="nx">D</span><span class="o">=</span><span class="p">{},</span><span class="nx">I</span><span class="o">=</span><span class="p">[],</span><span class="nx">T</span><span class="o">=</span><span class="p">{},</span><span class="nx">M</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">R</span><span class="o">=</span><span class="p">{},</span><span class="nx">L</span><span class="o">=</span><span class="p">{},</span><span class="nx">F</span><span class="o">=</span><span class="p">{},</span><span class="nx">Q</span><span class="o">=</span><span class="p">{},</span><span class="nx">Y</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">S</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">g</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">b</span><span class="o">||</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">jQuery</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">?</span><span class="nx">jQuery</span><span class="o">:</span><span class="kc">null</span><span class="p">))</span><span class="o">&amp;&amp;!</span><span class="p">(</span><span class="nx">p</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">fn</span><span class="p">.</span><span class="nx">jquery</span><span class="o">!==</span><span class="nx">p</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="s2">&quot;holdReady&quot;</span><span class="k">in</span> <span class="nx">b</span><span class="o">||</span><span class="s2">&quot;readyWait&quot;</span><span class="k">in</span> <span class="nx">b</span><span class="p">))</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">=</span><span class="nx">b</span><span class="p">,</span><span class="nx">n</span><span class="p">([</span><span class="s2">&quot;jquery&quot;</span><span class="p">,[],</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">jQuery</span><span class="p">}]),</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="p">)</span><span class="nx">V</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="nx">g</span><span class="p">.</span><span class="nx">jQueryIncremented</span><span class="o">=</span></div><div class='line' id='LC18'><span class="o">!</span><span class="mi">0</span><span class="p">};</span><span class="nx">w</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">i</span><span class="p">;</span><span class="nx">Y</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">&lt;=</span><span class="mi">0</span><span class="p">)</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="k">for</span><span class="p">(;</span><span class="nx">P</span><span class="p">.</span><span class="nx">length</span><span class="p">;)</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="o">=</span><span class="nx">P</span><span class="p">.</span><span class="nx">shift</span><span class="p">(),</span><span class="nx">b</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="kc">null</span><span class="p">)</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">N</span><span class="p">(</span><span class="s2">&quot;mismatch&quot;</span><span class="p">,</span><span class="s2">&quot;Mismatched anonymous define() module: &quot;</span><span class="o">+</span><span class="nx">b</span><span class="p">[</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">]));</span><span class="k">else</span> <span class="nx">n</span><span class="p">(</span><span class="nx">b</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">p</span><span class="p">.</span><span class="nx">priorityWait</span><span class="o">||</span><span class="nx">k</span><span class="p">())</span><span class="k">for</span><span class="p">(;</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="p">.</span><span class="nx">length</span><span class="p">;){</span><span class="nx">j</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">pausedCount</span><span class="o">+=</span><span class="nx">j</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="o">=</span><span class="p">[];</span><span class="k">for</span><span class="p">(</span><span class="nx">h</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">b</span><span class="o">=</span><span class="nx">j</span><span class="p">[</span><span class="nx">h</span><span class="p">];</span><span class="nx">h</span><span class="o">++</span><span class="p">)</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">map</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">url</span><span class="p">,</span><span class="nx">i</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">fullName</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">prefix</span><span class="o">?</span><span class="nx">u</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">prefix</span><span class="p">,</span><span class="nx">b</span><span class="p">)</span><span class="o">:!</span><span class="nx">T</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">&amp;&amp;!</span><span class="nx">s</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">load</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">c</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;empty:&quot;</span><span class="p">)</span><span class="o">!==</span><span class="mi">0</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">T</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=!</span><span class="mi">0</span><span class="p">));</span><span class="nx">g</span><span class="p">.</span><span class="nx">startTime</span><span class="o">=</span><span class="p">(</span><span class="k">new</span> <span class="nb">Date</span><span class="p">).</span><span class="nx">getTime</span><span class="p">();</span><span class="nx">g</span><span class="p">.</span><span class="nx">pausedCount</span><span class="o">-=</span><span class="nx">j</span><span class="p">.</span><span class="nx">length</span><span class="p">}</span><span class="nx">Y</span><span class="o">===</span></div><div class='line' id='LC19'><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="nx">A</span><span class="p">();</span><span class="nx">Y</span><span class="o">-=</span><span class="mi">1</span><span class="p">};</span><span class="nx">g</span><span class="o">=</span><span class="p">{</span><span class="nx">contextName</span><span class="o">:</span><span class="nx">a</span><span class="p">,</span><span class="nx">config</span><span class="o">:</span><span class="nx">p</span><span class="p">,</span><span class="nx">defQueue</span><span class="o">:</span><span class="nx">P</span><span class="p">,</span><span class="nx">waiting</span><span class="o">:</span><span class="nx">D</span><span class="p">,</span><span class="nx">waitCount</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">specified</span><span class="o">:</span><span class="nx">y</span><span class="p">,</span><span class="nx">loaded</span><span class="o">:</span><span class="nx">s</span><span class="p">,</span><span class="nx">urlMap</span><span class="o">:</span><span class="nx">E</span><span class="p">,</span><span class="nx">urlFetched</span><span class="o">:</span><span class="nx">T</span><span class="p">,</span><span class="nx">scriptCount</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">defined</span><span class="o">:</span><span class="nx">m</span><span class="p">,</span><span class="nx">paused</span><span class="o">:</span><span class="p">[],</span><span class="nx">pausedCount</span><span class="o">:</span><span class="mi">0</span><span class="p">,</span><span class="nx">plugins</span><span class="o">:</span><span class="nx">L</span><span class="p">,</span><span class="nx">needFullExec</span><span class="o">:</span><span class="nx">F</span><span class="p">,</span><span class="nx">fake</span><span class="o">:</span><span class="p">{},</span><span class="nx">fullExec</span><span class="o">:</span><span class="nx">Q</span><span class="p">,</span><span class="nx">managerCallbacks</span><span class="o">:</span><span class="nx">R</span><span class="p">,</span><span class="nx">makeModuleMap</span><span class="o">:</span><span class="nx">h</span><span class="p">,</span><span class="nx">normalize</span><span class="o">:</span><span class="nx">c</span><span class="p">,</span><span class="nx">configure</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">;</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">)</span><span class="o">!==</span><span class="s2">&quot;/&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">+=</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="nx">a</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">paths</span><span class="p">;</span><span class="nx">d</span><span class="o">=</span><span class="nx">p</span><span class="p">.</span><span class="nx">pkgs</span><span class="p">;</span><span class="nx">Z</span><span class="p">(</span><span class="nx">p</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">paths</span><span class="p">){</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">b</span><span class="p">.</span><span class="nx">paths</span><span class="p">)</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">K</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">paths</span><span class="p">[</span><span class="nx">c</span><span class="p">]);</span><span class="nx">p</span><span class="p">.</span><span class="nx">paths</span><span class="o">=</span><span class="nx">a</span><span class="p">}</span><span class="k">if</span><span class="p">((</span><span class="nx">a</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">packagePaths</span><span class="p">)</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">packages</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="nx">c</span> <span class="k">in</span></div><div class='line' id='LC20'><span class="nx">K</span><span class="o">||</span><span class="nx">$</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">],</span><span class="nx">c</span><span class="p">);</span><span class="nx">b</span><span class="p">.</span><span class="nx">packages</span><span class="o">&amp;&amp;</span><span class="nx">$</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">b</span><span class="p">.</span><span class="nx">packages</span><span class="p">);</span><span class="nx">p</span><span class="p">.</span><span class="nx">pkgs</span><span class="o">=</span><span class="nx">d</span><span class="p">}</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">priority</span><span class="p">)</span><span class="nx">c</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireWait</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireWait</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">g</span><span class="p">.</span><span class="nx">takeGlobalQueue</span><span class="p">(),</span><span class="nx">w</span><span class="p">(),</span><span class="nx">g</span><span class="p">.</span><span class="nx">require</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">priority</span><span class="p">),</span><span class="nx">w</span><span class="p">(),</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireWait</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">p</span><span class="p">.</span><span class="nx">priorityWait</span><span class="o">=</span><span class="nx">b</span><span class="p">.</span><span class="nx">priority</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">deps</span><span class="o">||</span><span class="nx">b</span><span class="p">.</span><span class="nx">callback</span><span class="p">)</span><span class="nx">g</span><span class="p">.</span><span class="nx">require</span><span class="p">(</span><span class="nx">b</span><span class="p">.</span><span class="nx">deps</span><span class="o">||</span><span class="p">[],</span><span class="nx">b</span><span class="p">.</span><span class="nx">callback</span><span class="p">)},</span><span class="nx">requireDefined</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">).</span><span class="nx">fullName</span> <span class="k">in</span> <span class="nx">m</span><span class="p">},</span><span class="nx">requireSpecified</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">a</span><span class="p">).</span><span class="nx">fullName</span> <span class="k">in</span> <span class="nx">y</span><span class="p">},</span><span class="nx">require</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">b</span><span class="o">===</span><span class="s2">&quot;string&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">(</span><span class="nx">c</span><span class="p">))</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">N</span><span class="p">(</span><span class="s2">&quot;requireargs&quot;</span><span class="p">,</span><span class="s2">&quot;Invalid require call&quot;</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">get</span><span class="p">)</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="nx">g</span><span class="p">,</span></div><div class='line' id='LC21'><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="nx">c</span><span class="o">=</span><span class="nx">h</span><span class="p">(</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="nx">b</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">fullName</span><span class="p">;</span><span class="k">return</span><span class="o">!</span><span class="p">(</span><span class="nx">b</span> <span class="k">in</span> <span class="nx">m</span><span class="p">)</span><span class="o">?</span><span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="p">(</span><span class="nx">N</span><span class="p">(</span><span class="s2">&quot;notloaded&quot;</span><span class="p">,</span><span class="s2">&quot;Module name &#39;&quot;</span><span class="o">+</span><span class="nx">c</span><span class="p">.</span><span class="nx">fullName</span><span class="o">+</span><span class="s2">&quot;&#39; has not been loaded yet for context: &quot;</span><span class="o">+</span><span class="nx">a</span><span class="p">))</span><span class="o">:</span><span class="nx">m</span><span class="p">[</span><span class="nx">b</span><span class="p">]}(</span><span class="nx">b</span><span class="o">&amp;&amp;</span><span class="nx">b</span><span class="p">.</span><span class="nx">length</span><span class="o">||</span><span class="nx">c</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">x</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span><span class="nx">b</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">f</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">g</span><span class="p">.</span><span class="nx">requireWait</span><span class="p">)</span><span class="k">for</span><span class="p">(;</span><span class="o">!</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">&amp;&amp;</span><span class="nx">g</span><span class="p">.</span><span class="nx">paused</span><span class="p">.</span><span class="nx">length</span><span class="p">;)</span><span class="nx">g</span><span class="p">.</span><span class="nx">takeGlobalQueue</span><span class="p">(),</span><span class="nx">w</span><span class="p">();</span><span class="k">return</span> <span class="nx">g</span><span class="p">.</span><span class="nx">require</span><span class="p">},</span><span class="nx">takeGlobalQueue</span><span class="o">:</span><span class="kd">function</span><span class="p">(){</span><span class="nx">U</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">ha</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">defQueue</span><span class="p">,[</span><span class="nx">g</span><span class="p">.</span><span class="nx">defQueue</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span><span class="mi">0</span><span class="p">].</span><span class="nx">concat</span><span class="p">(</span><span class="nx">U</span><span class="p">)),</span><span class="nx">U</span><span class="o">=</span><span class="p">[])},</span><span class="nx">completeLoad</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">b</span><span class="p">){</span><span class="kd">var</span> <span class="nx">a</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">takeGlobalQueue</span><span class="p">();</span><span class="nx">P</span><span class="p">.</span><span class="nx">length</span><span class="p">;)</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">P</span><span class="p">.</span><span class="nx">shift</span><span class="p">(),</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="kc">null</span><span class="p">){</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">=</span><span class="nx">b</span><span class="p">;</span><span class="k">break</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">[</span><span class="mi">0</span><span class="p">]</span><span class="o">===</span><span class="nx">b</span><span class="p">)</span><span class="k">break</span><span class="p">;</span></div><div class='line' id='LC22'><span class="k">else</span> <span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">a</span><span class="o">?</span><span class="nx">n</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">:</span><span class="nx">n</span><span class="p">([</span><span class="nx">b</span><span class="p">,[],</span><span class="nx">b</span><span class="o">===</span><span class="s2">&quot;jquery&quot;</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">jQuery</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">?</span><span class="kd">function</span><span class="p">(){</span><span class="k">return</span> <span class="nx">jQuery</span><span class="p">}</span><span class="o">:</span><span class="kc">null</span><span class="p">]);</span><span class="nx">S</span><span class="p">();</span><span class="nx">d</span><span class="p">.</span><span class="nx">isAsync</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">-=</span><span class="mi">1</span><span class="p">);</span><span class="nx">w</span><span class="p">();</span><span class="nx">d</span><span class="p">.</span><span class="nx">isAsync</span><span class="o">||</span><span class="p">(</span><span class="nx">g</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">-=</span><span class="mi">1</span><span class="p">)},</span><span class="nx">toUrl</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">){</span><span class="kd">var</span> <span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">lastIndexOf</span><span class="p">(</span><span class="s2">&quot;.&quot;</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="kc">null</span><span class="p">;</span><span class="nx">d</span><span class="o">!==-</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">h</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="nx">d</span><span class="p">,</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="p">),</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">substring</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">d</span><span class="p">));</span><span class="k">return</span> <span class="nx">g</span><span class="p">.</span><span class="nx">nameToUrl</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">c</span><span class="p">)},</span><span class="nx">nameToUrl</span><span class="o">:</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">f</span><span class="p">){</span><span class="kd">var</span> <span class="nx">j</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">i</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">m</span><span class="o">=</span><span class="nx">g</span><span class="p">.</span><span class="nx">config</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">f</span><span class="o">&amp;&amp;</span><span class="nx">f</span><span class="p">.</span><span class="nx">fullName</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">jsExtRegExp</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">a</span><span class="p">))</span><span class="nx">h</span><span class="o">=</span><span class="nx">a</span><span class="o">+</span><span class="p">(</span><span class="nx">h</span><span class="o">?</span><span class="nx">h</span><span class="o">:</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="k">else</span><span class="p">{</span><span class="nx">j</span><span class="o">=</span><span class="nx">m</span><span class="p">.</span><span class="nx">paths</span><span class="p">;</span><span class="nx">k</span><span class="o">=</span><span class="nx">m</span><span class="p">.</span><span class="nx">pkgs</span><span class="p">;</span><span class="nx">f</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">e</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span><span class="nx">e</span><span class="o">&gt;</span><span class="mi">0</span><span class="p">;</span><span class="nx">e</span><span class="o">--</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">slice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="p">).</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span></div><div class='line' id='LC23'><span class="nx">j</span><span class="p">[</span><span class="nx">i</span><span class="p">]){</span><span class="nx">f</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">j</span><span class="p">[</span><span class="nx">i</span><span class="p">]);</span><span class="k">break</span><span class="p">}</span><span class="k">else</span> <span class="k">if</span><span class="p">(</span><span class="nx">i</span><span class="o">=</span><span class="nx">k</span><span class="p">[</span><span class="nx">i</span><span class="p">]){</span><span class="nx">a</span><span class="o">=</span><span class="nx">a</span><span class="o">===</span><span class="nx">i</span><span class="p">.</span><span class="nx">name</span><span class="o">?</span><span class="nx">i</span><span class="p">.</span><span class="nx">location</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">+</span><span class="nx">i</span><span class="p">.</span><span class="nx">main</span><span class="o">:</span><span class="nx">i</span><span class="p">.</span><span class="nx">location</span><span class="p">;</span><span class="nx">f</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="mi">0</span><span class="p">,</span><span class="nx">e</span><span class="p">,</span><span class="nx">a</span><span class="p">);</span><span class="k">break</span><span class="p">}</span><span class="nx">h</span><span class="o">=</span><span class="nx">f</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span><span class="o">+</span><span class="p">(</span><span class="nx">h</span><span class="o">||</span><span class="s2">&quot;.js&quot;</span><span class="p">);</span><span class="nx">h</span><span class="o">=</span><span class="p">(</span><span class="nx">h</span><span class="p">.</span><span class="nx">charAt</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span><span class="o">===</span><span class="s2">&quot;/&quot;</span><span class="o">||</span><span class="nx">h</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^\w+:/</span><span class="p">)</span><span class="o">?</span><span class="s2">&quot;&quot;</span><span class="o">:</span><span class="nx">m</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">)</span><span class="o">+</span><span class="nx">h</span><span class="p">}</span><span class="k">return</span> <span class="nx">m</span><span class="p">.</span><span class="nx">urlArgs</span><span class="o">?</span><span class="nx">h</span><span class="o">+</span><span class="p">((</span><span class="nx">h</span><span class="p">.</span><span class="nx">indexOf</span><span class="p">(</span><span class="s2">&quot;?&quot;</span><span class="p">)</span><span class="o">===-</span><span class="mi">1</span><span class="o">?</span><span class="s2">&quot;?&quot;</span><span class="o">:</span><span class="s2">&quot;&amp;&quot;</span><span class="p">)</span><span class="o">+</span><span class="nx">m</span><span class="p">.</span><span class="nx">urlArgs</span><span class="p">)</span><span class="o">:</span><span class="nx">h</span><span class="p">}};</span><span class="nx">g</span><span class="p">.</span><span class="nx">jQueryCheck</span><span class="o">=</span><span class="nx">S</span><span class="p">;</span><span class="nx">g</span><span class="p">.</span><span class="nx">resume</span><span class="o">=</span><span class="nx">w</span><span class="p">;</span><span class="k">return</span> <span class="nx">g</span><span class="p">}</span><span class="kd">function</span> <span class="nx">ia</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">n</span><span class="o">&amp;&amp;</span><span class="nx">n</span><span class="p">.</span><span class="nx">readyState</span><span class="o">===</span><span class="s2">&quot;interactive&quot;</span><span class="p">)</span><span class="k">return</span> <span class="nx">n</span><span class="p">;</span><span class="nx">a</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">;</span><span class="nx">c</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">]);</span><span class="nx">c</span><span class="o">--</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">readyState</span><span class="o">===</span><span class="s2">&quot;interactive&quot;</span><span class="p">)</span><span class="k">return</span> <span class="nx">n</span><span class="o">=</span><span class="nx">d</span><span class="p">;</span><span class="k">return</span> <span class="kc">null</span><span class="p">}</span><span class="kd">var</span> <span class="nx">ja</span><span class="o">=</span></div><div class='line' id='LC24'><span class="sr">/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/mg</span><span class="p">,</span><span class="nx">ka</span><span class="o">=</span><span class="sr">/require\(\s*[&quot;&#39;]([^&#39;&quot;\s]+)[&quot;&#39;]\s*\)/g</span><span class="p">,</span><span class="nx">ea</span><span class="o">=</span><span class="sr">/^\.\//</span><span class="p">,</span><span class="nx">aa</span><span class="o">=</span><span class="sr">/\.js$/</span><span class="p">,</span><span class="nx">M</span><span class="o">=</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">,</span><span class="nx">ga</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">slice</span><span class="p">,</span><span class="nx">ha</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">splice</span><span class="p">,</span><span class="nx">G</span><span class="o">=!!</span><span class="p">(</span><span class="k">typeof</span> <span class="nb">window</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="nx">navigator</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">),</span><span class="nx">ca</span><span class="o">=!</span><span class="nx">G</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">importScripts</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="p">,</span><span class="nx">la</span><span class="o">=</span><span class="nx">G</span><span class="o">&amp;&amp;</span><span class="nx">navigator</span><span class="p">.</span><span class="nx">platform</span><span class="o">===</span><span class="s2">&quot;PLAYSTATION 3&quot;</span><span class="o">?</span><span class="sr">/^complete$/</span><span class="o">:</span><span class="sr">/^(complete|loaded)$/</span><span class="p">,</span><span class="nx">da</span><span class="o">=</span><span class="k">typeof</span> <span class="nx">opera</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;</span><span class="nx">opera</span><span class="p">.</span><span class="nx">toString</span><span class="p">()</span><span class="o">===</span><span class="s2">&quot;[object Opera]&quot;</span><span class="p">,</span><span class="nx">K</span><span class="o">=</span><span class="p">{},</span><span class="nx">t</span><span class="o">=</span><span class="p">{},</span><span class="nx">U</span><span class="o">=</span><span class="p">[],</span><span class="nx">n</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="nx">X</span><span class="o">=</span><span class="mi">0</span><span class="p">,</span><span class="nx">O</span><span class="o">=!</span><span class="mi">1</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">r</span><span class="o">=</span><span class="p">{},</span><span class="nx">I</span><span class="p">,</span><span class="nx">v</span><span class="p">,</span><span class="nx">x</span><span class="p">,</span><span class="nx">y</span><span class="p">,</span><span class="nx">u</span><span class="p">,</span><span class="nx">z</span><span class="p">,</span><span class="nx">A</span><span class="p">,</span><span class="nx">H</span><span class="p">,</span><span class="nx">B</span><span class="p">,</span><span class="nx">S</span><span class="p">,</span><span class="nx">W</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">define</span><span class="o">===</span><span class="s2">&quot;undefined&quot;</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="k">typeof</span> <span class="nx">requirejs</span><span class="o">!==</span></div><div class='line' id='LC25'><span class="s2">&quot;undefined&quot;</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">J</span><span class="p">(</span><span class="nx">requirejs</span><span class="p">))</span><span class="k">return</span><span class="p">;</span><span class="k">else</span> <span class="nx">r</span><span class="o">=</span><span class="nx">requirejs</span><span class="p">,</span><span class="nx">requirejs</span><span class="o">=</span><span class="k">void</span> <span class="mi">0</span><span class="p">;</span><span class="k">typeof</span> <span class="nx">require</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="o">&amp;&amp;!</span><span class="nx">J</span><span class="p">(</span><span class="nx">require</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">r</span><span class="o">=</span><span class="nx">require</span><span class="p">,</span><span class="nx">require</span><span class="o">=</span><span class="k">void</span> <span class="mi">0</span><span class="p">);</span><span class="nx">d</span><span class="o">=</span><span class="nx">requirejs</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="o">=</span><span class="s2">&quot;_&quot;</span><span class="p">,</span><span class="nx">j</span><span class="p">;</span><span class="o">!</span><span class="nx">E</span><span class="p">(</span><span class="nx">a</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">!==</span><span class="s2">&quot;string&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">j</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">E</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">?</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">d</span><span class="p">)</span><span class="o">:</span><span class="nx">a</span><span class="o">=</span><span class="p">[]);</span><span class="k">if</span><span class="p">(</span><span class="nx">j</span><span class="o">&amp;&amp;</span><span class="nx">j</span><span class="p">.</span><span class="nx">context</span><span class="p">)</span><span class="nx">k</span><span class="o">=</span><span class="nx">j</span><span class="p">.</span><span class="nx">context</span><span class="p">;</span><span class="nx">d</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">||</span><span class="p">(</span><span class="nx">t</span><span class="p">[</span><span class="nx">k</span><span class="p">]</span><span class="o">=</span><span class="nx">fa</span><span class="p">(</span><span class="nx">k</span><span class="p">));</span><span class="nx">j</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">configure</span><span class="p">(</span><span class="nx">j</span><span class="p">);</span><span class="k">return</span> <span class="nx">d</span><span class="p">.</span><span class="nx">require</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">config</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">d</span><span class="p">(</span><span class="nx">a</span><span class="p">)};</span><span class="nx">require</span><span class="o">||</span><span class="p">(</span><span class="nx">require</span><span class="o">=</span><span class="nx">d</span><span class="p">);</span><span class="nx">d</span><span class="p">.</span><span class="nx">toUrl</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nx">t</span><span class="p">.</span><span class="nx">_</span><span class="p">.</span><span class="nx">toUrl</span><span class="p">(</span><span class="nx">a</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">version</span><span class="o">=</span><span class="s2">&quot;1.0.2&quot;</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">jsExtRegExp</span><span class="o">=</span><span class="sr">/^\/|:|\?|\.js$/</span><span class="p">;</span><span class="nx">v</span><span class="o">=</span><span class="nx">d</span><span class="p">.</span><span class="nx">s</span><span class="o">=</span><span class="p">{</span><span class="nx">contexts</span><span class="o">:</span><span class="nx">t</span><span class="p">,</span><span class="nx">skipAsync</span><span class="o">:</span><span class="p">{}};</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">isAsync</span><span class="o">=</span></div><div class='line' id='LC26'><span class="nx">d</span><span class="p">.</span><span class="nx">isBrowser</span><span class="o">=</span><span class="nx">G</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="nx">x</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">head</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;head&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">],</span><span class="nx">y</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;base&quot;</span><span class="p">)[</span><span class="mi">0</span><span class="p">])</span><span class="nx">x</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">head</span><span class="o">=</span><span class="nx">y</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">onError</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">throw</span> <span class="nx">a</span><span class="p">;};</span><span class="nx">d</span><span class="p">.</span><span class="nx">load</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="p">){</span><span class="nx">d</span><span class="p">.</span><span class="nx">resourcesReady</span><span class="p">(</span><span class="o">!</span><span class="mi">1</span><span class="p">);</span><span class="nx">a</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">+=</span><span class="mi">1</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">attach</span><span class="p">(</span><span class="nx">h</span><span class="p">,</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">jQuery</span><span class="o">&amp;&amp;!</span><span class="nx">a</span><span class="p">.</span><span class="nx">jQueryIncremented</span><span class="p">)</span><span class="nx">V</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">,</span><span class="o">!</span><span class="mi">0</span><span class="p">),</span><span class="nx">a</span><span class="p">.</span><span class="nx">jQueryIncremented</span><span class="o">=!</span><span class="mi">0</span><span class="p">};</span><span class="nx">define</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="kd">var</span> <span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">;</span><span class="k">typeof</span> <span class="nx">a</span><span class="o">!==</span><span class="s2">&quot;string&quot;</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="kc">null</span><span class="p">);</span><span class="nx">E</span><span class="p">(</span><span class="nx">c</span><span class="p">)</span><span class="o">||</span><span class="p">(</span><span class="nx">d</span><span class="o">=</span><span class="nx">c</span><span class="p">,</span><span class="nx">c</span><span class="o">=</span><span class="p">[]);</span><span class="o">!</span><span class="nx">c</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="nx">J</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">toString</span><span class="p">().</span><span class="nx">replace</span><span class="p">(</span><span class="nx">ja</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">).</span><span class="nx">replace</span><span class="p">(</span><span class="nx">ka</span><span class="p">,</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">d</span><span class="p">){</span><span class="nx">c</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">d</span><span class="p">)}),</span><span class="nx">c</span><span class="o">=</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">length</span><span class="o">===</span></div><div class='line' id='LC27'><span class="mi">1</span><span class="o">?</span><span class="p">[</span><span class="s2">&quot;require&quot;</span><span class="p">]</span><span class="o">:</span><span class="p">[</span><span class="s2">&quot;require&quot;</span><span class="p">,</span><span class="s2">&quot;exports&quot;</span><span class="p">,</span><span class="s2">&quot;module&quot;</span><span class="p">]).</span><span class="nx">concat</span><span class="p">(</span><span class="nx">c</span><span class="p">));</span><span class="k">if</span><span class="p">(</span><span class="nx">O</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">k</span><span class="o">=</span><span class="nx">I</span><span class="o">||</span><span class="nx">ia</span><span class="p">()))</span><span class="nx">a</span><span class="o">||</span><span class="p">(</span><span class="nx">a</span><span class="o">=</span><span class="nx">k</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-requiremodule&quot;</span><span class="p">)),</span><span class="nx">j</span><span class="o">=</span><span class="nx">t</span><span class="p">[</span><span class="nx">k</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-requirecontext&quot;</span><span class="p">)];(</span><span class="nx">j</span><span class="o">?</span><span class="nx">j</span><span class="p">.</span><span class="nx">defQueue</span><span class="o">:</span><span class="nx">U</span><span class="p">).</span><span class="nx">push</span><span class="p">([</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">])};</span><span class="nx">define</span><span class="p">.</span><span class="nx">amd</span><span class="o">=</span><span class="p">{</span><span class="nx">multiversion</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">plugins</span><span class="o">:!</span><span class="mi">0</span><span class="p">,</span><span class="nx">jQuery</span><span class="o">:!</span><span class="mi">0</span><span class="p">};</span><span class="nx">d</span><span class="p">.</span><span class="nx">exec</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="k">return</span> <span class="nb">eval</span><span class="p">(</span><span class="nx">a</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">execCb</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">d</span><span class="p">,</span><span class="nx">k</span><span class="p">){</span><span class="k">return</span> <span class="nx">c</span><span class="p">.</span><span class="nx">apply</span><span class="p">(</span><span class="nx">k</span><span class="p">,</span><span class="nx">d</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">addScriptToDom</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="nx">I</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="nx">y</span><span class="o">?</span><span class="nx">x</span><span class="p">.</span><span class="nx">insertBefore</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">y</span><span class="p">)</span><span class="o">:</span><span class="nx">x</span><span class="p">.</span><span class="nx">appendChild</span><span class="p">(</span><span class="nx">a</span><span class="p">);</span><span class="nx">I</span><span class="o">=</span><span class="kc">null</span><span class="p">};</span><span class="nx">d</span><span class="p">.</span><span class="nx">onScriptLoad</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">.</span><span class="nx">currentTarget</span><span class="o">||</span><span class="nx">a</span><span class="p">.</span><span class="nx">srcElement</span><span class="p">,</span><span class="nx">h</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">a</span><span class="p">.</span><span class="nx">type</span><span class="o">===</span><span class="s2">&quot;load&quot;</span><span class="o">||</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">la</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">readyState</span><span class="p">))</span><span class="nx">n</span><span class="o">=</span></div><div class='line' id='LC28'><span class="kc">null</span><span class="p">,</span><span class="nx">a</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-requirecontext&quot;</span><span class="p">),</span><span class="nx">h</span><span class="o">=</span><span class="nx">c</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-requiremodule&quot;</span><span class="p">),</span><span class="nx">t</span><span class="p">[</span><span class="nx">a</span><span class="p">].</span><span class="nx">completeLoad</span><span class="p">(</span><span class="nx">h</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">detachEvent</span><span class="o">&amp;&amp;!</span><span class="nx">da</span><span class="o">?</span><span class="nx">c</span><span class="p">.</span><span class="nx">detachEvent</span><span class="p">(</span><span class="s2">&quot;onreadystatechange&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">onScriptLoad</span><span class="p">)</span><span class="o">:</span><span class="nx">c</span><span class="p">.</span><span class="nx">removeEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">onScriptLoad</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">attach</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="nx">j</span><span class="p">,</span><span class="nx">n</span><span class="p">){</span><span class="kd">var</span> <span class="nx">o</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">G</span><span class="p">)</span><span class="k">return</span> <span class="nx">k</span><span class="o">=</span><span class="nx">k</span><span class="o">||</span><span class="nx">d</span><span class="p">.</span><span class="nx">onScriptLoad</span><span class="p">,</span><span class="nx">o</span><span class="o">=</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="o">&amp;&amp;</span><span class="nx">c</span><span class="p">.</span><span class="nx">config</span><span class="p">.</span><span class="nx">xhtml</span><span class="o">?</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElementNS</span><span class="p">(</span><span class="s2">&quot;http://www.w3.org/1999/xhtml&quot;</span><span class="p">,</span><span class="s2">&quot;html:script&quot;</span><span class="p">)</span><span class="o">:</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">),</span><span class="nx">o</span><span class="p">.</span><span class="nx">type</span><span class="o">=</span><span class="nx">j</span><span class="o">||</span><span class="s2">&quot;text/javascript&quot;</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">charset</span><span class="o">=</span><span class="s2">&quot;utf-8&quot;</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">async</span><span class="o">=!</span><span class="nx">v</span><span class="p">.</span><span class="nx">skipAsync</span><span class="p">[</span><span class="nx">a</span><span class="p">],</span><span class="nx">c</span><span class="o">&amp;&amp;</span><span class="nx">o</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-requirecontext&quot;</span><span class="p">,</span></div><div class='line' id='LC29'><span class="nx">c</span><span class="p">.</span><span class="nx">contextName</span><span class="p">),</span><span class="nx">o</span><span class="p">.</span><span class="nx">setAttribute</span><span class="p">(</span><span class="s2">&quot;data-requiremodule&quot;</span><span class="p">,</span><span class="nx">h</span><span class="p">),</span><span class="nx">o</span><span class="p">.</span><span class="nx">attachEvent</span><span class="o">&amp;&amp;!</span><span class="nx">da</span><span class="o">?</span><span class="p">(</span><span class="nx">O</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">n</span><span class="o">?</span><span class="nx">o</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nx">o</span><span class="p">.</span><span class="nx">readyState</span><span class="o">===</span><span class="s2">&quot;loaded&quot;</span><span class="p">)</span><span class="nx">o</span><span class="p">.</span><span class="nx">onreadystatechange</span><span class="o">=</span><span class="kc">null</span><span class="p">,</span><span class="nx">o</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onreadystatechange&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">),</span><span class="nx">n</span><span class="p">(</span><span class="nx">o</span><span class="p">)}</span><span class="o">:</span><span class="nx">o</span><span class="p">.</span><span class="nx">attachEvent</span><span class="p">(</span><span class="s2">&quot;onreadystatechange&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">))</span><span class="o">:</span><span class="nx">o</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">k</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nx">o</span><span class="p">.</span><span class="nx">src</span><span class="o">=</span><span class="nx">a</span><span class="p">,</span><span class="nx">n</span><span class="o">||</span><span class="nx">d</span><span class="p">.</span><span class="nx">addScriptToDom</span><span class="p">(</span><span class="nx">o</span><span class="p">),</span><span class="nx">o</span><span class="p">;</span><span class="k">else</span> <span class="nx">ca</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">importScripts</span><span class="p">(</span><span class="nx">a</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">completeLoad</span><span class="p">(</span><span class="nx">h</span><span class="p">));</span><span class="k">return</span> <span class="kc">null</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">G</span><span class="p">){</span><span class="nx">u</span><span class="o">=</span><span class="nb">document</span><span class="p">.</span><span class="nx">getElementsByTagName</span><span class="p">(</span><span class="s2">&quot;script&quot;</span><span class="p">);</span><span class="k">for</span><span class="p">(</span><span class="nx">H</span><span class="o">=</span><span class="nx">u</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">;</span><span class="nx">H</span><span class="o">&gt;-</span><span class="mi">1</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">z</span><span class="o">=</span><span class="nx">u</span><span class="p">[</span><span class="nx">H</span><span class="p">]);</span><span class="nx">H</span><span class="o">--</span><span class="p">){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">x</span><span class="p">)</span><span class="nx">x</span><span class="o">=</span><span class="nx">z</span><span class="p">.</span><span class="nx">parentNode</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">A</span><span class="o">=</span><span class="nx">z</span><span class="p">.</span><span class="nx">getAttribute</span><span class="p">(</span><span class="s2">&quot;data-main&quot;</span><span class="p">)){</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">r</span><span class="p">.</span><span class="nx">baseUrl</span><span class="p">)</span><span class="nx">u</span><span class="o">=</span></div><div class='line' id='LC30'><span class="nx">A</span><span class="p">.</span><span class="nx">split</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">),</span><span class="nx">z</span><span class="o">=</span><span class="nx">u</span><span class="p">.</span><span class="nx">pop</span><span class="p">(),</span><span class="nx">u</span><span class="o">=</span><span class="nx">u</span><span class="p">.</span><span class="nx">length</span><span class="o">?</span><span class="nx">u</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s2">&quot;/&quot;</span><span class="p">)</span><span class="o">+</span><span class="s2">&quot;/&quot;</span><span class="o">:</span><span class="s2">&quot;./&quot;</span><span class="p">,</span><span class="nx">r</span><span class="p">.</span><span class="nx">baseUrl</span><span class="o">=</span><span class="nx">u</span><span class="p">,</span><span class="nx">A</span><span class="o">=</span><span class="nx">z</span><span class="p">.</span><span class="nx">replace</span><span class="p">(</span><span class="nx">aa</span><span class="p">,</span><span class="s2">&quot;&quot;</span><span class="p">);</span><span class="nx">r</span><span class="p">.</span><span class="nx">deps</span><span class="o">=</span><span class="nx">r</span><span class="p">.</span><span class="nx">deps</span><span class="o">?</span><span class="nx">r</span><span class="p">.</span><span class="nx">deps</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nx">A</span><span class="p">)</span><span class="o">:</span><span class="p">[</span><span class="nx">A</span><span class="p">];</span><span class="k">break</span><span class="p">}}}</span><span class="nx">d</span><span class="p">.</span><span class="nx">checkReadyState</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="kd">var</span> <span class="nx">a</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">contexts</span><span class="p">,</span><span class="nx">c</span><span class="p">;</span><span class="k">for</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">a</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">c</span> <span class="k">in</span> <span class="nx">K</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="nx">a</span><span class="p">[</span><span class="nx">c</span><span class="p">].</span><span class="nx">waitCount</span><span class="p">)</span><span class="k">return</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">resourcesReady</span><span class="p">(</span><span class="o">!</span><span class="mi">0</span><span class="p">)};</span><span class="nx">d</span><span class="p">.</span><span class="nx">resourcesReady</span><span class="o">=</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">){</span><span class="kd">var</span> <span class="nx">c</span><span class="p">,</span><span class="nx">h</span><span class="p">;</span><span class="nx">d</span><span class="p">.</span><span class="nx">resourcesDone</span><span class="o">=</span><span class="nx">a</span><span class="p">;</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">resourcesDone</span><span class="p">)</span><span class="k">for</span><span class="p">(</span><span class="nx">h</span> <span class="k">in</span> <span class="nx">a</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">contexts</span><span class="p">,</span><span class="nx">a</span><span class="p">)</span><span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="p">(</span><span class="nx">h</span> <span class="k">in</span> <span class="nx">K</span><span class="p">)</span><span class="o">&amp;&amp;</span><span class="p">(</span><span class="nx">c</span><span class="o">=</span><span class="nx">a</span><span class="p">[</span><span class="nx">h</span><span class="p">],</span><span class="nx">c</span><span class="p">.</span><span class="nx">jQueryIncremented</span><span class="p">))</span><span class="nx">V</span><span class="p">(</span><span class="nx">c</span><span class="p">.</span><span class="nx">jQuery</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">),</span><span class="nx">c</span><span class="p">.</span><span class="nx">jQueryIncremented</span><span class="o">=!</span><span class="mi">1</span><span class="p">};</span><span class="nx">d</span><span class="p">.</span><span class="nx">pageLoaded</span><span class="o">=</span><span class="kd">function</span><span class="p">(){</span><span class="k">if</span><span class="p">(</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span><span class="o">!==</span><span class="s2">&quot;complete&quot;</span><span class="p">)</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span><span class="o">=</span></div><div class='line' id='LC31'><span class="s2">&quot;complete&quot;</span><span class="p">};</span><span class="k">if</span><span class="p">(</span><span class="nx">G</span><span class="o">&amp;&amp;</span><span class="nb">document</span><span class="p">.</span><span class="nx">addEventListener</span><span class="o">&amp;&amp;!</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span><span class="p">)</span><span class="nb">document</span><span class="p">.</span><span class="nx">readyState</span><span class="o">=</span><span class="s2">&quot;loading&quot;</span><span class="p">,</span><span class="nb">window</span><span class="p">.</span><span class="nx">addEventListener</span><span class="p">(</span><span class="s2">&quot;load&quot;</span><span class="p">,</span><span class="nx">d</span><span class="p">.</span><span class="nx">pageLoaded</span><span class="p">,</span><span class="o">!</span><span class="mi">1</span><span class="p">);</span><span class="nx">d</span><span class="p">(</span><span class="nx">r</span><span class="p">);</span><span class="k">if</span><span class="p">(</span><span class="nx">d</span><span class="p">.</span><span class="nx">isAsync</span><span class="o">&amp;&amp;</span><span class="k">typeof</span> <span class="nx">setTimeout</span><span class="o">!==</span><span class="s2">&quot;undefined&quot;</span><span class="p">)</span><span class="nx">B</span><span class="o">=</span><span class="nx">v</span><span class="p">.</span><span class="nx">contexts</span><span class="p">[</span><span class="nx">r</span><span class="p">.</span><span class="nx">context</span><span class="o">||</span><span class="s2">&quot;_&quot;</span><span class="p">],</span><span class="nx">B</span><span class="p">.</span><span class="nx">requireWait</span><span class="o">=!</span><span class="mi">0</span><span class="p">,</span><span class="nx">setTimeout</span><span class="p">(</span><span class="kd">function</span><span class="p">(){</span><span class="nx">B</span><span class="p">.</span><span class="nx">requireWait</span><span class="o">=!</span><span class="mi">1</span><span class="p">;</span><span class="nx">B</span><span class="p">.</span><span class="nx">takeGlobalQueue</span><span class="p">();</span><span class="nx">B</span><span class="p">.</span><span class="nx">jQueryCheck</span><span class="p">();</span><span class="nx">B</span><span class="p">.</span><span class="nx">scriptCount</span><span class="o">||</span><span class="nx">B</span><span class="p">.</span><span class="nx">resume</span><span class="p">();</span><span class="nx">d</span><span class="p">.</span><span class="nx">checkReadyState</span><span class="p">()},</span><span class="mi">0</span><span class="p">)}})();</span></div></pre></div>
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


    <p class="right">&copy; 2013 <span title="0.33385s from fe16.rs.github.com">GitHub</span> Inc. All rights reserved.</p>
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

    
    
    <span id='server_response_time' data-time='0.33529' data-host='fe16'></span>
    
  </body>
</html>

