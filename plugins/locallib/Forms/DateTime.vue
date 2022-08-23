<script>
import moment from "moment";

export default {
  props: {
    field: {
      type: Object,
      default: () => ({}),
    },
    min: {
      type: String,
      default: undefined,
    },
    max: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: [String, null],
      default: null,
    },
  },
  data() {
    return { isTimePickerTouched: false, actualTab: 0, dialogModel: false };
  },
  computed: {
    minComputed() {
      return this.min || moment().format();
    },
  },
  methods: {
    reset(e) {
      this.actualTab = 0;
      this.isTimePickerTouched = false;
      e.stopPropagation();
      this.$emit("input", undefined);
    },
    setDefault() {
      // if (!this.isDefined()) {
      //   this.update(this.getMoment().format())
      // }
    },
    setDate(value) {
      const [year, month, date] = value
        .split("-")
        .map((i, k) => (k === 1 && --i) || i);
      const newValue = moment(this.getMoment())
        .set({ year, month, date })
        .format();
      this.update(newValue);
    },
    setHour(value) {
      this.isTimePickerTouched = true;
      const [hours, minutes] = value.split(":");
      const newValue = moment(moment(this.getMoment()))
        .set({ hours, minutes })
        .format();

      this.update(newValue);
      this.$refs.timePicker.selecting = 1;
    },
    getHour() {
      return this.getMoment().format("HH:mm");
    },
    isDefined() {
      return !!this.value;
    },
    getDate() {
      return this.getMoment().format("YYYY-MM-DD");
    },
    humanReadableDate(format = "LLLL") {
      if (this.isDefined()) {
        return this.getMoment().format(format);
      }
    },
    getMoment() {
      const date = this.value || moment().set({ second: 0 }).format();
      return moment(date);
    },
    update(newValue) {
      if (this.max)
        newValue = moment.min(moment(newValue), moment(this.max)).format();
      if (this.minComputed)
        newValue = moment
          .max(moment(newValue), moment(this.minComputed))
          .format();
      this.$emit("input", newValue);
    },
  },
  render(h) {
    return (
      <div class="row no-gutters">
        <div class="col-auto">
          <v-dialog
            disabled={this.field.disabled}
            content-class="rounded-xl overflow-hidden bg-dark"
            onCloseOnContentClick="false"
            v-model={this.dialogModel}
            max-width="290"
            scopedSlots={{
              activator: ({ on }) => (
                <div
                  v-ripple
                  class="px-2"
                  style="cursor:pointer;line-height: 18px;display: inline-block;padding: 5px;width: 100px;background-color: rgba(127, 127, 127, 0.1);border-radius: 15px;"
                  on={on}
                >
                  <div
                    v-show={!this.isDefined()}
                    class="text-center py-4 text-muted"
                  >
                    <div>
                      <v-icon>mdi-calendar-blank</v-icon>
                    </div>
                    Ingrese fecha
                  </div>
                  <div v-show={this.isDefined()}>
                    <div
                      class="mt-2"
                      style="background-color: white;width: 50px;border-radius: 15px;margin: 0px auto;overflow: hidden;"
                    >
                      <div
                        class="caption text-center text-uppercase"
                        style="border-radius: 60px / 10px; color: black;"
                      >
                        {this.humanReadableDate("MMM")}
                      </div>
                      <div
                        class="text-center font-weight-black"
                        style="color:black"
                      >
                        {this.humanReadableDate("D")}
                      </div>
                      <div
                        style="color:black"
                        class="text-center small  caption"
                      >
                        {this.humanReadableDate("YYYY")}
                      </div>
                    </div>
                    <div class="text-center  mt-2 mb-0">
                      <div class="caption">
                        {this.humanReadableDate("dddd")}
                      </div>
                      {this.humanReadableDate("h:mm a")}
                    </div>
                  </div>
                </div>
              ),
            }}
          >
            <v-tabs
              tile
              dark
              grow
              hide-slider
              v-model={this.actualTab}
              color="white"
            >
              <v-tab>
                <v-icon>mdi-calendar</v-icon>
              </v-tab>
              <v-tab>
                <v-icon>mdi-clock</v-icon>
              </v-tab>
            </v-tabs>
            <v-tabs-items v-model={this.actualTab} style="background:black">
              <v-tab-item>
                <v-date-picker
                  min={this.minComputed}
                  max={this.max}
                  class="rounded-0"
                  dark
                  value={this.getDate()}
                  onChange={(val) => {
                    this.actualTab = 1;
                    this.setDate(val);
                  }}
                />
              </v-tab-item>
              <v-tab-item>
                <v-time-picker
                  ref="timePicker"
                  tile
                  ampmInTitle
                  min={
                    this.minComputed &&
                    this.value &&
                    new Date(this.value).getDate() ===
                      new Date(this.minComputed).getDate()
                      ? moment(this.minComputed).format("HH:mm")
                      : undefined
                  }
                  max={
                    this.max &&
                    this.value &&
                    new Date(this.value).getDate() ===
                      new Date(this.max).getDate()
                      ? moment(this.max).format("HH:mm")
                      : undefined
                  }
                  dark
                  class="rounded-0"
                  value={this.isTimePickerTouched ? this.getHour() : undefined}
                  fullWidth
                  on={{
                    "click:minute": () => {
                      this.actualTab = 0;
                      this.dialogModel = false;
                    },
                  }}
                  onChange={(val) => this.setHour(val)}
                />
              </v-tab-item>
            </v-tabs-items>
          </v-dialog>

          {this.field.disabled === false && this.value && (
            <div class="text-right">
              <v-btn icon onClick={this.reset}>
                <v-icon>mdi-backspace-outline</v-icon>
              </v-btn>
            </div>
          )}
        </div>
      </div>
    );
  },
};
</script>
