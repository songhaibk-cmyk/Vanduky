import { StationData } from '../types/game';

export const STATIONS: StationData[] = [
  {
    id: 'bach_ma',
    name: 'Đền Bạch Mã',
    guardianDirection: 'Đông',
    deity: 'Thần Long Đỗ (Bạch Mã Đại Vương)',
    address: '76 phố Hàng Buồm, phường Hàng Buồm, quận Hoàn Kiếm, Hà Nội',
    district: 'Hoàn Kiếm',
    coordinates: {
      lat: 21.0345,
      lng: 105.8507,
    },
    sealName: 'Trấn Đông Linh Khí',
    sealChinese: '鎮東靈氣',
    badgeId: 'badge_tran_dong',
    badgeName: 'Dấu ấn Trấn Đông',
    badgeDescription: 'Ghi nhận người đã giải mã tích xưa Vết chân ngựa trắng tại đền Bạch Mã, trấn giữ phía Đông kinh thành.',
    shortDescription: 'Ngôi đền cổ nhất trong Thăng Long Tứ Trấn, gắn liền với huyền tích vua Lý Thái Tổ định đô năm 1010 và sự bảo hộ của Thần Long Đỗ.',
    architecturalFeature: 'Kiến trúc gỗ bề thế phong cách thời Nguyễn kết hợp dấu ấn thời Lê, mái vòm vỏ cua độc đáo, tượng Bạch Mã uy phong nơi hậu cung.',
    etiquetteTip: 'Đền nằm trong lòng phố cổ sầm uất. Khi bước vào đền xin cất mũ nón, đi nhẹ nói khẽ, không chạm vào đồ tế khí và không chụp ảnh bật đèn flash nơi gian thờ hậu cung.',
    story: {
      title: 'Huyền tích vết chân ngựa trắng và tường thành Thăng Long',
      authorOrSource: 'Trích lục theo Việt điện u linh tập & Đại Việt Sử ký Toàn thư',
      era: 'Thời Lý (Năm Canh Tuất 1010)',
      excerpt: 'Khi vua Lý Thái Tổ dời đô từ Hoa Lư về Đại La, khởi công đắp thành thì đất thành nhiều lần sụt lở. Vua trai giới cầu khẩn, bỗng thấy một con ngựa trắng từ đền đi ra, chạy vòng quanh một lượt từ đông sang tây, móng ngựa in dấu trên mặt đất. Vua theo vết chân ngựa đắp lũy xây thành, từ đấy thành đứng vững vàng muôn thuở.',
      historicalContext: 'Thần Long Đỗ vốn là vị thần bản địa linh thiêng được thờ phụng từ trước thời Lý. Khi Lý Thái Tổ định đô, việc phong thần làm Thành hoàng Thăng Long thể hiện sự dung hợp sâu sắc giữa tín ngưỡng dân gian lâu đời và vương triều mới.',
      reflectionQuestion: 'Hình ảnh ngựa trắng dẫn lối gợi cho người chép sử suy nghĩ gì về sự thuận hợp lòng dân và thế đất khi dời đô?',
    },
    observation: {
      title: 'Quan sát: Điềm lành của Kinh thành',
      prompt: 'Hãy quan sát chi tiết các biểu tượng linh vật được lưu giữ bên trong đền Bạch Mã.',
      targetArtifact: 'Pho tượng Ngựa Trắng (Bạch Mã) tại cung cấm và vòm nóc "vỏ cua"',
      clue: 'Trong cung cấm có bức tượng thần mã màu trắng mang yên cương tôn nghiêm; trên nóc hiên tiền tế là kết cấu mái gỗ uốn cong mềm mại hiếm thấy.',
      question: 'Linh vật trung tâm được tôn kính tại cung cấm đền Bạch Mã gắn liền với tên gọi của ngôi đền là gì?',
      options: [
        {
          id: 'a',
          text: 'Ngựa trắng (Bạch Mã) mang yên cương lộng lẫy',
          isCorrect: true,
          explanation: 'Chính xác! Tượng Bạch Mã là hiện thân của vị thần linh hiển giúp vua Lý Thái Tổ định hình kinh thành Thăng Long vững bền.',
        },
        {
          id: 'b',
          text: 'Voi chiến bốn ngà bằng đồng',
          isCorrect: false,
          explanation: 'Chưa chính xác. Voi chiến là biểu tượng gắn với Đền Voi Phục ở Trấn Tây.',
        },
        {
          id: 'c',
          text: 'Rùa vàng ngậm gươm báu',
          isCorrect: false,
          explanation: 'Chưa chính xác. Rùa vàng gắn liền với truyền thuyết Hồ Gươm (Thuận Thiên kiếm).',
        },
      ],
      explanation: 'Tượng Bạch Mã bằng gỗ sơn trắng mang yên cương uy nghiêm nơi hậu cung chính là biểu tượng cốt lõi gắn liền với tên gọi đền Bạch Mã suốt hơn một thiên niên kỷ qua.',
    },
    quiz: [
      {
        id: 'bm_q1',
        question: 'Vị thần tối cao được phụng thờ tại Đền Bạch Mã là vị thần nào?',
        sourceCitation: 'Theo Đại Việt Sử ký Toàn thư & Việt điện u linh tập',
        options: [
          {
            id: 'bm1_a',
            text: 'Thần Long Đỗ (Bạch Mã Đại Vương)',
            isCorrect: true,
            explanation: 'Chính xác! Thần Long Đỗ là thần chủ cai quản vùng đất Thăng Long, được tôn là Quốc đô Định bang Thành hoàng Đại vương.',
          },
          {
            id: 'bm1_b',
            text: 'Thần Tản Viên Sơn Thánh',
            isCorrect: false,
            explanation: 'Chưa đúng. Tản Viên Sơn Thánh là đệ nhất phúc thần vùng núi Ba Vì, không phải thần chủ Đền Bạch Mã.',
          },
          {
            id: 'bm1_c',
            text: 'Huyền Thiên Trấn Vũ',
            isCorrect: false,
            explanation: 'Chưa đúng. Huyền Thiên Trấn Vũ là vị thần được thờ tại Đền Quán Thánh (Trấn Bắc).',
          },
        ],
      },
      {
        id: 'bm_q2',
        question: 'Đền Bạch Mã trấn giữ phương nào của kinh thành Thăng Long xưa?',
        sourceCitation: 'Theo Thăng Long Cổ tích khảo',
        options: [
          {
            id: 'bm2_a',
            text: 'Trấn Đông (phương Đông)',
            isCorrect: true,
            explanation: 'Chính xác! Đền Bạch Mã tọa lạc ở phía Đông của Hoàng thành Thăng Long xưa, ngay gần bến sông Hồng cổ.',
          },
          {
            id: 'bm2_b',
            text: 'Trấn Bắc (phương Bắc)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Bắc là Đền Quán Thánh.',
          },
          {
            id: 'bm2_c',
            text: 'Trấn Tây (phương Tây)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Tây là Đền Voi Phục.',
          },
        ],
      },
      {
        id: 'bm_q3',
        question: 'Theo truyền thuyết, sự xuất hiện của ngựa trắng đã giúp triều đình nhà Lý giải quyết việc hệ trọng nào?',
        sourceCitation: 'Theo Đại Việt Sử ký Toàn thư',
        options: [
          {
            id: 'bm3_a',
            text: 'Chỉ lối đắp thành Thăng Long không còn bị sạt lở',
            isCorrect: true,
            explanation: 'Chính xác! Vua Lý Thái Tổ cho đắp thành theo vết móng ngựa trắng in trên đất thì tường thành đứng vững.',
          },
          {
            id: 'bm3_b',
            text: 'Dẫn đường đánh tan quân Chiêm Thành',
            isCorrect: false,
            explanation: 'Chưa đúng. Ngựa trắng giúp việc định hướng và đắp vững lũy thành kinh kỳ.',
          },
          {
            id: 'bm3_c',
            text: 'Tìm ra mỏ đồng để đúc chuông Quy Điền',
            isCorrect: false,
            explanation: 'Chưa đúng. Đây là truyền thuyết về sự kiện xây dựng và kiên cố hóa kinh đô Thăng Long năm 1010.',
          },
        ],
      },
    ],
    finalChallengePrompt: 'Hãy đúc kết lại ý nghĩa của Đền Bạch Mã đối với sự định hình và trường tồn của Kinh đô Thăng Long ngàn năm văn hiến.',
  },
  {
    id: 'voi_phuc',
    name: 'Đền Voi Phục',
    guardianDirection: 'Tây',
    deity: 'Linh Lang Đại Vương (Hoàng tử Linh Lang)',
    address: '362 phố Kim Mã (bên hồ Thủ Lệ), phường Ngọc Khánh, quận Ba Đình, Hà Nội',
    district: 'Ba Đình',
    coordinates: {
      lat: 21.0298,
      lng: 105.8117,
    },
    sealName: 'Trấn Tây Hùng Uy',
    sealChinese: '鎮西雄威',
    badgeId: 'badge_tran_tay',
    badgeName: 'Dấu ấn Trấn Tây',
    badgeDescription: 'Ghi nhận người đã vượt qua thử thách về tiếng voi gầm trận tiền và tinh thần bảo vệ non sông tại đền Voi Phục.',
    shortDescription: 'Ngôi đền trấn giữ cửa ngõ phía Tây kinh thành Thăng Long, tôn thờ hoàng tử Linh Lang có công lớn giúp triều Lý đánh giặc giữ nước.',
    architecturalFeature: 'Tọa lạc trên gò đất cao rợp bóng cây cổ thụ bên hồ sen Thủ Lệ, nổi bật với hai thớt voi đá quỳ phục trang nghiêm trước thềm điện.',
    etiquetteTip: 'Giữ tôn nghiêm không trèo lên lưng hoặc chạm tay chà xát vào tượng voi đá cổ; giữ sạch cảnh quan vườn cây và mặt nước hồ Thủ Lệ.',
    story: {
      title: 'Tiếng voi gầm trận tiền và tấm lòng vì nước',
      authorOrSource: 'Trích lục theo Thần phả đền Voi Phục & Sử liệu triều Lý',
      era: 'Thời Lý Thánh Tông (Thế kỷ XI)',
      excerpt: 'Linh Lang là hoàng tử triều Lý. Khi giặc phương Bắc tràn sang lấn cõi, hoàng tử xin vua cha cấp cờ lệnh và chiến tượng ra trận. Hoàng tử cưỡi voi xung trận, tiếng voi gầm vang rúng động phòng tuyến giặc, quét sạch quân thù trên phòng tuyến sông Cầu. Khải hoàn trở về, hoàng tử hóa thân thành rồng bay về trời. Vua cho lập đền thờ tại nơi hoàng tử sinh sống.',
      historicalContext: 'Đền được xây dựng năm Chương Thánh Gia Khánh thứ 7 (1065) đời vua Lý Thánh Tông, tại khu vực bấy giờ là bến bãi đầm lầy phía Tây thành Thăng Long cổ, bảo vệ mạn Tây kinh sư.',
      reflectionQuestion: 'Hình ảnh hai thớt voi quỳ phục nhắc nhở hậu thế bài học gì về sự trung kiên và quy phục trước đạo nghĩa bảo vệ quê hương?',
    },
    observation: {
      title: 'Quan sát: Hộ giá trang nghiêm nơi sân rồng',
      prompt: 'Hãy quan sát kiến trúc lối vào và các pho tượng hộ môn trước tiền tế đền Voi Phục.',
      targetArtifact: 'Đôi thớt voi đá quỳ chầu hai bên lối lên tam cấp',
      clue: 'Trước thềm rồng có hai linh thú tạc bằng đá nguyên khối ở tư thế gập chân quỳ chầu cung kính, vòi rủ xuống đất.',
      question: 'Linh vật đá tạc quỳ chầu hai bên thềm bậc tam quan đền Voi Phục là hình tượng nào?',
      options: [
        {
          id: 'a',
          text: 'Hai thớt voi quỳ phục trang nghiêm',
          isCorrect: true,
          explanation: 'Chính xác! Hai thớt voi đá quỳ phục chính là nguồn gốc tên dân gian gọi đền là "Đền Voi Phục".',
        },
        {
          id: 'b',
          text: 'Đôi kỳ lân đá ngậm ngọc',
          isCorrect: false,
          explanation: 'Chưa chính xác. Đền nổi tiếng với tượng đôi voi đá phục chầu.',
        },
        {
          id: 'c',
          text: 'Hai tượng thần kim quy',
          isCorrect: false,
          explanation: 'Chưa chính xác. Tượng rùa thường gắn với các công trình văn bia hoặc sông hồ.',
        },
      ],
      explanation: 'Hai thớt voi đá tạc dáng quỳ chầu hướng về phía đền biểu trưng cho sự thần phục của linh thú trước vị hoàng tử dũng tướng Linh Lang Đại Vương.',
    },
    quiz: [
      {
        id: 'vp_q1',
        question: 'Vị thần được thờ chính tại Đền Voi Phục là ai?',
        sourceCitation: 'Theo Thần phả Đền Voi Phục Thủ Lệ',
        options: [
          {
            id: 'vp1_a',
            text: 'Linh Lang Đại Vương (Hoàng tử Linh Lang)',
            isCorrect: true,
            explanation: 'Chính xác! Linh Lang Đại Vương là hoàng tử triều Lý có công lao to lớn đánh đuổi giặc ngoại xâm.',
          },
          {
            id: 'vp1_b',
            text: 'Lý Thường Kiệt',
            isCorrect: false,
            explanation: 'Chưa đúng. Lý Thường Kiệt là Thái úy chỉ huy kháng chiến, đền Voi Phục thờ Linh Lang Đại Vương.',
          },
          {
            id: 'vp1_c',
            text: 'Cao Sơn Đại Vương',
            isCorrect: false,
            explanation: 'Chưa đúng. Cao Sơn Đại Vương được thờ tại Đền Kim Liên (Trấn Nam).',
          },
        ],
      },
      {
        id: 'vp_q2',
        question: 'Đền Voi Phục giữ vai trò trấn phương nào trong Thăng Long Tứ Trấn?',
        sourceCitation: 'Theo Thăng Long Cổ tích khảo',
        options: [
          {
            id: 'vp2_a',
            text: 'Trấn Tây (phương Tây)',
            isCorrect: true,
            explanation: 'Chính xác! Đền Voi Phục nằm ở phía Tây Hoàng thành, bảo bọc cửa ngõ phía Tây kinh kỳ xưa.',
          },
          {
            id: 'vp2_b',
            text: 'Trấn Nam (phương Nam)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Nam là Đền Kim Liên.',
          },
          {
            id: 'vp2_c',
            text: 'Trấn Đông (phương Đông)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Đông là Đền Bạch Mã.',
          },
        ],
      },
      {
        id: 'vp_q3',
        question: 'Hồ nước tự nhiên nằm liền kề với khuôn viên Đền Voi Phục ngày nay là hồ nào?',
        sourceCitation: 'Địa chí văn hóa Hà Nội',
        options: [
          {
            id: 'vp3_a',
            text: 'Hồ Thủ Lệ',
            isCorrect: true,
            explanation: 'Chính xác! Đền Voi Phục tọa lạc bên hồ Thủ Lệ rợp bóng cây cổ thụ xanh mát.',
          },
          {
            id: 'vp3_b',
            text: 'Hồ Tây',
            isCorrect: false,
            explanation: 'Chưa đúng. Hồ Tây gắn với Đền Quán Thánh (Trấn Bắc).',
          },
          {
            id: 'vp3_c',
            text: 'Hồ Hoàn Kiếm',
            isCorrect: false,
            explanation: 'Chưa đúng. Hồ Hoàn Kiếm nằm ở trung tâm quận Hoàn Kiếm.',
          },
        ],
      },
    ],
    finalChallengePrompt: 'Hãy suy ngẫm về hình tượng người tướng quân trẻ tuổi xả thân bảo vệ non sông nơi cửa ngõ phía Tây kinh thành.',
  },
  {
    id: 'kim_lien',
    name: 'Đền Kim Liên',
    guardianDirection: 'Nam',
    deity: 'Cao Sơn Đại Vương',
    address: 'Số 1 ngõ 176 phố Kim Hoa, phường Phương Liên, quận Đống Đa, Hà Nội',
    district: 'Đống Đa',
    coordinates: {
      lat: 21.0089,
      lng: 105.8398,
    },
    sealName: 'Trấn Nam Đức Hóa',
    sealChinese: '鎮南德化',
    badgeId: 'badge_tran_nam',
    badgeName: 'Dấu ấn Trấn Nam',
    badgeDescription: 'Ghi nhận người đã lĩnh hội bài học từ tấm bia đá cổ thời Lê Trung Hưng tại đền Kim Liên, bảo an phương Nam thành phố.',
    shortDescription: 'Ngôi đền trấn phía Nam thành Thăng Long, bảo lưu tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" quý giá do Trạng nguyên Lê Tung soạn năm 1510.',
    architecturalFeature: 'Được tôn tạo trên gò đất Kim Hoa cao ráo, cổng tam quan trông xuống ao sen, thềm chín bậc có sấu đá thời Lê và văn bia đá cổ ngự trên lưng rùa đá xanh.',
    etiquetteTip: 'Bia đá thời Hồng Thuận (1510) là di vật lịch sử quốc gia vô giá. Tuyệt đối không xoa đầu rùa, không dùng vật cứng chạm vào mặt chữ khắc trên bia đá.',
    story: {
      title: 'Tấm bia đá trên lưng rùa và vị thần núi trấn giữ phương Nam',
      authorOrSource: 'Văn bia "Cao Sơn Đại Vương thần từ bi minh" do Trạng nguyên Lê Tung soạn năm 1510',
      era: 'Thời Lê Trung hưng (Hồng Thuận năm thứ hai - 1510)',
      excerpt: 'Thần Cao Sơn vốn là con Lạc Long Quân - Âu Cơ, theo mẹ lên núi mở mang bờ cõi. Năm Đoan Khánh (1509), vua Lê Tương Dực dấy binh dẹp loạn từ phương Nam tiến về kinh thành, thấy thần hiển linh phù trợ thắng trận. Vua bèn sai khắc bia đá chữ Hán ca ngợi công đức thần, dựng đền trang nghiêm để trấn giữ vững bền mạn Nam Thăng Long.',
      historicalContext: 'Đền Kim Liên trước đây vốn thuộc phường Kim Hoa, nay là phường Phương Liên. Tấm bia đá tại đền là một trong những văn bia thời Lê đẹp nhất còn lưu giữ nguyên vẹn ở Hà Nội.',
      reflectionQuestion: 'Nét chữ khắc trên bia đá năm 1510 gửi gắm ước nguyện gì của tiền nhân về một nền thái bình thịnh trị bền vững?',
    },
    observation: {
      title: 'Quan sát: Bảo vật ngàn năm trên lưng thần quy',
      prompt: 'Hãy quan sát cổ vật nổi tiếng bậc nhất nằm bên trong nhà bia đền Kim Liên.',
      targetArtifact: 'Tấm bia đá "Cao Sơn Đại Vương thần từ bi minh" niên đại 1510',
      clue: 'Một tấm bia đá xám đồ sộ dựng trên lưng rùa đá tinh xảo, trán bia chạm hình rồng chầu mặt trời đặc trưng thời Lê.',
      question: 'Bảo vật lịch sử nổi tiếng được bảo lưu cẩn trọng tại Đền Kim Liên do vị danh nhân khoa bảng nào soạn thảo văn bia?',
      options: [
        {
          id: 'a',
          text: 'Trạng nguyên Lê Tung (soạn năm 1510)',
          isCorrect: true,
          explanation: 'Chính xác! Trạng nguyên Đông các Đại học sĩ Lê Tung là người soạn bài văn bia "Cao Sơn đại vương thần từ bi minh" nổi tiếng.',
        },
        {
          id: 'b',
          text: 'Thân Nhân Trung',
          isCorrect: false,
          explanation: 'Chưa chính xác. Thân Nhân Trung nổi tiếng với bài văn bia đề danh tiến sĩ tại Văn Miếu - Quốc Tử Giám.',
        },
        {
          id: 'c',
          text: 'Nguyễn Trãi',
          isCorrect: false,
          explanation: 'Chưa chính xác. Nguyễn Trãi soạn Bình Ngô Đại Cáo đầu thời Lê Sơ.',
        },
      ],
      explanation: 'Tấm bia đá do Trạng nguyên Lê Tung soạn năm Canh Ngọ (1510) là minh chứng lịch sử quý giá ghi chép lại nguồn gốc và vị trí đền Kim Liên trấn giữ cửa Nam kinh thành.',
    },
    quiz: [
      {
        id: 'kl_q1',
        question: 'Đền Kim Liên thờ vị thần chủ nào trong thần phả dân gian Việt Nam?',
        sourceCitation: 'Theo Văn bia Cao Sơn Đại Vương thần từ bi minh',
        options: [
          {
            id: 'kl1_a',
            text: 'Cao Sơn Đại Vương',
            isCorrect: true,
            explanation: 'Chính xác! Cao Sơn Đại Vương là vị thần núi linh thiêng bảo bọc và phù trợ nhân dân.',
          },
          {
            id: 'kl1_b',
            text: 'Thủy Tinh',
            isCorrect: false,
            explanation: 'Chưa đúng. Thần cai quản sông nước không phải thần chủ Đền Kim Liên.',
          },
          {
            id: 'kl1_c',
            text: 'Thần Kim Quy',
            isCorrect: false,
            explanation: 'Chưa đúng. Rùa đá đỡ bia trong đền, nhưng vị thần được thờ là Thần Cao Sơn.',
          },
        ],
      },
      {
        id: 'kl_q2',
        question: 'Trong hệ thống Thăng Long Tứ Trấn, Đền Kim Liên giữ vị trí trấn hướng nào?',
        sourceCitation: 'Theo Địa bạ cổ Hà Nội',
        options: [
          {
            id: 'kl2_a',
            text: 'Trấn Nam (phương Nam)',
            isCorrect: true,
            explanation: 'Chính xác! Đền Kim Liên là Trấn Nam, kiểm soát hướng tiến nhập từ phương Nam vào kinh kỳ.',
          },
          {
            id: 'kl2_b',
            text: 'Trấn Bắc (phương Bắc)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Bắc là Đền Quán Thánh.',
          },
          {
            id: 'kl2_c',
            text: 'Trấn Tây (phương Tây)',
            isCorrect: false,
            explanation: 'Chưa đúng. Trấn Tây là Đền Voi Phục.',
          },
        ],
      },
      {
        id: 'kl_q3',
        question: 'Tấm bia đá cổ "Cao Sơn Đại Vương thần từ bi minh" tại đền được khắc dựng vào niên hiệu triều đại nào?',
        sourceCitation: 'Theo Thác bản văn bia Hà Nội',
        options: [
          {
            id: 'kl3_a',
            text: 'Thời Lê Trung hưng (niên hiệu Hồng Thuận, năm 1510)',
            isCorrect: true,
            explanation: 'Chính xác! Bia được khắc năm Hồng Thuận thứ hai (1510) thời vua Lê Tương Dực.',
          },
          {
            id: 'kl3_b',
            text: 'Thời Lý (năm 1010)',
            isCorrect: false,
            explanation: 'Chưa đúng. Năm 1010 là mốc vua Lý Thái Tổ dời đô về Thăng Long.',
          },
          {
            id: 'kl3_c',
            text: 'Thời Nguyễn (năm 1802)',
            isCorrect: false,
            explanation: 'Chưa đúng. Bia đá đền Kim Liên có niên đại sớm hơn thời Nguyễn gần 300 năm.',
          },
        ],
      },
    ],
    finalChallengePrompt: 'Hãy suy ngẫm về giá trị của những dòng văn bia đá cổ trong việc bảo tồn ký ức của tiền nhân cho thế hệ mai sau.',
  },
  {
    id: 'quan_thanh',
    name: 'Đền Quán Thánh',
    guardianDirection: 'Bắc',
    deity: 'Huyền Thiên Trấn Vũ',
    address: 'Đường Thanh Niên & Quán Thánh, phường Quán Thánh, quận Ba Đình, Hà Nội',
    district: 'Ba Đình',
    coordinates: {
      lat: 21.0426,
      lng: 105.8373,
    },
    sealName: 'Trấn Bắc Huyền Vũ',
    sealChinese: '鎮北玄武',
    badgeId: 'badge_tran_bac',
    badgeName: 'Dấu ấn Trấn Bắc',
    badgeDescription: 'Ghi nhận người đã tìm hiểu nghệ thuật đúc đồng đen đỉnh cao và pho tượng Huyền Thiên Trấn Vũ bảo vệ phía Bắc kinh thành.',
    shortDescription: 'Ngôi đạo quán cổ kính uy nghiêm tọa lạc bên ngã ba hồ Tây và hồ Trúc Bạch, nổi tiếng với pho tượng đồng đen Huyền Thiên Trấn Vũ cao gần 4m.',
    architecturalFeature: 'Tam quan xây gạch lộng lẫy trông ra đường Thanh Niên; chính điện lưu giữ pho tượng thần Trấn Vũ đúc đồng đen nặng khoảng 4 tấn tinh xảo tuyệt luân đúc năm 1677.',
    etiquetteTip: 'Tuyệt đối không xoa tay hay cọ xát vào ngón chân pho tượng đồng đen (hành vi này làm mòn và biến màu kim loại quý). Giữ trật tự trang nghiêm khi chiêm bái.',
    story: {
      title: 'Thanh gươm chống rắn rùa và tượng đồng đen nghìn năm trấn Bắc',
      authorOrSource: 'Trích lục theo Thăng Long cổ tích khảo & Văn bia Trấn Vũ Quán',
      era: 'Thời Hậu Lê (Niên hiệu Vĩnh Trị năm thứ hai - 1677)',
      excerpt: 'Đền Quán Thánh (xưa gọi Trấn Vũ Quán) được lập từ thời Lý Thái Tổ để ngăn chặn tà khí từ phương Bắc và sóng gió hồ Tây. Năm 1677 đời vua Lê Hy Tông, triều đình sai quan Giám sự cùng nghệ nhân làng đúc đồng Ngũ Xã Trùm Trọng đúc pho đại tượng Huyền Thiên Trấn Vũ bằng đồng đen. Thần ngồi uy nghiêm, tay trái bắt quyết, tay phải cầm kiếm chống lên mai rùa có rắn quấn quanh lưỡi kiếm.',
      historicalContext: 'Đền Quán Thánh nằm ở vị trí đắc địa gần cửa Bắc thành Hà Nội xưa. Nghệ thuật đúc tượng đồng đen tại đây là một kiệt tác đỉnh cao của nghề thủ công truyền thống kinh kỳ thế kỷ XVII.',
      reflectionQuestion: 'Hình tượng thanh kiếm quấn rắn đặt trên lưng rùa biểu đạt triết lý hòa hợp âm dương và sự bình định phong ba bão táp như thế nào?',
    },
    observation: {
      title: 'Quan sát: Kiệt tác đúc đồng Ngũ Xã thế kỷ XVII',
      prompt: 'Hãy quan sát kỹ các linh vật và thần khí đi cùng pho tượng Huyền Thiên Trấn Vũ trong chính điện.',
      targetArtifact: 'Thanh kiếm chống trên lưng Rùa với Rắn quấn quanh thân gươm',
      clue: 'Dưới chân pho tượng đồng đen khổng lồ, một mũi bảo kiếm cắm xuống lưng rùa thần, thân gươm được quấn quanh bởi một con rắn uyển chuyển.',
      question: 'Hai linh vật tượng trưng cho Bắc thần Huyền Vũ xuất hiện dưới thanh kiếm của tượng Huyền Thiên Trấn Vũ là gì?',
      options: [
        {
          id: 'a',
          text: 'Rùa và Rắn (Quy - Xà hòa hợp)',
          isCorrect: true,
          explanation: 'Chính xác! Rùa và rắn là hai linh vật biểu trưng cho chòm sao Huyền Vũ trấn ngự phương Bắc.',
        },
        {
          id: 'b',
          text: 'Rồng và Phượng hoàng',
          isCorrect: false,
          explanation: 'Chưa chính xác. Rùa và Rắn mới là linh thú gắn với Huyền Thiên Trấn Vũ.',
        },
        {
          id: 'c',
          text: 'Hổ trắng và Ngựa ô',
          isCorrect: false,
          explanation: 'Chưa chính xác. Bạch Hổ là linh thú trấn phương Tây trong tứ tượng.',
        },
      ],
      explanation: 'Hình tượng Rùa và Rắn (Quy Xà) tương hợp dưới lưỡi gươm trấn tà là biểu tượng kinh điển của vị Bắc cực Thần Huyền Thiên Trấn Vũ.',
    },
    quiz: [
      {
        id: 'qt_q1',
        question: 'Vị thần được phụng thờ tại Đền Quán Thánh là ai?',
        sourceCitation: 'Theo Văn bia Trấn Vũ Quán',
        options: [
          {
            id: 'qt1_a',
            text: 'Huyền Thiên Trấn Vũ',
            isCorrect: true,
            explanation: 'Chính xác! Huyền Thiên Trấn Vũ là vị thần trấn giữ phương Bắc, trừ tà và dẹp tan phong ba sóng gió.',
          },
          {
            id: 'qt1_b',
            text: 'Thần An Dương Vương',
            isCorrect: false,
            explanation: 'Chưa đúng. An Dương Vương được thờ tại khu di tích Cổ Loa.',
          },
          {
            id: 'qt1_c',
            text: 'Thần Long Đỗ',
            isCorrect: false,
            explanation: 'Chưa đúng. Thần Long Đỗ được thờ tại Đền Bạch Mã (Trấn Đông).',
          },
        ],
      },
      {
        id: 'qt_q2',
        question: 'Pho tượng đồng đen Huyền Thiên Trấn Vũ khổng lồ tại đền Quán Thánh được đúc bởi bàn tay tài hoa của nghệ nhân làng nghề nào?',
        sourceCitation: 'Lịch sử Nghề đúc đồng Thăng Long',
        options: [
          {
            id: 'qt2_a',
            text: 'Làng đúc đồng Ngũ Xã (Hà Nội)',
            isCorrect: true,
            explanation: 'Chính xác! Nghệ nhân Trùm Trọng và các thợ đúc đồng tài hoa làng Ngũ Xã đã đúc pho tượng tuyệt tác này vào năm 1677.',
          },
          {
            id: 'qt2_b',
            text: 'Làng gốm Bát Tràng',
            isCorrect: false,
            explanation: 'Chưa đúng. Bát Tràng là làng nghề nổi tiếng về gốm sứ thủ công.',
          },
          {
            id: 'qt2_c',
            text: 'Làng đúc đồng Đại Bái',
            isCorrect: false,
            explanation: 'Chưa đúng. Tượng đền Quán Thánh do các nghệ nhân làng Ngũ Xã bên hồ Trúc Bạch thực hiện.',
          },
        ],
      },
      {
        id: 'qt_q3',
        question: 'Câu ca dao nổi tiếng nào về Hà Nội nhắc đến tiếng chuông đền Trấn Vũ (Quán Thánh)?',
        sourceCitation: 'Ca dao cổ truyền Thăng Long - Hà Nội',
        options: [
          {
            id: 'qt3_a',
            text: '"Gió đưa cành trúc la đà / Tiếng chuông Trấn Vũ, canh gà Thọ Xương"',
            isCorrect: true,
            explanation: 'Chính xác! Câu thơ lục bát nổi tiếng khắc họa khung cảnh thanh bình, thơ mộng của kinh kỳ Hà Nội xưa.',
          },
          {
            id: 'qt3_b',
            text: '"Thăng Long Hà Nội đô thành / Nước xanh biếc ngắt bao quanh bốn bề"',
            isCorrect: false,
            explanation: 'Chưa chính xác. Câu ca dao gắn với chuông Trấn Vũ và canh gà Thọ Xương mới là câu kinh điển.',
          },
          {
            id: 'qt3_c',
            text: '"Rủ nhau chơi khắp Long thành / Ba mươi sáu phố rành rành chẳng sai"',
            isCorrect: false,
            explanation: 'Chưa đúng. Câu này nói về 36 phố phường nói chung.',
          },
        ],
      },
    ],
    finalChallengePrompt: 'Hãy lắng nghe âm vang lịch sử từ tiếng chuông Trấn Vũ và ngẫm về sự vững chãi của bờ cõi phương Bắc Thăng Long.',
  },
];

export const ALL_BADGES = [
  {
    id: 'badge_tran_dong',
    name: 'Dấu ấn Trấn Đông',
    stationId: 'bach_ma',
    sealText: 'TRẤN ĐÔNG',
    description: 'Hoàn thành khám phá Đền Bạch Mã và huyền tích móng ngựa chỉ lối đắp thành Thăng Long.',
    requirement: 'Hoàn thành trạm Đền Bạch Mã',
  },
  {
    id: 'badge_tran_tay',
    name: 'Dấu ấn Trấn Tây',
    stationId: 'voi_phuc',
    sealText: 'TRẤN TÂY',
    description: 'Hoàn thành khám phá Đền Voi Phục và câu chuyện vì nước quên thân của Hoàng tử Linh Lang.',
    requirement: 'Hoàn thành trạm Đền Voi Phục',
  },
  {
    id: 'badge_tran_nam',
    name: 'Dấu ấn Trấn Nam',
    stationId: 'kim_lien',
    sealText: 'TRẤN NAM',
    description: 'Hoàn thành khám phá Đền Kim Liên và văn bia đá cổ ngàn năm thời Lê Trung Hưng.',
    requirement: 'Hoàn thành trạm Đền Kim Liên',
  },
  {
    id: 'badge_tran_bac',
    name: 'Dấu ấn Trấn Bắc',
    stationId: 'quan_thanh',
    sealText: 'TRẤN BẮC',
    description: 'Hoàn thành khám phá Đền Quán Thánh và kiệt tác pho tượng đồng đen Huyền Thiên Trấn Vũ.',
    requirement: 'Hoàn thành trạm Đền Quán Thánh',
  },
  {
    id: 'badge_nguoi_giu_chuyen',
    name: 'Người giữ chuyện Thăng Long',
    isGrandMaster: true,
    sealText: 'THĂNG LONG KÝ SỬ',
    description: 'Danh hiệu cao quý nhất! Đã đi trọn bốn hướng Đông Tây Nam Bắc, giải mã toàn bộ tứ trấn kinh thành.',
    requirement: 'Hoàn thành toàn bộ 4 trạm Thăng Long Tứ Trấn',
  },
];

export function getStationById(id: string): StationData | undefined {
  return STATIONS.find((s) => s.id === id);
}

export function calculatePlayerRank(points: number, completedCount: number): string {
  if (completedCount >= 4 && points >= 300) {
    return 'Người giữ chuyện Thăng Long';
  }
  if (points >= 250) {
    return 'Người khám phá di sản';
  }
  if (points >= 100) {
    return 'Người đọc chuyện';
  }
  return 'Lữ khách';
}
