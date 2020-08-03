import React, { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Icon } from "@tarojs/components";
import "./index.scss";

import { IThread } from "../../interfaces/thread";

interface IState {
  loading: boolean;
  threads: IThread[];
}

export default class Index extends Component<{}, IState> {
  state = {
    loading: true,
    threads: [],
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  render() {
    //! 第二次扫码时，会获取到错误的 bounding 信息
    //! 应该是微信官方接口的 bug，可能可以通过保存为全局变量来解决
    //! 不急
    let bounding: any = Taro.getMenuButtonBoundingClientRect();
    bounding.height ||
      (bounding = {
        bottom: "56px",
        height: "32px",
        left: "278px",
        right: "365px",
        top: "24px",
        width: "87px",
      });

    return (
      <View className="index-page">
        <View
          className="search-container"
          style={{
            top: bounding.top,
            height: bounding.height,
            width: bounding.left,
          }}
        >
          <View
            style={{
              height: bounding.height,
              width: bounding.height,
            }}
            className="avatar"
          ></View>
          <View
            className="search-bar"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/search/search",
              });
            }}
            style={{ borderRadius: bounding.height / 2 }}
          >
            <Icon className="search-icon" type="search"></Icon>
            <Text className="search-content">点下左边试试~</Text>
          </View>
        </View>
        <View className="content-container" style={{ top: bounding.bottom }}>
          <Text>Hello world!</Text>
        </View>
      </View>
    );
  }
}
