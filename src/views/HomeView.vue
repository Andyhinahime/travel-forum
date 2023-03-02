<template>
    <div class="webLayout" style="width: 1300px;margin: 0 auto">
        <div style="width: 100%;height: 25px">
            <router-link style="font-family: homeFontStyle;margin-left: 1200px" to="/home/user/register">註冊</router-link>
            <el-divider direction="vertical"></el-divider>
            <router-link style="font-family: homeFontStyle;margin-left: 0px" to="/home/user/login">登入</router-link>
        </div>

        <el-container>
            <el-header class="layout-header" style="border-radius: 10px">
                <div>
                    <span><img src="../assets/img/homeLogo.png" alt="" width="100px"
                               style="position: relative;right: 430px;top: 5px"></span>

                    <input type="text" autocomplete="off" maxlength="100" style="border-radius: 20px;height: 28px;width: 250px;
        position: relative;bottom: 15px" placeholder="搜尋關鍵字、地名或景點">
                    <el-button size="mini" icon="el-icon-search" circle
                               style="position: relative;right: 31px;bottom: 15px;border: none"></el-button>
                </div>
            </el-header>

            <el-container class="layout-body" style="padding-top: 10px">
                <el-aside width="210px" class="layout-aside">
                    <div style="width: 200px;position: fixed;top: 100px">
                        <el-menu
                                router
                                :default-active="this.$router.currentRoute.path"
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-menu-item index="/home/main">
                                <div class="homeCategory" style="position: relative;right: 48px">
                                    <i class="el-icon-s-home"></i>
                                    <span slot="title">首頁</span>
                                </div>
                            </el-menu-item>

                            <el-submenu index="2">
                                <template slot="title">
                                    <div class="homeCategory" style="position: relative;right: 16px">
                                        <i class="el-icon-bangzhu"></i>
                                        <span style="">景點活動分享</span>
                                    </div>
                                </template>

                                <el-menu-group style="width: 100px">
                                    <template slot="title"></template>

                                    <el-menu-item index="2-1" style="position: relative;right: 11px">
                                        <div class="homeCategory">
                                            <i class="el-icon-location"></i>
                                            私房景點
                                        </div>
                                    </el-menu-item>

                                    <el-submenu index="2-2" style="">
                                        <template slot="title">
                                            <div class="homeCategory" style="position: relative;right: 22px">
                                                <i class="el-icon-place"></i>
                                                <span> 戶外活動</span>
                                            </div>
                                        </template>
                                        <el-menu-group style="width: 100px">
                                            <template slot="title"></template>
                                            <el-menu-item index="2-2-1">
                                                <div class="homeCategory">
                                                    <i class="el-icon-bicycle"></i>
                                                    陸上活動
                                                </div>
                                            </el-menu-item>
                                            <el-menu-item index="2-2-2">
                                                <div class="homeCategory">
                                                    <i class="el-icon-ship"></i>
                                                    水上活動
                                                </div>
                                            </el-menu-item>
                                            <el-menu-item index="2-2-3">
                                                <div class="homeCategory">
                                                    <i class="el-icon-cloudy"></i>
                                                    高空活動
                                                </div>
                                            </el-menu-item>
                                        </el-menu-group>
                                    </el-submenu>
                                </el-menu-group>
                            </el-submenu>

                            <el-submenu index="3">
                                <template slot="title">
                                    <div class="homeCategory" style="position: relative;right: 16px">
                                        <i class="el-icon-chat-line-square"></i>
                                        <span>旅遊攻略分享</span>
                                    </div>
                                </template>

                                <el-menu-group style="width: 100px">
                                    <el-menu-item index="3-1">
                                        <div class="homeCategory">
                                            <i class=""></i>
                                            國內攻略
                                        </div>
                                    </el-menu-item>
                                    <el-menu-item index="3-2">
                                        <div class="homeCategory">
                                            <i class=""></i>
                                            國外攻略
                                        </div>
                                    </el-menu-item>

                                </el-menu-group>
                            </el-submenu>

                            <el-submenu index="4">
                                <template slot="title">
                                    <div class="homeCategory" style="position: relative;right: 34px">
                                        <i class="el-icon-notebook-2"></i>
                                        <span>住宿心得</span>
                                    </div>
                                </template>
                                <el-menu-group style="width: 100px">
                                    <el-menu-item index="4-1">
                                        <div class="homeCategory">
                                            <i class="el-icon-office-building"></i>
                                            飯店酒店
                                        </div>
                                    </el-menu-item>
                                    <el-menu-item index="4-2">
                                        <div class="homeCategory">
                                            <i class="el-icon-sunset"></i>
                                            溫泉旅館
                                        </div>
                                    </el-menu-item>
                                    <el-menu-item index="4-3">
                                        <div class="homeCategory">
                                            <i class="el-icon-school"></i>
                                            民宿膠囊
                                        </div>
                                    </el-menu-item>
                                </el-menu-group>
                            </el-submenu>
                            <el-submenu index="5">
                                <template slot="title">
                                    <div class="homeCategory" style="position: relative;right: 34px">
                                        <i class="el-icon-fork-spoon"></i>
                                        <span>美食饗宴</span>
                                    </div>
                                </template>
                                <el-menu-group style="width: 100px">
                                    <el-menu-item index="5-1">
                                        <div class="homeCategory">
                                            <i class="el-icon-food"></i>
                                            在地美食
                                        </div>
                                    </el-menu-item>
                                    <el-menu-item index="5-2">
                                        <div class="homeCategory">
                                            <i class="el-icon-burger"></i>
                                            異國美食
                                        </div>
                                    </el-menu-item>
                                </el-menu-group>
                            </el-submenu>
                            <el-submenu index="6">
                                <template slot="title">
                                    <div class="homeCategory" style="position: relative;right: 33px">
                                        <i class="el-icon-chat-line-round"></i>
                                        <span>揪團找伴</span>
                                    </div>
                                </template>
                                <el-menu-group style="width: 100px">
                                    <el-menu-item index="6-1">
                                        <div class="homeCategory">
                                            國內揪團
                                        </div>
                                    </el-menu-item>
                                    <el-menu-item index="6-2">
                                        <div class="homeCategory">
                                            國外揪團
                                        </div>
                                    </el-menu-item>
                                </el-menu-group>
                            </el-submenu>
                            <el-menu-item index="7">
                                <div class="homeCategory" style="position: relative;right: 33px">
                                    <i class="el-icon-picture-outline"></i>
                                    <span slot="title">相簿分享</span>
                                </div>
                            </el-menu-item>

                        </el-menu>

                    </div>
                </el-aside>

                <el-container>
                    <el-main >
                        <router-view/>
                    </el-main>

                    <el-footer style="height: 150px;background-color: lightskyblue">
                        <div>
                            <p>連絡電話：(02)1234-5678
                                <el-divider direction="vertical"></el-divider>
                                E-Mail：abcd@tabi.com
                            </p>
                            <p>地址：地球村寶島鎮路人街1號100樓</p>
                        </div>
                    </el-footer>
                </el-container>

            </el-container>
        </el-container>
    </div>
</template>

<script>
    export default {
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>


<style>
    .homeCategory {
        font-family: homeFontStyle;
        font-size: 17px;
        font-weight: bold;
    }

    .layout-body {
        height: 100%;
    }

    a {
        text-decoration: none;
        font-size: 19px;
    }

    .el-header, .el-footer {
        background-color: #EEEEEE;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        line-height: 100%;


    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }


</style>

