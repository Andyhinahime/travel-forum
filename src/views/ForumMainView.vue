<template>

    <div>
        <!--熱門相簿跑馬燈 開始-->
        <el-row :gutter="10" style="display: flex;justify-content: center;align-items: center">
            <el-col :span="20" style="height: 480px">
                <h1 style="line-height: 30px;font-family: homeFontStyle;font-size: 30px">熱門相簿</h1>
                <el-carousel indicator-position="none" interval="2000" height="300px" arrow="always">
                    <el-carousel-item v-for="img in testImg" :key="img">
                        <router-link to="">
                            <img v-bind:src="img.url" alt="" style="width: 100%;height: 100%">
                        </router-link>
                    </el-carousel-item>
                </el-carousel>
            </el-col>
        </el-row>
        <!--熱門相簿跑馬燈 結束-->
        <h1 style="line-height: 30px;font-size: 30px;font-family: articleFontStyle;color: cornflowerblue">精選文章</h1>
        <el-divider></el-divider>


        <!-- 最新文章及熱門文章開始 -->
        <el-row :gutter="10">
            <el-col :span="10">

                <el-card class="box-card" style="height: 480px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">最新文章</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="newArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="10">
                <el-card class="box-card" style="height: 480px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">熱門文章</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="popularArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">{{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>

                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
            <!-- 最新文章及熱門文章結束 -->
            <el-col :span="4">
                <el-card>
                    <!--TODO 目前還在想要放什麼-->
                </el-card>
            </el-col>
        </el-row>

        <!-- 景點活動及旅遊攻略開始-->
        <el-row :gutter="10" style="margin-top: 10px">
            <el-col :span="10">
                <el-card class="box-card" style="height: 380px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">景點活動</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="activitiesArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="10">
                <el-card class="box-card" style="height: 380px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">旅遊攻略</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="raidersArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!-- 景點活動及旅遊攻略結束-->

        <!--住宿心得及美食饗宴開始-->
        <el-row :gutter="10" style="margin-top: 10px">
            <el-col :span="10">
                <el-card class="box-card" style="height: 380px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">住宿心得</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="hotelArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>

            <el-col :span="10">
                <el-card class="box-card" style="height: 380px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">美食饗宴</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="foodArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <!--住宿心得及美食饗宴結束-->

        <!--揪團找伴-->
        <el-row :gutter="10" style="margin-top: 10px">
            <el-col :span="10">
                <el-card class="box-card" style="height: 380px">
                    <div slot="header" style="line-height: 20px">
                        <span class="articleTitleFont">揪團找伴</span>
                    </div>
                    <div>
                        <el-table
                                class="articleMainFont"
                                :data="groupArticle"
                                style="width: 100%;line-height: 10px"
                                empty-text="目前沒有任何文章">
                            <el-table-column
                                    prop="categoryName"
                                    label="類別"
                                    width="80">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.categoryName}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="articleTitle"
                                    label="文章"
                                    width="210">
                                <template slot-scope="scope">
                                    <router-link style="font-size: 13px;color: #333333" to="">
                                        {{scope.row.articleTitle}}
                                    </router-link>
                                </template>
                            </el-table-column>
                            <el-table-column
                                    prop="nickName"
                                    label="發布人"
                                    width="100px">
                            </el-table-column>
                        </el-table>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                testImg: [{
                    url: require('../assets/img/testImg/test01.jpg')
                }, {
                    url: require('../assets/img/testImg/test02.jpg')
                }, {
                    url: require('../assets/img/testImg/test03.png')
                }, {
                    url: require('../assets/img/testImg/test04.png')
                }, {
                    url: require('../assets/img/testImg/test05.png')
                }, {
                    url: require('../assets/img/testImg/test06.png')
                }]
                , newArticle: [{
                    categoryName: '在地美食',
                    articleTitle: '樹林夜市超多起司牛排',
                    nickName: '哥布林'
                }, {
                    categoryName: '國外攻略',
                    articleTitle: '日本大阪環球影城',
                    nickName: '利姆路'
                }, {
                    categoryName: '水上活動',
                    articleTitle: '澎湖超刺激水上活動,香蕉船',
                    nickName: '工藤新一'
                }, {
                    categoryName: '溫泉旅館',
                    articleTitle: '銀山溫泉溫暖你的心,溫泉街',
                    nickName: '志摩凜'
                }],
                popularArticle: [{
                    categoryName: '在地美食',
                    articleTitle: '樹林夜市超多起司牛排',
                    nickName: '哥布林'
                }, {
                    categoryName: '國外攻略',
                    articleTitle: '日本大阪環球影城',
                    nickName: '利姆路'
                }, {
                    categoryName: '水上活動',
                    articleTitle: '澎湖超刺激水上活動,香蕉船',
                    nickName: '工藤新一'
                }, {
                    categoryName: '溫泉旅館',
                    articleTitle: '銀山溫泉溫暖你的心,溫泉街',
                    nickName: '志摩凜'
                }],
                activitiesArticle: [{
                    categoryName: '高空活動',
                    articleTitle: '宜蘭高空彈跳,嚇都嚇死了..',
                    nickName: '哥布林'
                }, {
                    categoryName: '私房景點',
                    articleTitle: '樹林神祕湖泊,景色超優美',
                    nickName: '利姆路'
                }, {
                    categoryName: '水上活動',
                    articleTitle: '澎湖超刺激水上活動,香蕉船',
                    nickName: '工藤新一'
                }, {
                    categoryName: '陸上活動',
                    articleTitle: '合歡山一日攻三頂',
                    nickName: '志摩凜'
                }, {
                    categoryName: '私房景點',
                    articleTitle: '河口湖秘境,富士山湖中倒影',
                    nickName: '犬山葵'
                }],
                raidersArticle: [{
                    categoryName: '國內攻略',
                    articleTitle: '澎湖三天兩夜,水上活動玩過癮',
                    nickName: '哥布林'
                }, {
                    categoryName: '私房景點',
                    articleTitle: '樹林神祕湖泊,景色超優美',
                    nickName: '利姆路'
                }, {
                    categoryName: '國內攻略',
                    articleTitle: '綠島監獄行,泡溫泉溫暖你的心',
                    nickName: '工藤新一'
                }],
                hotelArticle: [{
                    categoryName: '民宿膠囊',
                    articleTitle: '大阪膠囊旅館,多人房男女合宿',
                    nickName: '哥布林'
                }, {
                    categoryName: '溫泉旅館',
                    articleTitle: '台東知名溫泉旅館,超大室外溫泉',
                    nickName: '利姆路'
                }, {
                    categoryName: '飯店酒店',
                    articleTitle: '圓山大飯店住宿,飯店地道探險..',
                    nickName: '工藤新一'
                }, {
                    categoryName: '飯店酒店',
                    articleTitle: '新加坡大飯店,大房間超大浴缸',
                    nickName: '犬山葵'
                }],
                foodArticle: [{
                    categoryName: '在地美食',
                    articleTitle: '超多起司牛排',
                    nickName: '哥布林'
                }, {
                    categoryName: '異國餐廳',
                    articleTitle: '知名德國香腸',
                    nickName: '利姆路'
                }, {
                    categoryName: '異國餐廳',
                    articleTitle: '義式料理義大利麵',
                    nickName: '志摩凜'
                }, {
                    categoryName: '在地美食',
                    articleTitle: '越式料理麵包',
                    nickName: '犬山葵'
                }],
                groupArticle: [{
                    categoryName: '國外揪團',
                    articleTitle: '日本京都奈良五日5名額',
                    nickName: '哥布林'
                }, {
                    categoryName: '國內揪團',
                    articleTitle: '花蓮三天兩夜租車',
                    nickName: '利姆路'
                }, {
                    categoryName: '國內揪團',
                    articleTitle: '南投清境日月潭台灣好行',
                    nickName: '志摩凜'
                }, {
                    categoryName: '國外揪團',
                    articleTitle: '維也納捷克音樂之都12日',
                    nickName: '犬山葵'
                }]
            }
        }
    }
</script>

<style scoped>
    .articleTitleFont {
        font-family: articleFontStyle;
        font-weight: bold;
    }

    .articleMainFont {
        font-weight: bold;
        font-family: articleFontStyle;
    }
</style>