// 会员
export interface IMember {
  id: number;
  username: string;
  avatar_normal: string;
  avatar_large: string;
  avatar_mini: string;
  tagline?: null; // 个性宣言
  location?: null;
  created_days: number; // 创建时间 xx 天
  creations: number; // 创作数
  stars: number; // 获取星星数

  // coins: number; // 金币数
}
