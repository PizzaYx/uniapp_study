// service页面
```html
<view>
    <view class="od-banner">
        <image class="od-banner-icon" src="/static/resource/images/od_bg_icon.png" mode="widthFix" />
        <view class="od-jd od-jd-0">
            <view class="od-jd-out">
                <view class="od-jd-in"></view>
            </view>
            <view class="vp-flex od-jd-text">
                <view class="vp-flex_1">
                    <text class="od-jd-st-0">填写订单</text>
                </view>
                <view class="vp-flex_1">
                    <text class="od-jd-st-10">在线支付</text>
                </view>
                <view class="vp-flex_1">
                    <text class="od-jd-st-20">专人服务</text>
                </view>
                <view class="vp-flex_1">
                    <text class="od-jd-st-30">服务完成</text>
                </view>
            </view>
        </view>
    </view>
    <view class="pub-box">
        <view class="pub-box-bd">
            <view class="weui-cell weui-cell_input">
                <view class="weui-cell__hd">
                    <image class="serv-icon"
                        :src="service.icon_image ? service.icon_image_url : '../../static/resource/images/avatar.jpg'">
                    </image>
                </view>
                <view class="weui-cell__bd">
                    <text class="serv-name">{{ service.name }}</text>
                </view>
                <view class="weui-cell__ft">
                    <view class="f5 ic_info" @click="handleTap">服务内容</view>
                </view>
            </view>
        </view>
    </view>
    <block v-if="service.stype == 10 || service.stype == 15 || service.stype == 20">
        <view class="pub-box">
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">
                        <view class="weui-label">就诊医院</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <picker @change="onHospitalChange" :value="hospital_index" :range="hospitals"
                                range-key="name">
                                <input type="text" :disabled="true" placeholder="请选择要就诊的医院"
                                    :value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
                            </picker>
                        </view>
                    </view>
                </view>
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">
                        <view class="weui-label">就诊时间</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
                                placeholder="请选择就诊时间"></dtPicker>
                        </view>
                    </view>
                </view>
                <view class="weui-cell weui-cell_input" @click="onClientChange">
                    <view class="weui-cell__hd">
                        <view class="weui-label">就诊人</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <input class="weui-input" placeholder-class="vp-placeholder" placeholder="请选择就诊人"
                                style="text-align: right;" :disabled="true" :value="client.name" type="text">
                        </view>
                    </view>
                </view>
                <block v-if="service.stype == 15">
                    <!-- 接送陪诊 -->
                    <view class="weui-cell weui-cell_input">
                        <view class="weui-cell__hd">接送地址</view>
                        <view class="weui-cell__bd">
                            <input class="weui-input" name="receiveAddress" style="text-align: right"
                                placeholder-class="vp-placeholder" placeholder="请填写就诊人所在地址" v-model="order.receiveAddress" />
                        </view>
                    </view>
                </block>

                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">联系电话</view>
                    <view class="weui-cell__bd">
                        <input class="weui-input" type="number" name="tel" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
                    </view>
                </view>
            </view>
        </view>
        <view class="pub-box">
            <view class="pub-box-tt">服务需求</view>
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__bd">
                        <textarea name="demand" auto-height placeholder="请简单描述您要就诊的科室.."
                            placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
                    </view>
                </view>
            </view>
        </view>
    </block>
	
    <block v-if="service.stype == 30 || service.stype == 40">
        <!-- 送取结果,代跑取药 -->
        <view class="pub-box">
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">
                        <view class="weui-label">所在医院</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <picker @change="onHospitalChange" :value="hospital_index" :range="hospitals"
                                range-key="name">
                                <input type="text" :disabled="true" placeholder="请选择就诊所在医院"
                                    :value="hospitals[hospital_index].name" placeholder-class="vp-placeholder" />
                            </picker>
                        </view>
                    </view>
                </view>

                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">
                        <view class="weui-label">服务时间</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
                                placeholder="请选择期望服务时间"></dtPicker>
                        </view>
                    </view>
                </view>

                <view class="weui-cell weui-cell_input" @click="onAddressChange">
                    <view class="weui-cell__hd">
                        <view class="weui-label">收件信息</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <input class="weui-input" :disabled="true" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请选择收件信息" :value="
                                                            order.address.userName
                                                                ? order.address.userName + '(' + order.address.cityName + order.address.countyName + order.address.detailInfo + ')'
                                                                : ''
                                                        " />
                        <!-- {{order.address?(order.address.userName+'('+order.address.telNumber+')'):''}} -->
                    </view>
                </view>
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">联系电话</view>
                    <view class="weui-cell__bd">
                        <input class="weui-input" type="number" name="tel" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
                    </view>
                </view>
            </view>
        </view>

        <view class="pub-box">
            <view class="pub-box-tt">服务需求</view>
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__bd">
                        <textarea name="demand" auto-height placeholder="如有其他服务要求请在此填写.."
                            placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
                    </view>
                </view>
            </view>
        </view>
    </block>
	
    <block v-if="service.stype == 110">
        <!-- 上门服务 -->
        <view class="pub-box">
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">
                        <view class="weui-label">服务时间</view>
                    </view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <view>
                            <dtPicker @dtPickerChanged="onStartTimeChanged" :timestamp="order.starttime"
                                placeholder="请选择期望服务时间"></dtPicker>
                        </view>
                    </view>
                </view>

                <view class="weui-cell weui-cell_input" @click="onClientChange">
                    <view class="weui-cell__hd">服务对象</view>
                    <view class="weui-cell__bd"></view>
                    <view class="weui-cell__ft weui-cell__ft_in-access">
                        <input class="weui-input" :disabled="true" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请选择服务对象" :value="client.name" />
                    </view>
                </view>
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">服务地址</view>
                    <view class="weui-cell__bd">
                        <input class="weui-input" name="receiveAddress" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请填写服务所在地址" v-model="order.receiveAddress" />
                    </view>
                </view>
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__hd">联系电话</view>
                    <view class="weui-cell__bd">
                        <input class="weui-input" type="number" name="tel" style="text-align: right"
                            placeholder-class="vp-placeholder" placeholder="请填写您的联系电话" v-model="order.tel" />
                    </view>
                </view>
            </view>
        </view>

        <view class="pub-box">
            <view class="pub-box-tt">服务需求</view>
            <view class="pub-box-bd">
                <view class="weui-cell weui-cell_input">
                    <view class="weui-cell__bd">
                        <textarea name="demand" auto-height placeholder="请简单描述您要就诊的科室.."
                            placeholder-class="vp-placeholder" style="min-height: 150rpx" v-model="order.demand" />
                    </view>
                </view>
            </view>
        </view>
    </block>
    <view style="height: 300rpx"></view>
    <!-- 悬浮提交按钮 -->
    <view class="vp-foot">
        <view style="background: #ffffff; padding: 20rpx">
            <view class="xieyi" style="text-align: center">
                <text :class="'is_xieyi ' + (is_xieyi ? 'is_xieyi_on' : '')" @click="onXieyiChange">我已阅读并同意</text>
                <navigator :url="cfg.page_xy">《用户协议》</navigator>
                <text>和</text>
                <navigator :url="cfg.page_fw">《服务协议》</navigator>
            </view>
            <view>
                <button :class="'btnp ' + (is_xieyi ? '' : 'btnp-disabled')" @click="submit">
                    确认下单
                    <block v-if="order.price > 0">（支付{{ order.price }}元）</block>
                </button>
            </view>
        </view>
    </view>
    <uni-popup ref="popup" type="center" :is-mask-click="false" background-color="#fff">
        <view class="popup-content">
            <view class="group">
                <input class="uni-input" type="tel" v-model="validMobile.phone" placeholder="手机号" />
            </view>
            <view class="group">
                <input class="uni-input" v-model="validMobile.validCode" placeholder="验证码" />
                <text class="valid-text" @click="countdownChange">{{countdown.validText}}</text>
            </view>
        </view>
        <view class="btns">
            <view class="cancal" @click="cancal">取消</view>
            <view class="ok" @click="ok">确定</view>
        </view>
    </uni-popup>
</view>
```

clients页面
```html
<view class="cell-box" v-for="(item, index) in clients" :key="index">
    <view class="weui-cell" @click="onClientSelected" :data-index="index">
        <view class="weui-cell__bd">
            <view>
                <text style="font-weight: bold">{{ item.name }}</text>
            </view>
            <view>
                <text :class="'sext' + item.sex">{{ item.sex == 1 ? '男' : '女' }}</text>
                <text style="margin-left: 10rpx">{{ item.age }}周岁</text>
                <text style="margin-left: 10rpx">{{ item.mobile }}</text>
            </view>
        </view>
        <view class="weui-cell__ft">
            <text v-if="act == 'select'" style="
                display: inline-block;
                padding: 15rpx 30rpx;
                border: 1rpx solid #0bb584;
                color: #0bb584;
                font-weight: bold;
                border-radius: 10rpx;
                font-size: 28rpx;
                overflow: hidden;
            ">
                选择
            </text>
            <text v-else @click="removeClient" :data-id="item.id" style="
                display: inline-block;
                padding: 15rpx 30rpx;
                border: 1rpx solid #eeeeee;
                color: #f13e6d;
                border-radius: 10rpx;
                font-size: 28rpx;
                overflow: hidden;
            ">
                移除
            </text>
        </view>
    </view>
</view>
```
order页面
```html
<view>
    <view style="width: 100%; border-bottom: 0 none; position: fixed; z-index: 2">
        <view style="background: #ffffff; position: relative">
            <view class="h-tab vp-flex">
                <view :class="'h-tab-item vp-flex_1 ' + (filt == '' ? 'on' : '')" data-filt=""
                    @tap="onFilterChange">全部</view>
                <view :class="'h-tab-item vp-flex_1 ' + (filt == 1 ? 'on' : '')" data-filt="1"
                    @tap="onFilterChange">待支付</view>
                <view :class="'h-tab-item vp-flex_1 ' + (filt == 2 ? 'on' : '')" data-filt="2"
                    @tap="onFilterChange">待服务</view>
                <view :class="'h-tab-item vp-flex_1 ' + (filt == 3 ? 'on' : '')" data-filt="3"
                    @tap="onFilterChange">已完成</view>
                <view :class="'h-tab-item vp-flex_1 ' + (filt == 4 ? 'on' : '')" data-filt="4"
                    @tap="onFilterChange">已取消</view>
            </view>
        </view>
    </view>
    <view style="height: 100rpx"></view>
    <block v-if="list != null">
        <view v-if="list != null && list.length == 0" style="padding: 40rpx 40rpx 40rpx 40rpx; text-align: center">
            <image src="/static/resource/images/empty.png" mode="widthFix" style="width: 200rpx" />
            <view class="f5">没有相关内容~</view>
        </view>
        <view v-else class="od-list">
            <block v-for="(item, index) in list" :key="index">
                <view class="od-item" @tap="toOrder" :data-id="item.out_trade_no">
                    <view class="weui-cell weui-cell_access">
                        <view class="weui-cell__hd">
                            <view>
                                <image :src="item.service_logo_image_url" mode="widthFix" class="od-logo"
                                    style="width: 100rpx; height: 100rpx; margin-right: 20rpx" />
                            </view>
                        </view>
                        <view class="weui-cell__bd">
                            <view>
                                <text style="font-weight: bold">{{ item.service_name }}</text>
                            </view>
                            <view class="od-info">
                                <block v-if="item.service_stype <= 20">
                                    <view>
                                        <text>{{ item.hospital_name }}（{{ item.area_name }}）</text>
                                    </view>
                                    <view>
                                        预约时间：
                                        <formater :timestamp="item.starttime" format="MM-dd hh:mm"></formater>
                                    </view>
                                    <view>
                                        就诊人员：
                                        <text>{{ item.client_name }}</text>
                                    </view>
                                </block>
                                <block v-if="item.service_stype > 20 && item.service_stype < 100">
                                    <view>
                                        <text>{{ item.hospital_name }}（{{ item.area_name }}）</text>
                                    </view>
                                    <view>
                                        处理时间：
                                        <formater :timestamp="item.starttime" format="MM-dd hh:mm"></formater>
                                    </view>
                                </block>
                                <block v-if="item.service_stype > 100">
                                    <view>
                                        服务时间：
                                        <formater :timestamp="item.starttime" format="MM-dd hh:mm"></formater>
                                    </view>
                                    <view>
                                        服务对象：
                                        <text>{{ item.client_name }}</text>
                                    </view>
                                    <!-- <view>服务地址：<text>{{item.address.address}}</text> </view> -->
                                </block>
                            </view>
                        </view>
                        <view class="weui-cell__ft">
                            <!-- 待付款 -->
                            <block v-if="item.trade_state == '待支付'">
                                <view style="color: #ffa200"><text>待支付</text></view>
                                <view style="color: #ffa200">
                                    <counter style="font-size: 24rpx" :second="item._exp_time"
                                        @counterOver="onCounterOver" />
                                </view>
                            </block>
                            <!-- 进行中 -->
                            <block v-if="item.trade_state == '待服务'">
                                <view style="color: #1da6fd"><text>待服务</text></view>
                            </block>
                            <!-- 已完成 -->
                            <block v-if="item.trade_state == '已完成'">
                                <view style="color: #21c521"><text>已完成</text></view>
                            </block>
                            <!-- 已取消 -->
                            <block v-if="item.trade_state == '已取消'">
                                <view style="color: #999999"><text>已取消</text></view>
                            </block>
                        </view>
                    </view>
                </view>
            </block>
        </view>
    </block>
</view>
```