import React, { Component } from "react";
import { View, Text, Icon } from "@tarojs/components";
import "./hotList.scss";

import { ITag } from "../../interfaces/tag";

interface IProps {
  data: ITag[];
}

export default class HotList extends Component<IProps, {}> {
  bounding: any;

  state = {
    loading: true,
    threads: [],
  };

  render() {
    const { data } = this.props;
    return (
      <View className="hot-list-component">
        <Text className="title">热门话题</Text>
        <View className="list">
          {data.map((item, index) => {
            return (
              <View className="list-item">
                <Text className={`item-num item-${index}`}>{index}</Text>
                <Text className={`item-tag item-${index}`}>{item.title}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  }
}
