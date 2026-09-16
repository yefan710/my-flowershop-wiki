type AdsterraPopTelemetryOptions = {
  scriptUrl: string;
  siteDomain: string;
};

export function createAdsterraPopTelemetryScript({
  scriptUrl,
  siteDomain,
}: AdsterraPopTelemetryOptions): string {
  const config = JSON.stringify({ scriptUrl, siteDomain });

  return `(function () {
    var config = ${config};
    var interactionReported = false;
    var interactionTypes = ['pointerdown', 'touchstart', 'keydown'];

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };

    function emit(eventName, extra) {
      var params = {
        ad_format: 'popunder',
        ad_platform: 'adsterra'
      };

      if (extra) {
        Object.assign(params, extra);
      }

      params.site_domain = config.siteDomain;
      params.telemetry_version = '1';
      window.gtag('event', eventName, params);
    }

    function removeInteractionListeners() {
      interactionTypes.forEach(function (type) {
        window.removeEventListener(type, handleInteraction, true);
      });
    }

    function handleInteraction(event) {
      if (interactionReported) {
        return;
      }

      interactionReported = true;
      removeInteractionListeners();
      emit('adsterra_pop_user_interaction', {
        interaction_type: event.type
      });
    }

    function registerInteractionListeners() {
      interactionTypes.forEach(function (type) {
        window.addEventListener(type, handleInteraction, {
          capture: true,
          passive: true
        });
      });
    }

    var script = document.createElement('script');
    script.setAttribute('data-cfasync', 'false');
    script.async = false;
    script.src = config.scriptUrl;
    script.onload = function () {
      emit('adsterra_pop_script_loaded');
      registerInteractionListeners();
    };
    script.onerror = function () {
      emit('adsterra_pop_script_failed');
    };
    document.head.appendChild(script);
  })();`;
}
