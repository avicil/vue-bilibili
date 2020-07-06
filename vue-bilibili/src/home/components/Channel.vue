<template>
  <div id="Channel">
      <div class="breadcrumb">
          <p class="item_cur">
          TA的频道
        </p>
      </div>
      <div class="content">
          <div class="content_img">
              <a href="JavaScript:;">
                <img src="@/assets/img/Channel_img/img.jpg" alt="加载失败">
                <div class="video">
                    <strong>1</strong>
                    <i class="iconfont"></i>
                </div>
              </a>
          </div>
          <div class="channel_meta">
            <h4 class="channel_name">学生作品-视频</h4>
            <div class="channel_update_time">3-12</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Channel',
    data () {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style scoped>
    #Channel{
        height: 204px;
        background-color: #fff;
        padding: 20px;
    }
        .breadcrumb{
            line-height: 24px;
            height: 24px;
            vertical-align: middle;
        }
            .item_cur{
                width: 77px;
                height: 24px;
                color: #222;
                font-size: 18px;
                vertical-align: middle;
            }
        .content{
            margin-top: 15px;
            width: 1060px;
            height: 180px;
        }
            .content_img{
                width: 190px;
                height: 119px;
                position: relative;
            }
                .content_img a img{
                    display: block;
                    width: 100%;
                    height: 100%;
                }
                .video{
                    position: absolute;
                    top: 0;
                    right: 0;
                    width: 70px;
                    height: 100%;
                    color: #e5e9ef;
                    text-align: center;
                    font-size: 12px;
                    box-sizing: border-box;
                    background-color: rgba(0,0,0,.6);
                }
                    .video strong{
                        position: relative;
                        top: 38px;
                        left: -5px;
                        font-size: 18px;
                        color: #fff;
                        font-weight: 400;
                        font-family: Arial;
                    }
                    .iconfont{
                        position: relative;
                        top: 42px;
                        left: 8px;
                        background-image: url(//s1.hdslb.com/bfs/static/jinkela/space/asserts/icons.png);
                        background-repeat: no-repeat;
                        display: block;
                        height: 20px;
                        margin-top: 4px;
                        background-position: -1223px -151px;
                    }    
            .channel_meta{
                height: 55px;
            }
                .channel_name{
                    max-height: 36px;
                    line-height: 18px;
                    margin-top: 5px;
                    color: #222;
                    font-size: 12px;
                    font-weight: 400;
                }
                .channel_update_time{
                    line-height: 14px;
                    height: 14px;
                    margin-top: 5px;
                    color: #999;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 12px;
                }
</style>