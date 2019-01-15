<template>
    <div id="main_section">
        <section-banner></section-banner>
        
        <div class="section-product">
            <b-container>
                <div class="block-top">
                    <div class="title">
                        <h4>Shop By Collection</h4>
                    </div>
                    <ul>
                        <li><a href="#">Bouquets</a></li>
                        <li><a href="#">Weddings</a></li>
                        <li><a href="#">Home decor</a></li>
                        <li><a href="#">Popular</a></li>
                    </ul>
                </div>

                <div class="tab-content">
                    <b-row>
                        <b-col lg="3" md="3" sm="6" cols="12" v-for="(product, index) in ProductList" :key="index">
                            <div class="product-card">
                                <b-card 
                                        :img-src="product.img_src"
                                        img-alt="Image"
                                        img-top
                                        tag="article"
                                        style="max-width: 20rem;"
                                        class="mb-2">
                                    <h5><a href="#">{{product.name}}</a></h5>
                                    <div class="content-price">
                                        <span class="content-price-new">${{product.price}}</span>
                                        <span class="content-price-old" v-if="product.sale">${{product.price}}</span>
                                    </div>
                                    <div class="product-rating">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </div>
                                </b-card>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

        <div class="section-newsletter">
            <b-container>
                <div class="block-newsletter">
                    <h4>Sign up for the newsletter</h4>
                    <p>Sign up for our mailing list to get latest updates and offers</p>

                    <b-row>
                        <b-col sm="6" offset="3">
                            <b-form>
                                <b-input-group>
                                    <b-form-input placeholder="Enter your email..."></b-form-input>
                                    <b-button >Subscribe</b-button>
                                </b-input-group>
                            </b-form>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>

        <div class="section-gallery">
            <b-container>
                <div class="text-center">
                    <h4>Gallery</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ut labore et dolore</p>
                </div>

                <div class="gallery-list">
                    <b-row>
                        <b-col cols="2" v-for="(gallery, index) in Galleries" :key="index">
                            <div class="gallery-item">
                                <img width="100%;" :src="gallery.img_src" alt="gallery">
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
import SectionBanner from '@/components/Banner.vue'
// import ProductCard from '@/components/ProductCard.vue'

export default {
    components: {
        SectionBanner,
        // ProductCard
    },
    data(){
        return{
            ProductList: [
                {
                    img_src: require('@/assets/images/product/1.jpg'),
                    name: 'TULIPA FLORIADE - RED',
                    price: 28.98,
                    sale: true
                },
                {
                    img_src: require('@/assets/images/product/2.jpg'),
                    name: 'QUEEN ROSE - YELLOW',
                    price: 98.98,
                    sale: false
                },
                {
                    img_src: require('@/assets/images/product/3.jpg'),
                    name: 'FLOWERS BOUQUET - PINK',
                    price: 68.68,
                    sale: false
                },
                {
                    img_src: require('@/assets/images/product/4.jpg'),
                    name: 'TULIPA FLORIADE - YELLOW',
                    price: 56.28,
                    sale: false
                },
                                {
                    img_src: require('@/assets/images/product/5.jpg'),
                    name: 'QUEEN ROSE - PINK',
                    price: 26.28,
                    sale: false
                },
                {
                    img_src: require('@/assets/images/product/6.jpg'),
                    name: 'BOUQUET ROSE',
                    price: 28.98,
                    sale: true
                },
                {
                    img_src: require('@/assets/images/product/7.jpg'),
                    name: 'BOUQUET LAVENDER',
                    price: 98.98,
                    sale: false
                },
                {
                    img_src: require('@/assets/images/product/8.jpg'),
                    name: 'BOUQUET HYDRANGEA - WHITE',
                    price: 68.68,
                    sale: false
                }
            ],

            Galleries: [
                {
                    img_src: require('@/assets/images/gallery/1.jpg')
                },
                {
                    img_src: require('@/assets/images/gallery/2.jpg')
                },
                {
                    img_src: require('@/assets/images/gallery/3.jpg')
                },
                {
                    img_src: require('@/assets/images/gallery/4.jpg')
                },
                {
                    img_src: require('@/assets/images/gallery/5.jpg')
                },
                {
                    img_src: require('@/assets/images/gallery/6.jpg')
                }
            ]
        }
    }
}
</script>

