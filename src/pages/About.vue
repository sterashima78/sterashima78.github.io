<template>
  <Layout>
    <div>
      <h1>About me</h1>
      <div class="d-flex align-center">
        <v-avatar class="profile" color="grey" size="64">
          <g-image src="https://avatars2.githubusercontent.com/u/45279563" />
        </v-avatar>
        <v-list>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">sterashima78</v-list-item-title>
              <v-list-item-subtitle>Frontend Engineer</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <h2>スキル</h2>
      <p>言語もライブラリもツールもごちゃまぜ</p>
      <div style="height: 70vh">
        <TechGraph />
      </div>
      <h2>作ったもの</h2>
      <div class="d-flex flex-wrap justify-center">
        <PortfolioItem
          link="https://github.com/sterashima78/vue-webpage-builder"
          img-src="https://raw.githubusercontent.com/sterashima78/vue-webpage-builder/master/docs/.vuepress/public/logo.png"
        >
          Vue Webpage Builder
        </PortfolioItem>
        <PortfolioItem
          link="https://github.com/sterashima78/vue3-minesweeper"
          img-src="https://user-images.githubusercontent.com/45279563/83960403-6bddab80-a8c3-11ea-80b9-942cec38d6d7.gif"
        >
          Vue 3 マインスイーパ
        </PortfolioItem>
        <PortfolioItem
          link="https://github.com/sterashima78/atcoder-f-sharp"
          img-src="https://user-images.githubusercontent.com/45279563/85910711-756f8900-b85b-11ea-8bd3-df0e8745aa27.png"
        >
          F# で解いた AtCoder
        </PortfolioItem>
      </div>
      <h2>経歴</h2>
      <v-timeline align-top dense>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2019/07 - 現在 <v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>ECサイトのフロントエンドアーキテクチャ刷新</h4>
              <p>
                使用技術: HTML, SCSS, Typescript, Vue, jest, GitHub, GitHub Actions, Cypress, Storybook, Docker
              </p>
              <p>
                刷新のための方針策定、チームリード、業務改善など幅広く活動してる
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2019/07<v-chip color="primary" x-small
                >イベント</v-chip
              ></v-card-title
            >
            <v-card-text>転職</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2019/04<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>情報処理安全確保支援士</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2019/04 - 2019/06<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>CakePHP3アプリケーションの機能追加・瑕疵対応</h4>
              <p>
                使用技術: HTML, CSS, JavaScript, PHP, CakePHP3, PHPUnit
              </p>
              <p>
                担当作業: 調査, 実装, 単体試験
              </p>
              <p>
                入社前に作られたアプリケーションの瑕疵対応と機能追加の案件だった。
                かなり厳しい案件だったらしく、スパゲッティなコードを追いかけながらバグの原因調査と対応をした。
                ユニットテストもなかったので、関連部分の試験を書きながら TDD で実装をした。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2019/04 - 2019/06<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>PHPレガシーアプリケーションのマイグレーション</h4>
              <p>
                使用技術: Ubuntu 16.04, HTML, CSS, JavaScript, PHP, ZendFramework,
                PHPStan, Redmine, GitLab, Jenkins, PHPUnit
              </p>
              <p>
                担当作業: 方針検討, 実装, 単体試験
              </p>
              <p>
                テストがない ZendFramework 1 と 2 のアプリケーションを ZendFramework 3 へマイグレーションするという仕事。
                PHPStan で静的解析をしつつユニットテストを作りながらマイグレーションをするような方針を策定した。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2019/01 - 2019/02<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>深層学習モデルの Webアプリケーション化</h4>
              <p>
                使用技術: Ubuntu 16.04, HTML, CSS, JavaScript, Python, Flask,
                BootStrap, Keras, TensorFlow
              </p>
              <p>
                担当作業: 要件定義, 基本設計, 詳細設計, 実装, 単体テスト,
                結合テスト
              </p>
              <p>
                お客様が構築したCLI で実⾏する前提の画像分類ソフトウェアをWeb ア
                プリケーションとするために再設計・修正・機能拡張をした。
                バックエンドの設計とフロントエンドの実装を⾏った。
                分類器のコアとなる部分とそれを呼び出すためのインタフェースをパッケージ
                レベルで分割するような設計を⾏なった。これによりCLI とWeb
                アプリケー
                ションそれぞれの関⼼事のみにフォーカスして構築ができたため短期間での
                実装を遂⾏できた。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2018/04 - 2019/03<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>遺伝⼦機能解析 Webアプリケーション開発</h4>
              <p>
                使用技術: CentOS7, HTML, CSS, JavaScript, TypeScript, Java,
                SpringBoot, Vue, Nuxt, Vuetify, MySQL, Apache, GitLab, Jenkins,
                Redmine, Docker
              </p>
              <p>
                担当作業: 要件定義, 基本設計, 詳細設計, 実装, 単体テスト,
                結合テスト
              </p>
              <p>
                お客様と直接打ち合わせを⾏い、技術検討や要件定義から試験まで単独で⾏った。
                平衡業務がいくつかあったため、短時間で少ない誤りでアプリケーション
                を構築する必要があった。
                そのために早い段階でプロトタイプを提⽰し、お客様との認識の齟齬を減
                らすように努めた。
                加えて、誤りの混⼊を最⼩限にするために、静的型付き⾔語を利⽤し、
                開発はTDD で進めた。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2018/04 - 2019/03<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>監査⼯程と監査で得られた情報を管理するシステムの構築</h4>
              <p>
                使用技術: CentOS7, HTML, CSS, JavaScript, Java, SpringBoot, Vue,
                PostgreSQL, Apache, GitLab, Jenkins, Redmine, Docker
              </p>
              <p>
                担当作業: 要件定義, 基本設計, 詳細設計, 実装, 単体テスト,
                結合テスト, 技術リーダー
              </p>
              <p>
                お客様との打ち合わせに同⾏し、ヒアリングをしながら要件定義から設
                計、実装、試験まで⼀通り⾏った。
                開発⼯程を効率化することを⽬的にCI 導⼊を提案し、CI 環境の構
                築と、チケットとプルリクエストベースの開発を実施した。
                また、開発の並列性を⾼めるためにバックエンドはWebAPIサーバーとし、
                フロントエンドと分離した構成とす
                ることを提案し、バックエンドにSpringBoot
                を使いフロントエンドにVue を
                利⽤するなどの技術選定と、メンバーへの技術教育を⾏った。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2018/01 - 2018/03<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>大学の研究で構築した遺伝子データベースの機能拡張(2)</h4>
              <p>
                使用技術: CentOS7, HTML, CSS, JavaScript, PHP, Slim, Vue, MySQL,
                Vagrant, Fabric, Jenkins, GitBucket
              </p>
              <p>担当作業: 要件定義, 詳細設計, 実装, 単体テスト</p>
              <p>
                大学の研究で構築した遺伝子データベースの機能拡張(1)とほぼ同様
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2017/09 - 2018/05<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>大学の研究で構築した遺伝子データベースの機能拡張(1)</h4>
              <p>
                使用技術: CentOS7, HTML, CSS, JavaScript, PHP, Slim, Vue, MySQL,
                Vagrant, Fabric, Jenkins, GitBucket
              </p>
              <p>担当作業: 要件定義, 詳細設計, 実装, 単体テスト</p>
              <p>
                短納期であり、改修要望がいくつかあったことから、改修結果に対する
                フィードバックを得ながら迅速に作業を進める必要があった。そのため、
                GitBucket でブランチごとに各改修を進め、Fabric とJenkins
                で改修後の
                アプリケーションを⾃動でお客様のサーバーへデプロイされるように設定し、
                修正と確認のサイクルを速く回した。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2018/04<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>データベーススペシャリスト</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2017/09 - 2018/03<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>
              <h4>官公庁向のデータ解析システムリプレース</h4>
              <p>仕様技術: RHEL7, Perl, PostgreSQL</p>
              <p>担当作業: 詳細設計, 実装, 単体テスト</p>
              <p>
                既存コードの再利用を求められたが、ユニットテストコードなどはなかったので、テストコードを実装しながらリファクタリングと修正を進めた。
              </p>
            </v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2018/03<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>LPIC2</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/10<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>ネットワークスペシャリスト</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2017/04 - 2017/09<v-chip x-small color="red" text-color="white"
                >業務</v-chip
              ></v-card-title
            >
            <v-card-text>新人研修</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/07<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>LPIC1</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2017/04<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>応用情報技術者</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2017/04<v-chip color="primary" x-small
                >イベント</v-chip
              ></v-card-title
            >
            <v-card-text>新卒入社</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title
              >2017/03<v-chip color="primary" x-small
                >イベント</v-chip
              ></v-card-title
            >
            <v-card-text>明治大学大学院 農学研究科 生命科学専攻 修了</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2016/10<v-chip x-small>資格</v-chip></v-card-title>
            <v-card-text>基本情報技術者</v-card-text>
          </v-card>
        </v-timeline-item>
        <v-timeline-item>
          <v-card class="elevation-2">
            <v-card-title>2015/03<v-chip x-small>イベント</v-chip></v-card-title>
            <v-card-text>明治大学 農学部 生命科学科 卒業</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </div>
  </Layout>
</template>

<script>
import PortfolioItem from "../components/About/PortfolioItem.vue";
import TechGraph from "../components/About/TechGraph.vue";
import Vue from "vue";
export default Vue.extend({
  components: {
    PortfolioItem,
    TechGraph
  },
  metaInfo: {
    title: "About me",
  },
});
</script>
<style lang="scss" scoped>
h2 {
  margin: 10px;
}
</style>
