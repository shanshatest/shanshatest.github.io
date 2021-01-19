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

var precacheConfig = [["404.html","91e095db2e6e540d42b898e78eb273ed"],["about/index.html","02c76371d8829cb763c6abb32c1f8570"],["acg/index.html","bf3646f776e3d82dd6eb00577bbedd3d"],["archives/2020/12/index.html","644b1646c27b3f52b1d9dd4b726e6b43"],["archives/2020/index.html","fbeae8cfea9895818549779d7f1cb293"],["archives/2021/01/index.html","47b9a676eb5cfce28dcbcd2afa0bf23c"],["archives/2021/index.html","cc9fa180525c963e9d3a238c1463102e"],["archives/index.html","9e9f16da6a922c567a2da0094a8ec661"],["artitalk/index.html","22bc3e0b91a7135643d51e5f7ded3f24"],["assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["baidu_verify_code-AX8mxggbVF.html","8562c7eb9bc99f7504f332bdd4f1ccc9"],["books/index.html","6e86091513a715125f865eb0ea030971"],["categories/index.html","fa9cc9b298984f35b87e321209ad97e1"],["categories/云评测/index.html","2cc9b95f2b36bdeb0208f26f280a664a"],["categories/地理日志/index.html","e07d51db8c7e705a2d54acf55c562f2f"],["categories/年度总结/index.html","0199cd5c9be2ff4be841b19f54745b73"],["categories/悟/index.html","4f9e5cf1c2c84127d3305a4a0428b77a"],["categories/视频分析/index.html","4e50a19e72f95ea95e2df79763118036"],["categories/零基础教程/index.html","440f82d0c69562e457053663aebf05cb"],["css/index.css","ad7271b38c6ed8bcd29ae0e52ece18de"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["games/index.html","a8ddd2d7dc260df566c216f4f38ef800"],["google0f5c03cd2e5ae90d.html","ebcf7304b6123dc222ed65c638e40895"],["img/404.jpg","66153c06b426651075c83966d1e7d59e"],["img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","d686d00c300a4bc90ed91261d21a1919"],["img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["img/loading.gif","96ea68ce34478c213ca5c12e6d7c74ab"],["index.html","b02edc98adcc3592ef234e1f171aac12"],["js/main.js","51164446db6baaedfc3dff15acd6a9f9"],["js/search/algolia.js","7e0d793cc105cadb8eec6ee7ddc46362"],["js/search/local-search.js","4c26a3269d8a157230a939d640eb316f"],["js/tw_cn.js","42c99754804dd9c3bfa2b62451c843b7"],["js/utils.js","3425d1a3f7b9e15838341189f9502deb"],["link/index.html","d60c3f803c344569dde103458fedcabd"],["movies/index.html","c9a979d48d1861d8b108c6f8fee1010f"],["music/index.html","0d84d609470c9e4a8d3bfa57914a7284"],["posts/11484/index.html","7048141f71562e1c3a142968440eb15b"],["posts/14819/index.html","6574e65c4a53bfeefbc2caabd44ff12d"],["posts/22362/index.html","7a57828a95d9feff61ebfe391b5abf34"],["posts/26008/index.html","2561e83b8b95048cc4405f2dfdc37fae"],["posts/27671/index.html","d7c21d282e3414a6a0cc94c81a9240b4"],["posts/42521/index.html","10603b313c2a92d4dbd733a41dfeee17"],["tags/2020/index.html","dd162f2a908a6e08925409bc0ea9668d"],["tags/Joker/index.html","3607edaf07958a22760d2ef342760bc5"],["tags/Redmi/index.html","39faabee65f74d3b295a0702c51afa56"],["tags/Ven-殃雾/index.html","ba8572269429a58c6f45413d23c9dbc7"],["tags/index.html","0c2f434017c2bf7d3f64b98c5dd745b7"],["tags/上杉九月/index.html","0687a891f85450733ddf7eb99ffc040c"],["tags/云服务器/index.html","a686a68e493d8850649a55bd0362d860"],["tags/云评测/index.html","eb740012eb349da379f2439fc53707b4"],["tags/图床/index.html","99801774d96cb0d7a0a1a018e57e3ffa"],["tags/地理/index.html","86cd0ec623fc9fc6c550202c9281d974"],["tags/年度总结/index.html","7d42ebc0b987bb2aec0a9d807719b53a"],["tags/教程/index.html","9536a92bcd5561f855fc0d5696939778"],["tags/编程风格/index.html","fe5b36a7f65f76d9361b01e78e204a75"],["tags/風邪/index.html","c5a249d28025efa1303ad693f244e745"]];
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







