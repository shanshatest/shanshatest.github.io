/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","8a2b3c5dba8798e0f9a2fb6221e900d9"],["about/index.html","b9697ffb8f6c0a93c6904161185632d1"],["acg/index.html","a06d39efa1fa6e39d53e9d65da469c23"],["archives/2020/12/index.html","abb3d2f728db3c0d97dff0b7ef50f0ac"],["archives/2020/index.html","2184e0117e1de9b427db4b7d175adb32"],["archives/2021/01/index.html","86b98515060bf170e0785696be6b22d1"],["archives/2021/index.html","d456973d1a1ab31be6d7a0d8d27d52a7"],["archives/index.html","cccce209f4470fb509bc90d49fdda8b1"],["artitalk/index.html","5c0f52e0040e15c10fd0b20c400b47e1"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["baidu_verify_code-AX8mxggbVF.html","8562c7eb9bc99f7504f332bdd4f1ccc9"],["books/index.html","2fceaed10fc9a3e6ea8cc027dabf7604"],["categories/index.html","b81d09a8293d7077c1f05d065cfae93f"],["categories/云评测/index.html","0f76ac35d6c79b3e2b2d7046b39010e2"],["categories/地理日志/index.html","15580070288399307ee7810733ad65e6"],["categories/悟/index.html","33c7b4408ac1b036f709599db16b1d67"],["categories/视频分析/index.html","150f7947f203c61f5dfc96e35b0cf0f6"],["categories/零基础教程/index.html","9eb1116e2eae7fc850afde76f7385341"],["css/index.css","ad7271b38c6ed8bcd29ae0e52ece18de"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["games/index.html","46c3b085a5b38dd4efffe3ab65bdd6f4"],["google0f5c03cd2e5ae90d.html","ebcf7304b6123dc222ed65c638e40895"],["img/404.jpg","66153c06b426651075c83966d1e7d59e"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","96ea68ce34478c213ca5c12e6d7c74ab"],["index.html","9b528edeaaf9ebae1ce59ee82dd81064"],["js/main.js","51164446db6baaedfc3dff15acd6a9f9"],["js/search/algolia.js","7e0d793cc105cadb8eec6ee7ddc46362"],["js/search/local-search.js","4c26a3269d8a157230a939d640eb316f"],["js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["js/utils.js","3425d1a3f7b9e15838341189f9502deb"],["link/index.html","84f7138a7be21293d166e3331bff1197"],["movies/index.html","0537ef8e5a4e0194b7926da543e57755"],["music/index.html","a00bda230c5d92907938afeda89569f9"],["posts/11484/index.html","091c40d3a77b20ac0e6ad58c5a17f7bd"],["posts/14819/index.html","e2d844fb247730c7d537001f57619e9e"],["posts/22362/index.html","2e760df0edba727fadcabb3d5b4a25e6"],["posts/27671/index.html","521ad43eba7f0c7a18a45e71d390aba6"],["posts/42521/index.html","228720e1dd434e656b46250e200dec2d"],["tags/Joker/index.html","bd93cc2bd3759e3e5ded640e45c1396a"],["tags/Redmi/index.html","a977647f760e9ccda2cf73e5a4cd333b"],["tags/Ven-殃雾/index.html","90dbf2da3c474424326c89bc10cf5db5"],["tags/index.html","6a5d0b5ad3be655573c098fccd9eb7ef"],["tags/上杉九月/index.html","5e0631b53b6e12647b502d2b663b191f"],["tags/云服务器/index.html","6cb43b123a71320c4ca68ccb7330f085"],["tags/云评测/index.html","578a7ff363f33e22574a5f7b6b68f23f"],["tags/图床/index.html","f37a500ea00319906a13872fbe0cdede"],["tags/地理/index.html","a7ff8ad86ca522c402806263df7553a2"],["tags/教程/index.html","3ea455c3e855df6408da9a073f456831"],["tags/编程风格/index.html","2786f794315cb7332201b657cfb74aa7"],["tags/風邪/index.html","8da742bc306160e62fab3ca170a5935b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







