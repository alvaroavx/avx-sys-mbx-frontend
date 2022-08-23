<script>
import moment from "moment";
import DateTime from "./DateTime";

export default {
  components: { DateTime },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    field: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: [Object, Array, null],
      default: null,
    },
  },
  data() {
    return { moment, values: ["", ""] };
  },
  watch: {
    value: {
      immediate: true,
      handler() {
        if (this.value) {
          this.values = this.value;
        }
      },
    },
  },

  methods: {
    change(position, value) {
      switch (position) {
        case "initial":
          this.values[0] = value;
          if (new Date(this.values[1]) < new Date(this.values[0])) {
            this.values[1] = "";
          }
          break;
        case "final":
          this.values[1] = value;
          if (new Date(this.values[1]) < new Date(this.values[0])) {
            this.values[0] = "";
          }
          break;
      }
      this.update([this.values[0], this.values[1]]);
    },
    update(newValue) {
      this.values = newValue;
      if (newValue[0] && newValue[1]) {
        this.$emit("input", newValue);
      } else {
        this.$emit("input", undefined);
      }
    },
  },
  render(h) {
    return (
      <div class="d-inline-block">
        <div class="row no-gutters">
          <div class="col-auto">
            <DateTime
              field={this.field}
              max={this.values[1]}
              value={this.values[0]}
              onInput={(value) => {
                this.change("initial", value);
              }}
            />
          </div>
          <div
            class="col px-2 align-self-center text-center"
            style="min-width:100px"
          >
            <div v-show={this.values[0] && this.values[1]} class="small">
              {moment
                .duration(moment(this.values[0]).diff(this.values[1]))
                .humanize()}
            </div>
            <v-icon>mdi-arrow-left-right</v-icon>
          </div>
          <div class="col-auto">
            <DateTime
              min={this.values[0]}
              field={this.field}
              value={this.values[1]}
              onInput={(value) => this.change("final", value)}
            />
          </div>
        </div>
      </div>
    );
  },
};
</script>
