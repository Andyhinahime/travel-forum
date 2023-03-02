<template>
    <div>
        <el-form :rules="rules" ref="registerUser" :model="registerUser" class="registerUser" label-width="130px">
            <el-form-item class="registerUser" label="姓名" prop="name">
                <el-input  v-model="registerUser.name"></el-input>
            </el-form-item>

            <el-form-item label="暱稱" prop="nickName">
                <el-input v-model="registerUser.nickName"></el-input>
            </el-form-item>

            <el-form-item label="年齡" prop="age">
                <el-input v-model.number="registerUser.age"></el-input>
            </el-form-item>

            <el-form-item label="帳號" prop="userName">
                <el-input v-model="registerUser.userName"></el-input>
            </el-form-item>

            <el-form-item label="密碼" prop="password" id="password">
                <el-input show-password v-model="registerUser.password"></el-input>
            </el-form-item>

            <el-form-item label="請再次輸入密碼" prop="doublePassword" id="doublePassword">
                <el-input show-password v-model="registerUser.doublePassword"></el-input>
            </el-form-item>

            <el-form-item label="手機" prop="phone" >
                <el-input v-model="registerUser.phone"></el-input>
            </el-form-item>

            <el-form-item label="電子信箱" prop="email">
                <el-input v-model="registerUser.email"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button style="border-radius: 10px" type="primary" @click="submitForm('registerUser')">確認</el-button>

            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        data() {
            let checkPassword = (rules, value, callback) => {
                if (value === "") {
                    return callback(new Error('請再次輸入密碼'));
                } else if (value !== this.registerUser.password) {
                    return callback(new Error('兩次密碼必須一致'));
                } else {
                    callback();
                }
            };
            let checkAge = (rules, value, callback) => {
                if (!value) {
                    return callback(new Error('請輸入年齡'));
                }
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('請輸入數字'));
                    } else {
                        if (value < 18 || value > 100) {
                            callback(new Error('年齡必須為18~100歲'))
                        } else {
                            callback();
                        }
                    }
                }, 1000)
            };

            return {
                registerUser: {
                    name: '',
                    nickName: '',
                    userName: '',
                    password: '',
                    doublePassword: '',
                    phone: '',
                    email: '',
                    age: ''

                },
                rules: {
                    name: [
                        {required: true, message: '請輸入姓名', trigger: 'blur'},
                        {type: 'string', pattern: '[\u4e00-\u9fa5]', message: '請輸入中文的姓名', trigger: 'blur'},
                        {min: 2, max: 4, message: "請輸入正確長度的姓名", trigger: 'blur'}
                    ],
                    nickName: [
                        {required: true, message: '請輸入暱稱', trigger: 'blur'},
                        {min: 3, max: 20, message: '請輸入長度為3-20的暱稱', trigger: 'blur'}
                    ],
                    userName: [
                        {required: true, message: '請輸入帳號', trigger: 'blur'},
                        {type: 'string', pattern: '[A-Z|a-z|0-9]', message: '請輸入正確格式'},
                        {min: 6, max: 20, message: '請輸入長度6-20的帳號', trigger: 'blur'}
                    ],
                    password: [
                        {required: true, message: '請輸入密碼', trigger: 'blur'},
                        {type: 'string', pattern: '[A-Z|a-z|0-9]', message: '請輸入正確格式'},
                        {min: 8, max: 24, message: '請輸入長度8-24的密碼', trigger: 'blur'}
                    ],
                    doublePassword: [
                        {type: 'string', validator: checkPassword, required: true, trigger: ['blur', 'change']}
                    ],
                    email: [
                        {type: 'string', required: true, message: '請輸入電子信箱', trigger: 'blur'},
                        {type: 'email', message: '請輸入正確的電子信箱格式', trigger: ['blur', 'change']}
                    ],
                    age: [
                        {type: 'number', validator: checkAge, required: true, trigger: ['blur', 'change']}
                    ],
                    phone: [
                        {type: 'string',pattern:'^09[0-9]+',len:10, message:'請輸入正確格式的手機號碼',trigger:'blur'}
                    ]
                }
            }
        },
        methods:{
            submitForm(formName) {
                this.$refs[formName].validate((valid)=>{
                    if (valid){
                        alert('成功')
                    }else{
                        console.log('失敗')
                        return false;
                    }
                })
            },
        }


    }
</script>

<style scoped>
    .registerUser {
        width: 400px;

        border-radius: 50px;
    }
</style>