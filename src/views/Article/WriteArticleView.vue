<template>
    <div class="editor">
        <h1 style="line-height: 30px;font-size: 30px;font-family: articleFontStyle;margin-top: 0;margin-bottom: 0">撰寫文章</h1>
        <el-divider></el-divider>
        <el-form ref="newArticle" :rules="rules" :model="newArticle" label-width="120px">
            <el-form-item style="width: 350px" label="標題" prop="articleTitle">
                <el-input v-model="newArticle.articleTitle"></el-input>
            </el-form-item>

            <el-form-item style="width: 350px" label="文章分類" prop="articleCategory">
                <el-select no-data-text="目前" v-model="newArticle.articleCategory" placeholder="請選擇主題分類">
                    <el-option label="私房景點" value="1"></el-option>
                    <el-option label="陸上活動" value="2"></el-option>
                    <el-option label="水上活動" value="3"></el-option>
                    <el-option label="高空活動" value="4"></el-option>
                    <el-option label="國內攻略" value="5"></el-option>
                    <el-option label="國外攻略" value="6"></el-option>
                </el-select>
            </el-form-item>

            <el-form-item label="內容" prop="articleMain">
                <el-input
                        type="textarea"
                        :autosize="{ minRows: 14, maxRows: 50}"
                        placeholder="請輸入內容"
                        v-model="newArticle.articleMain">
                </el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('form')">發表文章</el-button>
                <el-button @click="cancel">取消發表</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                newArticle: {
                    articleTitle: '',
                    articleCategory: '',
                    articleMain: ''

                },
                rules: {
                    articleTitle: [
                        {required: true, message: '請輸入文章標題', trigger: 'blur'},
                        {min: 4, max: 15, message: '標題長度為4-15個字', trigger: 'blur'}
                    ],
                    articleCategory: [
                        {required: true, message: '請選擇主題分類', trigger: 'change,blur'}
                    ],
                    articleMain: [
                        {required: true, message: '請輸入文章內容', trigger: 'blur'},
                        {min: 30, message: '文章內容最少30個字', trigger: 'blur'}
                    ]
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('發表文章完成!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            cancel() {
                location.href = '/home'
            }
        }
    }
</script>

<style lang="css" scoped></style>
