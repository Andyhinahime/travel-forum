<template>
    <div>
        <div>
            <h1 style="line-height: 30px;font-family: articleFontStyle;font-size: 30px">相簿分享</h1>

        </div>


        <el-row gutter="5">
            <el-col span="8" v-for="p in testPhoto" :key="p" >
                <el-card style="margin-bottom: 10px">
                    <div style="height: 250px">
                        <router-link to="">
                            <img :src="p.url"   class="image" style="width: 100%;height: 220px">
                        </router-link>
                    </div>
                    <div style="line-height: 30px;height: 40px">
                        <router-link to="" style="color: #333333;font-family: articleFontStyle">
                            <p style="height: 38px;margin-top: 0">{{p.title}}</p>
                        </router-link>
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
                testPhoto: [
                    {title: '武陵農場', url: require('@/assets/img/testPhoto/testPhoto01.jpg')},
                    {title: '花蓮鯉魚潭水舞', url: require('@/assets/img/testPhoto/testPhoto02.jpg')},
                    {title: '日本北海道雪景', url: require('@/assets/img/testPhoto/testPhoto03.jpg')},
                    {title: '阿倍野海闊天空大廈', url: require('@/assets/img/testPhoto/testPhoto04.jpg')},
                    {title: '伏見稻禾大社', url: require('@/assets/img/testPhoto/testPhoto05.jpg')}
                ],
                currentDate: new Date()
            };
        }
    }
</script>

<style scoped>
    .image:hover{
        position: relative;
        bottom: 5px;
        /* 元素的陰影 : x偏移值 y偏移值 濃度 範圍 顏色
        濃度值越小越深越明顯*/
        box-shadow: 0 0 10px 5px #333;
    }
</style>