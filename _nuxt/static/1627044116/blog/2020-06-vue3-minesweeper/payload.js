__NUXT_JSONP__("/blog/2020-06-vue3-minesweeper", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return {data:[{post:{slug:"minesweeper-vue3",description:"Vue 3 でマインスイーパを作った",title:"Vue 3触った",date:"2020-06-07T14:00:00.000Z",tags:["vue","vue3",g,"Typescript"],image:"https:\u002F\u002Fres.cloudinary.com\u002Fsterashima78\u002Fimage\u002Fupload\u002Fc_fit,h_200,w_320,y_0\u002Fv1596863191\u002Fblog\u002Fmine-sweeper",toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Vue 3 をそろそろ触ってみたくなった。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"あと、なんとなくマインスイーパをやりたくなったのでそれを題材にすることにした。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"明らかに Suspense とか使いどころなさそうだったけど、普通に作ってはまるところがないかとかが知りたかったので特に気にしないことにした。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"作ったものはこれ。"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"動くもの: "},{type:b,tag:i,props:{href:j,rel:[k,l,m],target:n},children:[{type:a,value:j}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"GitHub: "},{type:b,tag:i,props:{href:o,rel:[k,l,m],target:n},children:[{type:a,value:o}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"サムネイルにもしたけど、こんな感じで動く。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:"img",props:{alt:"",src:"https:\u002F\u002Fuser-images.githubusercontent.com\u002F45279563\u002F83960403-6bddab80-a8c3-11ea-80b9-942cec38d6d7.gif"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"結果からいうと普段から"},{type:b,tag:e,props:{},children:[{type:a,value:"@vue\u002Fcomposition-api"}]},{type:a,value:" を使っていると特に戸惑う点はなかった。\n（よかった）"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"気になった点は README に書いたけど、 "},{type:b,tag:e,props:{},children:[{type:a,value:"v-model"}]},{type:a,value:" の使い方が変わっているので、 Vue 2 からバージョンを上げる際には対応が必要な個所がいくつか出てきそう。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"あと、これは、何が問題だったのか良くわからないのだけど、setup で宣言したリアクティブな値を子供のコンポーネントにパスして、そのコンポーネントで "},{type:b,tag:e,props:{},children:[{type:a,value:"select"}]},{type:a,value:p},{type:b,tag:e,props:{},children:[{type:a,value:"value"}]},{type:a,value:" に設定しても反映されなかった。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ホットリロードすると値が反映されたので、宣言の仕方がおかしいという感じではなくて、ライフサイクルというか値がどのように反映されていくかというところが、今までの直感とは少し変わったのだろうと理解することにした。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"対応としては、"},{type:b,tag:e,props:{},children:[{type:a,value:"onMounted"}]},{type:a,value:" で値を設定するようにした。ただ、やり方に違和感がある。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"また、 "},{type:b,tag:e,props:{},children:[{type:a,value:g}]},{type:a,value:" を使った。"}]},{type:a,value:c},{type:b,tag:"ol",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"値や必要な処理の型定義"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"関数のテスト書く"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"関数実装"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"を繰り返して、処理が見にくい箇所とかについて、 "},{type:b,tag:e,props:{},children:[{type:a,value:g}]},{type:a,value:p},{type:b,tag:e,props:{},children:[{type:a,value:q}]},{type:a,value:" で処理つなぐようにリファクタリングしたって感じ。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可能なら最初から "},{type:b,tag:e,props:{},children:[{type:a,value:g}]},{type:a,value:" 使って、その力を存分に使いたいのだけど、まだ素振りが足りない。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ただ、 "},{type:b,tag:e,props:{},children:[{type:a,value:"composition-api"}]},{type:a,value:" になってからの "},{type:b,tag:e,props:{},children:[{type:a,value:"Vue"}]},{type:a,value:" アプリケーションの書き方はだいたい固まってきて、"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"domain"}]},{type:a,value:" 以下に一連の値の型、それの変換関数を書く\n"},{type:b,tag:h,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"この時状態に相当する値を更新するような関数はカリー化して、最後の引数に状態をもらって、更新された新しい状態を返すようにする"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"複数の状態変更を経て意味のある変更になる場合は "},{type:b,tag:e,props:{},children:[{type:a,value:"flow"}]},{type:a,value:" や "},{type:b,tag:e,props:{},children:[{type:a,value:q}]},{type:a,value:" でつないで新しい関数を定義"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"composition"}]},{type:a,value:" では状態の定義・状態変更関数の定義・イベントハンドラ (ライフサイクルを含む) の設定を定義する"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"component"}]},{type:a,value:" では依存の解決・注入を行う"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"という感じ。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"この辺りは適当に整理して別記事にまとめたい。"}]}]},dir:"\u002Fblog\u002F2020\u002F06",path:"\u002Fblog\u002F2020\u002F06\u002Fvue3-minesweeper",extension:".md",createdAt:r,updatedAt:r},prev:{slug:"start-blog",title:"ブログを作った",path:"\u002Fblog\u002F2020\u002F06\u002Fcreate-blog"},next:{slug:"gridsome-typescript",title:"Gridsome に Typescript を入れる",path:"\u002Fblog\u002F2020\u002F06\u002Fgridsome-typescript"}}],fetch:{},mutations:void 0}}("text","element","\n","p","code","li","fp-ts","ul","a","https:\u002F\u002Fsterashima78.github.io\u002Fvue3-minesweeper\u002F","nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fgithub.com\u002Fsterashima78\u002Fvue3-minesweeper"," の ","pipe","2021-07-23T12:40:50.131Z")));