<template>
  <div class="addEdit-block">
    <el-form
      class="detail-form-content"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      label-width="80px"
	  :style="{backgroundColor:addEditForm.addEditBoxColor}"
    >
      <el-row>
                        <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'" label="课程编号" prop="kechengbianhao">
            <el-input v-model="ruleForm.kechengbianhao" 
                placeholder="课程编号" readonly></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.kechengbianhao" label="课程编号" prop="kechengbianhao">
              <el-input v-model="ruleForm.kechengbianhao" 
                placeholder="课程编号" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="课程名称" prop="kechengmingcheng">
          <el-input v-model="ruleForm.kechengmingcheng" 
              placeholder="课程名称" clearable  :readonly="ro.kechengmingcheng"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="课程名称" prop="kechengmingcheng">
              <el-input v-model="ruleForm.kechengmingcheng" 
                placeholder="课程名称" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="健身类型" prop="jianshenleixing">
          <el-select v-model="ruleForm.jianshenleixing" placeholder="请选择健身类型">
            <el-option
                v-for="(item,index) in jianshenleixingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="健身类型" prop="jianshenleixing">
	      <el-input v-model="ruleForm.jianshenleixing"
                placeholder="健身类型" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="24">  
        <el-form-item class="upload" v-if="type!='info' && !ro.kechengtupian" label="课程图片" prop="kechengtupian">
          <file-upload
          tip="点击上传课程图片"
          action="file/upload"
          :limit="3"
          :multiple="true"
          :fileUrls="ruleForm.kechengtupian?ruleForm.kechengtupian:''"
          @change="kechengtupianUploadChange"
          ></file-upload>
        </el-form-item>
        <div v-else>
          <el-form-item v-if="ruleForm.kechengtupian" label="课程图片" prop="kechengtupian">
            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in ruleForm.kechengtupian.split(',')" :src="item" width="100" height="100">
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="教练姓名" prop="jiaolianxingming">
          <el-select v-model="ruleForm.jiaolianxingming" placeholder="请选择教练姓名">
            <el-option
                v-for="(item,index) in jiaolianxingmingOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="教练姓名" prop="jiaolianxingming">
	      <el-input v-model="ruleForm.jiaolianxingming"
                placeholder="教练姓名" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="select" v-if="type!='info'"  label="课程分类" prop="kechengfenlei">
          <el-select v-model="ruleForm.kechengfenlei" placeholder="请选择课程分类">
            <el-option
                v-for="(item,index) in kechengfenleiOptions"
                v-bind:key="index"
                :label="item"
                :value="item">
            </el-option>
          </el-select>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="课程分类" prop="kechengfenlei">
	      <el-input v-model="ruleForm.kechengfenlei"
                placeholder="课程分类" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="总名额" prop="zongminge">
          <el-input v-model="ruleForm.zongminge" 
              placeholder="总名额" clearable  :readonly="ro.zongminge"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="总名额" prop="zongminge">
              <el-input v-model="ruleForm.zongminge" 
                placeholder="总名额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="剩余名额" prop="shengyuminge">
          <el-input v-model="ruleForm.shengyuminge" 
              placeholder="剩余名额" clearable  :readonly="ro.shengyuminge"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="剩余名额" prop="shengyuminge">
              <el-input v-model="ruleForm.shengyuminge" 
                placeholder="剩余名额" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="date" v-if="type!='info'" label="上课时间" prop="shangkeshijian">
            <el-date-picker
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                v-model="ruleForm.shangkeshijian" 
                type="date"
                placeholder="上课时间">
            </el-date-picker> 
        </el-form-item>
        <div v-else>
          <el-form-item class="input" v-if="ruleForm.shangkeshijian" label="上课时间" prop="shangkeshijian">
              <el-input v-model="ruleForm.shangkeshijian" 
                placeholder="上课时间" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="上课地点" prop="shangkedidian">
          <el-input v-model="ruleForm.shangkedidian" 
              placeholder="上课地点" clearable  :readonly="ro.shangkedidian"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="上课地点" prop="shangkedidian">
              <el-input v-model="ruleForm.shangkedidian" 
                placeholder="上课地点" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                    <el-col :span="12">
        <el-form-item class="input" v-if="type!='info'"  label="课程价格" prop="kechengjiage">
          <el-input v-model="ruleForm.kechengjiage" 
              placeholder="课程价格" clearable  :readonly="ro.kechengjiage"></el-input>
        </el-form-item>
        <div v-else>
          <el-form-item class="input" label="课程价格" prop="kechengjiage">
              <el-input v-model="ruleForm.kechengjiage" 
                placeholder="课程价格" readonly></el-input>
          </el-form-item>
        </div>
      </el-col>
                                                                                                                        </el-row>
                                                                                                                                                                                                                                                                                                                                                                                            <el-row>
            <el-col :span="24">
              <el-form-item v-if="type!='info'"  label="课程介绍" prop="kechengjieshao">
                <editor 
                    style="min-width: 200px; max-width: 600px;"
                    v-model="ruleForm.kechengjieshao" 
                    class="editor" 
                    action="file/upload">
                </editor>
              </el-form-item>
              <div v-else>
                <el-form-item v-if="ruleForm.kechengjieshao" label="课程介绍" prop="kechengjieshao">
                    <span v-html="ruleForm.kechengjieshao"></span>
                </el-form-item>
              </div>
            </el-col>
          </el-row>
                                                <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
        <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
        <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
      </el-form-item>
    </el-form>
    
    
  </div>
</template>
<script>
// 数字，邮件，手机，url，身份证校验
import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
export default {
  data() {
    let self = this
    var validateIdCard = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!checkIdCard(value)) {
        callback(new Error("请输入正确的身份证号码"));
      } else {
        callback();
      }
    };
    var validateUrl = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isURL(value)) {
        callback(new Error("请输入正确的URL地址"));
      } else {
        callback();
      }
    };
    var validateMobile = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isMobile(value)) {
        callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    var validatePhone = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isPhone(value)) {
        callback(new Error("请输入正确的电话号码"));
      } else {
        callback();
      }
    };
    var validateEmail = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isEmail(value)) {
        callback(new Error("请输入正确的邮箱地址"));
      } else {
        callback();
      }
    };
    var validateNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isNumber(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    var validateIntNumber = (rule, value, callback) => {
      if(!value){
        callback();
      } else if (!isIntNumer(value)) {
        callback(new Error("请输入整数"));
      } else {
        callback();
      }
    };
    return {
	  addEditForm: {"btnSaveFontColor":"#fff","selectFontSize":"14px","btnCancelBorderColor":"rgba(152, 129, 129, 1)","inputBorderRadius":"22px","inputFontSize":"14px","textareaBgColor":"#fff","btnSaveFontSize":"14px","textareaBorderRadius":"22px","uploadBgColor":"#fff","textareaBorderStyle":"solid","btnCancelWidth":"88px","textareaHeight":"120px","dateBgColor":"#fff","btnSaveBorderRadius":"22px","uploadLableFontSize":"14px","textareaBorderWidth":"1px","inputLableColor":"#606266","addEditBoxColor":"rgba(210, 194, 194, 0.29)","dateIconFontSize":"14px","btnSaveBgColor":"#409EFF","uploadIconFontColor":"#8c939d","textareaBorderColor":"rgba(152, 129, 129, 1)","btnCancelBgColor":"rgba(143, 222, 143, 1)","selectLableColor":"#606266","btnSaveBorderStyle":"solid","dateBorderWidth":"1px","dateLableFontSize":"14px","dateBorderRadius":"22px","btnCancelBorderStyle":"solid","selectLableFontSize":"14px","selectBorderStyle":"solid","selectIconFontColor":"#C0C4CC","btnCancelHeight":"44px","inputHeight":"40px","btnCancelFontColor":"#606266","dateBorderColor":"rgba(152, 129, 129, 1)","dateIconFontColor":"#C0C4CC","uploadBorderStyle":"solid","dateBorderStyle":"solid","dateLableColor":"#606266","dateFontSize":"14px","inputBorderWidth":"1px","uploadIconFontSize":"28px","selectHeight":"40px","inputFontColor":"#606266","uploadHeight":"148px","textareaLableColor":"#606266","textareaLableFontSize":"14px","btnCancelFontSize":"14px","inputBorderStyle":"solid","btnCancelBorderRadius":"22px","inputBgColor":"rgba(252, 250, 250, 1)","inputLableFontSize":"14px","uploadLableColor":"#606266","uploadBorderRadius":"22px","btnSaveHeight":"44px","selectBgColor":"#fff","btnSaveWidth":"88px","selectIconFontSize":"14px","dateHeight":"40px","selectBorderColor":"rgba(152, 129, 129, 1)","inputBorderColor":"rgba(152, 129, 129, 1)","uploadBorderColor":"rgba(152, 129, 129, 1)","textareaFontColor":"#606266","selectBorderWidth":"1px","dateFontColor":"#606266","btnCancelBorderWidth":"1px","uploadBorderWidth":"1px","textareaFontSize":"14px","selectBorderRadius":"22px","selectFontColor":"#606266","btnSaveBorderColor":"#409EFF","btnSaveBorderWidth":"1px"},
      id: '',
      type: '',
      ro:{
	kechengbianhao : false,
	kechengmingcheng : false,
	jianshenleixing : false,
	kechengtupian : false,
	jiaolianxingming : false,
	kechengfenlei : false,
	zongminge : false,
	shengyuminge : false,
	shangkeshijian : false,
	shangkedidian : false,
	kechengjiage : false,
	kechengjieshao : false,
	clicktime : false,
	clicknum : false,
      },
            ruleForm: {
                        kechengbianhao: this.getUUID(),
                        	        kechengmingcheng: '',
	                        	        jianshenleixing: '',
	                        	        kechengtupian: '',
	                        	        jiaolianxingming: '',
	                        	        kechengfenlei: '',
	                        	        zongminge: '',
	                        	        shengyuminge: '',
	                        	        shangkeshijian: '',
	                        	        shangkedidian: '',
	                        	        kechengjiage: '',
	                        	        kechengjieshao: '',
	                        	        clicktime: '',
	                        	                      },
                                                    jianshenleixingOptions: [],
                                              jiaolianxingmingOptions: [],
                                kechengfenleiOptions: [],
                                                                                                                                    rules: {
                  kechengbianhao: [
                                    	                                                              ],
                  kechengmingcheng: [
                                    	                                                              ],
                  jianshenleixing: [
                                    	                                                              ],
                  kechengtupian: [
                                    	                                                              ],
                  jiaolianxingming: [
                                    	                                                              ],
                  kechengfenlei: [
                                    	                                                              ],
                  zongminge: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  shengyuminge: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  shangkeshijian: [
                                    	                                                              ],
                  shangkedidian: [
                                    	                                                              ],
                  kechengjiage: [
                            { required: true, message: '课程价格不能为空', trigger: 'blur' },
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
                  kechengjieshao: [
                                    	                                                              ],
                  clicktime: [
                                    	                                                              ],
                  clicknum: [
                                        { validator: validateIntNumber, trigger: 'blur' },
                        	                                                              ],
              }
    };
  },
  props: ["parent"],
  computed: {
                                                                                                                                                                              },
  created() {
	this.addEditStyleChange()
	this.addEditUploadStyleChange()
  },
  methods: {
        // 下载
    download(file){
      window.open(`${file}`)
    },
    // 初始化
    init(id,type) {
      if (id) {
        this.id = id;
        this.type = type;
      }
      if(this.type=='info'||this.type=='else'){
        this.info(id);
      }else if(this.type=='cross'){
        var obj = this.$storage.getObj('crossObj');
        for (var o in obj){
          	            if(o=='kechengbianhao'){
            this.ruleForm.kechengbianhao = obj[o];
	    this.ro.kechengbianhao = true;
            continue;
          }
	            	            if(o=='kechengmingcheng'){
            this.ruleForm.kechengmingcheng = obj[o];
	    this.ro.kechengmingcheng = true;
            continue;
          }
	            	            if(o=='jianshenleixing'){
            this.ruleForm.jianshenleixing = obj[o];
	    this.ro.jianshenleixing = true;
            continue;
          }
	            	            if(o=='kechengtupian'){
            this.ruleForm.kechengtupian = obj[o];
	    this.ro.kechengtupian = true;
            continue;
          }
	            	            if(o=='jiaolianxingming'){
            this.ruleForm.jiaolianxingming = obj[o];
	    this.ro.jiaolianxingming = true;
            continue;
          }
	            	            if(o=='kechengfenlei'){
            this.ruleForm.kechengfenlei = obj[o];
	    this.ro.kechengfenlei = true;
            continue;
          }
	            	            if(o=='zongminge'){
            this.ruleForm.zongminge = obj[o];
	    this.ro.zongminge = true;
            continue;
          }
	            	            if(o=='shengyuminge'){
            this.ruleForm.shengyuminge = obj[o];
	    this.ro.shengyuminge = true;
            continue;
          }
	            	            if(o=='shangkeshijian'){
            this.ruleForm.shangkeshijian = obj[o];
	    this.ro.shangkeshijian = true;
            continue;
          }
	            	            if(o=='shangkedidian'){
            this.ruleForm.shangkedidian = obj[o];
	    this.ro.shangkedidian = true;
            continue;
          }
	            	            if(o=='kechengjiage'){
            this.ruleForm.kechengjiage = obj[o];
	    this.ro.kechengjiage = true;
            continue;
          }
	            	            if(o=='kechengjieshao'){
            this.ruleForm.kechengjieshao = obj[o];
	    this.ro.kechengjieshao = true;
            continue;
          }
	            	            if(o=='clicktime'){
            this.ruleForm.clicktime = obj[o];
	    this.ro.clicktime = true;
            continue;
          }
	            	            if(o=='clicknum'){
            this.ruleForm.clicknum = obj[o];
	    this.ro.clicknum = true;
            continue;
          }
	                    }
                                                                                                                                                                                                                                              }
            // 获取用户信息
      this.$http({
        url: `${this.$storage.get('sessionTable')}/session`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          var json = data.data;
                                                                                                                                                                                                                                                                                                                                      } else {
          this.$message.error(data.msg);
        }
      });
                                                                              this.$http({
              url: `option/jianshenleixing/jianshenleixing`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.jianshenleixingOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
                                                          this.$http({
              url: `option/jianshenjiaolian/jiaolianxingming`,
              method: "get"
            }).then(({ data }) => {
              if (data && data.code === 0) {
                this.jiaolianxingmingOptions = data.data;
              } else {
                this.$message.error(data.msg);
              }
            });
         
                                        this.kechengfenleiOptions = "私教,团课".split(',')
                                                                                                                                                                            },
                                                                                                                        // 多级联动参数
                                                                                                                                                        info(id) {
      this.$http({
        url: `jianshenkecheng/info/${id}`,
        method: "get"
      }).then(({ data }) => {
        if (data && data.code === 0) {
          this.ruleForm = data.data;
        } else {
          this.$message.error(data.msg);
        }
      });
    },
        // 提交
    onSubmit() {
                  // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                              // ${column.compare}
                                                                                                                                                                                                                                                                                                this.$refs["ruleForm"].validate(valid => {
        if (valid) {
          this.$http({
            url: `jianshenkecheng/${!this.ruleForm.id ? "save" : "update"}`,
            method: "post",
            data: this.ruleForm
          }).then(({ data }) => {
            if (data && data.code === 0) {
              this.$message({
                message: "操作成功",
                type: "success",
                duration: 1500,
                onClose: () => {
                  this.parent.showFlag = true;
                  this.parent.addOrUpdateFlag = false;
                  this.parent.jianshenkechengCrossAddOrUpdateFlag = false;
                  this.parent.search();
                  this.parent.contentStyleChange();
                }
              });
            } else {
              this.$message.error(data.msg);
            }
          });
        }
      });
    },
    // 获取uuid
    getUUID () {
      return new Date().getTime();
    },
    // 返回
    back() {
      this.parent.showFlag = true;
      this.parent.addOrUpdateFlag = false;
      this.parent.jianshenkechengCrossAddOrUpdateFlag = false;
      this.parent.contentStyleChange();
    },
                                                            kechengtupianUploadChange(fileUrls) {
                this.ruleForm.kechengtupian = fileUrls;
				this.addEditUploadStyleChange()
            },
                                                                                                                                    	addEditStyleChange() {
	  this.$nextTick(()=>{
	    // input
	    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputFontColor
	      el.style.fontSize = this.addEditForm.inputFontSize
	      el.style.borderWidth = this.addEditForm.inputBorderWidth
	      el.style.borderStyle = this.addEditForm.inputBorderStyle
	      el.style.borderColor = this.addEditForm.inputBorderColor
	      el.style.borderRadius = this.addEditForm.inputBorderRadius
	      el.style.backgroundColor = this.addEditForm.inputBgColor
	    })
	    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.inputHeight
	      el.style.color = this.addEditForm.inputLableColor
	      el.style.fontSize = this.addEditForm.inputLableFontSize
	    })
	    // select
	    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectFontColor
	      el.style.fontSize = this.addEditForm.selectFontSize
	      el.style.borderWidth = this.addEditForm.selectBorderWidth
	      el.style.borderStyle = this.addEditForm.selectBorderStyle
	      el.style.borderColor = this.addEditForm.selectBorderColor
	      el.style.borderRadius = this.addEditForm.selectBorderRadius
	      el.style.backgroundColor = this.addEditForm.selectBgColor
	    })
	    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.selectHeight
	      el.style.color = this.addEditForm.selectLableColor
	      el.style.fontSize = this.addEditForm.selectLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
	      el.style.color = this.addEditForm.selectIconFontColor
	      el.style.fontSize = this.addEditForm.selectIconFontSize
	    })
	    // date
	    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
	      el.style.height = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateFontColor
	      el.style.fontSize = this.addEditForm.dateFontSize
	      el.style.borderWidth = this.addEditForm.dateBorderWidth
	      el.style.borderStyle = this.addEditForm.dateBorderStyle
	      el.style.borderColor = this.addEditForm.dateBorderColor
	      el.style.borderRadius = this.addEditForm.dateBorderRadius
	      el.style.backgroundColor = this.addEditForm.dateBgColor
	    })
	    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.dateHeight
	      el.style.color = this.addEditForm.dateLableColor
	      el.style.fontSize = this.addEditForm.dateLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
	      el.style.color = this.addEditForm.dateIconFontColor
	      el.style.fontSize = this.addEditForm.dateIconFontSize
	      el.style.lineHeight = this.addEditForm.dateHeight
	    })
	    // upload
	    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
	    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
	      el.style.width = this.addEditForm.uploadHeight
	      el.style.height = this.addEditForm.uploadHeight
	      el.style.borderWidth = this.addEditForm.uploadBorderWidth
	      el.style.borderStyle = this.addEditForm.uploadBorderStyle
	      el.style.borderColor = this.addEditForm.uploadBorderColor
	      el.style.borderRadius = this.addEditForm.uploadBorderRadius
	      el.style.backgroundColor = this.addEditForm.uploadBgColor
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
	      el.style.lineHeight = this.addEditForm.uploadHeight
	      el.style.color = this.addEditForm.uploadLableColor
	      el.style.fontSize = this.addEditForm.uploadLableFontSize
	    })
	    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
	      el.style.color = this.addEditForm.uploadIconFontColor
	      el.style.fontSize = this.addEditForm.uploadIconFontSize
	      el.style.lineHeight = iconLineHeight
	      el.style.display = 'block'
	    })
	    // 多文本输入框
	    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
	      el.style.height = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaFontColor
	      el.style.fontSize = this.addEditForm.textareaFontSize
	      el.style.borderWidth = this.addEditForm.textareaBorderWidth
	      el.style.borderStyle = this.addEditForm.textareaBorderStyle
	      el.style.borderColor = this.addEditForm.textareaBorderColor
	      el.style.borderRadius = this.addEditForm.textareaBorderRadius
	      el.style.backgroundColor = this.addEditForm.textareaBgColor
	    })
	    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
	      // el.style.lineHeight = this.addEditForm.textareaHeight
	      el.style.color = this.addEditForm.textareaLableColor
	      el.style.fontSize = this.addEditForm.textareaLableFontSize
	    })
	    // 保存
	    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
	      el.style.width = this.addEditForm.btnSaveWidth
	      el.style.height = this.addEditForm.btnSaveHeight
	      el.style.color = this.addEditForm.btnSaveFontColor
	      el.style.fontSize = this.addEditForm.btnSaveFontSize
	      el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
	      el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
	      el.style.borderColor = this.addEditForm.btnSaveBorderColor
	      el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnSaveBgColor
	    })
	    // 返回
	    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
	      el.style.width = this.addEditForm.btnCancelWidth
	      el.style.height = this.addEditForm.btnCancelHeight
	      el.style.color = this.addEditForm.btnCancelFontColor
	      el.style.fontSize = this.addEditForm.btnCancelFontSize
	      el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
	      el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
	      el.style.borderColor = this.addEditForm.btnCancelBorderColor
	      el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
	      el.style.backgroundColor = this.addEditForm.btnCancelBgColor
	    })
	  })
	},
	addEditUploadStyleChange() {
		this.$nextTick(()=>{
		  document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
			el.style.width = this.addEditForm.uploadHeight
			el.style.height = this.addEditForm.uploadHeight
			el.style.borderWidth = this.addEditForm.uploadBorderWidth
			el.style.borderStyle = this.addEditForm.uploadBorderStyle
			el.style.borderColor = this.addEditForm.uploadBorderColor
			el.style.borderRadius = this.addEditForm.uploadBorderRadius
			el.style.backgroundColor = this.addEditForm.uploadBgColor
		  })
	  })
	},
  }
};
</script>
<style lang="scss">
.editor{
  height: 500px;
  
  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}
</style>
