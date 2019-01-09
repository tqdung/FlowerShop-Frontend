<template>
  <div id="main_slider">
    <slick :options="slickOptions">
      <div class="slider-item">
        <div class="transition-text">
            <span class="label-access">ACCESSORIES</span>
            <h3>Floral headband</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button class="button-custome">SHOP NOW</button>
        </div>  
        <img class="img-reponsive" src="@/assets/images/slide/slide1-h1.jpg" alt="slide1">
      </div>
      <div class="slider-item">
        <div class="transition-text">            
            <span class="label-access">ACCESSORIES</span>
            <h3>Floral headband</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            <button class="button-custome">SHOP NOW</button>
        </div>  
        <img class="img-reponsive" src="@/assets/images/slide/slide2-h1.jpg" alt="slide1">
      </div>
    </slick>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  name: "Slider",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        //options can be used from the plugin documentation
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
      },
      data: [
        {
          src: require('@/assets/images/slide/slide1-h1.jpg'),
          alt: 'slide1'
        },
        {
          src: require('@/assets/images/slide/slide2-h1.jpg'),
          alt: 'slide2'
        }
      ]
    };
  },
  // All slick methods can be used too, example here
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$refs.slick.reSlick();
    }
  }
};
</script>
