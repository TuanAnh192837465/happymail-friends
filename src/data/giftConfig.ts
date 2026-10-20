/** Content for this version only. */
export const giftConfig = {
  "recipient": "bạn",
  "sender": "Khôi Nguyên",
  "deliveryCode": "HAPPY-2010",
  "headline": "Một kiện hàng nhỏ nhân ngày 20/10.",
  "letterTitle": "Happy 20/10,",
  "letter": [
    "Chúc bạn 20/10 vui vẻ! Kiện hàng online này gồm vài lời chúc và một nhiệm vụ nhỏ. Cảm ơn vì đã chịu khó nhặt đủ quà để đọc tới đây.",
    "Chúc bạn nhiều sức khỏe, học hành và công việc thuận lợi, gặp được những người hợp cạ và có thêm thời gian cho những gì mình thích.",
    "Mong hôm nay có đồ ăn ngon, vài chuyện vui và ít deadline hơn bình thường. Những hôm mệt thì cứ nghỉ một chút, không cần lúc nào cũng chạy hết công suất.",
    "Quà online giao xong rồi. Chúc bạn có một ngày thoải mái và một buổi tối đúng ý. Có dịp thì cùng đi ăn một bữa nhé! 🎉"
  ],
  "collectibles": [
    {
      "id": "luck",
      "emoji": "⭐",
      "name": "Một chút may mắn",
      "note": "Chúc mọi kế hoạch hôm nay chạy trơn tru hơn dự kiến."
    },
    {
      "id": "flower",
      "emoji": "🌷",
      "name": "Một chút niềm vui",
      "note": "Thêm một chuyện vui, bớt một chuyện phải nghĩ. Vậy là ổn!"
    },
    {
      "id": "energy",
      "emoji": "⚡",
      "name": "Một chút năng lượng",
      "note": "Nạp thêm năng lượng để xử lý nốt việc, rồi còn đi chơi. ⚡"
    }
  ],
  "bonusNotes": [
    "Hôm nay vất vả rồi, nhớ ăn gì ngon nha",
    "Lịch trình đề xuất: Ăn ngon, nghỉ đủ, dành chút thời gian đi chơi. 🎉",
    "Nhắc nhẹ: Deadline vẫn còn đó, nhưng uống nước trước đã. 🥤",
    "Đơn hàng đã hoàn tất. Chúc phần còn lại của ngày thật suôn sẻ! 📦"
  ]
} as const;

export function getRecipientName(fallback: string = giftConfig.recipient): string {
  if (typeof window === 'undefined') return fallback;
  const fromUrl = new URLSearchParams(window.location.search).get('to')?.trim();
  return fromUrl ? fromUrl.slice(0, 32) : fallback;
}
