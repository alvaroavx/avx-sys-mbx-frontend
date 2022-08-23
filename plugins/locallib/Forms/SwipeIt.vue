<script>
import "swiper/swiper-bundle.css";
import lodash from "lodash";

const Swiper = require("swiper/swiper-bundle.min.js");

export default {
  props: {
    value: { default: () => [], type: Array },
  },
  data() {
    return {
      rehacer: lodash.debounce(function (position) {
        this.swiper.slideTo(position, 100, false);
      }, 300),
    };
  },
  watch: {
    value([_uid, position]) {
      if (this._uid !== _uid) {
        this.rehacer(position);
      }
    },
  },
  mounted() {
    this.swiper = new Swiper(".c" + this._uid, {
      grabCursor: true,
      width: 290,
      speed: 200,
      freeMode: true,
      slidesPerView: "auto",
      freeModeSticky: true,
      spaceBetween: 5,
      mousewheel: {
        forceToAxis: true,
      },

      navigation: {
        nextEl: ".n" + this._uid,
        prevEl: ".l" + this._uid,
        clickable: true,
      },
    });

    this.swiper.on("transitionEnd", (swiper) => {
      this.$emit("input", [this._uid, this.swiper.realIndex]);
    });
  },

  render() {
    return (
      <div>
        <div ref="swiper" class={"swiper-container c" + this._uid}>
          <div class={"swiper-wrapper"}>
            {this.$slots.default &&
              this.$slots.default.map &&
              this.$slots.default.map((value, index) => {
                return (
                  <div class={"swiper-slide"} style="width:290px">
                    {value}
                  </div>
                );
              })}
          </div>
        </div>

        <v-btn
          fab
          style="position: absolute; top: 50%; margin-top: -20px; color: white; right: -10px; z-index: 1;"
          color="secondary"
          x-small
          class={" swiper-button-disabled n" + this._uid}
        >
          <v-icon style="font-size:40px;">mdi-chevron-right</v-icon>
        </v-btn>
        <v-btn
          fab
          style="position: absolute; top: 50%; margin-top: -20px; color: white; left: -10px; z-index: 1;"
          color="secondary"
          x-small
          class={" swiper-button-disabled l" + this._uid}
        >
          <v-icon style="font-size:40px;">mdi-chevron-left</v-icon>
        </v-btn>
      </div>
    );
  },
};
</script>
