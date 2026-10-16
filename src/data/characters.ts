import { Character } from '../types/game';

export const CHARACTERS: Character[] = [
  {
    id: 'chep_su',
    name: 'Người chép sử',
    roleTitle: 'Cẩn bút di biên',
    avatarIcon: 'Scroll',
    quote: 'Mỗi tấc đất kinh thành là một dòng sử liệu, chữ nghĩa giữ lấy hồn thiêng muôn thuở.',
    description: 'Người có thói quen đối chiếu văn bia, thư tịch cổ và dấu vết thời gian trên từng nếp ngói rêu phong.',
    guideGreeting: 'Kính chào đồng đạo chép sử! Tấm thẻ tre và nghiên mực sẵn sàng ghi lại những trang sử vàng Thăng Long.',
    guideMotivation: 'Hãy chú tâm đối chiếu bia đá và thư tịch, chân lý ngàn năm luôn nằm trong chi tiết.',
    accentColor: '#B45309', // Antique Bronze Amber
  },
  {
    id: 'thi_si',
    name: 'Thi sĩ du hành',
    roleTitle: 'Hành trình ngâm vịnh',
    avatarIcon: 'Feather',
    quote: 'Men theo bóng râm liễu hồ, nghe tiếng chuông Trấn Vũ mà họa vần thơ thiên cổ.',
    description: 'Người lãng du tìm cảm hứng từ làn gió Tây Hồ, sắc đỏ mái ngói đền Bạch Mã và vẻ trầm mặc cổ thành.',
    guideGreeting: 'Chào bạn hữu thơ ca! Gió hồ và trăng kinh kỳ đang đợi ngòi bút tài hoa của người lữ khách.',
    guideMotivation: 'Mỗi di tích là một khúc ca bi tráng, hãy lắng nghe bằng cả tấm lòng.',
    accentColor: '#1E3A8A', // Deep Indigo Lapis
  },
  {
    id: 'su_gia',
    name: 'Sứ giả',
    roleTitle: 'Khâm sai hành trình',
    avatarIcon: 'Compass',
    quote: 'Nối kết bốn phương trấn chỉ, chuyển giao thông điệp ngàn năm của các bậc tiền hiền.',
    description: 'Người mang trọng trách định hình ranh giới văn hóa, kết nối bốn phương Đông Tây Nam Bắc bảo bọc kinh đô.',
    guideGreeting: 'Sứ mạng bốn phương đã sẵn! Tứ Trấn uy nghiêm đang rộng mở chờ bước chân sứ giả truyền tin.',
    guideMotivation: 'Bốn phương vững vàng thì kinh kỳ thái bình, hãy hoàn thành sứ mạng thiêng liêng.',
    accentColor: '#2D4A3E', // Ancient Forest Moss
  },
  {
    id: 'ke_chuyen',
    name: 'Người kể chuyện',
    roleTitle: 'Truyền ngôn cổ độ',
    avatarIcon: 'BookOpen',
    quote: 'Chuyện xưa không ngủ yên trong sách mục, chuyện sống dậy khi có người mở lòng lắng nghe.',
    description: 'Người nắm giữ những truyền tích sống động trong dân gian, từ vết chân ngựa trắng đến tiếng voi gầm trận tiền.',
    guideGreeting: 'Hoan nghênh tri kỷ của những câu chuyện xưa! Ngồi lại đây, để gió kinh thành mở ra từng trang huyền thoại.',
    guideMotivation: 'Kể lại chuyện xưa bằng sự thành kính và chân thực là cách tốt nhất để di sản sống mãi.',
    accentColor: '#991B1B', // Lacquer Cinnabar Red
  },
];

export function getCharacterById(id: string): Character {
  return CHARACTERS.find((c) => c.id === id) || CHARACTERS[0];
}
