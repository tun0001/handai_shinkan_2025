import ShinkanjohoCard from '@/components/molecules/ShinkanjohoCard.vue'

export default {
  components: { ShinkanjohoCard },
  data() {
    return {
      events: [
        {
          imgSrc: require('@/assets/shinkanjoho/Img/img1.jpg'),
          date: '3月15日(土)，4月1日(火)',
          title: 'zoom新歓',
          detail:
            '部活動に関することはもちろん、気になる大学生活の質問などなど、どんなことでも陸上部員がお答えします！途中入退室自由です。是非参加してください！ (陸上部の紹介＋パート別相談＋学部別相談)',
          dayandtime: '日時：3月15日(土) 4月1日(火)',
          place: 'zoom参加はこちらから↓',
          zoomlink:
            'https://us06web.zoom.us/j/83823065119?pwd=dcLPNknlYwRxqKPhzsmEg1PMIVOlFb.1',
          zoomID: 'ミーティングID: 838 2306 5119',
          zoompass: 'パスコード: 564534',
        },
        {
          imgSrc: require('@/assets/shinkanjoho/Img/img2.jpg'),
          date: '4月5日(土),4月6日(日)',
          title: 'サーオリ',
          detail:
            '陸上部員の話を直接聞くことができます。対面でしか聞けないこともあるはず！？そこのあなた！是非陸上部のブースに立ち寄ってみては？',
          dayandtime: '日時：4月5日，4月6日',
          place: '場所：豊中キャンパス',
        },
        // {
        //   imgSrc: require('@/assets/shinkanjoho/Img/img3.jpg'),
        //   date: '日時未定',
        //   title: '女子新歓',
        //   detail:
        //     '女子部員と楽しくおしゃべりしましょう！女子だからこその話が聞けるかも！？',
        //   dayandtime: '日時：未定',
        //   place:
        //     'zoom開催の予定です。リンク等が決まりましたらこちらに掲載します。',
        //   zoomlink: '',
        //   zoomID: '',
        //   zoompass: '',
        // },
        {
          imgSrc: require('@/assets/shinkanjoho/Img/img4.jpg'),
          date: '活動日(月・火・水・金・土)',
          title: '練習見学会',
          detail:
            '*新歓Twitter、InstagramのDMや、メール、以下のフォームから予めお問い合わせください！',
          zoomlink:'https://forms.gle/MN1iEdyTqSA8j85k7',
          dayandtime: '活動日(月・火・水・金・土)',
          place: '場所：すいらん（吹田キャンパスグラウンド）',
        },
        {
          imgSrc: require('@/assets/shinkanjoho/Img/img5.jpg'),
          date: '4月19日(土)',
          title: '新歓運動会',
          detail:'実際にすいらんにきて、陸上部の雰囲気を感じてみませんか？部員との交流もできます！参加リンクはこちらから！',
          dayandtime: '日時：4月19日(土)',
          place: '場所：すいらん（吹田キャンパスグラウンド）',
          zoomlink:'https://forms.gle/AtZqYS1QeXh7ECRB7',
        },
      ],
    }
  },
}
