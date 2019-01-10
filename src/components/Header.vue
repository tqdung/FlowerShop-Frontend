<template>
    <div id="top_header">
        <div class="header-topbar">
            <b-container>
                <b-row>
                    <b-col lg="5" md="5" sm="6" cols="8">
                        <div class="infomations">
                            <div class="language-block">
                                <img src="@/assets/images/language/en.jpg" alt="language">
                                <a href="#"><span> ENG   </span></a>
                                <i class="fas fa-angle-down"></i>
                            </div>
                            <div class="money-block">
                                <a href="#"><span> USD   </span></a>
                                <i class="fas fa-angle-down"></i>
                            </div>
                            <div class="contact-block"><span>Call us now: 0123-456-789</span></div>
                        </div>
                    </b-col>
                    <b-col lg="7" md="7" sm="6" cols="4">
                        <div class="user-pull-right"><i class="fas fa-user"/></div>
                        <div class="links">
                            <ul>
                                <li><a href="#">Account</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Whishlists</a></li>
                            </ul>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <div class="header-main">
            <b-container>
                <b-row>
                    <b-col lg=2 md=2 sm=5 cols=5>
                        <div class="logo">
                            <b-link to="/home"><img src="@/assets/images/logo.png" alt="FlowerShop-Logo"></b-link>
                        </div>
                    </b-col>
                    <b-col lg=10 md=10 sm=7 cols=7>
                        <div class="navigation">
                            <div class="navigation-left">
                                <ul>
                                    <li><router-link to="/">Home</router-link></li>
                                    <li>
                                        <b-link to="categories" id="category">Categories &nbsp; <i class="fas fa-caret-down"/></b-link>
                                        
                                        <mega-menu></mega-menu>
                                        
                                        <!-- <div class="mega-menu">
                                            <b-row>
                                                <b-col lg=3 md=3 sm=12 cols=12 v-for="category in subCategories" :key="category.title">
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
                                            <b-row style="padding: 0 15px;">
                                                <b-col lg=4 md=4 sm=12 cols=12>
                                                    <div class="block-image">                                                    
                                                        <img src="@/assets/images/menu/banner-1.jpg" alt="">
                                                    </div>
                                                </b-col>
                                                <b-col lg=4 md=4 sm=12 cols=12>
                                                    <div class="block-image">                                                    
                                                        <img src="@/assets/images/menu/banner-2.jpg" alt="">
                                                    </div>
                                                </b-col>
                                                <b-col lg=4 md=4 sm=12 cols=12>
                                                    <div class="block-image">                                                    
                                                        <img src="@/assets/images/menu/banner-3.jpg" alt="">
                                                    </div>
                                                </b-col>
                                            </b-row>
                                        </div> -->
                                        <!-- <mega-menu></mega-menu> -->
                                    </li>
                                    <li><b-link to="blog">Blog</b-link></li>
                                    <li><b-link to="about">About</b-link></li>
                                    <li><b-link to="contact">Contact</b-link></li>                
                                </ul>
                            </div>
                            <div class="navigation-right">
                                <div class="search"><a href="#"><i class="fas fa-search"></i></a></div>
                                <div class="cart"><a href=""><i class="fas fa-shopping-cart"></i></a></div>
                            </div>
                            
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

import MegaMenu from '@/components/MegaMenu.vue'

export default {
    name: 'Header',

    components: {
        MegaMenu
    },

    data(){
        return {
            // subCategories: [
            //     {
            //         title: "Bouquets",
            //         sublist:[
            //             "Bouquets 1",
            //             "Bouquets 2",
            //             "Bouquets 3"
            //         ]
            //     },
            //     {
            //         title: "Home Decor",
            //         sublist: [
            //             "Cheers",
            //             "State of Love",
            //             "Country Love"
            //         ]
            //     },
            //     {
            //         title: "Weddings",
            //         sublist: [
            //             "Bridesmaid",
            //             "Toss Bouquets",
            //             "Mini Replica Toss"
            //         ]
            //     },
            //     {
            //         title: "Birthday",
            //         sublist: [
            //             "Flowers & Berries",
            //             "Birthdays for Mom",
            //             "Birthdays for Wife"
            //         ]
            //     }
            // ]
        }
    }
}
</script>


