<template>
  <div>
    <div ref="jitsi" class="jitsi" />
  </div>
</template>

<script>
const jitsiURL = "8x8.vc";
const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      // IE
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          return resolve();
        }
      };
    } else {
      // Others
      script.onload = function () {
        return resolve();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  });
};
export default {
  async mounted() {
    loadScript("https://meet.jit.si/external_api.js");
    await new Promise((resolve) => {
      const interval = setInterval(() => {
        window.JitsiMeetExternalAPI && resolve() && clearInterval(interval);
      }, 100);
    });

    window.JAPI = this.callRef = new window.JitsiMeetExternalAPI(jitsiURL, {
      onload: () => {
        // setTimeout(() => {
        //   this.callRef.executeCommand('password', user.channel + '👀')
        // }, 7000)
      },
      width: 700,
      height: 400,
      roomName: "exagerar/12321312",
      parentNode: document.querySelector(".jitsi"),
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          "localrecording",
          "microphone",
          "camera",
          "closedcaptions",
          "desktop",
          "fullscreen",
          "fodeviceselection",
          "profile",
          "info",
          "chat",
          "etherpad",
          "settings",
          "raisehand",
          "videoquality",
          "filmstrip",
          "feedback",
          "stats",
          "shortcuts",
          "tileview",
          "download",
          "help",
        ],
        SHOW_CHROME_EXTENSION_BANNER: false,
        DEFAULT_WELCOME_PAGE_LOGO_URL: "",
        MOBILE_APP_PROMO: false,
        SETTINGS_SECTIONS: ["devices", "language", "profile", "calendar"],
      },
    });
    window.JAPI.executeCommand("subject", "Video atención");

    this.callRef.addEventListeners({
      readyToClose: () => {
        this.hangup();
      },
      videoConferenceLeft: () => {
        this.hangup();
      },
      participantLeft: () => {
        this.hangup();
      },
    });
  },
};
</script>

<style>
iframe {
  width: 250px !important;
  height: 500px !important;
}
</style>
