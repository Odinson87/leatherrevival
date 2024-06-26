





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" media="all" integrity="sha512-T9mI+Xgc8yCjMH6J/gS6kaW3O3zJaDuANCq4x9/EpAreyyj61xpmrp9qxWgdCYvpBqyX3T0nOmQzfAO82cdiww==" rel="stylesheet" href="https://assets-cdn.github.com/assets/frameworks-0e1c43e90618c1e26b9b138a9d83c008.css" />
  <link crossorigin="anonymous" media="all" integrity="sha512-eaYnvp2dDFHHn8IWZIJoEBM3aUNW2D4pALckbr5ehoRc9lWxMggtHzoaaH4WHuRh7jtGOtvG8HdN+HqcD5pQEA==" rel="stylesheet" href="https://assets-cdn.github.com/assets/github-4c113e263b8bd0fabcc661f048cc2541.css" />
  
  
  <link crossorigin="anonymous" media="all" integrity="sha512-YBQhG++AtbZ1OJfwAkSqS9GCbbYzicxNDYKdMaLTV49eF0Lks0Bs9Egbu46uQi62AyUInQS8Cx6GGkK6uZnqFQ==" rel="stylesheet" href="https://assets-cdn.github.com/assets/site-14cf418638c848dd5bbac72b6f77dfa2.css" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>scrollsnap-polyfill/scrollsnap-polyfill.bundled.js at develop · ckrack/scrollsnap-polyfill · GitHub</title>
    <meta name="description" content="GitHub is where people build software. More than 28 million people use GitHub to discover, fork, and contribute to over 85 million projects.">
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta property="og:image" content="https://avatars1.githubusercontent.com/u/154858?s=400&amp;v=4" /><meta property="og:site_name" content="GitHub" /><meta property="og:type" content="object" /><meta property="og:title" content="ckrack/scrollsnap-polyfill" /><meta property="og:url" content="https://github.com/ckrack/scrollsnap-polyfill" /><meta property="og:description" content="scrollsnap-polyfill - A polyfill for CSS scroll snapping" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="EB76:40A6:2493D15:46F52D7:5B30FF56" data-pjax-transient>


  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
  <meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
  <meta name="google-site-verification" content="GXs5KoUUkNCoaAZn7wPN-t01Pywp9M3sEjnt_3_ZWPc">
    <meta name="google-analytics" content="UA-3769691-2">

<meta name="octolytics-host" content="collector.githubapp.com" /><meta name="octolytics-app-id" content="github" /><meta name="octolytics-event-url" content="https://collector.githubapp.com/github-external/browser_event" /><meta name="octolytics-dimension-request_id" content="EB76:40A6:2493D15:46F52D7:5B30FF56" /><meta name="octolytics-dimension-region_edge" content="iad" /><meta name="octolytics-dimension-region_render" content="iad" />
<meta name="analytics-location" content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" />




<meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="YWI1OWQ0YzMyOTFmMmQ5ZGFhNTg0MThhMjE0MTRmMmE1MzBlNGJmNGI0ZmE3YjM1NjgxYWVkNWM5MGU0MmZjZHx7InJlbW90ZV9hZGRyZXNzIjoiMjEyLjE0MC4xNzAuNjYiLCJyZXF1ZXN0X2lkIjoiRUI3Njo0MEE2OjI0OTNEMTU6NDZGNTJENzo1QjMwRkY1NiIsInRpbWVzdGFtcCI6MTUyOTkzNzc1MywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">

    <meta name="enabled-features" content="UNIVERSE_BANNER,FREE_TRIALS,MARKETPLACE_INSIGHTS,MARKETPLACE_INSIGHTS_CONVERSION_PERCENTAGES">

  <meta name="html-safe-nonce" content="0794f40d0f83acd216a31a4aecce1c87385c1a66">

  <meta http-equiv="x-pjax-version" content="2f41a9e00d1b3cb8032a509e623df2f9">
  

      <link href="https://github.com/ckrack/scrollsnap-polyfill/commits/develop.atom" rel="alternate" title="Recent Commits to scrollsnap-polyfill:develop" type="application/atom+xml">

  <meta name="description" content="scrollsnap-polyfill - A polyfill for CSS scroll snapping">
  <meta name="go-import" content="github.com/ckrack/scrollsnap-polyfill git https://github.com/ckrack/scrollsnap-polyfill.git">

  <meta name="octolytics-dimension-user_id" content="154858" /><meta name="octolytics-dimension-user_login" content="ckrack" /><meta name="octolytics-dimension-repository_id" content="46558504" /><meta name="octolytics-dimension-repository_nwo" content="ckrack/scrollsnap-polyfill" /><meta name="octolytics-dimension-repository_public" content="true" /><meta name="octolytics-dimension-repository_is_fork" content="false" /><meta name="octolytics-dimension-repository_network_root_id" content="46558504" /><meta name="octolytics-dimension-repository_network_root_nwo" content="ckrack/scrollsnap-polyfill" /><meta name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" content="false" />


    <link rel="canonical" href="https://github.com/ckrack/scrollsnap-polyfill/blob/develop/dist/scrollsnap-polyfill.bundled.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" class="js-site-favicon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

<link rel="manifest" href="/manifest.json" crossOrigin="use-credentials">

  </head>

  <body class="logged-out env-production page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="px-2 py-4 bg-blue text-white show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        <header class="Header header-logged-out  position-relative f4 py-3" role="banner">
  <div class="container-lg d-flex px-3">
    <div class="d-flex flex-justify-between flex-items-center">
      <a class="header-logo-invertocat my-0" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
        <svg height="32" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="32" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
      </a>

    </div>

    <div class="HeaderMenu HeaderMenu--bright d-flex flex-justify-between flex-auto">
        <nav class="mt-0">
          <ul class="d-flex list-style-none">
              <li class="ml-2">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features/project-management /features/code-review /features/project-management /features/integrations /features" href="/features">
                  Features
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business" href="/business">
                  Business
</a>              </li>

              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore" href="/explore">
                  Explore
</a>              </li>

              <li class="ml-4">
                    <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace" href="/marketplace">
                      Marketplace
</a>              </li>
              <li class="ml-4">
                <a class="js-selected-navigation-item HeaderNavlink px-0 py-2 m-0" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing" href="/pricing">
                  Pricing
</a>              </li>
          </ul>
        </nav>

      <div class="d-flex">
          <div class="d-lg-flex flex-items-center mr-3">
            <div class="header-search scoped-search site-scoped-search js-site-search position-relative js-jump-to"
  role="search combobox"
  aria-owns="jump-to-results"
  aria-label="Search or jump to"
  aria-haspopup="listbox"
  aria-expanded="true"
>
  <div class="position-relative">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-site-search-form" data-scope-type="Repository" data-scope-id="46558504" data-scoped-search-url="/ckrack/scrollsnap-polyfill/search" data-unscoped-search-url="/search" action="/ckrack/scrollsnap-polyfill/search" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <label class="form-control header-search-wrapper header-search-wrapper-jump-to position-relative d-flex flex-justify-between flex-items-center js-chromeless-input-container">
        <input type="text"
          class="form-control header-search-input jump-to-field js-jump-to-field js-site-search-focus js-site-search-field is-clearable"
          data-hotkey="s,/"
          name="q"
          value=""
          placeholder="Search"
          data-unscoped-placeholder="Search GitHub"
          data-scoped-placeholder="Search"
          autocapitalize="off"
          aria-autocomplete="list"
          aria-controls="jump-to-results"
          data-jump-to-suggestions-path="/_graphql/GetSuggestedNavigationDestinations#csrf-token=2Asw/hEY+TrVKWJskkrFTNfXP7+UgnurFWGyu2wwVGAeASB2YNLWVm7CYUG7i57V2hp+JpkQlS4dk+GJiRGu+Q=="
          spellcheck="false"
          autocomplete="off"
          >
          <input type="hidden" class="js-site-search-type-field" name="type" >
            <img src="https://assets-cdn.github.com/images/search-shortcut-hint.svg" alt="" class="mr-2 header-search-key-slash">

            <div class="Box position-absolute overflow-hidden d-none jump-to-suggestions js-jump-to-suggestions-container">
              <ul class="d-none js-jump-to-suggestions-template-container">
                <li class="d-flex flex-justify-start flex-items-center p-0 f5 navigation-item js-navigation-item">
                  <a tabindex="-1" class="no-underline d-flex flex-auto flex-items-center p-2 jump-to-suggestions-path js-jump-to-suggestion-path js-navigation-open" href="">
                    <div class="jump-to-octicon js-jump-to-octicon mr-2 text-center d-none"></div>
                    <img class="avatar mr-2 flex-shrink-0 js-jump-to-suggestion-avatar" alt="" aria-label="Team" src="" width="28" height="28">

                    <div class="jump-to-suggestion-name js-jump-to-suggestion-name flex-auto overflow-hidden no-wrap css-truncate css-truncate-target">
                    </div>

                    <div class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none js-jump-to-badge-search">
                      <span class="js-jump-to-badge-search-text-default d-none" aria-label="in this repository">
                        In this repository
                      </span>
                      <span class="js-jump-to-badge-search-text-global d-none" aria-label="in all of GitHub">
                        All GitHub
                      </span>
                      <span aria-hidden="true" class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>

                    <div aria-hidden="true" class="border rounded-1 flex-shrink-0 bg-gray px-1 text-gray-light ml-1 f6 d-none d-on-nav-focus js-jump-to-badge-jump">
                      Jump to
                      <span class="d-inline-block ml-1 v-align-middle">↵</span>
                    </div>
                  </a>
                </li>
                <svg height="16" width="16" class="octicon octicon-repo flex-shrink-0 js-jump-to-repo-octicon-template" title="Repository" aria-label="Repository" viewBox="0 0 12 16" version="1.1" role="img"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-project flex-shrink-0 js-jump-to-project-octicon-template" title="Project" aria-label="Project" viewBox="0 0 15 16" version="1.1" role="img"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
                <svg height="16" width="16" class="octicon octicon-search flex-shrink-0 js-jump-to-search-octicon-template" title="Search" aria-label="Search" viewBox="0 0 16 16" version="1.1" role="img"><path fill-rule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"/></svg>
              </ul>
              <ul class="d-none js-jump-to-no-results-template-container">
                <li class="d-flex flex-justify-center flex-items-center p-3 f5 d-none">
                  <span class="text-gray">No suggested jump to results</span>
                </li>
              </ul>

              <ul id="jump-to-results" class="js-navigation-container jump-to-suggestions-results-container js-jump-to-suggestions-results-container" >
                <li class="d-flex flex-justify-center flex-items-center p-0 f5">
                  <img src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" alt="Octocat Spinner Icon" class="m-2" width="28">
                </li>
              </ul>
            </div>
      </label>
</form>  </div>
</div>

          </div>

        <span class="d-inline-block">
            <div class="HeaderNavlink px-0 py-2 m-0">
              <a class="text-bold text-white no-underline" href="/login?return_to=%2Fckrack%2Fscrollsnap-polyfill%2Fblob%2Fdevelop%2Fdist%2Fscrollsnap-polyfill.bundled.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
                <span class="text-gray">or</span>
                <a class="text-bold text-white no-underline" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
            </div>
        </span>
      </div>
    </div>
  </div>
</header>

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main" class="application-main ">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode" class="">
    <div id="js-repo-pjax-container" data-pjax-container >
      







  <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav  ">
    <div class="repohead-details-container clearfix container">

      <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2Fckrack%2Fscrollsnap-polyfill"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg class="octicon octicon-eye" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/ckrack/scrollsnap-polyfill/watchers"
     aria-label="5 users are watching this repository">
    5
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fckrack%2Fscrollsnap-polyfill"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg class="octicon octicon-star" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/ckrack/scrollsnap-polyfill/stargazers"
      aria-label="205 users starred this repository">
      205
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fckrack%2Fscrollsnap-polyfill"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/ckrack/scrollsnap-polyfill/network" class="social-count"
       aria-label="36 users forked this repository">
      36
    </a>
  </li>
</ul>

      <h1 class="public ">
  <svg class="octicon octicon-repo" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a class="url fn" rel="author" href="/ckrack">ckrack</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a data-pjax="#js-repo-pjax-container" href="/ckrack/scrollsnap-polyfill">scrollsnap-polyfill</a></strong>

</h1>

    </div>
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax container"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a class="js-selected-navigation-item selected reponav-item" itemprop="url" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches repo_packages /ckrack/scrollsnap-polyfill" href="/ckrack/scrollsnap-polyfill">
      <svg class="octicon octicon-code" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a itemprop="url" data-hotkey="g i" class="js-selected-navigation-item reponav-item" data-selected-links="repo_issues repo_labels repo_milestones /ckrack/scrollsnap-polyfill/issues" href="/ckrack/scrollsnap-polyfill/issues">
        <svg class="octicon octicon-issue-opened" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">16</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a data-hotkey="g p" itemprop="url" class="js-selected-navigation-item reponav-item" data-selected-links="repo_pulls checks /ckrack/scrollsnap-polyfill/pulls" href="/ckrack/scrollsnap-polyfill/pulls">
      <svg class="octicon octicon-git-pull-request" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">7</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a data-hotkey="g b" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /ckrack/scrollsnap-polyfill/projects" href="/ckrack/scrollsnap-polyfill/projects">
      <svg class="octicon octicon-project" viewBox="0 0 15 16" version="1.1" width="15" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


  <a class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors dependency_graph pulse /ckrack/scrollsnap-polyfill/pulse" href="/ckrack/scrollsnap-polyfill/pulse">
    <svg class="octicon octicon-graph" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Insights
</a>

</nav>


  </div>

<div class="container new-discussion-timeline experiment-repo-nav  ">
  <div class="repository-content ">

    
  <a class="d-none js-permalink-shortcut" data-hotkey="y" href="/ckrack/scrollsnap-polyfill/blob/355c29410f9cf1d193609828bc5ef66e2d8179d2/dist/scrollsnap-polyfill.bundled.js">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:fd71f15911a6457a598b540f85ed260f -->

      <div class="signup-prompt-bg rounded-1">
      <div class="signup-prompt p-4 text-center mb-4 rounded-1">
        <div class="position-relative">
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form action="/site/dismiss_signup_prompt" accept-charset="UTF-8" method="post"><input name="utf8" type="hidden" value="&#x2713;" /><input type="hidden" name="authenticity_token" value="TzNtSc6tHDfAOyKvg3t7G7wgeZ17w9Z288r4WT42WBbhAiTpFF3cUDk1VJL7WEkR0LwCk0VMV2GQmL1n3UnY8g==" />
            <button type="submit" class="position-absolute top-0 right-0 btn-link link-gray" data-ga-click="(Logged out) Sign up prompt, clicked Dismiss, text:dismiss">
              Dismiss
            </button>
</form>          <h3 class="pt-2">Join GitHub today</h3>
          <p class="col-6 mx-auto">GitHub is home to over 28 million developers working together to host and review code, manage projects, and build software together.</p>
          <a class="btn btn-primary" href="/join?source=prompt-blob-show" data-ga-click="(Logged out) Sign up prompt, clicked Sign up, text:sign-up">Sign up</a>
        </div>
      </div>
    </div>


  <div class="file-navigation">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">develop</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg class="octicon octicon-x js-menu-close" role="img" aria-label="Close" viewBox="0 0 12 16" version="1.1" width="12" height="16"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/ckrack/scrollsnap-polyfill/blob/develop/dist/scrollsnap-polyfill.bundled.js"
               data-name="develop"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                develop
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ckrack/scrollsnap-polyfill/blob/feature/smoothscroll/dist/scrollsnap-polyfill.bundled.js"
               data-name="feature/smoothscroll"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/smoothscroll
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/ckrack/scrollsnap-polyfill/blob/master/dist/scrollsnap-polyfill.bundled.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/ckrack/scrollsnap-polyfill/tree/v0.1.0/dist/scrollsnap-polyfill.bundled.js"
              data-name="v0.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg class="octicon octicon-check select-menu-item-icon" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v0.1.0">
                v0.1.0
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/ckrack/scrollsnap-polyfill/find/develop"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <clipboard-copy for="blob-path" class="btn btn-sm BtnGroup-item">
        Copy path
      </clipboard-copy>
    </div>
    <div id="blob-path" class="breadcrumb">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a data-pjax="true" href="/ckrack/scrollsnap-polyfill"><span>scrollsnap-polyfill</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a data-pjax="true" href="/ckrack/scrollsnap-polyfill/tree/develop/dist"><span>dist</span></a></span><span class="separator">/</span><strong class="final-path">scrollsnap-polyfill.bundled.js</strong>
    </div>
  </div>


  <include-fragment src="/ckrack/scrollsnap-polyfill/contributors/develop/dist/scrollsnap-polyfill.bundled.js" class="commit-tease commit-loader">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
        <img alt="" class="loader-loading float-left" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" height="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>


  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a id="raw-url" class="btn btn-sm BtnGroup-item" href="/ckrack/scrollsnap-polyfill/raw/develop/dist/scrollsnap-polyfill.bundled.js">Raw</a>
        <a class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b" href="/ckrack/scrollsnap-polyfill/blame/develop/dist/scrollsnap-polyfill.bundled.js">Blame</a>
      <a rel="nofollow" class="btn btn-sm BtnGroup-item" href="/ckrack/scrollsnap-polyfill/commits/develop/dist/scrollsnap-polyfill.bundled.js">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="https://desktop.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg class="octicon octicon-device-desktop" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-pencil" viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg class="octicon octicon-trashcan" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      1 lines (1 sloc)
      <span class="file-info-divider"></span>
    15.3 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function(e,t,n){&quot;use strict&quot;;function r(e){return e.replace(/^\s+|\s+$/g,&quot;&quot;)}function i(e,t){var n,r=0;if(!e||!t)return!1;for(;n=t[r++];)if(e===n)return!0;return!1}function o(e){return l.test(e)}function s(e){var t,n=0;for(this._rules=[];t=e[n++];)this._rules.push(new a(t))}function a(e){this._rule=e}function u(e){return this instanceof u?(this._options=e,e.keywords||(this._options={keywords:e}),this._promise=[],this._getStylesheets(),this._downloadStylesheets(),this._parseStylesheets(),this._filterCSSByKeywords(),this._buildMediaQueryMap(),this._reportInitialMatches(),void this._addMediaListeners()):new u(e)}var l=RegExp(&quot;^&quot;+String({}.valueOf).replace(/[.*+?\^${}()|\[\]\\]/g,&quot;\\$&amp;&quot;).replace(/valueOf|for [^\]]+/g,&quot;.+?&quot;)+&quot;$&quot;),c=function(){var e=t.getElementsByTagName(&quot;base&quot;)[0],n=/^([a-zA-Z:]*\/\/)/;return function(t){var r=!n.test(t)&amp;&amp;!e||t.replace(RegExp.$1,&quot;&quot;).split(&quot;/&quot;)[0]===location.host;return r}}(),f={matchMedia:e.matchMedia&amp;&amp;e.matchMedia(&quot;only all&quot;).matches,nativeMatchMedia:o(e.matchMedia)},h=function(){function t(e){for(var t,n=0;t=e[n++];)u[t]||i(t,l)||l.push(t)}function n(){if(0===h.readyState||4===h.readyState){var e;(e=l[0])&amp;&amp;r(e),e||s()}}function r(e){f++,h.open(&quot;GET&quot;,e,!0),h.onreadystatechange=function(){4!=h.readyState||200!=h.status&amp;&amp;304!=h.status||(u[e]=h.responseText,l.shift(),n())},h.send(null)}function o(e){for(var t,n=0,r=0;t=e[n++];)u[t]&amp;&amp;r++;return r===e.length}function s(){for(var e;e=c.shift();)a(e.urls,e.fn)}function a(e,t){for(var n,r=[],i=0;n=e[i++];)r.push(u[n]);t.call(null,r)}var u={},l=[],c=[],f=0,h=function(){var t;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject(&quot;Microsoft.XMLHTTP&quot;)}return t}();return{request:function(e,r){c.push({urls:e,fn:r}),o(e)?s():(t(e),n())},clearCache:function(){u={}},_getRequestCount:function(){return f}}}(),d={_cache:{},clearCache:function(){d._cache={}},parse:function(e,t){function n(){return s(/^\{\s*/)}function i(){return s(/^\}\s*/)}function o(){var t,n=[];for(a(),u(n);&quot;}&quot;!=e.charAt(0)&amp;&amp;(t=w()||S());)n.push(t),u(n);return n}function s(t){var n=t.exec(e);if(n)return e=e.slice(n[0].length),n}function a(){s(/^\s*/)}function u(e){e=e||[];for(var t;t=l();)e.push(t);return e}function l(){if(&quot;/&quot;==e[0]&amp;&amp;&quot;*&quot;==e[1]){for(var t=2;&quot;*&quot;!=e[t]||&quot;/&quot;!=e[t+1];)++t;t+=2;var n=e.slice(2,t-2);return e=e.slice(t),a(),{comment:n}}}function c(){var e=s(/^([^{]+)/);if(e)return r(e[0]).split(/\s*,\s*/)}function f(){var e=s(/^(\*?[\-\w]+)\s*/);if(e&amp;&amp;(e=e[0],s(/^:\s*/))){var t=s(/^((?:&#39;(?:\\&#39;|.)*?&#39;|&quot;(?:\\&quot;|.)*?&quot;|\([^\)]*?\)|[^};])+)\s*/);if(t)return t=r(t[0]),s(/^[;\s]*/),{property:e,value:t}}}function h(){for(var e,t=[];e=s(/^(from|to|\d+%|\.\d+%|\d+\.\d+%)\s*/);)t.push(e[1]),s(/^,\s*/);return t.length?{values:t,declarations:L()}:void 0}function p(){var e=s(/^@([\-\w]+)?keyframes */);if(e){var t=e[1],e=s(/^([\-\w]+)\s*/);if(e){var r=e[1];if(n()){u();for(var o,a=[];o=h();)a.push(o),u();if(i()){var l={name:r,keyframes:a};return t&amp;&amp;(l.vendor=t),l}}}}}function m(){var e=s(/^@supports *([^{]+)/);if(e){var t=r(e[1]);if(n()){u();var a=o();if(i())return{supports:t,rules:a}}}}function y(){var e=s(/^@media *([^{]+)/);if(e){var t=r(e[1]);if(n()){u();var a=o();if(i())return{media:t,rules:a}}}}function v(){var e=s(/^@page */);if(e){var t=c()||[],r=[];if(n()){u();for(var o;o=f()||x();)r.push(o),u();if(i())return{type:&quot;page&quot;,selectors:t,declarations:r}}}}function x(){var e=s(/^@([a-z\-]+) */);if(e){var t=e[1];return{type:t,declarations:L()}}}function _(){return E(&quot;import&quot;)}function g(){return E(&quot;charset&quot;)}function M(){return E(&quot;namespace&quot;)}function E(e){var t=s(new RegExp(&quot;^@&quot;+e+&quot; *([^;\\n]+);\\s*&quot;));if(t){var n={};return n[e]=r(t[1]),n}}function L(){var e=[];if(n()){u();for(var t;t=f();)e.push(t),u();if(i())return e}}function w(){return p()||y()||m()||_()||g()||M()||v()}function S(){var e=c();if(e)return u(),{selectors:e,declarations:L()}}return t&amp;&amp;d._cache[t]?d._cache[t]:(e=e.replace(/\/\*[\s\S]*?\*\//g,&quot;&quot;),d._cache[t]=o())},filter:function(e,t){function n(e,t){return e||t?e?e.concat(t):[t]:void 0}function i(e){null==e.media&amp;&amp;delete e.media,null==e.supports&amp;&amp;delete e.supports,c.push(e)}function o(e,t){if(t)for(var n=t.length;n--;)if(e.indexOf(t[n])&gt;=0)return!0}function s(e,t){for(var n,i,o,s,a=/\*/,u=0;n=t[u++];)if(i=n.split(&quot;:&quot;),o=new RegExp(&quot;^&quot;+r(i[0]).replace(a,&quot;.*&quot;)+&quot;$&quot;),s=new RegExp(&quot;^&quot;+r(i[1]).replace(a,&quot;.*&quot;)+&quot;$&quot;),o.test(e.property)&amp;&amp;s.test(e.value))return!0}function a(e,n,r){return t.selectors&amp;&amp;o(e.selectors.join(&quot;,&quot;),t.selectors)?(i({media:n,supports:r,selectors:e.selectors,declarations:e.declarations}),!0):void 0}function u(e,n,r){if(t.declarations)for(var o,a=0;o=e.declarations[a++];)if(s(o,t.declarations))return i({media:n,supports:r,selectors:e.selectors,declarations:e.declarations}),!0}function l(e,t,r){for(var i,o=0;i=e[o++];)i.declarations?a(i,t,r)||u(i,t,r):i.rules&amp;&amp;i.media?l(i.rules,n(t,i.media),r):i.rules&amp;&amp;i.supports&amp;&amp;l(i.rules,t,n(r,i.supports))}var c=[];return l(e),c}},p=function(){function n(){if(o)return o;var e=t.documentElement,n=t.body,r=e.style.fontSize,i=n.style.fontSize,s=t.createElement(&quot;div&quot;);return e.style.fontSize=&quot;1em&quot;,n.style.fontSize=&quot;1em&quot;,n.appendChild(s),s.style.width=&quot;1em&quot;,s.style.position=&quot;absolute&quot;,o=s.offsetWidth,n.removeChild(s),n.style.fontSize=i,e.style.fontSize=r,o}function r(t){return e.matchMedia(t)}function i(e){var r,i,o=!1;return s=t.documentElement.clientWidth,a.test(e)&amp;&amp;(r=&quot;em&quot;===RegExp.$2?parseFloat(RegExp.$1)*n():parseFloat(RegExp.$1)),u.test(e)&amp;&amp;(i=&quot;em&quot;===RegExp.$2?parseFloat(RegExp.$1)*n():parseFloat(RegExp.$1)),r&amp;&amp;i?o=s&gt;=r&amp;&amp;i&gt;=s:(r&amp;&amp;s&gt;=r&amp;&amp;(o=!0),i&amp;&amp;i&gt;=s&amp;&amp;(o=!0)),{matches:o,media:e}}var o,s,a=/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,u=/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,l={};return{matchMedia:function(e){return f.matchMedia?r(e):i(e)},clearCache:function(){f.nativeMatchMedia||(s=null,l={})}}}(),m=function(){function t(e,t){var n;return function(){clearTimeout(n),n=setTimeout(e,t)}}var n=function(){var e=[];return{add:function(t,n,r){for(var i,o=0;i=e[o++];)if(i.polyfill==t&amp;&amp;i.mql===n&amp;&amp;i.fn===r)return!1;n.addListener(r),e.push({polyfill:t,mql:n,fn:r})},remove:function(t){for(var n,r=0;n=e[r++];)n.polyfill===t&amp;&amp;(n.mql.removeListener(n.fn),e.splice(--r,1))}}}(),r=function(t){function n(){for(var e,n=0;e=t[n++];)e.fn()}return{add:function(r,i){t.length||(e.addEventListener?e.addEventListener(&quot;resize&quot;,n,!1):e.attachEvent(&quot;onresize&quot;,n)),t.push({polyfill:r,fn:i})},remove:function(r){for(var i,o=0;i=t[o++];)i.polyfill===r&amp;&amp;t.splice(--o,1);t.length||(e.removeEventListener?e.removeEventListener(&quot;resize&quot;,n,!1):e.detachEvent&amp;&amp;e.detachEvent(&quot;onresize&quot;,n))}}}([]);return{removeListeners:function(e){f.nativeMatchMedia?n.remove(e):r.remove(e)},addListeners:function(e,i){function o(){if(f.nativeMatchMedia)for(var o in a)a.hasOwnProperty(o)&amp;&amp;!function(t,r){n.add(e,t,function(){i.call(e,r,t.matches)})}(a[o],o);else{var u=t(function(e,t){return function(){s(e,t)}}(e,a),e._options.debounceTimeout||100);r.add(e,u)}}function s(e,t){var n,r={};p.clearCache();for(n in t)t.hasOwnProperty(n)&amp;&amp;(r[n]=p.matchMedia(n).matches,r[n]!=u[n]&amp;&amp;i.call(e,n,p.matchMedia(n).matches));u=r}var a=e._mediaQueryMap,u={};!function(){for(var e in a)a.hasOwnProperty(e)&amp;&amp;(u[e]=p.matchMedia(e).matches)}(),o()}}}();s.prototype.each=function(e,t){var n,r=0;for(t||(t=this);n=this._rules[r++];)e.call(t,n)},s.prototype.size=function(){return this._rules.length},s.prototype.at=function(e){return this._rules[e]},a.prototype.getDeclaration=function(){for(var e,t={},n=0,r=this._rule.declarations;e=r[n++];)t[e.property]=e.value;return t},a.prototype.getSelectors=function(){return this._rule.selectors.join(&quot;, &quot;)},a.prototype.getMedia=function(){return this._rule.media.join(&quot; and &quot;)},u.prototype.doMatched=function(e){return this._doMatched=e,this._resolve(),this},u.prototype.undoUnmatched=function(e){return this._undoUnmatched=e,this._resolve(),this},u.prototype.getCurrentMatches=function(){for(var e,t,n=0,r=[];e=this._filteredRules[n++];)t=e.media&amp;&amp;e.media.join(&quot; and &quot;),(!t||p.matchMedia(t).matches)&amp;&amp;r.push(e);return new s(r)},u.prototype.destroy=function(){this._undoUnmatched&amp;&amp;(this._undoUnmatched(this.getCurrentMatches()),m.removeListeners(this))},u.prototype._defer=function(e,t){e.call(this)?t.call(this):this._promise.push({condition:e,callback:t})},u.prototype._resolve=function(){for(var e,t=0;e=this._promise[t];)e.condition.call(this)?(this._promise.splice(t,1),e.callback.call(this)):t++},u.prototype._getStylesheets=function(){var e,n,r,o,s,a,u,l=0,f=[];if(this._options.include){for(n=this._options.include;e=n[l++];)if(r=t.getElementById(e)){if(&quot;STYLE&quot;===r.nodeName){u={text:r.textContent},f.push(u);continue}if(r.media&amp;&amp;&quot;print&quot;==r.media)continue;if(!c(r.href))continue;u={href:r.href},r.media&amp;&amp;(u.media=r.media),f.push(u)}}else{for(n=this._options.exclude,o=t.getElementsByTagName(&quot;link&quot;);r=o[l++];)r.rel&amp;&amp;&quot;stylesheet&quot;==r.rel&amp;&amp;&quot;print&quot;!=r.media&amp;&amp;c(r.href)&amp;&amp;!i(r.id,n)&amp;&amp;(u={href:r.href},r.media&amp;&amp;(u.media=r.media),f.push(u));for(a=t.getElementsByTagName(&quot;style&quot;),l=0;s=a[l++];)u={text:s.textContent},f.push(u)}return this._stylesheets=f},u.prototype._downloadStylesheets=function(){for(var e,t=this,n=[],r=0;e=this._stylesheets[r++];)n.push(e.href);h.request(n,function(e){for(var n,r=0;n=e[r];)t._stylesheets[r++].text=n;t._resolve()})},u.prototype._parseStylesheets=function(){this._defer(function(){return this._stylesheets&amp;&amp;this._stylesheets.length&amp;&amp;this._stylesheets[0].text},function(){for(var e,t=0;e=this._stylesheets[t++];)e.rules=d.parse(e.text,e.url)})},u.prototype._filterCSSByKeywords=function(){this._defer(function(){return this._stylesheets&amp;&amp;this._stylesheets.length&amp;&amp;this._stylesheets[0].rules},function(){for(var e,t,n=[],r=0;e=this._stylesheets[r++];)t=e.media,t&amp;&amp;&quot;all&quot;!=t&amp;&amp;&quot;screen&quot;!=t?n.push({rules:e.rules,media:e.media}):n=n.concat(e.rules);this._filteredRules=d.filter(n,this._options.keywords)})},u.prototype._buildMediaQueryMap=function(){this._defer(function(){return this._filteredRules},function(){var e,t,n=0;for(this._mediaQueryMap={};t=this._filteredRules[n++];)t.media&amp;&amp;(e=t.media.join(&quot; and &quot;),this._mediaQueryMap[e]=p.matchMedia(e))})},u.prototype._reportInitialMatches=function(){this._defer(function(){return this._filteredRules&amp;&amp;this._doMatched},function(){this._doMatched(this.getCurrentMatches())})},u.prototype._addMediaListeners=function(){this._defer(function(){return this._filteredRules&amp;&amp;this._doMatched&amp;&amp;this._undoUnmatched},function(){m.addListeners(this,function(e,t){for(var n,r=0,i=[],o=[];n=this._filteredRules[r++];)n.media&amp;&amp;n.media.join(&quot; and &quot;)==e&amp;&amp;(t?i:o).push(n);i.length&amp;&amp;this._doMatched(new s(i)),o.length&amp;&amp;this._undoUnmatched(new s(o))})})},u.modules={DownloadManager:h,StyleManager:d,MediaManager:p,EventManager:m},u.constructors={Ruleset:s,Rule:a},e.Polyfill=u}(window,document),function(e,t,n){&quot;use strict&quot;;function r(e){e.each(function(e){var n=t.querySelectorAll(e.getSelectors()),r=e.getDeclaration();[].forEach.call(n,function(e){o(e,r)})})}function i(e){e.each(function(e){var n=t.querySelectorAll(e.getSelectors());[].forEach.call(n,function(e){s(e)})})}function o(e,n){if(&quot;undefined&quot;!=typeof n[&quot;scroll-snap-coordinate&quot;])return e.snapLengthUnit=p(n),a(e);var r=e.tagName;(&quot;body&quot;==r.toLowerCase()||&quot;html&quot;==r.toLowerCase())&amp;&amp;(e=t),e.addEventListener(&quot;scroll&quot;,q,!1),&quot;undefined&quot;!=typeof n[&quot;scroll-snap-destination&quot;]?e.snapLengthUnit=p(n):e.snapLengthUnit=d(n),e.snapElements=[]}function s(e){var n=e.tagName;(&quot;body&quot;==n.toLowerCase()||&quot;html&quot;==n.toLowerCase())&amp;&amp;(e=t),e.removeEventListener(&quot;scroll&quot;,q,!1),e.snapLengthUnit=null,e.snapElements=[]}function a(e){for(var t=e;e&amp;&amp;e!==document;e=e.parentNode)&quot;undefined&quot;!=typeof e.snapElements&amp;&amp;e.snapElements.push(t)}function u(e,t,n){var r={y:m(t,t.snapLengthUnit.y),x:y(t,t.snapLengthUnit.x)},i=e.scrollTop,o=e.scrollLeft,s={y:i/r.y,x:o/r.x},a={y:z.y/r.y,x:z.x/r.x},u={y:0,x:0};u.y=c(n.y,s.y),u.x=c(n.x,s.x),u.y=f(a.y,s.y,u.y,z.y,i),u.x=f(a.x,s.x,u.x,z.x,o);var l={y:u.y*r.y,x:u.x*r.x};return l.y=h(0,v(e),l.y),l.x=h(0,x(e),l.x),l}function l(e,t,n){for(var r=t.snapElements.length,i=e.scrollTop,o=e.scrollLeft,s=Math.min(n.y,n.x),a={y:m(t,t.snapLengthUnit.y),x:y(t,t.snapLengthUnit.x)},u={y:0,x:0},l=A+s;r&gt;l&amp;&amp;l&gt;=0;l+=s)if(k=t.snapElements[l],u={y:k.offsetTop-e.offsetTop+m(k,k.snapLengthUnit.y),x:k.offsetLeft-e.offsetLeft+y(k,k.snapLengthUnit.x)},k.snapCoords=u,o&lt;=u.x&amp;&amp;o+g(e)&gt;=u.x&amp;&amp;i&lt;=u.y&amp;&amp;i+_(e)&gt;=u.y)return A=l,{y:h(0,v(e),u.y-a.y),x:h(0,x(e),u.x-a.x)};return 1==s&amp;&amp;l===r-1?(A=r-1,{y:h(0,v(e),u.y-a.y),x:h(0,x(e),u.x-a.x)}):-1==s&amp;&amp;0===l?(A=0,{y:h(0,v(e),u.y-a.y),x:h(0,x(e),u.x-a.x)}):{y:h(0,v(e),t.snapElements[A].snapCoords.y-a.y),x:h(0,x(e),t.snapElements[A].snapCoords.x-a.x)}}function c(e,t){return-1===e?Math.floor(t):Math.ceil(t)}function f(e,t,n,r,i){return Math.abs(e-t)&gt;=T&amp;&amp;Math.abs(n-t)&gt;L?Math.round(t):Math.abs(r-i)&lt;S&amp;&amp;Math.abs(e-t)&lt;T&amp;&amp;Math.abs(n-t)&gt;w?Math.round(t):n}function h(e,t,n){return Math.max(Math.min(n,t),e)}function d(e){var t,n=/repeat\((\d+)(px|vh|vw|%)\)/g,r={y:{value:&quot;px&quot;,unit:0},x:{value:&quot;px&quot;,unit:0}};return&quot;undefined&quot;!==e[&quot;scroll-snap-points-y&quot;]&amp;&amp;(t=n.exec(e[&quot;scroll-snap-points-y&quot;]),null!==t&amp;&amp;(r.y={value:t[1],unit:t[2]})),&quot;undefined&quot;!==e[&quot;scroll-snap-points-x&quot;]&amp;&amp;(t=n.exec(e[&quot;scroll-snap-points-x&quot;]),null!==t&amp;&amp;(r.x={value:t[1],unit:t[2]})),r}function p(e){var t,n,r=/(\d+)(px|%) (\d+)(px|%)/g,i={y:{value:&quot;px&quot;,unit:0},x:{value:&quot;px&quot;,unit:0}};return&quot;undefined&quot;!=typeof e[&quot;scroll-snap-coordinate&quot;]?t=&quot;scroll-snap-coordinate&quot;:&quot;undefined&quot;!=typeof e[&quot;scroll-snap-destination&quot;]&amp;&amp;(t=&quot;scroll-snap-destination&quot;),null!==t&amp;&amp;(n=r.exec(e[t]),null!==n&amp;&amp;(i.y={value:n[1],unit:n[2]},i.x={value:n[3],unit:n[4]})),i}function m(n,r){return&quot;vh&quot;==r.unit?Math.max(t.documentElement.clientHeight,e.innerHeight||1)/100*r.value:&quot;%&quot;==r.unit?_(n)/100*r.value:_(n)/r.value}function y(n,r){return&quot;vw&quot;==r.unit?Math.max(t.documentElement.clientWidth,e.innerWidth||1)/100*r.value:&quot;%&quot;==r.unit?g(n)/100*r.value:g(n)/r.value}function v(e){return e.scrollHeight}function x(e){return e.scrollWidth}function _(e){return e.offsetHeight}function g(e){return e.offsetWidth}function M(n){return n==t||n==e?t.documentElement.scrollTop&gt;0||t.documentElement.scrollLeft&gt;0?t.documentElement:t.querySelector(&quot;body&quot;):n}function E(n,r){var i=Math.abs(n-r),o=100/Math.max(t.documentElement.clientHeight,e.innerHeight||1)*i,s=100/C*o;return isNaN(s)?0:Math.max(C/1.5,Math.min(s,C))}var L=1-.18,w=.95,S=5,T=2,R=45,C=768;if(!(&quot;scrollSnapType&quot;in t.documentElement.style||&quot;webkitScrollSnapType&quot;in t.documentElement.style||&quot;msScrollSnapType&quot;in t.documentElement.style)){var b,N,U=null,z=null,q=function(e){b=e.target,N=M(b),j&amp;&amp;(cancelAnimationFrame(j)||clearTimeout(j)),U?clearTimeout(U):z={y:N.scrollTop,x:N.scrollLeft},U=setTimeout($,R)},$=function(){if(z.y!=N.scrollTop||z.x!=N.scrollLeft){var e,t={y:z.y-N.scrollTop&gt;0?-1:1,x:z.x-N.scrollLeft&gt;0?-1:1};e=&quot;undefined&quot;!=typeof N.snapElements&amp;&amp;N.snapElements.length&gt;0?l(N,b,t):u(N,b,t),b.removeEventListener(&quot;scroll&quot;,q,!1),O(N,e,function(){b.addEventListener(&quot;scroll&quot;,q,!1)}),isNaN(e.x||!isNaN(e.y))||(z=e)}},k=null,A=0,F=function(e){return e*e*e},H=function(e,t,n,r){return n&gt;r?t:e+(t-e)*F(n/r)},j=null,O=function(t,n,r){var i={y:t.scrollTop,x:t.scrollLeft},o=Date.now(),s=e.requestAnimationFrame||e.mozRequestAnimationFrame||e.webkitRequestAnimationFrame||function(t){e.setTimeout(t,15)},a=Math.max(E(i.y,n.y),E(i.x,n.x)),u=function(){var e=Date.now()-o;if(isNaN(n.y)||(t.scrollTop=H(i.y,n.y,e,a)),isNaN(n.x)||(t.scrollLeft=H(i.x,n.x,e,a)),e&gt;a){if(&quot;function&quot;==typeof r)return r(n)}else j=s(u)};u()};new Polyfill({declarations:[&quot;scroll-snap-type:*&quot;,&quot;scroll-snap-point-y:*&quot;,&quot;scroll-snap-coordinate:*&quot;,&quot;scroll-snap-destination:*&quot;]}).doMatched(r).undoUnmatched(i)}}(window,document);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 js-menu-target" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg class="octicon octicon-kebab-horizontal" viewBox="0 0 13 16" version="1.1" width="13" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm5 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM13 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/></svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><clipboard-copy class="dropdown-item" id="js-copy-lines" style="cursor:pointer;" data-original-text="Copy lines">Copy lines</clipboard-copy></li>
        <li><clipboard-copy class="dropdown-item" id="js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</clipboard-copy></li>
        <li><a class="dropdown-item js-update-url-with-hash" id="js-view-git-blame" href="/ckrack/scrollsnap-polyfill/blame/355c29410f9cf1d193609828bc5ef66e2d8179d2/dist/scrollsnap-polyfill.bundled.js">View git blame</a></li>
          <li><a class="dropdown-item" id="js-new-issue" href="/ckrack/scrollsnap-polyfill/issues/new">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form class="js-jump-to-line-form" action="" accept-charset="UTF-8" method="get"><input name="utf8" type="hidden" value="&#x2713;" />
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between pt-6 pb-2 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2018 <span title="0.17898s from unicorn-5b5b7865f6-tl79d">GitHub</span>, Inc.</li>
        <li class="mr-3"><a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a></li>
        <li class="mr-3"><a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://help.github.com/articles/github-security/" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a data-ga-click="Footer, go to help, text:help" href="https://help.github.com">Help</a></li>
    </ul>

    <a aria-label="Homepage" title="GitHub" class="footer-octicon" href="https://github.com">
      <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
   <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://blog.github.com" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a></li>

    </ul>
  </div>
  <div class="d-flex flex-justify-center pb-6">
    <span class="f6 text-gray-light"></span>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <button type="button" class="flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
    You can’t perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha512-QeroE21vjE9am3l9XZkG77Y7E+hMvsynA4aaKhTSKFny8+KuTg/mihlOC8BoTcEW0l2W+fRQ2U5L+n10scIWEw==" type="application/javascript" src="https://assets-cdn.github.com/assets/frameworks-601602eea5c9ad30556dde9683640f56.js"></script>
    
    <script crossorigin="anonymous" async="async" integrity="sha512-+dDKLxLKhq56imyRV9qF3I7GlJsBRLOgmlSKauxmt2XhF+ER9plGOaaf9lrydWo22f6ld8Q9XQWVrLUwiNmVkw==" type="application/javascript" src="https://assets-cdn.github.com/assets/github-b3435ab51e6cd5e2af02f5e8fdb8f6a6.js"></script>
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg class="octicon octicon-alert" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg class="octicon octicon-x" viewBox="0 0 12 16" version="1.1" width="12" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"/></svg>
    </button>
  </div>
</div>

  <div class="Popover js-hovercard-content position-absolute" style="display: none; outline: none;" tabindex="0">
  <div class="Popover-message Popover-message--bottom-left Popover-message--large Box box-shadow-large" style="width:360px;">
  </div>
</div>

<div id="hovercard-aria-description" class="sr-only">
  Press h to open a hovercard with more details.
</div>


  </body>
</html>

