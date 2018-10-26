<template>
  <main class="main">
    <section class="guide">
      <section class="guide-list">
        <div class="container">
          <h2 class="caption has-text-centered">
            {{$t('产品使用手册')}}
          </h2>
          <div class="columns is-multiline is-mobile" >
            <div class="column is-full-mobile is-half-tablet is-one-third-desktop is-one-third-widescreen is-one-quarter-fullhd" v-for="(category, index) in categories" :key="index">
              <h2 class="subtitle">
                {{category.title}}
              </h2>
              <ul>
                <li v-for="(guide, index) in guide[`${category.name}`]" :key="index">
                  <div class="accordion">
                    <a target="_blank" :href="guide.content.rendered" class="accordion-header">
                      <i><img :src="guide.excerpt.rendered"></i>{{guide.title.rendered}}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>  
  </main>
</template>

<style lang="stylus">
.guide {
  background: #edf1f2;
  &-list {
    padding: 30px 0;
  }
  .caption {
    font-size: 36px;
    line-height: 44px;
    margin: 42px 0;
  }
  .subtitle {
    font-size: 24px;
    line-height: 24px; 
    padding: 34px 0 22px 32px;
    margin-bottom: 0;
  }
  .accordion {
    border-radius: 4px;
    padding: 8px 0px;
    overflow: hidden;

    &-header {
      cursor: pointer;

      i {
        display: inline-block; 
        width: 35px;
        padding-right: 10px;
        text-align: center; 
        vertical-align: middle;
      }
    }
  }
  .column {
    background: #fff;
    background-clip: content-box; 
    &:nth-of-type(4n+1) {
      h2 {
        border-top: 1px solid #f8ce7c;
      }
    }
    &:nth-of-type(4n+2) {
      h2 {
        border-top: 1px solid #b6d673  ;
      }
    }
    &:nth-of-type(4n+3) {
      h2 {
        border-top: 1px solid #ee8379 ;
      }
    }
    &:nth-of-type(4n) {
      h2 {
        border-top: 1px solid #7dc5e9;
      }
    }
  }
  ul{
    padding: 0 0 32px 32px; 
  }  
}
</style>

<script>
export default {
  data() {
    return {
      guides: [],
      categories: [
      {
         title: this.$t('网关类'),
         name: '网关类'
      },
      {
        title: this.$t('零火开关'),
        name: '零火开关'
      },
      {
        title: this.$t('单火开关'),
        name: '单火开关'
      },
      {
        title: this.$t('嵌入式开关'),
        name: '嵌入式开关'
      },
      {
        title: this.$t('智能传感器'),
        name: '智能传感器'
      },
      {
        title: this.$t('智能多功能警示器'),
        name: '智能多功能警示器'
      },
      {
        title: this.$t('智能电机'),
        name: '智能电机'
      },
      {
        title: this.$t('智能灯泡/灯带'),
        name: '智能灯泡/灯带'
      },
      {
        title: this.$t('智能插座/场景面板'),
        name: '智能插座/场景面板'
      },
      {
        title: this.$t('智能红外传感器'),
        name: '智能红外传感器'
      },
      {
        title: this.$t('智能辅助类'),
        name: '智能辅助类'
      }
    ],
    guide: {},
    }
  },
  methods: {
    getUserGuidesByCategory(category) {
      return this.guides.filter(element => {
        return element.category.indexOf(category.name)!=-1
      })
    }
  },
  async mounted() {
    let { data } = await this.$axios.get(
      'http://api.fantem.cn/wp-json/wp/v2/posts?categories=user-guide&per_page=30'
    )
    this.guides = data
    this.categories.forEach(category => {
      const guides = this.getUserGuidesByCategory(category)
      this.$set(this.guide, category.name, guides)
    })
  }
}
</script>
