/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";

import SortPanel from "../components/SortPanel.vue";

storiesOf("SortPanel", module)
.add("with result 4", () => ({
    components: { SortPanel },
    template: '<SortPanel result="4"></SortPanel>',
    methods: { onClick: action("clicked") }
}))
.add("with result 5", () => ({
  components: { SortPanel },
  template: '<SortPanel result="5"></SortPanel>',
  methods: { onClick: action("clicked") }
}))
