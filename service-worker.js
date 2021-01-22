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

var precacheConfig = [["404.html","6871aa2c077085ff2a53dc1a7d7278d8"],["about/index.html","1ba89dd53f9f24dd742a44c78522d8f7"],["acg/index.html","480dc0c564b809f685909de9c6f6e505"],["archives/2020/12/index.html","6faf869cd9897cf16086a71d37b86be1"],["archives/2020/index.html","31a907496a63512dee385f5a4bf3df7f"],["archives/2021/01/index.html","efdfb47efb6b2735e33d823a92b0cc33"],["archives/2021/index.html","af21e45258e2ff8c1202c62b0f8cc8c1"],["archives/index.html","693b28a0225350183a838354427b04a2"],["artitalk/index.html","1155f08220e77a63c57ac2bced35b3bf"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["baidu_verify_code-AX8mxggbVF.html","8562c7eb9bc99f7504f332bdd4f1ccc9"],["books/index.html","b54de13fe4c095b8b45b8b50dae7f2ec"],["categories/index.html","73bc8ec0b92f3b8ef2f461f25d3d2f69"],["categories/云评测/index.html","03d65c240443912d8c5c4ffe390dd8b8"],["categories/地理日志/index.html","d71c19e9e1aa835fa5fc65ad3a5c60c0"],["categories/年度总结/index.html","0f4d8011fc542353325fc731bd7a063f"],["categories/悟/index.html","61cb8e541ffba81af14430343c570194"],["categories/视频分析/index.html","7f806acbdac3f2013f38189b1813df30"],["categories/零基础教程/index.html","44ba8250884f413ec1b7aa9597e18a6c"],["css/index.css","ad7271b38c6ed8bcd29ae0e52ece18de"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["games/index.html","a5d25a9b95f9e6a825d91021a625525d"],["google0f5c03cd2e5ae90d.html","ebcf7304b6123dc222ed65c638e40895"],["img/404.jpg","66153c06b426651075c83966d1e7d59e"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","96ea68ce34478c213ca5c12e6d7c74ab"],["index.html","46f5b9ea8ba8dda8584cc8b8c7c7d81d"],["js/main.js","51164446db6baaedfc3dff15acd6a9f9"],["js/search/algolia.js","7e0d793cc105cadb8eec6ee7ddc46362"],["js/search/local-search.js","4c26a3269d8a157230a939d640eb316f"],["js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["js/utils.js","3425d1a3f7b9e15838341189f9502deb"],["link/index.html","cb26aff2eed69aa7def732a845ddc8e0"],["movies/index.html","b930a7deffbcbc616086dba359b4d508"],["music/index.html","ae9d3d5f1d4d14da9a89286085fdf755"],["posts/11484/index.html","08675f1f3d8e7b24ed3f1ac9fb342c6f"],["posts/14819/index.html","09b9edd4da764f97cd0dc2a496f74e68"],["posts/22362/index.html","d3de54e49e983020581b0779000cf8d8"],["posts/26008/index.html","356d04c7151193629a5462b736dc438c"],["posts/27671/index.html","8e46cf7ff1dc8840c66ef7f1b9186e02"],["posts/42521/index.html","13f6368474e56cfc6d7be4aa33222d0a"],["tags/2020/index.html","f8eee165ff4f44e1ce4d4b99c87722ad"],["tags/Joker/index.html","a0d57b409df40e2dd32562fd799f64ab"],["tags/Redmi/index.html","e527478fcf4f9a032992727c07d9ae58"],["tags/Ven-殃雾/index.html","fa49b8b67011050d07ca5c536333e805"],["tags/index.html","33554690ad9a13cbc3af21e8e62290bc"],["tags/上杉九月/index.html","28492aaac71bc94006523540860e6e37"],["tags/云服务器/index.html","f68406600d8a1a1ae6b0c5ab3673f88e"],["tags/云评测/index.html","f01884cb5a64c91c5dc2080cf3341dff"],["tags/图床/index.html","ea7e941a044e8341ff787fd9ff2a2b52"],["tags/地理/index.html","b2f673361fd6dc003ac8300702666d09"],["tags/年度总结/index.html","022187ca60be087fdd65afb7765c82bf"],["tags/教程/index.html","2d1951bdd090b38e58ac91fda49e42da"],["tags/编程风格/index.html","e62c47574db6e293a59f0d262efa39e8"],["tags/風邪/index.html","d5e6c57c00b0f05845fa730cf66a678a"]];
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







