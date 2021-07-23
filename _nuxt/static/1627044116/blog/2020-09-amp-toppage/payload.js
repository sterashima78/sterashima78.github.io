__NUXT_JSONP__("/blog/2020-09-amp-toppage", (function(a,b,c,d,e,f,g,h,i){return {data:[{post:{slug:"amp-toppage",description:"TOPページをAMPにするためにしたこと書く",title:"TOPページだけAMPにした",date:"2020-09-05T14:00:00.000Z",tags:["Nuxt","AMP"],image:"https:\u002F\u002Fres.cloudinary.com\u002Fsterashima78\u002Fimage\u002Fupload\u002Fc_fit,h_200,w_320,y_0\u002Fv1599282221\u002Fblog\u002Famp_styfii.png",toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"このサイトは Nuxt で作っているので amp-module ("},{type:b,tag:"a",props:{href:e,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:e}]},{type:a,value:") を使った。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"導入はドキュメントに書いてある通り設定を行えばいい。\nあとは、各ページを AMP に対応するように書き換えていけばいい。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"AMP に沿っているかどうかは、 URL に "},{type:b,tag:f,props:{},children:[{type:a,value:"#development=1"}]},{type:a,value:" をつけて chrome で開発者ツールを開けば確認できる。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"たとえば、 nuxt を dev で立ち上げると、purgecss で CSS が削除されずに tailwindcss がすべて出力されているため、 CSS のサイズ上限に引っかかっていることが表示されたりする。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fres.cloudinary.com\u002Fsterashima78\u002Fimage\u002Fupload\u002Fv1599282672\u002Fblog\u002Famp-error_mtxvp1.png"},children:[]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"こういうエラーに対してひとつづつ対応していけばよい。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"で、対応を終えてデプロイをした。AMPには、AMPページであるログが出力される。"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:b,tag:g,props:{alt:h,src:"https:\u002F\u002Fres.cloudinary.com\u002Fsterashima78\u002Fimage\u002Fupload\u002Fv1599282236\u002Fblog\u002Famp-log_fvx5ag.png"},children:[]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"引き続き、ほかのページも対応していこうと思うが、追加しようと思っている機能が制限に引っかかると面倒なので、 "},{type:b,tag:f,props:{},children:[{type:a,value:"amp-script"}]},{type:a,value:" などを使用して実装できるようにしていきたい。"}]}]},dir:"\u002Fblog\u002F2020\u002F09",path:"\u002Fblog\u002F2020\u002F09\u002Famp-toppage",extension:".md",createdAt:i,updatedAt:i},prev:{slug:"review-202008",title:"2020\u002F08 の振り返りと次の目標",path:"\u002Fblog\u002F2020\u002F08\u002Freview-202008"},next:{slug:"recurrence-formula-problem",title:"漸化式の問題の解き方",path:"\u002Fblog\u002F2020\u002F09\u002Frecurrence-formula-problem"}}],fetch:{},mutations:void 0}}("text","element","p","\n","https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Famp-module","code","img","","2021-07-23T12:40:50.131Z")));