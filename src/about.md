# このサイトについて

個人的なVuePressの練習サイトです。

::: tip ヒント
Tip が使える
:::

::: warning 
カスタムコンテナは入れ子にすることができる…
::: tip
::: danger

```md
::: warning
::: tip
::: danger
':::
// なんと上の'を抜くとコンテナがここで閉じてしまう
// rawシンタックスの中であるにも関わらず、である
// また入れ子のコンテナを一つ閉じると親コンテナも全部閉じてしまう
// （バグだと思うが実用上コンテナを入れ子にすることはないので
// 別にいいやと思っている）
```

:::

