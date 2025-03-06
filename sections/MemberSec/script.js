import MemberCardB from '@/components/organisms/MemberCardB.vue'

export default {
  components: { MemberCardB },
  data() {
    return {
      members: [
        {
          name: '嘉藤和真',
          txt: 'フィールドパート長',
          imgSrc: require('@/assets/member-img/フィールド-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '金子アレックス龍之介',
          txt: '短長パート長',
          imgSrc: require('@/assets/member-img/短長.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '関根功織',
          txt: '短短パート長',
          imgSrc: require('@/assets/member-img/短短-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '国吉遼河',
          txt: 'ミドルパート長',
          imgSrc: require('@/assets/member-img/ミドル-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        // {
        //   name: '田上陽悠',
        //   txt: '投擲パート長',
        //   imgSrc: require('@/assets/member-img/投擲.jpg'),
        //   // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
        //   // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        // },
        // {
        //   name: '佐藤肇',
        //   txt: '混成パート長',
        //   imgSrc: require('@/assets/member-img/混成.jpg'),
        //   // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
        //   // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        // },
        {
          name: '松井天',
          txt: '競歩パート長',
          imgSrc: require('@/assets/member-img/競歩-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '市川達也',
          txt: 'ロングパート長',
          imgSrc: require('@/assets/member-img/ロング-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
        {
          name: '下田愛理',
          txt: 'マネージャー',
          imgSrc: require('@/assets/member-img/マネ-2025.jpg'),
          // txt2: '初めまして，休日は本を読んだり，散歩をしたりします．',
          // imgSrc2: "require('@/assets/gonuxt/img/sample01.jpg')",
        },
      ],
    }
  },
  props: {
    btnTxt: {
      type: String,
      default: 'メンバー紹介ページ（公式HP）',
    },

    btnColor: {
      type: String,
      default: 'primary',
    },
  },
}
