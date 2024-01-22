
    (function() {
      var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
      var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/runtime.baseline.en.cbbf845eeadab6cd5fb9.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.baseline.en.e9f608d356f34a4e1419.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/845.baseline.en.167d9aca6a4c605025a7.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/598.baseline.en.106c254ac950c9ea8f9c.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.0442e1b104b82d32fbbc.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/731.baseline.en.68ceefcc66cfc32ca175.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.baseline.en.c06ed065dbac35fc773f.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/917.baseline.en.88daeefe46c532f2180e.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/844.baseline.en.2bcddb1bebd8d00bde9a.js","https://cdn.shopify.com/shopifycloud/checkout-web/assets/Redesign.baseline.en.df481c1a232865281aad.js"];
      var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/199.baseline.en.7b7630f73c295c6a50a8.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/app.baseline.en.a3984c31989d09f92fc0.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/669.baseline.en.5f2080c96ce3453038d6.css","https://cdn.shopify.com/shopifycloud/checkout-web/assets/661.baseline.en.55657a0c8acd7b5b2d73.css"];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res[0], next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        })();
      }

      function onLoaded() {
        preconnectAssets();
        prefetchAssets();
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  