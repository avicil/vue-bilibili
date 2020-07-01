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
                  <i class="el-icon-video-play"></i>
              </div>
              </a>
          </div>
          <div class="content_item">
              <p style="color: #222222">学生作品-视频</p>
              <p style="color:#999999">3-12</p>
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
                width: 160px;
                height: 100px;
                position: relative;
            }
                .content_img a img{
                    width: 160px;
                    height: 100px;
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
                .el-icon-video-play{
                    line-height: 100px;
                    font-size: 20px;
                }
            .content_item{
                font-size: 12px;
                margin-top: 5px;
            }
</style>