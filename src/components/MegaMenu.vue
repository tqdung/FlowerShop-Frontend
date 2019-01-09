<template>
  <div id="mega_menu">
    <b-container>
      <b-row>
        <b-col
          lg="3"
          md="3"
          sm="12"
          cols="12"
          v-for="category in subCategories"
          :key="category.title"
        >
          <div class="subcategory">
            <div class="subcategory-title">
              <a href="#" :title="category.title">{{category.title}}</a>
            </div>
            <ul>
              <li v-for="(item, index) in category.sublist" :key="index">{{item}}</li>
            </ul>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" md="4" sm="12" cols="12">
          <div class="block-image">
            <img src="@/assets/images/menu/banner-1.jpg" alt>
          </div>
        </b-col>
        <b-col lg="4" md="4" sm="12" cols="12">
          <div class="block-image">
            <img src="@/assets/images/menu/banner-2.jpg" alt>
          </div>
        </b-col>
        <b-col lg="4" md="4" sm="12" cols="12">
          <div class="block-image">
            <img src="@/assets/images/menu/banner-3.jpg" alt>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      subCategories: [
        {
          title: "Bouquets",
          sublist: ["Bouquets 1", "Bouquets 2", "Bouquets 3"]
        },
        {
          title: "Home Decor",
          sublist: ["Cheers", "State of Love", "Country Love"]
        },
        {
          title: "Weddings",
          sublist: ["Bridesmaid", "Toss Bouquets", "Mini Replica Toss"]
        },
        {
          title: "Birthday",
          sublist: [
            "Flowers & Berries",
            "Birthdays for Mom",
            "Birthdays for Wife"
          ]
        }
      ]
    };
  }
};
</script>

