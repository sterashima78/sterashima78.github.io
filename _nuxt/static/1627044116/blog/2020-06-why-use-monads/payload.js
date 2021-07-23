__NUXT_JSONP__("/blog/2020-06-why-use-monads", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D){return {data:[{post:{slug:"why-use-monads",description:"モナドとは何かの前になんでモナドでなにができるのかを考えるべき",title:o,date:"2020-06-15T21:00:00.000Z",tags:["monads"],image:"https:\u002F\u002Fres.cloudinary.com\u002Fsterashima78\u002Fimage\u002Fupload\u002Fc_fit,h_200,w_320,y_0\u002Fv1596863357\u002Fblog\u002Fmonads",toc:[{id:p,depth:m,text:p},{id:q,depth:m,text:q},{id:r,depth:m,text:r},{id:s,depth:m,text:s},{id:t,depth:k,text:t},{id:u,depth:k,text:u},{id:o,depth:m,text:o},{id:v,depth:k,text:v},{id:w,depth:k,text:w},{id:x,depth:k,text:x},{id:y,depth:m,text:y},{id:z,depth:k,text:z},{id:A,depth:k,text:B}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"サムネイルは"},{type:b,tag:e,props:{href:"http:\u002F\u002Fadit.io\u002Fposts\u002F2013-04-17-functors,_applicatives,_and_monads_in_pictures.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"ここ"}]},{type:a,value:"から拝借した。"}]},{type:a,value:c},{type:b,tag:n,props:{id:p},children:[{type:b,tag:e,props:{href:"#%E4%B8%80%E9%80%9A%E3%82%8A%E6%9B%B8%E3%81%8D%E7%B5%82%E3%82%8F%E3%81%A3%E3%81%9F%E5%BE%8C%E3%81%AE%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:p}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"やっぱり説明が難しく、書き終わってから、うまく説明できていないような気がした。。"}]},{type:a,value:c},{type:b,tag:n,props:{id:q},children:[{type:b,tag:e,props:{href:"#%E3%81%AF%E3%81%98%E3%82%81%E3%81%AB",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"モナドがなにかをちゃんと説明をするまでに時間がかかる。モナドは数学的な背景を有していて、説明の際には当然のようにそこで使われている言葉を利用するから、登場人物うまく理解できなかったりする。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"コードの例がついていると思えばそれは Haskell で記述されたもので、慣れていないとどうもピンと来ない。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"そんなこんなで説明が長いから、結局それは何に使えるの？という問いの答えを得られる前に離脱してしまうような気がしている。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"何事もそうだと思うけど、何かを学ぶときの一番の原動力はそれによってどんな利益を得られるかというところだと思う。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"だから、この文書では、モナドで何ができるのか、なぜ使うのかというあたりを記述できればいいなと思っている。"}]},{type:a,value:c},{type:b,tag:n,props:{id:r},children:[{type:b,tag:e,props:{href:"#%E6%B3%A8%E6%84%8F",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"厳密なモナドの説明をしない"}]},{type:a,value:c},{type:b,tag:C,props:{},children:[{type:a,value:"コード例を示さない"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:n,props:{id:s},children:[{type:b,tag:e,props:{href:"#%E8%89%AF%E3%81%84%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E6%9B%B8%E3%81%8D%E3%81%9F%E3%81%84",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"良いソフトウェアとは何かという問い自体が難しいものだと思うが、そのうちの要素をいくつか上げることはできる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ここでは二つを上げる。当然流れでわかると思うが、モナドは以下の要素を満たしたソフトウェアを書く上で役に立つということになる。"}]},{type:a,value:c},{type:b,tag:l,props:{id:t},children:[{type:b,tag:e,props:{href:"#%E8%B2%AC%E4%BB%BB%E3%81%8C%E6%98%8E%E7%A2%BA%E3%81%A7%E3%81%82%E3%82%8B%E3%81%93%E3%81%A8",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"責任が明確であるということは、変更が必要になった時の影響を局所化できる。\nつまり、機能拡張がやりやすくや誤りがあった時の原因の特定が行い易くなる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"これは、良いソフトウェアの一要素としては十分だと思う。"}]},{type:a,value:c},{type:b,tag:l,props:{id:u},children:[{type:b,tag:e,props:{href:"#%E5%8B%95%E4%BD%9C%E3%81%8C%E4%BA%88%E6%83%B3%E3%81%97%E3%82%84%E3%81%99%E3%81%84%E3%81%93%E3%81%A8",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"同じ条件で何度か実行すると挙動が変わるソフトウェアよりも、同じ条件で実行すれば同じ結果が返ってくるようなソフトウェアのほうが、試験が容易であり、問題の再現もしやすくなる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"これも、良いソフトウェアのとしては十分だと思う。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ここでは、あえてあいまいな言葉で記述したが、より具体的な参照透過であるという言葉を使いたい。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"参照透過である。ということはまさに上で述べた、同じ条件で実行すれば同じ結果が返ってくるということに合致する。"}]},{type:a,value:c},{type:b,tag:n,props:{id:o},children:[{type:b,tag:e,props:{href:"#%E3%81%AA%E3%82%93%E3%81%A7%E3%83%A2%E3%83%8A%E3%83%89%E3%82%92%E4%BD%BF%E3%81%86%E3%81%AE%E3%81%8B",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"モナドを利用することで、「興味のある値」と「現実的にソフトウェアで考慮しなければいけない事柄」を同時に扱うことができる。"}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#%E3%80%8C%E8%88%88%E5%91%B3%E3%81%AE%E3%81%82%E3%82%8B%E5%80%A4%E3%80%8D",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ここでの「興味のある値」とは、例えば TODO リストを作っているのなら TODO のデータそのものだし、会計ソフトを作っているのなら、金額や税率のことだろう。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"多くの場合ソフトウェアを作るということは、この「興味のある値」を適切なルールにのっとって変換したり計算したりするロジックを作ることになる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(これはドメイン駆動の文脈からいくとまさにドメインを指すものだろう)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"TODO リストの例なら、新しい TODO を作成したり、TODO を完了状態にしたり、完了済み TODO を削除したりする。"}]},{type:a,value:c},{type:b,tag:l,props:{id:w},children:[{type:b,tag:e,props:{href:"#%E3%80%8C%E7%8F%BE%E5%AE%9F%E7%9A%84%E3%81%AB%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%81%A7%E8%80%83%E6%85%AE%E3%81%97%E3%81%AA%E3%81%91%E3%82%8C%E3%81%B0%E3%81%84%E3%81%91%E3%81%AA%E3%81%84%E4%BA%8B%E6%9F%84%E3%80%8D",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"一方で、「現実的にソフトウェアで考慮しなければいけない事柄」とはなにか。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例えばエラーがある。現実的にソフトウェアを作るうえで不正な計算などが行われたときには、適切にフォールバックしたり、ユーザに知らせたりする必要がある。純粋に金額の演算や TODO リストのデータ変換をするというものとは、別の観点で必要な事柄になる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例えば入出力がある。現実としてソフトウェアはユーザからの入力を受けて、「興味のある値」の演算を行い、得られた意味のある値を出力する必要がある。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"その一方で、入出力とはテストなどをするうえで扱いが難しく、先に述べた参照透過が実現できない性質のものになる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"標準入力を受け付ける "},{type:b,tag:"code",props:{},children:[{type:a,value:"getInput()"}]},{type:a,value:" という関数をコールしてもそこから得られる値は、標準入力の値に依存するため、その時々で変わるからだ。"}]},{type:a,value:c},{type:b,tag:l,props:{id:x},children:[{type:b,tag:e,props:{href:"#%E4%BA%8C%E7%A8%AE%E9%A1%9E%E3%81%AE%E4%BA%8B%E6%9F%84%E3%82%92%E5%90%8C%E6%99%82%E3%81%AB%E6%89%B1%E3%81%86",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"モナドはよく「箱」や「文脈」という例で説明をされるが、この「箱」や「文脈」というのが、「現実的にソフトウェアで考慮しなければいけない事柄」にあたる。\nそして、「箱の中身」や「文脈の中にあるもの」が「興味のある値」となる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"上述した二種類の事柄は、普通にソフトウェアを書いていれば、一連のコードの中で同時に考慮されて混在した状態で記述される。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"モナドを利用することで、ソフトウェアを作るうえで考慮しなくてはならない、二種類の事柄を「モナド」と、「モナドの保持する値」として扱い、責任を分けながらソフトウェアを書くことができる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"つまり、「興味のある値」やそれに対する演算は「モナドの保持する値」に対して実施する。\nその一方で発生する「現実的にソフトウェアで考慮しなければいけない事柄」はモナドが面倒を見てくれるように状態になる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"これによってソフトウェアは「責任が明確である」状態になるし、参照透過が実現できないような性質をモナドに任せることで「動作が予想しやすい」状態になると期待できる。"}]},{type:a,value:c},{type:b,tag:n,props:{id:y},children:[{type:b,tag:e,props:{href:"#%E3%81%A9%E3%82%93%E3%81%AA%E3%81%93%E3%81%A8%E3%81%8C%E3%81%A7%E3%81%8D%E3%82%8B%E3%81%AE%E3%81%8B",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"モナドというのは、抽象的なものであるルールを満たせばモナドといえる。\nそれを、それぞれの目的に合わせて使えるようにすることで特定の「現実的にソフトウェアで考慮しなければいけない事柄」に対応できるモナドとなる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以降でいくつか説明するが、重要なのはそれぞれは別の事柄であるが、いずれもモナドという同じ枠組みの中で扱うことができるという点にある。"}]},{type:a,value:c},{type:b,tag:l,props:{id:z},children:[{type:b,tag:e,props:{href:"#%E3%82%A8%E3%83%A9%E3%83%BC%E3%81%AE%E5%87%A6%E7%90%86",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Either というモナドがある。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"このモナドは、「例外の状態」と「興味のある値」を有することを想定して利用されている。\n「興味のある値」に対して各種処理を適用していき、例外が発生したら、モナド側で、例外の状態として保持してくれる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"そしてアプリケーション的に例外の評価が必要なタイミング (Web アプリケーションならレスポンスを作る時など) に例外状態を参照し、適切なエラー用の処理を記述することができる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"このように、Either モナドを使うことで、興味のある演算とエラーのハンドリングの責任を分けやすくなる。"}]},{type:a,value:c},{type:b,tag:l,props:{id:A},children:[{type:b,tag:e,props:{href:"#null-%E3%81%AE%E5%87%A6%E7%90%86",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maybe というモナドがある"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"このモナドは、「値の有無」と「興味のある値」を表現することができる。\n「興味のある値」に対して各種処理を適用していき、 null 参照など、対象の値が存在しなくなったら、モナド側でその値は存在しないという状態を保持してくれる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Either 同様、最終的に値を評価するタイミング (例えば DB に値を書き込むときなど) に値が存在するときだけ必要な処理を行うなどの記述ができる。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"このように Maybe モナドも Either モナド同様、興味のある演算とエラーのハンドリングの責任を分けやすくなる。"}]}]},dir:"\u002Fblog\u002F2020\u002F06",path:"\u002Fblog\u002F2020\u002F06\u002Fwhy-use-monads",extension:".md",createdAt:D,updatedAt:D},prev:{slug:"gridsome-tag",title:"Gridsome に Tag 機能を入れる",path:"\u002Fblog\u002F2020\u002F06\u002Fgridsome-tag"},next:{slug:"gridsome-typescript-eslint",title:"Gridsome に ESLint を入れる",path:"\u002Fblog\u002F2020\u002F06\u002Fgridsome-typescript-eslint"}}],fetch:{},mutations:void 0}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",3,"h3",2,"h2","なんでモナドを使うのか","一通り書き終わった後のはじめに","はじめに","注意","良いソフトウェアを書きたい","責任が明確であること","動作が予想しやすいこと","「興味のある値」","「現実的にソフトウェアで考慮しなければいけない事柄」","二種類の事柄を同時に扱う","どんなことができるのか","エラーの処理","null-の処理","null の処理","li","2021-07-23T12:40:50.131Z")));