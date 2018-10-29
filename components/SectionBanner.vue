<template>
  <main class="main">
    <section class="hero sectionbanner" :style="{height:banner.height}">
        <div class="hero-body center" :class="{'parallax':banner.parallax}" :style="{backgroundImage: `url(${$store.state.cdn + banner.backgroundimg})`}">
          <div class="container-fluid has-text-centered">
            <div v-html="banner.icon"></div>
            <h2 class="caption has-text-weight-semibold">
              {{banner.title}}
            </h2>
            <p class="subtitle">{{banner.subtitle}}</p>
            <button v-if="banner.modal" class="button" @click.stop.prevent="showModal(banner.modal)">{{banner.buttontxt}}</button>
            <a v-else-if="banner.buttontxt" class="button">{{banner.buttontxt}}</a>
          </div>
        </div>
        
        <div class="modal" :class="{'is-active': isActive && banner.modal == 'project'}">
          <div class="modal-background" @click="closeModal"></div>
          <div class="modal-content has-text-centered">
            <div class="title has-text-centered has-text-weight-normal">
              {{$t('请填写您的信息')}}
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('公司名称')" :class="{'is-success':isCompany}" v-model="company">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field is-horizontal space-between">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('姓名')" :class="{'is-success':isName}" v-model="name">
                  </p>
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('职务')" v-model="duty">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('手机号码')" :class="{'is-success':isPhone}" v-model="phone">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('项目名称')" :class="{'is-success':isprojectName}" v-model="projectName">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('项目地址')" :class="{'is-success':isprojectAddress}" v-model="projectAddress">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="select is-normal" :class="{'is-success':isprojectType}">
                      <select v-model="projectType">
                        <option v-for="item in projectlist" :key="item">{{item}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="select" :class="{'is-success':ishouseType}">
                      <select v-model="houseType">
                        <option v-for="item in houselist" :key="item">{{item}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label"></label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <textarea maxlength="200" class="textarea" :placeholder="$t('请描述您的需求，我们会尽快联系您。（200字以内）')" v-model="content"></textarea>
                  </div>
                  <p class="has-text-right">还可以输入200字</p>
                </div>
              </div>
            </div>
            <button class="button" :class="{'is-loading':isLoading}" :disabled="!isDisabled" @click.stop.prevent="submit">{{$t('提交')}}</button>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field is-horizontal">
                  <p class="control">
                    {{$t('号必填项')}}
                  </p>
                </div>
              </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
          </div>
      </div>  

      <div class="modal" :class="{'is-active': isActive && banner.modal == 'agency'}">
          <div class="modal-background" @click="closeModal"></div>
          <div class="modal-content has-text-centered">
            <div class="title has-text-centered has-text-weight-normal">
              {{$t('请填写您的信息')}}
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('公司名称')" :class="{'is-success':isCompany}" v-model="company">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('姓名')" :class="{'is-success':isName}" v-model="name">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('手机号码')" :class="{'is-success':isPhone}" v-model="phone">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <p class="control">
                    <input class="input" type="text" :placeholder="$t('邮箱')" :class="{'is-success':isEmail}" v-model="email">
                  </p>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body is-vertical">
                <p class="has-text-left">{{$t('销售区域')}}</p>
                <div class="field is-horizontal space-between">
                  <div class="control">
                    <div class="select" :class="{'is-success':isProv}">
                      <select v-model="prov">
                        <option v-for="(option, inx) in arr" :value="option.name" :key="inx">{{ option.name }}</option>
                      </select>
                    </div>
                    <div class="select" :class="{'is-success':isCity}">
                      <select v-model="city">
                        <option v-for="(option, key) in cityArr" :value="option.name" :key="key">{{ option.name }}</option>
                      </select>
                    </div>
                    <div class="select" :class="{'is-success':isDistrict}">
                      <select v-model="district" v-if="district">
                        <option v-for="(option, num) in districtArr" :value="option.name" :key="num">{{ option.name }}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field">
                  <div class="control">
                    <div class="select" :class="{'is-success':isCooperation}">
                      <select v-model="cooperation">
                        <option v-for="item in cooperationlist" :key="item">{{item}}</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button class="button" :class="{'is-loading':isLoading}" :disabled="!isDisabled" @click.stop.prevent="submit">{{$t('提交')}}</button>
            <div class="field is-horizontal">
              <div class="field-label is-normal">
                <label class="label">*</label>
              </div>
              <div class="field-body">
                <div class="field is-horizontal">
                  <p class="control">
                    {{$t('号必填项')}}
                  </p>
                </div>
              </div>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
          </div>
      </div>  

    </section>
  </main>  
</template>
<style lang="stylus">
  .sectionbanner
    color: #fff
    padding-bottom: 24px
    box-sizing: content-box

    .parallax
      background-attachment: fixed
      background-position: center
      background-repeat: no-repeat
      background-size: cover

    .center   
   
      .caption
        font-size: 36px
        line-height: 44px
        margin: 35px 0
      .subtitle
        color: #fff 
        font-size: 28px 
        margin: 49px 0 73px 0 
      .button 
        width: 240px
        height: 57px
        font-size: 18px
        color: #fff
        background: #e76c26
        border: none
    .is-vertical 
      flex-direction: column
    .has-text-left
      color: #c4c5c5  
    .modal {
      font-size: 14px;
      color: #3e3a39;
      &-content {
        padding-bottom: 24px; 
        .title {
          position: relative;
          color: #fff;
          font-size: 28px;
          line-height: 98px;
          border-radius: 15px 15px 0 0;
          background:linear-gradient(#de6400, #ffdb0e);
        }
        width: 600px;
        border-radius: 15px;
        background: #fff;

        >.field {
          padding: 0 46px 0 37px;
          align-items: center;
        }
        .field-label {
          flex-grow: 0;
          margin-right: 10px;
          .label {
            color: #e10012;
            width: 10px;  
          }
        }
        .select {
          width: 100%;
          line-height: 48px;
          height: 48px;
          select {
            width: 100%;
          }
        }   
        .has-text-right {
          color: #c4c5c5;
        } 
        input , select {
          height: 48px;
        }
        .textarea , input , select{
          font-size: 14px;
          box-sizing: border-box; 
        }  
      }
      .button {
        height: 49px;
        width: 223px;
        margin: 19px 0
        background: #e76c26;
        color: #fff;
        border: none;
      }
      &-close {
        width: 49px;
        height: 49px;
        padding: 2px;
        background: #d6d6d6 !important;
        border: 1px solid #fff;
      }
      .space-between {
        justify-content: space-between;
        .control {
          .select {
            width: auto;
          }
        }
      }
  }      
</style>
<script>
import area from '~/assets/area.json'
  export default {
    props: {
      banner: {
        type: Object
      }
    },
    data() {
      return {
        modal: '',
        isActive: false,
        company: '',
        name: '',
        duty: '',
        phone: '',
        projectName: '',
        projectAddress: '',
        projectType: '',
        houseType: '',
        content: '',
        isLoading: false,
        cooperation: '',
        email: '',
        arr: area,
		    prov: '北京',
		    city: '请选择',
		    district: '请选择',
		    cityArr: [],
		    districtArr: [],
        emailRegPattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        projectlist: [
          this.$t('住宅'), this.$t('商业'), this.$t('办公'), this.$t('酒店')
        ],
        houselist: [
          this.$t('别墅'), this.$t('复式'), this.$t('平层'), this.$t('公寓')
        ],
        cooperationlist: [
          this.$t('产品经销'), this.$t('项目合作'), this.$t('定制开发')
        ]
      }
    },
  computed: {
      isCompany() {
        if (this.company != '') {
          return true
        } else {
          return false
        }
      },
      isName() {
        if (this.name != '') {
          return true
        } else {
          return false
        }
      },
      isPhone() {
        if (this.phone != '') {
          return true
        } else {
          return false
        }
      },
      isprojectName() {
        if (this.projectName != '') {
          return true
        } else {
          return false
        }
      },
      isprojectAddress() {
        if (this.projectAddress != '') {
          return true
        } else {
          return false
        }
      },
      isprojectType() {
        if (this.projectType != '') {
          return true
        } else {
          return false
        }
      },
      ishouseType() {
        if (this.houseType != '') {
          return true
        } else {
          return false
        }
      },
      isCooperation() {
        if (this.cooperation != '') {
          return true
        } else {
          return false
        }
      },
      isEmail() {
        if (this.email && this.emailRegPattern.test(this.email)) {
          return true
        } else {
          return false
        }
      },
      isProv() {
        if (this.prov != '') {
          return true
        } else {
          return false
        }
      },
      isCity() {
        if (this.city != '') {
          return true
        } else {
          return false
        }
      },
      isDistrict() {
        if (this.district != '') {
          return true
        } else {
          return false
        }
      },
      isDisabled() {
        if(this.modal == 'project'){
          if(this.isCompany && this.isName && this.isPhone && this.isprojectName && this.isprojectAddress && this.isprojectType && this.ishouseType) {
            return true
          } else {
            return false
          }
        }else {
          if (this.isCompany && this.isName && this.isPhone && this.isEmail && this.isProv && this.isCity && this.isDistrict && this.isCooperation) {
            return true
          } else {
            return false
          }
        }
        
      }
  },
  methods: {
    updateCity() {
			for (var i in this.arr) {
				var obj = this.arr[i];
				if (obj.name == this.prov) {
					this.cityArr = obj.sub;
					break;
				}
			}
			this.city = this.cityArr[1].name;
		},
		updateDistrict () {
			for (var i in this.cityArr) {
				var obj = this.cityArr[i];
				if (obj.name == this.city) {
					this.districtArr = obj.sub;
					break;
				}
			}
			if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
				this.district = this.districtArr[1].name;
			} else {
				this.district = '';
			}
		},
    openModal() {
     this.isActive = true
    },
    closeModal() {
      this.isActive = false
    },
    submit() {
      if(this.modal == 'project'){
        this.isLoading = true
        this.$axios
          .post('http://api.fantem.cn/wp-json/wp/v2/mail', {
            company: this.company,
            name: this.name,
            phone: this.phone,
            content: `\n
                      职务: ${this.duty}\n
                      项目名称: ${this.projectName}\n
                      项目地址: ${this.projectAddress}\n
                      项目类型: ${this.projectType}\n
                      户型: ${this.houseType}\n
                      留言: ${this.content}`
          })
          .then(res => {
            if (res.statusText == 'OK') {
              this.isLoading = false
              setTimeout(() => {
                this.closeModal()
              }, 3000)
              this.company = ''
              this.name = ''
              this.duty = ''
              this.phone = ''
              this.projectName = ''
              this.projectAddress = ''
              this.projectType = ''
              this.houseType = ''
              this.content = ''
            }
          })
          .catch(error => {
            console.log(error)
          })
      }else {
        this.isLoading = true
        this.$axios
          .post('http://api.fantem.cn/wp-json/wp/v2/mail', {
            company: this.company,
            name: this.name,
            phone: this.phone,
            email: this.email,
            city: `${this.prov}-${this.city}-${this.district}`,
            content: `\n
                      合作意向: ${this.cooperation}`
          })
          .then(res => {
            if (res.statusText == 'OK') {
              this.isLoading = false
              setTimeout(() => {
                this.closeModal()
              }, 3000)
              this.company = ''
              this.name = ''
              this.phone = ''
              this.email = ''
              this.prov = '北京'
              this.city = ''
              this.district = ''
              this.cooperation = ''
            }
          })
          .catch(error => {
            console.log(error)
          })
      }
      
    },
    showModal(val) {
      this.modal = val
      this.isActive = true
    } 
  },
  beforeMount: function () {
		this.updateCity();
		this.updateDistrict();
	},
	watch: {
		prov: function () {
			this.updateCity();
			this.updateDistrict();
		},
		city: function () {
			this.updateDistrict();
		}
	}
  }
</script>