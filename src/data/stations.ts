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
    literaryWork: {
      title: 'Quảng Lợi Đại Vương Long Đỗ thần tích',
      author: 'Lý Tế Xuyên',
      genre: 'Truyện truyền kỳ chữ Hán (Văn học trung đại)',
      period: 'Thời Trần (Thế kỷ XIV)',
      source: 'Việt điện u linh tập (Tập truyện về các vị thần linh thiêng đất Việt)',
      originalText: '昔唐咸通中，高駢築城，神化為彩雲見於空中... 駢乃作銅符以鎮之，是夕雷震，銅符碎裂... 至李太祖築城，神化為白馬以示基址...',
      translatedText: 'Xưa vào năm Hàm Thông đời Đường, Cao Biền đắp La Thành, thấy mây ngũ sắc tụ lại rực rỡ, thần Long Đỗ hiện lên giữa không trung khôi ngô tuấn tú. Biền kinh sợ bèn đúc bùa đồng để trấn yểm. Đêm ấy sấm sét nổ rền, bùa đồng vỡ vụn thành tro bụi, Biền than rằng: “Xứ này có thần linh bảo hộ, ta không thể khuất phục nổi”. Đến khi Lý Thái Tổ định đô xây thành, đất cứ lở sụt. Vua chí thành cầu đảo, thần bèn hóa ngựa trắng dẫn lối vạch đường chân thành. Vua theo vết móng ngựa xây đắp thì thành đứng vững ngàn năm.',
      analysis: 'Tác phẩm thể hiện đỉnh cao của cảm hứng độc lập tự chủ và lòng tự hào dân tộc trong văn học thời Trần. Hình tượng Thần Long Đỗ không chỉ là thần bản thổ mà là biểu tượng tinh anh quật cường của non sông Đại Việt, đập tan mưu đồ đồng hóa và bùa chú của ngoại bang.',
      famousQuote: '“Thần là tinh anh của đất này, cớ gì phải sợ thứ bùa phép cỏn con phương Bắc!”',
    },
    literatureKnowledge: {
      genreDefinition: {
        genreName: 'Truyện truyền kỳ (伝奇)',
        description: 'Thể loại văn xuôi tự sự chữ Hán thời trung đại, phản ánh đời sống hiện thực và lịch sử thông qua các yếu tố kỳ ảo, hoang đường và thần thoại dân gian.',
        keyCharacteristics: [
          'Kết hợp hài hòa giữa cốt lõi lịch sử có thật và trí tưởng tượng dân gian phong phú.',
          'Sử dụng mô-típ kỳ ảo (thần linh hóa thân, sấm sét giáng lâm, điềm lành hiển ứng) để tôn vinh chính nghĩa.',
          'Gửi gắm ước vọng về quốc thái dân an và khẳng định chủ quyền văn hóa dân tộc.',
        ],
      },
      rhetoricalDevices: [
        {
          name: 'Bút pháp kỳ ảo hóa lịch sử (Kỳ ảo tương giao)',
          example: 'Ngựa trắng từ trong đền phi ra, móng chân in vết rực sáng dẫn đường đắp lũy xây thành.',
          effect: 'Tạo nên không khí thiêng liêng, huyền bí, nâng sự kiện lịch sử định đô năm 1010 lên tầm vóc thần thoại mang sứ mệnh trời ban.',
        },
        {
          name: 'Hình tượng biểu trưng (Biểu tượng Bạch Mã)',
          example: 'Con ngựa trắng (Bạch Mã) tượng trưng cho dương khí, sự trong sáng, hanh thông và tốc độ khai mở tương lai.',
          effect: 'Tượng trưng cho sự hội tụ của linh khí đất trời Thăng Long, mở ra thời kỳ thái bình thịnh trị cho triều Lý.',
        },
        {
          name: 'Nghệ thuật đối lập tương phản',
          example: 'Sự thất bại, hoảng sợ của Cao Biền với bùa yểm tan tác đối lập với sự thần phục, tương trợ dành cho vua Lý Thái Tổ.',
          effect: 'Khẳng định đạo lý: phi nghĩa ắt bại, chính nghĩa thuận lòng trời dân tất thành.',
        },
      ],
      glossary: [
        {
          term: 'Thành hoàng (城隍)',
          meaning: 'Vị thần bảo trợ cho sự bình yên, thịnh vượng của một tòa thành, một vùng đất hay kinh đô.',
          literaryContext: 'Thần Long Đỗ được suy tôn là Quốc đô Định bang Thành hoàng Đại vương của Thăng Long.',
        },
        {
          term: 'Truyền kỳ (傳奇)',
          meaning: 'Ghi chép lại những câu chuyện kỳ lạ, kỳ diệu lưu truyền trong văn học dân gian và sử tích.',
          literaryContext: 'Việt điện u linh tập là tác phẩm mở đầu cho dòng văn học truyền kỳ trung đại Việt Nam.',
        },
        {
          term: 'Trai giới (齋戒)',
          meaning: 'Giữ thân tâm trong sạch, ăn chay, tắm gội trước khi thực hiện các nghi lễ tế trời đất thần linh thiêng liêng.',
          literaryContext: 'Vua Lý Thái Tổ lập đàn trai giới cầu nguyện khi việc xây thành gặp trở ngại.',
        },
        {
          term: 'Hanh thông (亨通)',
          meaning: 'Thông suốt, trôi chảy, việc gì cũng diễn ra thuận lợi may mắn.',
          literaryContext: 'Dấu chân ngựa trắng biểu trưng cho sự hanh thông của vận nước Đại Việt.',
        },
      ],
      pedagogicalTakeaway: 'Qua văn bản truyện ký về đền Bạch Mã, ta hiểu rằng văn học trung đại không ghi chép lịch sử đơn thuần bằng con số khô khan mà bằng hình tượng nghệ thuật giàu chất thơ và niềm kiêu hãnh dân tộc.',
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
        question: 'Về mặt thể loại văn học trung đại, tác phẩm “Việt điện u linh tập” chép về Thần Long Đỗ thuộc thể loại nào?',
        sourceCitation: 'Theo Giáo trình Lịch sử Văn học Việt Nam Trung đại',
        options: [
          {
            id: 'bm1_a',
            text: 'Truyện truyền kỳ chữ Hán (Ghi chép truyện linh dị thiêng liêng)',
            isCorrect: true,
            explanation: 'Chính xác! Việt điện u linh tập của Lý Tế Xuyên là tác phẩm tiêu biểu của dòng truyện truyền kỳ chữ Hán thời Trần.',
          },
          {
            id: 'bm1_b',
            text: 'Tiểu thuyết chương hồi',
            isCorrect: false,
            explanation: 'Chưa đúng. Tiểu thuyết chương hồi phát triển muộn hơn (như Hoàng Lê nhất thống chí).',
          },
          {
            id: 'bm1_c',
            text: 'Kịch bản tuồng cổ',
            isCorrect: false,
            explanation: 'Chưa đúng. Đây là tập văn xuôi tự sự ghi chép thần phả và truyện kỳ tích.',
          },
        ],
      },
      {
        id: 'bm_q2',
        question: 'Hình tượng “Ngựa trắng” trong truyền thuyết đền Bạch Mã mang ý nghĩa biểu trưng văn học nào?',
        sourceCitation: 'Nghiên cứu Biểu tượng Văn hóa Việt Nam',
        options: [
          {
            id: 'bm2_a',
            text: 'Ánh sáng mặt trời, điềm lành hanh thông và sự thuận hòa giữa ý trời với lòng dân',
            isCorrect: true,
            explanation: 'Chính xác! Ngựa trắng là biểu tượng dương khí rực rỡ, mang ý nghĩa thông suốt, vững bền cho nền móng kinh đô mới.',
          },
          {
            id: 'bm2_b',
            text: 'Sự u sầu và chia ly nơi chiến trận',
            isCorrect: false,
            explanation: 'Chưa đúng. Bạch Mã trong tích dời đô là điềm lành khánh hội, hoàn toàn mang ý nghĩa tích cực.',
          },
          {
            id: 'bm2_c',
            text: 'Cơn lũ sông Hồng dâng cao mùa mưa',
            isCorrect: false,
            explanation: 'Chưa đúng. Hình tượng gắn liền với thế đất và sự kiên cố của lũy thành Thăng Long.',
          },
        ],
      },
      {
        id: 'bm_q3',
        question: 'Chi tiết sấm sét đánh tan bùa đồng trấn yểm của Cao Biền trong “Việt điện u linh” thể hiện tư tưởng gì của tác giả?',
        sourceCitation: 'Theo Việt điện u linh tập (Lý Tế Xuyên)',
        options: [
          {
            id: 'bm3_a',
            text: 'Khẳng định khí phách độc lập tự chủ và sự bất khả xâm phạm của non sông đất Việt',
            isCorrect: true,
            explanation: 'Chính xác! Đây là niềm tự hào dân tộc sâu sắc của người Việt thời Trần trước mọi âm mưu áp chế phương Bắc.',
          },
          {
            id: 'bm3_b',
            text: 'Ca ngợi tài nghệ luyện kim phương Bắc',
            isCorrect: false,
            explanation: 'Chưa đúng. Chi tiết bùa đồng vỡ vụn cho thấy thuật pháp ngoại bang hoàn toàn bất lực trước linh khí Đại Việt.',
          },
          {
            id: 'bm3_c',
            text: 'Mô tả hiện tượng thời tiết mưa dông mùa hạ đơn thuần',
            isCorrect: false,
            explanation: 'Chưa đúng. Đây là thủ pháp kỳ ảo hóa mang tính biểu tượng tư tưởng chính trị sâu sắc.',
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
    literaryWork: {
      title: 'Tây Trấn Linh Lang ca & Khúc văn tế anh hùng',
      author: 'Dân gian Thăng Long & Các tác gia diễn ca lịch sử triều Nguyễn',
      genre: 'Diễn ca lịch sử & Hát văn thờ (Văn học diễn xướng dân gian)',
      period: 'Thời Hậu Lê - Nguyễn',
      source: 'Thần tích miếu Tây Trấn & Đại Nam quốc sử diễn ca',
      originalText: 'Thị lãng đan sa hóa thánh thần / Tây giao lẫm liệt trấn phong vân / Chiến tượng nhất thanh khai thiết trận / Cố quốc vạn cổ ngưỡng hoàng ân...',
      translatedText: '“Voi chiến rùng mình xông trận mạc,\nÁo bào đỏ thắm gió tung bay.\nTiếng gầm dậy đất tan quân giặc,\nSóng nước Tây Hồ ngát hương sen.\nCông thành rồng lượn về mây biếc,\nMuôn thuở Tây Trấn rạng danh người.”',
      analysis: 'Bản diễn ca và thần phả Linh Lang hội tụ vẻ đẹp bi tráng của hình tượng người tráng sĩ thời Lý. Ngôn ngữ thơ giàu nhịp điệu hào sảng, sử dụng triệt để các hình ảnh kỳ vĩ (chiến tượng, áo bào, rồng bay) để khắc họa tinh thần xả thân vì nền độc lập của non sông.',
      famousQuote: '“Xin vua cha ban cho một lá cờ lệnh và một thớt voi chiến, con nguyện quét sạch quân thù!”',
    },
    literatureKnowledge: {
      genreDefinition: {
        genreName: 'Truyền thuyết anh hùng dân gian (英雄傳說)',
        description: 'Tác phẩm tự sự dân gian tái hiện cuộc đời và chiến công của các nhân vật lịch sử qua trí tưởng tượng lãng mạn hóa và lòng tôn kính của nhân dân.',
        keyCharacteristics: [
          'Nhân vật thường có sự ra đời phi thường và hành trạng kỳ vĩ gắn với vận mệnh đất nước.',
          'Sử dụng mô-típ “hóa thân bất tử” sau khi hoàn thành sứ mạng bảo vệ non sông (tương đồng với Thánh Gióng).',
          'Kết tinh tình cảm yêu nước và lòng tri ân của cộng đồng qua việc lập đền thờ phụng nghìn năm.',
        ],
      },
      rhetoricalDevices: [
        {
          name: 'Nghệ thuật phóng đại / Cường điệu (Nói quá thi pháp)',
          example: 'Hoàng tử hét một tiếng vang như sấm dậy, voi chiến rống lên làm rúng động phòng tuyến quân giặc tan tác.',
          effect: 'Tô đậm sức mạnh phi thường, khí thế hào hùng át vía quân thù của vị dũng tướng triều Lý.',
        },
        {
          name: 'Mô-típ nghệ thuật “Hóa thân bất tử”',
          example: 'Sau khi dẹp yên quân giặc, hoàng tử hóa thành con giao long lớn lượn vòng rồi bay về trời xanh.',
          effect: 'Thể hiện niềm tin của nhân dân: người anh hùng cứu nước không bao giờ chết mà trở thành linh khí sông núi trường tồn.',
        },
        {
          name: 'Ước lệ tượng trưng qua y phục và màu sắc',
          example: 'Hình ảnh áo bào đỏ rực (hồng bào) cưỡi lưng voi trận giữa muôn trùng tên đạn.',
          effect: 'Khắc họa vẻ đẹp oai phong, quả cảm của bậc vương tử xả thân vì đại nghĩa cứu quốc.',
        },
      ],
      glossary: [
        {
          term: 'Thớt voi',
          meaning: 'Từ chỉ đơn vị (lượng từ) tiếng Việt cổ chuyên dùng để đếm voi chiến trong quân đội xưa (thay vì dùng "con voi").',
          literaryContext: '“Ban cho hoàng tử cờ lệnh và hai thớt voi chiến...”',
        },
        {
          term: 'Diễn ca lịch sử (演歌)',
          meaning: 'Thể loại dùng thơ ca (thường là lục bát hoặc song thất lục bát) kể lại các sự kiện lịch sử cho dễ thuộc, dễ truyền bá.',
          literaryContext: 'Đại Nam quốc sử diễn ca là tác phẩm diễn ca lịch sử nổi tiếng nhất thế kỷ XIX.',
        },
        {
          term: 'Ước lệ (約例)',
          meaning: 'Quy ước nghệ thuật trong văn học cổ điển, dùng những hình tượng mẫu mực để gợi tả tính cách và khí phách nhân vật.',
          literaryContext: 'Vẻ đẹp của các dũng tướng thời Lý thường được miêu tả theo bút pháp ước lệ lẫm liệt.',
        },
        {
          term: 'Hóa thân (化身)',
          meaning: 'Biến đổi hình hài phàm tục thành linh thể bất tử bay về trời hoặc hòa vào mây nước thiêng liêng.',
          literaryContext: 'Mô-típ hóa thân rất phổ biến trong các truyền thuyết anh hùng thời Bắc thuộc và thời Lý - Trần.',
        },
      ],
      pedagogicalTakeaway: 'Nghiên cứu hình tượng Linh Lang giúp ta nhận ra mạch nguồn bất tận của chủ nghĩa yêu nước Việt Nam từ văn học dân gian đến văn học viết trung đại.',
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
        question: 'Mô-típ nghệ thuật “Hoàng tử hóa thân thành rồng bay về trời sau khi đánh giặc” trong truyền thuyết đền Voi Phục tương đồng với tác phẩm văn học dân gian nào sau đây?',
        sourceCitation: 'Theo Phân tích Thi pháp Truyền thuyết Dân gian Việt Nam',
        options: [
          {
            id: 'vp1_a',
            text: 'Truyền thuyết Thánh Gióng cưỡi ngựa sắt bay về trời sau khi phá tan giặc Ân',
            isCorrect: true,
            explanation: 'Chính xác! Cả hai truyền thuyết đều sử dụng mô-típ hóa thân bất tử để khẳng định người anh hùng cứu nước sống mãi với non sông.',
          },
          {
            id: 'vp1_b',
            text: 'Cổ tích Thạch Sanh',
            isCorrect: false,
            explanation: 'Chưa đúng. Thạch Sanh cưới công chúa và lên ngôi vua, không có mô-típ hóa thân về trời.',
          },
          {
            id: 'vp1_c',
            text: 'Truyện cười Trạng Quỳnh',
            isCorrect: false,
            explanation: 'Chưa đúng. Trạng Quỳnh là thể loại truyện cười trào lộng châm biếm thế sự.',
          },
        ],
      },
      {
        id: 'vp_q2',
        question: 'Trong câu văn cổ: “Vua ban cho hoàng tử một thớt voi chiến”, từ “thớt” giữ vai trò ngữ pháp và ngữ nghĩa nào?',
        sourceCitation: 'Từ điển Tiếng Việt Cổ & Trung đại',
        options: [
          {
            id: 'vp2_a',
            text: 'Lượng từ tiếng Việt cổ chuyên dùng cho loài voi trong quân sự xưa',
            isCorrect: true,
            explanation: 'Chính xác! Người xưa dùng từ "thớt voi" thay cho "con voi" để chỉ những chiến tượng dũng mãnh phục vụ quân sự.',
          },
          {
            id: 'vp2_b',
            text: 'Dụng cụ nhà bếp dùng để chặt thái',
            isCorrect: false,
            explanation: 'Chưa đúng. Trong ngữ cảnh cổ, đây là lượng từ chỉ động vật cỡ lớn có tính chất trận mạc.',
          },
          {
            id: 'vp2_c',
            text: 'Đơn vị đo lường trọng lượng tương đương 1 tạ',
            isCorrect: false,
            explanation: 'Chưa đúng. Đây là danh từ chỉ đơn vị (loại từ) mang tính lịch sử sâu sắc.',
          },
        ],
      },
      {
        id: 'vp_q3',
        question: 'Bút pháp nghệ thuật chủ đạo được sử dụng để miêu tả tiếng gầm của voi chiến và sức mạnh hoàng tử Linh Lang là gì?',
        sourceCitation: 'Theo Thi pháp Văn học Dân gian',
        options: [
          {
            id: 'vp3_a',
            text: 'Bút pháp phóng đại (Cường điệu hóa) kết hợp ước lệ hào sảng',
            isCorrect: true,
            explanation: 'Chính xác! Phóng đại tiếng gầm rung chuyển đất trời nhằm khắc họa khí thế áp đảo quân thù của chính nghĩa dân tộc.',
          },
          {
            id: 'vp3_b',
            text: 'Tả thực chi tiết mang tính giải phẫu học',
            isCorrect: false,
            explanation: 'Chưa đúng. Văn học dân gian không tả thực chi li mà dùng ngôn từ gợi cảm, ước lệ.',
          },
          {
            id: 'vp3_c',
            text: 'Biện pháp trào phúng châm biếm hài hước',
            isCorrect: false,
            explanation: 'Chưa đúng. Truyền thuyết mang giọng điệu trang nghiêm, tôn kính và bi tráng.',
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
    literaryWork: {
      title: 'Cao Sơn Đại Vương thần từ bi minh (高山大王神祠碑銘)',
      author: 'Trạng nguyên Đông các Đại học sĩ Lê Tung (soạn năm 1510)',
      genre: 'Văn bia bi minh chữ Hán (Thể văn chức năng trung đại)',
      period: 'Thời Hậu Lê (Hồng Thuận năm thứ hai - 1510)',
      source: 'Văn bia nguyên bản ngự trên lưng rùa đá xanh tại đền Kim Liên, Hà Nội',
      originalText: '惟天降衷，篤生聖哲。降祉降祥，為邦之楨。赫赫高山，民之所依。勒諸貞石，萬祀昭垂...',
      translatedText: '“Trời giáng đức thuần, hun đúc thánh thần.\nBan phúc ban lành, làm rường cột cho nước nhà.\nSừng sững non cao, lòng dân nương tựa.\nKhắc vào đá trắng, muôn thuở soi chung.\nPhương Nam vững chãi, đạo trị sáng ngời.”',
      analysis: 'Văn bia đền Kim Liên là tuyệt tác của thể văn Bi minh (碑銘) đầu thế kỷ XVI. Bài văn gồm phần ký thuật lại việc dấy nghĩa bảo vệ đất nước và phần minh (vần 4 chữ cô đọng) ca ngợi công đức thần linh. Văn phong biền ngẫu đăng đối nghiêm cẩn, chữ dùng đĩnh đạc, thể hiện trình độ văn chương bậc thầy của bậc Trạng nguyên triều Lê.',
      famousQuote: '“Khắc vào đá quý lưu truyền hậu thế, để muôn năm trông vào mà noi theo đạo trung nghĩa sáng ngời.”',
    },
    literatureKnowledge: {
      genreDefinition: {
        genreName: 'Thể Bi minh / Văn bia (碑銘體)',
        description: 'Thể văn nghị luận - tự sự - tụng xưng chức năng thời trung đại, được khắc vào bia đá để lưu giữ muôn đời những sự kiện lớn, công đức của danh nhân và thần linh.',
        keyCharacteristics: [
          'Kết cấu kinh điển gồm 2 phần: Phần Tự/Ký (văn xuôi tự sự kể lại lai lịch, bối cảnh) và phần Minh (văn vần 4 chữ đúc kết đạo lý).',
          'Văn phong biền ngẫu, nhịp điệu cân xứng, lời lẽ trang nghiêm, tao nhã và mang tính quy phạm cao.',
          'Giá trị song hành: vừa là tác phẩm văn chương mẫu mực, vừa là văn bản sử liệu gốc (sử liệu thứ nhất) có độ tin cậy tuyệt đối.',
        ],
      },
      rhetoricalDevices: [
        {
          name: 'Nghệ thuật đối ngẫu biền ngẫu (Cân xứng nhịp điệu)',
          example: '“Giáng chỉ giáng tường, vi bang chi trinh / Hách hách cao sơn, dân chi sở y” (Ban phúc ban lành - làm cột rường nước / Sừng sững non cao - làm chỗ dựa dân).',
          effect: 'Tạo nên âm vang trầm bổng, trang trọng như lời tuyên ngôn linh thiêng trước trời đất.',
        },
        {
          name: 'Ẩn dụ biểu trưng (Thần sơn - Trụ đá vững bền)',
          example: 'Hình ảnh “Cao Sơn” (Núi cao) vừa là tên vị thần, vừa là biểu tượng của thế tựa vững chãi, uy phong của giang sơn.',
          effect: 'Tượng trưng cho sự kiên định, chở che của các bậc tiền thánh đối với vận mệnh kinh đô.',
        },
        {
          name: 'Điển cố điển tích thời Hồng Bàng',
          example: 'Nhắc đến nguồn gốc thần Cao Sơn theo mẹ Âu Cơ lên núi khai sơn phá thạch.',
          effect: 'Gắn kết ngôi đền với cội nguồn dân tộc nghìn năm thời Hùng Vương, bồi đắp lòng tự hào truyền thống.',
        },
      ],
      glossary: [
        {
          term: 'Bi minh (碑銘)',
          meaning: 'Bài thơ hoặc bài ca văn vần khắc trên bia đá nhằm ghi khắc công lao và giáo huấn cho thế hệ mai sau.',
          literaryContext: 'Bi minh là thành tố văn học quan trọng nhất trong các văn bia thời Lý - Trần - Lê.',
        },
        {
          term: 'Văn biền ngẫu (駢儷文)',
          meaning: 'Thể văn gồm các câu đi từng cặp cân xứng (đối ngẫu) về số chữ, thanh điệu bằng trắc và ý nghĩa.',
          literaryContext: 'Phần lớn các chiếu biểu, hịch, văn bia thời phong kiến đều được viết bằng văn biền ngẫu.',
        },
        {
          term: 'Thác bản (拓本)',
          meaning: 'Bản in dập mực từ bia đá hoặc chuông đồng cổ lên giấy dó để nghiên cứu và bảo tồn văn bản học.',
          literaryContext: 'Thác bản văn bia đền Kim Liên hiện được lưu giữ trang trọng tại Viện Nghiên cứu Hán Nôm.',
        },
        {
          term: 'Văn sử triết bất phân',
          meaning: 'Đặc trưng của văn học trung đại Á Đông khi văn chương, lịch sử và triết học luôn hòa quyện trong một tác phẩm.',
          literaryContext: 'Bài văn bia của Lê Tung vừa là tác phẩm văn học, vừa là tư liệu lịch sử, vừa hàm chứa triết lý Nho gia trị quốc.',
        },
      ],
      pedagogicalTakeaway: 'Học sinh tiếp cận văn bia đền Kim Liên sẽ thấu hiểu sâu sắc thể loại văn bia trung đại - nơi ngôn từ hóa thành đá tảng trường tồn với thời gian.',
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
        question: 'Về mặt cấu trúc văn học thể loại, một bài “Bi minh” (văn bia) trung đại kinh điển như tại đền Kim Liên thường gồm có mấy phần chính?',
        sourceCitation: 'Theo Giáo trình Thể loại Văn học Trung đại Việt Nam',
        options: [
          {
            id: 'kl1_a',
            text: 'Hai phần: Phần Tự/Ký (văn xuôi tự sự thuật sự việc) và phần Minh (văn vần 4 chữ đúc kết ca ngợi)',
            isCorrect: true,
            explanation: 'Chính xác! Thể Bi minh luôn có phần văn xuôi tự sự mở đầu và khép lại bằng bài minh văn vần trang trọng.',
          },
          {
            id: 'kl1_b',
            text: 'Một đoạn thơ lục bát duy nhất',
            isCorrect: false,
            explanation: 'Chưa đúng. Thơ lục bát là thể thơ dân tộc, trong khi văn bia đá thời Lê viết bằng chữ Hán biền ngẫu.',
          },
          {
            id: 'kl1_c',
            text: 'Ba hồi kịch đối thoại sân khấu',
            isCorrect: false,
            explanation: 'Chưa đúng. Văn bia là văn khắc đá trang nghiêm, không phải kịch bản sân khấu.',
          },
        ],
      },
      {
        id: 'kl_q2',
        question: 'Thuật ngữ “Văn sử triết bất phân” thể hiện rõ nét như thế nào qua văn bia đền Kim Liên do Trạng nguyên Lê Tung soạn?',
        sourceCitation: 'Nghiên cứu Văn bản học Hán Nôm',
        options: [
          {
            id: 'kl2_a',
            text: 'Tác phẩm vừa đạt giá trị văn chương điêu luyện, vừa là sử liệu xác thực, vừa hàm chứa tư tưởng triết lý đạo đức trị nước',
            isCorrect: true,
            explanation: 'Chính xác! Đây là đặc trưng tiêu biểu nhất của các kiệt tác văn học chức năng thời Lý, Trần, Lê.',
          },
          {
            id: 'kl2_b',
            text: 'Tác phẩm không có giá trị lịch sử mà chỉ hư cấu',
            isCorrect: false,
            explanation: 'Chưa đúng. Văn bia đá là một trong những nguồn sử liệu gốc đáng tin cậy nhất.',
          },
          {
            id: 'kl2_c',
            text: 'Chỉ ghi chép giá cả xây dựng đền miếu mà không có cảm xúc văn chương',
            isCorrect: false,
            explanation: 'Chưa đúng. Văn bia của Trạng nguyên Lê Tung là một áng văn chương biền ngẫu rất mẫu mực và trau chuốt.',
          },
        ],
      },
      {
        id: 'kl_q3',
        question: 'Biện pháp nghệ thuật “Đăng đối” trong văn biền ngẫu của văn bia thời Lê nhằm đạt tới hiệu quả thẩm mỹ nào?',
        sourceCitation: 'Giáo trình Thi pháp Văn học Cổ điển',
        options: [
          {
            id: 'kl3_a',
            text: 'Tạo nên nhạc điệu trang trọng, cân bằng, hài hòa và tăng sức nặng biểu cảm cho lời văn ca tụng',
            isCorrect: true,
            explanation: 'Chính xác! Phép đối ngẫu câu văn biền ngẫu tạo sự uy nghiêm, đăng đối hoàn hảo của ngôn từ cung đình cổ điển.',
          },
          {
            id: 'kl3_b',
            text: 'Gây cười và giải trí châm biếm',
            isCorrect: false,
            explanation: 'Chưa đúng. Văn bia là thể loại tôn nghiêm thờ phụng, không dùng để gây cười.',
          },
          {
            id: 'kl3_c',
            text: 'Làm cho bài văn ngắn lại tối đa',
            isCorrect: false,
            explanation: 'Chưa đúng. Đăng đối là cách tổ chức câu chữ nhịp nhàng chứ không nhằm mục đích cắt ngắn văn bản.',
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
    literaryWork: {
      title: 'Thi phẩm ca dao Thăng Long & Đôi câu đối Trấn Vũ Quán',
      author: 'Dân gian Hà Nội & Tác gia Dương Khuê (truyền bản)',
      genre: 'Thơ Lục bát dân gian & Câu đối (Doanh liên cổ điển)',
      period: 'Thời Lê - Nguyễn đến cận đại',
      source: 'Tuyển tập Ca dao Dân ca Hà Nội & Hoành phi câu đối di tích Quán Thánh',
      originalText: 'Gió đưa cành trúc la đà / Tiếng chuông Trấn Vũ, canh gà Thọ Xương / Mịt mù khói tỏa ngàn sương / Nhịp chày Yên Thái, mặt gương Tây Hồ.',
      translatedText: '“Gió đưa cành trúc la đà,\nTiếng chuông Trấn Vũ, canh gà Thọ Xương.\nMịt mù khói tỏa ngàn sương,\nNhịp chày Yên Thái, mặt gương Tây Hồ.”\n\n(Câu đối đền Quán Thánh):\n“Bảo kiếm linh quy xà phục địa,\nHuyền thiên bắc cực vũ bình phong.”\n(Gươm thiêng rùa rắn quy phục đất lành / Huyền thiên cõi bắc che chở kinh thành).',
      analysis: 'Bốn câu thơ lục bát là bức tranh thủy mặc tuyệt mỹ về Thăng Long cổ kính. Tác giả kết hợp tài tình giữa âm thanh (tiếng chuông Trấn Vũ, tiếng gà, nhịp chày giã giấy dó Yên Thái) với thị giác (khói sương bảng lảng, cành trúc la đà, mặt gương sóng nước hồ Tây), tạo nên không gian thi cảm hoài niệm, thanh nhã và lắng đọng.',
      famousQuote: '“Tiếng chuông Trấn Vũ, canh gà Thọ Xương / Nhịp chày Yên Thái, mặt gương Tây Hồ.”',
    },
    literatureKnowledge: {
      genreDefinition: {
        genreName: 'Thơ Lục bát & Câu đối (六八詩 & 對聯)',
        description: 'Hai thể loại văn học đặc sắc gắn với đời sống văn hóa Việt Nam: Thể thơ lục bát thuần túy dân tộc và Thể câu đối (doanh liên) của văn học trung đại.',
        keyCharacteristics: [
          'Thơ lục bát: Câu 6 chữ xen kẽ câu 8 chữ, luật gieo vần bằng nhịp nhàng (tiếng thứ 6 câu trên vần với tiếng thứ 6 câu dưới; tiếng thứ 8 vần với tiếng thứ 6 câu 6 tiếp theo).',
          'Câu đối: Cân chỉnh tuyệt đối về số chữ, ý nghĩa, từ loại và thanh điệu bằng - trắc giữa vế trên và vế dưới.',
          'Khả năng khơi gợi hồn cốt dân tộc, tạo nên bức tranh tâm cảnh lắng sâu của văn hóa Tràng An.',
        ],
      },
      rhetoricalDevices: [
        {
          name: 'Nghệ thuật “Lấy động tả tĩnh” (Dĩ động tả tĩnh - 以動寫靜)',
          example: '“Tiếng chuông Trấn Vũ, canh gà Thọ Xương” giữa đêm sương mờ ảo.',
          effect: 'Tiếng chuông ngân xa và tiếng gà gáy cách quãng không làm xao động đêm kinh kỳ mà càng khắc họa sâu sắc vẻ tĩnh lặng, trầm mặc, thanh bình của không gian Thăng Long xưa.',
        },
        {
          name: 'Ẩn dụ chuyển đổi cảm giác & So sánh ngầm',
          example: '“Mặt gương Tây Hồ” - ví mặt nước hồ Tây phẳng lặng, trong trẻo như tấm gương soi bóng mây trời.',
          effect: 'Tôn vinh vẻ đẹp trong lành, khoáng đạt và thanh khiết của cảnh sắc hồ nước kinh kỳ.',
        },
        {
          name: 'Từ láy tượng thanh và tượng hình giàu giá trị biểu cảm',
          example: 'Từ láy “la đà” gợi dáng cành trúc mềm mại đung đưa trong gió; từ láy “mịt mù” gợi màn sương sớm bảng lảng bao phủ cảnh vật.',
          effect: 'Đem lại chất họa và chất nhạc mênh mang cho bức tranh thơ.',
        },
      ],
      glossary: [
        {
          term: 'Dĩ động tả tĩnh (以動寫靜)',
          meaning: 'Thủ pháp nghệ thuật dùng âm thanh, cử động nhẹ nhàng để làm nổi bật sự tĩnh mịch, trầm lắng của cảnh vật xung quanh.',
          literaryContext: 'Tiếng chuông đền Trấn Vũ ngân buông trong thơ ca là ví dụ kinh điển nhất của thủ pháp này trong chương trình Ngữ văn.',
        },
        {
          term: 'Câu đối / Doanh liên (楹聯)',
          meaning: 'Thể loại văn học gồm hai vế đối xứng nhau, thường được sơn son thiếp vàng treo ở các cột trong đền, chùa, văn miếu.',
          literaryContext: 'Đền Quán Thánh lưu giữ nhiều đôi câu đối chữ Hán ca ngợi pho tượng đồng đen và vẻ đẹp hồ Tây.',
        },
        {
          term: 'Nhịp chày Yên Thái',
          meaning: 'Âm thanh của nhịp chày giã vỏ cây dó làm giấy dó truyền thống tại làng Yên Thái (làng Bưởi) bên bờ hồ Tây.',
          literaryContext: 'Một nét đẹp lao động thủ công truyền thống đi vào văn học ca dao Hà Nội.',
        },
        {
          term: 'Quy - Xà hòa hợp (龜蛇合體)',
          meaning: 'Hình tượng biểu trưng của chòm sao Huyền Vũ trấn phương Bắc: Rùa vững vàng trên mặt đất kết hợp cùng Rắn uyển chuyển biến hóa.',
          literaryContext: 'Dưới chân tượng Huyền Thiên Trấn Vũ là thanh gươm cắm trên lưng rùa có rắn quấn quanh.',
        },
      ],
      pedagogicalTakeaway: 'Đoạn thơ ca dao về tiếng chuông Trấn Vũ là viên ngọc quý của văn học Thăng Long, bài học mẫu mực về nghệ thuật lấy động tả tĩnh và ngôn từ biểu cảm trong thơ lục bát.',
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
          explanation: 'Chính xác! Rùa và rắn là hai linh vật biểu trưng cho chòm sao Huyền Vũ trấn ngự phương Bắc trong vũ trụ quan cổ.',
        },
        {
          id: 'b',
          text: 'Rồng và Phượng hoàng',
          isCorrect: false,
          explanation: 'Chưa chính xác. Rùa và Rắn mới là linh thú biểu trưng của Huyền Thiên Trấn Vũ.',
        },
        {
          id: 'c',
          text: 'Hổ trắng và Ngựa ô',
          isCorrect: false,
          explanation: 'Chưa chính xác. Bạch Hổ là linh thú trấn phương Tây.',
        },
      ],
      explanation: 'Hình tượng Rùa và Rắn (Quy Xà tương hợp) dưới lưỡi gươm trừ tà là biểu tượng kinh điển của vị Bắc cực Thần Huyền Thiên Trấn Vũ.',
    },
    quiz: [
      {
        id: 'qt_q1',
        question: 'Câu thơ ca dao “Tiếng chuông Trấn Vũ, canh gà Thọ Xương” sử dụng thủ pháp nghệ thuật thi pháp kinh điển nào trong chương trình Ngữ văn?',
        sourceCitation: 'Theo Giáo trình Thi pháp Ca dao & Văn học Cổ điển',
        options: [
          {
            id: 'qt1_a',
            text: 'Nghệ thuật “Lấy động tả tĩnh” (Dĩ động tả tĩnh)',
            isCorrect: true,
            explanation: 'Chính xác! Dùng âm thanh tiếng chuông ngân xa và tiếng gà gáy cách quãng trong đêm sương mờ mịt để làm nổi bật sự tĩnh lặng, thanh bình và êm ả của kinh thành.',
          },
          {
            id: 'qt1_b',
            text: 'Phép điệp từ liên tiếp dồn dập',
            isCorrect: false,
            explanation: 'Chưa đúng. Câu thơ không dùng điệp từ dồn dập mà dùng âm thanh chọn lọc để gợi tả không gian.',
          },
          {
            id: 'qt1_c',
            text: 'Biện pháp nói giảm nói tránh trào phúng',
            isCorrect: false,
            explanation: 'Chưa đúng. Câu ca dao mang cảm xúc trang nhã, hoài niệm, không phải trào phúng.',
          },
        ],
      },
      {
        id: 'qt_q2',
        question: 'Hình ảnh “mặt gương Tây Hồ” trong bài ca dao nổi tiếng sử dụng biện pháp tu từ nào?',
        sourceCitation: 'Phân tích Tu từ học Tiếng Việt',
        options: [
          {
            id: 'qt2_a',
            text: 'Ẩn dụ (So sánh ngầm mặt nước hồ Tây phẳng lặng, trong trẻo như chiếc gương soi)',
            isCorrect: true,
            explanation: 'Chính xác! Từ "mặt gương" là hình ảnh ẩn dụ ngợi ca mặt nước hồ Tây phẳng lặng, sáng trong như tấm gương khổng lồ.',
          },
          {
            id: 'qt2_b',
            text: 'Nhân hóa gán cảm xúc cho đồ vật',
            isCorrect: false,
            explanation: 'Chưa đúng. Đây là biện pháp ẩn dụ so sánh ngầm tạo hình tượng thị giác.',
          },
          {
            id: 'qt2_c',
            text: 'Phép đảo ngữ đưa vị ngữ lên đầu câu',
            isCorrect: false,
            explanation: 'Chưa đúng. Câu thơ giữ trật tự cú pháp xuôi tự nhiên.',
          },
        ],
      },
      {
        id: 'qt_q3',
        question: 'Pho tượng đồng đen Huyền Thiên Trấn Vũ khổng lồ tại đền Quán Thánh được đúc bởi bàn tay tài hoa của nghệ nhân làng nghề nào?',
        sourceCitation: 'Lịch sử Nghề đúc đồng Thăng Long',
        options: [
          {
            id: 'qt3_a',
            text: 'Làng đúc đồng Ngũ Xã (Hà Nội)',
            isCorrect: true,
            explanation: 'Chính xác! Nghệ nhân Trùm Trọng và các thợ đúc đồng tài hoa làng Ngũ Xã bên hồ Trúc Bạch đã đúc pho tượng tuyệt tác này vào năm 1677.',
          },
          {
            id: 'qt3_b',
            text: 'Làng gốm Bát Tràng',
            isCorrect: false,
            explanation: 'Chưa đúng. Bát Tràng là làng nghề gốm sứ.',
          },
          {
            id: 'qt3_c',
            text: 'Làng đúc đồng Đại Bái',
            isCorrect: false,
            explanation: 'Chưa đúng. Tượng đền Quán Thánh là kiệt tác của nghệ nhân làng Ngũ Xã.',
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
