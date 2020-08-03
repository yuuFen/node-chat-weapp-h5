import React, { Component } from "react";
import { View, Text, Icon, Input } from "@tarojs/components";
import "./search.scss";

import { IThread } from "../../interfaces/thread";
import HotList from "../../components/hotList/hotList";

interface IState {
  loading: boolean;
  threads: IThread[];
}

export default class Search extends Component<{}, IState> {
  bounding: any;

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
    const hotTags = [
      { title: "#11111#" },
      { title: "#22222#" },
      { title: "#33333#" },
      { title: "#44444#" },
    ];
    return (
      <View className="search-page">
        <View className="search-bar">
          <Icon className="search-icon" type="search"></Icon>
          <Input className="search-content" placeholder="搜点感兴趣的" />
        </View>
        <HotList data={hotTags} />
      </View>
    );
  }
}
