<template>
  <div>
    <h1>About me</h1>
    <div class="flex content-center">
      <t-avatar size="64px" />
      <div class="flex flex-col content-center justify-center">
        <p class="font-bold leading-none mb-1 text-xl">sterashima78</p>
        <p class="leading-none text-sm">Frontend Engineer</p>
      </div>
    </div>
    <h2>スキル</h2>
    <p>言語もライブラリもツールもごちゃまぜ</p>
    <div style="height: 70vh;">
      <TechGraph />
    </div>
    <h2>作ったもの</h2>
    <div class="flex flex-wrap justify-center">
      <PortfolioItem
        v-for="a in product"
        :key="a.name"
        :link="a.link"
        :img-src="a.src"
        >{{ a.name }}</PortfolioItem
      >
    </div>
    <h2>経歴</h2>
    <div class="timeline">
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/07 - 現在
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              ECサイトのフロントエンドアーキテクチャ刷新
            </h4>
            <p>
              使用技術: HTML, SCSS, Typescript, Vue, jest, GitHub, GitHub
              Actions, Cypress, Storybook, Docker
            </p>
            <p>
              刷新のための方針策定、チームリード、業務改善など幅広く活動してる
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/07
            <span class="text-xs font-light">
              <t-chip color="blue" text-color="white">イベント</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>転職</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/04
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>情報処理安全確保支援士</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/04 - 2019/06
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              CakePHP3アプリケーションの機能追加・バグ修正
            </h4>
            <p>
              使用技術: HTML, CSS, JavaScript, PHP, CakePHP3, PHPUnit
            </p>
            <p>
              担当作業: 調査, 実装, 単体試験
            </p>
            <p>
              入社前に作られたアプリケーションのバグ修正と機能追加の案件だった。
              かなり厳しい案件だったらしく、スパゲッティなコードを追いかけながらバグの原因調査と対応をした。
              ユニットテストもなかったので、関連部分の試験を書きながら TDD
              で実装をした。
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/04 - 2019/06
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              PHPレガシーアプリケーションのマイグレーション
            </h4>
            <p>
              使用技術: Ubuntu 16.04, HTML, CSS, JavaScript, PHP, ZendFramework,
              PHPStan, Redmine, GitLab, Jenkins, PHPUnit
            </p>
            <p>
              担当作業: 方針検討, 実装, 単体試験
            </p>
            <p>
              テストがない ZendFramework 1 と 2 のアプリケーションを
              ZendFramework 3 へマイグレーションするという仕事。 PHPStan
              で静的解析をしつつユニットテストを作りながらマイグレーションをするような方針を策定した。
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2019/01 - 2019/02
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              深層学習モデルの Webアプリケーション化
            </h4>
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
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2018/04 - 2019/03
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              遺伝⼦機能解析 Webアプリケーション開発
            </h4>
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
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2018/04 - 2019/03
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              監査⼯程と監査で得られた情報を管理するシステムの構築
            </h4>
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
              ることを提案し、バックエンドにSpringBoot を使いフロントエンドにVue
              を 利⽤するなどの技術選定と、メンバーへの技術教育を⾏った。
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2018/01 - 2018/03
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              大学の研究で構築した遺伝子データベースの機能拡張(2)
            </h4>
            <p>
              使用技術: CentOS7, HTML, CSS, JavaScript, PHP, Slim, Vue, MySQL,
              Vagrant, Fabric, Jenkins, GitBucket
            </p>
            <p>担当作業: 要件定義, 詳細設計, 実装, 単体テスト</p>
            <p>
              大学の研究で構築した遺伝子データベースの機能拡張(1)とほぼ同様
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/09 - 2018/05
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              大学の研究で構築した遺伝子データベースの機能拡張(1)
            </h4>
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
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2018/04
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>データベーススペシャリスト</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/09 - 2018/03
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <h4 class="font-bold">
              官公庁向のデータ解析システムリプレース
            </h4>
            <p>仕様技術: RHEL7, Perl, PostgreSQL</p>
            <p>担当作業: 詳細設計, 実装, 単体テスト</p>
            <p>
              既存コードの再利用を求められたが、ユニットテストコードなどはなかったので、テストコードを実装しながらリファクタリングと修正を進めた。
            </p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2018/03
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>LPIC2</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/10
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>ネットワークスペシャリスト</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/04 - 2017/09
            <span class="text-xs font-light">
              <t-chip color="red" text-color="white">業務</t-chip>
            </span>
          </p>
          <div class="text-sm">
            新人研修
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/07
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>LPIC1</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/04
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>応用情報技術者</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/04
            <span class="text-xs font-light">
              <t-chip color="blue" text-color="white">イベント</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>新卒入社</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2017/03
            <span class="text-xs font-light">
              <t-chip color="blue" text-color="white">イベント</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>明治大学大学院 農学研究科 生命科学専攻 修了</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2016/10
            <span class="text-xs font-light">
              <t-chip color="teal" text-color="white">資格</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>基本情報技術者</p>
          </div>
        </div>
      </div>
      <div class="item">
        <div class="time-point"></div>
        <div class="time-contents">
          <p class="text-lg font-bold">
            2015/03
            <span class="text-xs font-light">
              <t-chip color="blue" text-color="white">イベント</t-chip>
            </span>
          </p>
          <div class="text-sm">
            <p>明治大学 農学部 生命科学科 卒業</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import PortfolioItem from '../components/PortfolioItem.vue'
import TechGraph from '../components/TechGraph.vue'
export default Vue.extend({
  // layout: 'plain',
  components: {
    PortfolioItem,
    TechGraph,
  },
  metaInfo: {
    title: 'About me',
  },
  async asyncData({ $content }) {
    const data = await $content('about').fetch()
    return data
  },
})
</script>
<style lang="scss" scoped>
h2 {
  margin: 10px;
}
.timeline {
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 19px;
    height: 100%;
    width: 2px;
    background: grey;
  }
  > .item {
    position: relative;
    @apply flex;
    @apply justify-end;
    @apply my-4;
    > .time-point {
      position: absolute;
      left: 5px;
      top: 10px;
      width: 30px;
      height: 30px;
      @apply rounded-full;
      @apply bg-blue-700;
      @apply border-white;
      @apply border-4;
      @apply shadow-lg;
    }
    > .time-contents {
      width: calc(100% - 48px);
      border-width: 1px;
      @apply rounded-lg;
      @apply border-black;
      @apply shadow-lg;
      @apply p-4;
      @apply relative;
      @apply border-opacity-25;

      &::after,
      &::before {
        content: '';
        position: absolute;
        border-top: 10px solid transparent;
        border-bottom: 10px solid transparent;
        top: 12px;
      }
      &::after {
        border-right: 10px solid white;
        left: -8px;
        @apply shadow-lg;
      }

      &::before {
        border-right: 10px solid rgba(0, 0, 0, 0.25);
        left: -10px;
      }
    }
  }
}
</style>
