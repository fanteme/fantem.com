<template>
  <main>
    <product-banner :banner="banner"></product-banner>
    <section class="section-top brain container has-text-centered has-text-weight-light">
      <div class="columns is-multiline">
        <div class="column is-8 is-offset-2">
          <p class="content">{{$t('OOMI Cube 智能家庭网关是OOMI智能家居系统的大脑，即人们常说的“网关”。')}}</p>
          <p class="content">{{$t('OOMI Cube具备夜视监控摄像头，五种传感器（温度、湿度、亮度、人体红外、紫外线）实时监控室内环境，以及360°红外学习模块取代传统遥控器操控家中家电。')}}</p>
        </div>
        <div class="column is-12">
          <img :src="`${this.$store.state.cdn}/2018/11/ebb101eb44f0eff924233b87b43270df.jpg`">
        </div>
      </div>
    </section>
    <section class="section-top">
      <div class="container-fluid">
        <div class="columns is-gapless">
        <div class="column is-4 center"><img :src="`${this.$store.state.cdn}/2018/11/7736ede9af6bfbc6b6e2f03bf066cec4.jpg`"></div>
        <div class="column is-4 center"><img :src="`${this.$store.state.cdn}/2018/11/eb4931303d709d9ced0cd7f51db95bf0.jpg`"></div>
        <div class="column is-4 center"><img :src="`${this.$store.state.cdn}/2018/11/e4b138bd009d5fb9774f77d120cf5789.jpg`"></div> 
      </div>
      </div>
      <div class="container easy-shuttle has-text-centered">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h2 class="title has-text-weight-normal has-text-centered">{{$t('智能家庭网关OOMI Cube，为您带来全新的智能家居操控模式！')}}</h2>
          </div>
          <div class="column is-8 is-offset-2">
            <p class="content has-text-weight-light">{{$t('OOMI Cube还可以一键设置不同的生活情景模式。每一种模式都是一种享受，每一种氛围都恰到好处，生活在随意切换之间，有OOMI Cube的家，更懂您的生活！')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top has-text-centered" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/d791a9e59031fc2d5884cd462ab8eccb.jpg)`}">
      <div class="container easy-shuttle">
        <div class="columns is-gapless">
          <div class="column">
            <h2 class="title has-text-weight-normal has-text-white">{{$t('场景自定义：一键操控家中所有节点')}}</h2>
            <img :src="`${this.$store.state.cdn}/2018/11/eb680c5893f97f5659c5e2c00bbec11a.png`">
          </div>
        </div>
      </div>
    </section>  
    <section class="section-mode theme-background-color has-text-centered">
      <div class="container">
        <div class="columns is-multiline">
          <div v-for="(mode, index) in modes" :key="index" class="column is-3 center">
            <div v-if="mode.icon" class="wrap center" v-html="mode.icon"></div>
            <p v-if="mode.more" class="more">{{mode.more}}</p>
            <p v-else class="title has-text-weight-normal">{{mode.txt}}</p>
          </div>
        </div>
      </div>
    </section>  
    <section class="section-top features theme-background-color has-text-centered">
      <div class="container">
        <div class="columns">
          <div class="column">
            <h2 class="title has-text-weight-normal">{{$t('智能家庭网关OOMI Cube')}}</h2> 
            <h2 class="title has-text-weight-normal">{{$t('六大特色功能为您的智能家居生活添色加彩')}}</h2>
          </div>
        </div>   
      </div>
    </section> 
    <section class="theme-background-color">
      <div class="container has-text-centered">
        <div class="columns is-gapless">
          <div class="column">
            <h3 class="icon-title center has-text-weight-normal"><strong class="has-text-weight-normal has-text-centered">01</strong><span>{{$t('夜视监控摄像头')}}</span></h3>
          </div>
        </div>
      </div>
    </section>
    <section class="section-justify infrared" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/e6b5635dd52f042307579f5019c715b9.jpg)`}">
        <div class="container">
          <div class="columns is-gapless">
            <div class="column white-background-color is-6 has-text-centered">
              <img :src="`${this.$store.state.cdn}/2018/11/e48a7ec9eaf0782b04d9073b8d5ec06c.png`">
            </div>
            <div class="column is-6 has-text-white">
              <h3 class="title has-text-white has-text-weight-normal">{{$t('高清红外夜视，再黑也能拍清楚')}}</h3>
              <p class="content has-text-weight-light">{{$t('实时监测摄像机画面中的人物，出现异动，即向手机推送安防报警消息，时刻保障你的财产安全。')}}</p>
            </div>         
          </div>
        </div>
      </section>
    <section class="section-right monitoring has-text-right full" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/f6c3e879819d4764299f567470f4430b.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-7">
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/9a91d7737326cd9836070f234acd8fb7.svg`"></div>
                  <span class="has-text-weight-light">{{$t('开启离家模式')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/ce321944a30ae129fbfb0daa36509067.svg`"></div>
                  <span class="has-text-weight-light">{{$t('发现异常')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/560ad151878c1b3d5db13411debe5279.svg`"></div>
                  <span class="has-text-weight-light">{{$t('发送报警消息')}}</span>
                </li>
              </ul>  
            </div>
            <h3 class="title has-text-weight-normal">{{$t('移动端实时查看，时刻掌握监控情况')}}</h3>
            <p class="content has-text-weight-light">{{$t('告别传统落后的监控设备，只需一台智能手机，便可随时随地地查看现场情况，如果发生异动，手机会实时推送报警消息。')}}</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top store theme-background-color">
      <div class="container has-text-centered">
        <div class="columns">
          <div class="column">
            <h3 class="title has-text-weight-normal">{{$t('两种存储方式，视频画面随心回放')}}</h3>
            <p class="content has-text-weight-light">{{$t('可以通过本地存储卡或云录像，将摄像机前发生的一切记录下来，你关心的任何画面都不会错过。')}}</p>
            <div class="columns">
              <div class="column is-4 is-offset-2 item center">
                <i class="has-text-white">1</i>
                <div>
                  <div class="icons"><img :src="`${this.$store.state.cdn}/2018/11/4bced8326c5a74400b961928ca5e30ba.svg`"></div>
                  <span class="has-text-weight-light">{{$t('本地存储卡')}}</span>
                </div>
              </div>
              <div class="column is-4 item center">
                <i class="has-text-white">2</i>
                <div>
                  <div class="icons"><img :src="`${this.$store.state.cdn}/2018/11/3fad572b97d75066877cd4f65e4eac81.svg`"></div>
                  <span class="has-text-weight-light">{{$t('云存储')}}</span>
                </div>
              </div>  
            </div>
          </div>
        </div>
      </div>  
    </section>
    <section class="section-top temperature dark has-text-centered">
      <div class="container">
        <div class="columns is-gapless is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal has-text-white"><strong class="has-text-weight-normal has-text-white">02</strong><span>{{$t('温湿度传感器')}}</span></h3>
            <h4 class="has-text-white">{{$t('实时检测温湿度状态，温湿度异常提醒，实时监测室内温湿度变化')}}</h4>
          </div>
          <div class="column is-12">
            <div class="chart">
              <img :src="`${this.$store.state.cdn}/2018/11/8d428b1137703ac1485db4132f2cab84.png`">
              <img class="trend" :src="`${this.$store.state.cdn}/2018/11/1cee87054b724b200c8adfc385a30a90.png`">
            </div>
          </div>
          <div class="column is-12">
            <div class="chart">
              <img :src="`${this.$store.state.cdn}/2018/11/fb1e3f5fb0a84e749c57152d0439ca1f.png`">
              <img class="trend" :src="`${this.$store.state.cdn}/2018/11/e5a1930074943fb6b5a7a3309371b894.png`">
            </div>
          </div>
          <div class="column is-12">
            <div class="columns has-text-centered">
              <div class="column comments center is-3 is-offset-3 has-text-white">
                <i></i>{{$t('全天湿度')}}
              </div>
              <div class="column comments center is-3 has-text-white">
                <i class="red"></i>{{$t('全天温度')}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
    <section class="section-right refused-dry normal" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/367523139a41bd26b45ed8f72ab995ae.jpg)`}">
      <div class="container">
        <div class="columns is-variable is-0">
          <div class="column is-6 is-offset-6 has-text-right theme-background-color">
            <div class="columns is-variable is-0">
              <div class="column is-10 is-offset-2">
                <h3>{{$t('联动智能设备，改善室内环境舒适度')}}</h3>
                <h3 class="title orange has-text-weight-normal">{{$t('拒绝干燥')}}</h3>
                <p class="has-text-weight-light">{{$t('当传感器检测到空气过于干燥时，可通过联动OOMI Cube 智能插座打开与其相连的加湿器，改善空气湿度。')}}</p>
                <div class="icons has-text-centered">
                  <ul>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/c5e9683e8e83a7f2587e9e19b34bcf65.svg`"></div>
                      <span class="has-text-weight-light">{{$t('检测空气质量')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/ce321944a30ae129fbfb0daa36509067.svg`"></div>
                      <span class="has-text-weight-light">{{$t('分析数据')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/3eae16ccd55a877bf82560fe4fc7f3f6.svg`"></div>
                      <span class="has-text-weight-light">{{$t('联动插座设备')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/82b1849a9dfbed0621a6a75a41dac135.svg`"></div>
                      <span class="has-text-weight-light">{{$t('开启加湿器')}}</span>
                    </li>
                  </ul>  
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </section>  
    <section class="section-left refused-hot normal" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/8f8370758f580a4b277e366a51e21ba8.jpg)`,backgroundPosition: 'top right'}">
      <div class="container">
        <div class="columns is-variable is-0">
          <div class="column is-6 theme-background-color">
            <div class="columns is-variable is-0">
              <div class="column is-10">
                <h3 class="title orange has-text-weight-normal">{{$t('拒绝炎热')}}</h3>
                <p class="has-text-weight-light">{{$t('当温度过高时，传感器可联动多功能遥控器自动打开空调制冷。')}}</p>
                <div class="icons has-text-centered">
                  <ul>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/0898c31a461b7eed9749ab14588abdb9.svg`"></div>
                      <span class="has-text-weight-light">{{$t('检测室内温度')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/ce321944a30ae129fbfb0daa36509067.svg`"></div>
                      <span class="has-text-weight-light">{{$t('分析数据')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/241b8ace1dc74dfdebb6733cbdaa242c.svg`"></div>
                      <span class="has-text-weight-light">{{$t('联动遥控设备')}}</span>
                    </li>
                    <li>
                      <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/4ea37a74e474b040a763d4f9c7cc6ec9.svg`">
                    </li>
                    <li>
                      <div><img :src="`${this.$store.state.cdn}/2018/11/96cbe9cf0ed15f1f023519683ef84f45.svg`"></div>
                      <span class="has-text-weight-light">{{$t('开启空调')}}</span>
                    </li>
                  </ul>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>  
    <section class="section-top light gray-radial-gradient has-text-centered">
      <div class="container">
        <div class="columns is-multiline is-variable is-0">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal"><strong class="has-text-weight-normal">03</strong><span>{{$t('亮度传感器')}}</span></h3>
            <h3>{{$t('智能光控，光亮随环境改变')}}</h3>
          </div>
          <div class="column is-6 is-offset-3">
            <p class="has-text-weight-light">{{$t('智能识别家居环境光线明暗度，结合预设的智能场景自动调节灯光亮度，感受人性化生活智能光控感应，总是为您的舒适着想。')}}</p>
          </div>
          <div class="column is-12">
            <div class="columns is-variable is-0">
              <div class="column is-4"><img :src="`${this.$store.state.cdn}/2018/11/3036d89379ac0937b35dc0286b99c197.png`"></div>
              <div class="column is-4"><img :src="`${this.$store.state.cdn}/2018/11/d33201c956e49cdd5f82eb5b9df0e5e7.png`"></div>
              <div class="column is-4"><img :src="`${this.$store.state.cdn}/2018/11/a869b3f5ff4823694a4c37fd01f2cfe3.png`"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal"><strong class="has-text-weight-normal">04</strong><span>{{$t('人体红外感应器')}}</span></h3>
            <p class="has-text-weight-light">{{$t('搭配OOMI智能家居套装，智能探测人或宠物移动，手机上轻松查看室内所有情况。')}}</p>
          </div>
          <div class="column is-12">
            <img :src="`${this.$store.state.cdn}/2018/11/33a4a9000843e507fb16eb39d57458ad.png`">
          </div>
        </div>
      </div>
    </section>  
    <section class="section-right alarm full has-text-right" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/6e19ad2b300e0fa1d675a1c2ff40f8a0.jpg)`}">
      <div class="container">
        <div class="columns">
          <div class="column is-5 is-offset-7">
            <h3 class="title has-text-weight-normal has-text-white">{{$t('声光报警 震慑小偷')}}</h3>
            <p class="content has-text-weight-light has-text-white">{{$t('红外人体感应，探测反应灵敏；布防报警声音响亮，有效震慑小偷')}}</p>
            <div class="icons has-text-centered">
              <ul>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/e2cbfc168291b9af4763a83df752258f.svg`"></div>
                  <span class="has-text-white">{{$t('感应异常')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/881ad89e8de8cc036fa80aa094ea0edf.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/b3831b80fc4e5de958dc769180b4b61f.svg`"></div>
                  <span class="has-text-white">{{$t('联动警报器')}}</span>
                </li>
                <li>
                  <img class="arrow" :src="`${this.$store.state.cdn}/2018/11/881ad89e8de8cc036fa80aa094ea0edf.svg`">
                </li>
                <li>
                  <div><img :src="`${this.$store.state.cdn}/2018/11/c268b017215b961a131c25cfb3c78fe0.svg`"></div>
                  <span class="has-text-white">{{$t('触发警报')}}</span>
                </li>
              </ul>  
            </div>
            <img :src="`${this.$store.state.cdn}/2018/11/68cf48e69ce98ddadae7e919ab578a5d.png`">
          </div>
        </div>
      </div>
    </section>  
    <section class="section-top ultraviolet-light has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal"><strong class="has-text-weight-normal">05</strong><span>{{$t('紫外线传感器')}}</span></h3>
            <h3>{{$t('高灵敏度紫外线传感器，有效探测太阳光紫外线强度')}}</h3>
            <p class=" has-text-weight-light">{{$t('搭配OOMI智能窗帘电机，调整窗帘开合，为您打造宜居生活细节。')}}</p>
          </div>
          <div class="column is-12">
            <div class="columns">
              <div class="column center is-3 is-offset-3">
                <img :src="`${this.$store.state.cdn}/2018/11/8dbb3c8c7df8380caa76936715370e73.svg`">
              </div>
              <div class="column center is-3">
                <img :src="`${this.$store.state.cdn}/2018/11/ac60c11e56f36fa20e621cd68ee3f73a.svg`">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section-top voice has-text-centered theme-background-color">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <h3 class="icon-title center has-text-weight-normal"><strong class="has-text-weight-normal">06</strong><span>{{$t('扬声器与麦克风')}}</span></h3>
            <h3 class="subtitle">{{$t('双向语音对讲，高保真音质，方便在外远程查看的同时，进行语音沟通')}}</h3>
          </div>
        </div>
      </div>
      <div class="container-fluid dialog" :style="{backgroundImage: `url(${this.$store.state.cdn}/2018/11/6102cdb8210cb5f58c55d72229db8f5c.jpg)`}">
      </div>
    </section>    
    <product-parameter :parameters="parameters"></product-parameter>   
  </main>
</template>
<style lang="stylus" scoped>
.icon-title
  color: #3e3a39
  font-size: 28px
  padding: 55px 0
  vertical-align: middle   
  strong 
    width: 124px
    height: 124px 
    font-size: 74px
    border: 1px solid #626161 
    border-radius: 8px
    margin-right: 30px
  span 
    line-height: 54px 
    border-bottom: 1px solid #ebb08d  
  &.has-text-white
    span
      border-bottom-color: #663014   
    strong 
      border-color: #fff
.section
  &-top
    background-position: center
    &.dark
      background: #020106  
    &.brain
      padding: 50px 0 70px 
    &.features
      padding: 50px 0
      .title
        margin: 0 0 10px
    .easy-shuttle
      max-height: 800px
      overflow: hidden
      img
        margin-top: 14px
      .title
        padding-top: 70px
        margin-bottom: 0
      .content
        margin: 30px 0 70px
      img
        vertical-align:bottom   
    h4 
      font-size: 20px 
    h3  
      font-size: 28px  
    .title
      color: #3e3a39
      font-size: 36px 
    .content
      color: #3e3a39
      margin-bottom: 0
    &.store  
      padding: 60px 0 85px
      .item
        font-size: 16px
        padding: 65px 0 0
        i 
          line-height: 38px
          font-style: normal
          width: 38px
          height: 38px
          margin-right: 47px
          border-radius: 50%
          background: #868686
        .icons
          height: 76px
          margin-bottom: 18px   
        span
          font-size: 16px 
    &.temperature
      padding-bottom: 80px
      h4
        margin: 30px 0 70px
      .chart
        position: relative 
        display: inline-block 
        margin-bottom: 40px
        .trend
          position: absolute
          bottom: 30px
          left: 58px

      .comments
        i
          width: 100px
          display: inline-block
          height: 2px 
          background: #03f8eb
          margin-right: 25px
          &.red
            background: #d73526   
    &.light
      .has-text-weight-light
        margin: 19px 0 60px 
      img
        vertical-align: bottom 
    &.ultraviolet-light
      img
        margin: 50px 0 80px
        @media screen and (max-width: 768px) {
          margin: 30px 0 20px
        }  
    &.voice
      .subtitle
        margin-bottom: 50px
      .dialog
        height: 720px
  &-right, &-left 
    background-repeat: no-repeat 
    &:not(.normal)
      background-size: cover
    &:not(.full)  
      @media screen and (max-width: 768px) {
        padding-top: 450px
      }
      @media screen and (max-width: 616px) {
        padding-top: 230px
      }
    &.normal
      height: 600px
      @media screen and (max-width: 768px) {
        height: auto
        min-height: 800px
      }
    h3 
      font-size: 28px
    .title
       margin: 38px 0 40px
  &-left
    .icons
      ul 
        justify-content: flex-start
    &.refused-hot   
      background-color: #eff3f4   
      .is-6
        padding: 196px 0 94px 
        @media screen and (max-width: 768px) {
          padding: 70px 0 44px 
        }
        .icons
          margin-top: 75px 
  &-right
    &.monitoring
      .columns
        padding: 391px 0 120px 0
        @media screen and (max-width: 1280px ) {
          padding: 100px 0
        }
    &.refused-dry
      background-color: #eff3f4 
      overflow: hidden
      .is-6
        padding: 66px 0 85px
        .title
          margin-top: 134px
          @media screen and (max-width: 768px) {
            margin-top: 64px
          }
        .icons
          margin-top: 50px  
    &.alarm
      padding: 80px 0 60px  
      .icons
        margin: 60px 0 50px   
    
  &-justify
    overflow: hidden 
    &.infrared
      background-repeat: no-repeat
      background-position: top right
      @media screen and (max-width: 768px) {
        padding-bottom: 60px
        background-position: bottom right
        }
      img
        margin: 100px 0 90px
        @media screen and (max-width: 768px) {
          margin: 40px 0
        }
      .title
        margin: 80px 0 0 50px
      .content
        margin: 20px 0 0 50px  
</style>
<script>
import ProductBanner from "~/components/ProductBanner"
import ProductParameter from '~/components/ProductParameter'
  export default {
    components: {
      ProductBanner,ProductParameter
    },
    data() {
      return {
        modes:[
          {
            icon: '<svg width="104" height="81" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M51.666 14.8V.75M28.136 24.548l-9.934-9.935M18.389 48.082H4.34M98.992 48.082H84.943M85.13 14.613l-9.933 9.935M28.785 58.412a25.017 25.017 0 0 1-2.217-10.33c0-13.863 11.237-25.101 25.098-25.101 13.862 0 25.098 11.238 25.098 25.101 0 3.672-.788 7.16-2.205 10.304M.75 58.388h101.832M66.353 79.75L54.319 67.715a3.752 3.752 0 0 0-5.306 0L36.98 79.75"/></g></svg>',
            txt: this.$t('起床模式')
          },
          {
            icon: '<svg width="83" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M7.478 47.4c0-4.661 3.793-8.454 8.455-8.454 4.663 0 8.456 3.793 8.456 8.455s-3.793 8.454-8.456 8.454c-4.662 0-8.455-3.792-8.455-8.454zM31.215 55.575c0-6.123 4.557-11.979 12.833-16.492 8.184-4.462 18.954-7.033 30.518-7.31V56.21h-43.45c.066-.205.099-.419.099-.634zM.75 31.773V81.25M.75 60.536h80.973M81.723 51.77v29.48M.75 75.663h80.973M23.959 18.221h11.29c.667 0 .944.854.405 1.246l-11.241 8.166c-.54.392-.262 1.246.405 1.246h10.917M43.427 5.467h8.872c.524 0 .742.671.318.98l-8.833 6.416a.541.541 0 0 0 .318.98h8.579M63.197.75h4.996c.296 0 .419.378.18.552l-4.976 3.614a.305.305 0 0 0 .18.55h4.832"/></g></svg>',
            txt: this.$t('睡眠模式')
          },
          {
            icon: '<svg width="90" height="81" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M63.744 79.293H12.058c-2.515 0-4.554-2.296-4.554-5.129V29.502"/><path d="M73.195 29.194L40.301.75.751 35.287M63.434 10.292v9.987M38.319 55.266h49.144M38.163 18.36v36.693M74.555 69.293l14.249-14.25L75.12 41.36"/></g></svg>',
            txt: this.$t('离家模式')
          },
          {
            icon: '<svg width="82" height="79" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M62.757 78.058H11.874c-2.477 0-4.484-2.26-4.484-5.05V29.045"/><path d="M72.06 28.741l-32.382-28L.74 34.739M62.451 10.134v9.831M80.118 54.406h-48.38M80.271 18.077v36.12M44.445 68.213L30.418 54.187l13.47-13.47"/></g></svg>',
            txt: this.$t('回家模式')
          },
          {
            icon: '<svg width="72" height="84" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M28.598 76.635c-5.94 0-11.6-2.359-15.936-6.64-4.309-4.309-6.684-9.986-6.684-15.979v-14.3c0-1.395 1.166-2.575 2.548-2.575h45.428c1.329 0 2.428 1.078 2.501 2.453l.054.995h3.933c2.799 0 5.457 1.092 7.487 3.075 1.948 1.945 3.027 4.583 3.027 7.418a10.65 10.65 0 0 1-3.046 7.485 10.656 10.656 0 0 1-7.468 3.054h-5.256l-.266.659c-1.198 2.969-2.911 5.544-5.094 7.655l-.321.31v.055c-4.266 4.09-9.797 6.335-15.623 6.335h-5.284zM25.706 32.48c-.617-1.516-1.02-2.816-1.26-4.069-.297-1.33-.438-2.723-.438-4.297 0-1.535.141-2.923.432-4.242.296-1.518.717-2.885 1.26-4.086M18.405 32.482a19.99 19.99 0 0 1-1.263-4.071 21.172 21.172 0 0 1-.002-8.556c.27-1.388.706-2.796 1.263-4.083.53-1.261.911-2.49 1.14-3.664.233-1.145.353-2.435.353-3.827 0-1.414-.116-2.668-.355-3.836A17.566 17.566 0 0 0 18.405.77M.768 82.72h60.918"/></g></svg>',
            txt: this.$t('会客模式')
          },
          {
            icon: '<svg width="114" height="82" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M89.51 56.56l-.333.159-.453.215a12.496 12.496 0 0 1-5.401 1.217c-4.085 0-7.818-1.865-10.241-5.116l-16.216-21.59-16.077 21.59a12.785 12.785 0 0 1-8.451 4.995 12.87 12.87 0 0 1-1.827.12c-1.87 0-3.681-.41-5.383-1.216l-.786-.374"/><path d="M21.505 54.451l-.573-.653a12.878 12.878 0 0 1-3.062-6.67 12.872 12.872 0 0 1 2.456-9.509L42.36 8.3l.022-.022.08-.114 5.05-6.715A1.758 1.758 0 0 1 48.923.75c.383 0 .747.12 1.054.347l6.948 5.233 6.954-5.237A1.744 1.744 0 0 1 64.927.75c.563 0 1.08.255 1.416.701l5.093 6.772.053.054 22.04 29.345a12.873 12.873 0 0 1 2.452 9.512 12.87 12.87 0 0 1-3.06 6.664l-.573.653M21.411 54.345l3.116 2.304M22.924 55.506L8.39 74.938M.75 69.552l14.816 11.164M91.076 55.54l14.533 19.432M113.25 69.585L98.434 80.75M89.51 56.56s1.004-.438 2.838-2.108"/></g></svg>',
            txt: this.$t('聚会模式')
          },
          {
            icon: '<svg width="77" height="83" xmlns="http://www.w3.org/2000/svg"><g stroke="#3E3A39" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M7.123 81.747a2.045 2.045 0 0 1-2.043-2.042V38.932c0-.339.051-.502.14-.67l.237-.455-.267-.73L.847 22.864a2.073 2.073 0 0 1 .147-1.556c.246-.475.66-.82 1.166-.97L66.029.859c.215-.067.423-.1.632-.1a1.99 1.99 0 0 1 1.917 1.435l4.365 14.304c.32 1.074-.287 2.2-1.385 2.558L20.444 34.593l.338 2.27h53.092c1.157 0 2.063.908 2.063 2.069v40.773c0 1.145-.906 2.042-2.063 2.042H7.123zM10.704 36.863l4.85-20.403M24.888 33.055l4.845-20.908M39.069 28.714L43.915 7.83M53.251 24.37l4.846-20.88M19.944 53.113h41.13M19.944 65.498h41.13M20.782 36.863H5.19"/></g></svg>',
            txt: this.$t('影院模式')
          },
          {
            more: this.$t('更多模式等您来开启和体验...')
          }
        ],
        banner: {
          title: this.$t('智能家庭网关'),
          subtitle: 'OOMI Cube',
          content: this.$t('夜视监控摄像头 | 温度传感器 | 湿度传感器 | 亮度传感器 | 人体红外传感器 | 紫外线传感器 | 360°红外学习'),
          img: `${this.$store.state.cdn}/2018/11/62a6f722acec28ea609bddfd2de7cb29.png`,
          class: 'gray-radial-gradient'
        },
        parameters: [
          {
            column: "is-2", 
            item: this.$t('产品规格')
          },
          {
            column: "is-4", 
            value: this.$t('电源输入：5V – 2A')
           },
           {
            column: "is-2",  
            item: this.$t('摄像头')
           },
           {
            column: "is-4",  
            value: this.$t('720P，具备红外夜视功能')
           },
           {
            column: "is-2",  
            item: this.$t('工作环境')
           },
           {
            column: "is-4",  
            value: this.$t('温度：0 – 40℃ / 湿度：20 – 80% RH')
           },
           {
            column: "is-2",  
            item: this.$t('无线距离')
           },
           {
            column: "is-4", 
            value: this.$t('室内 40m')
           },
           {
            column: "is-2",  
            item: this.$t('无线功能')
           },
           {
            column: "is-4", 
            value: this.$t('Z-Wave Plus, 802.11b/g/n (Wi-Fi), 蓝牙 4.0')
           },
           {
            column: "is-2",  
            item: this.$t('产品尺寸')
           },
           {
            column: "is-4", 
            value: this.$t('80.1 x 84.8 x 103.4mm ( 包括底座、硅胶盖 )')
           }
         ],
      }
    }
  }
</script>
