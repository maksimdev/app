/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/vue";
import { action } from "@storybook/addon-actions";
//import { linkTo } from "@storybook/addon-links";

import SortPanel from "../components/SortPanel.vue";
import Header from "../components/Header.vue";
import Card from "../components/Card.vue";

storiesOf("Header", module)
.add("simple", () => ({
    components: { Header },
    template: '<Header />',
    methods: { onClick: action("clicked") }
}))

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

storiesOf("Card", module)
.add("with film Kill Bill", () => ({
    components: { Card },
    template: '<Card name="Kill Bill" genre="Action" year="2009" srcToImg="https://images-na.ssl-images-amazon.com/images/I/41dBu4DkbVL.jpg" />'
}))
.add("with film Kill Bill vol.2", () => ({
  components: { Card },
  template: '<Card name="Kill Bill vol.2" genre="Action" year="2010" srcToImg="https://images-na.ssl-images-amazon.com/images/I/51Mb4jVLhVL._SY450_.jpg" />'
}))
.add("with film Four Rooms", () => ({
  components: { Card },
  template: '<Card name="Four Rooms" genre="Comedy" year="2006" srcToImg="https://www.film.ru/sites/default/files/movies/posters/Four-Rooms-3.jpg" />'
}))
.add("with film Jackie Brown", () => ({
  components: { Card },
  template: '<Card name="Jackie Brown" genre="Trailer" year="2005" srcToImg="https://images-na.ssl-images-amazon.com/images/I/91e2jI9N9sL._SL1423_.jpg" />'
}))
.add("with film Pulp Fiction", () => ({
  components: { Card },
  template: '<Card name="Pulp Fiction" genre="Trailer" year="2008" srcToImg="https://static.posters.cz/image/750/plakaty/pulp-fiction-cover-i1288.jpg" />'
}))
.add("with film Reservouir Dogs", () => ({
  components: { Card },
  template: '<Card name="Reservouir Dogs" genre="Trailer" year="2011" srcToImg="https://images-na.ssl-images-amazon.com/images/I/516NwxmclJL.jpg" />'
}))