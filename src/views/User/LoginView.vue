<template>
    <div>

        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <div style="margin: 130px 190px 150px;">
                <h1 class="loginFontStyle" style="margin-top: 0;line-height: 50px">用戶登入</h1>
                <el-form-item label="帳號" prop="username" class="loginStyle">

                    <el-input  style="float: left" placeholder="請輸入帳號" v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="password" class="loginStyle">
                    <el-input placeholder="請輸入密碼" v-model="ruleForm.password" show-password></el-input>
                </el-form-item>

                <el-form-item style="float: left">
                    <span style="font-family: homeFontStyle;font-size: 18px">沒有帳號?  <a href="" style="font-family: homeFontStyle;font-size: 22px">註冊</a></span>
                </el-form-item>

                <el-form-item>
                    <el-button style="margin-right: 310px" round @click="login">登入</el-button>
                </el-form-item>
            </div>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                ruleForm: {
                    username: '',
                    password: ''
                },
                rules: {
                    username: [
                        {required: true, message: '請輸入帳號', trigger: 'blur'},
                        {min: 6, max: 18, message: '長度 6 - 18', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '請輸入密碼', trigger: 'blur'},
                        {min: 6, max: 20, message: '長度 6 - 20', trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    .loginStyle {
        width: 500px;


    }
    .loginFontStyle{
        font-family: homeFontStyle;
        font-size: 30px;
    }
</style>