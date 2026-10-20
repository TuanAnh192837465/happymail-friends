# Happy Mail — Bạn bè

React + TypeScript + Vite. Chạy hoàn toàn phía trình duyệt, không cần tài khoản hay backend.

Có ô nhập tên tối đa 32 ký tự; hỗ trợ `?to=Mai` để điền sẵn. Bỏ trống dùng “bạn”. Tên được giữ khi chơi lại trong cùng lần mở trang.

Ba món quà: một chút may mắn, một chút niềm vui và một chút năng lượng. Popup ở giữa màn hình, đóng bằng nút, Escape hoặc chạm nền. Mobile đọc thư theo trang; desktop xem toàn bộ thư.

## Chạy local

Yêu cầu Node.js 22 và npm. Mở terminal ngay trong repo này:

```sh
npm ci
npm run dev -- --port 4181
```

Mở đường dẫn Vite hiển thị, có hậu tố `/happymail-friends/`.

## Build và xem bản production

```sh
npm run build
npm run preview -- --port 4181
```

Mở `http://localhost:4181/happymail-friends/`.

## Đưa lên GitHub Pages

1. Tạo một repo GitHub rỗng tên `happymail-friends`.
2. Trong repo local này, review các file rồi tạo commit đầu, thêm remote tương ứng và push nhánh `main`.
3. Trên GitHub mở **Settings → Pages → Source → GitHub Actions**.
4. Nếu đã push trước khi bật Pages, vào **Actions → Deploy to GitHub Pages → Run workflow**.
5. Sau khi workflow thành công, mở `https://<username>.github.io/happymail-friends/`.

Workflow chạy `npm ci`, kiểm tra TypeScript, build và deploy thư mục `dist`. Nếu đổi tên repo, cập nhật `base` trong `vite.config.ts`; nếu dùng tên `<username>.github.io` hoặc domain riêng, dùng `base: '/'`.

Repo này độc lập: chỉ cần các file ở đây. Không đưa `node_modules`, `dist` hay ảnh kiểm tra trong `output/playwright` lên Git.

## Sửa nội dung

Lời nhắn, chữ ký, quà và bonus ở `src/data/giftConfig.ts`. Chia thư thành các đoạn ngắn để giữ bố cục một màn hình trên điện thoại. Lời chào ở `src/scenes/WelcomeScene.tsx`.

GitHub Pages thông thường là công khai. Điền tên chỉ cá nhân hóa nội dung, không giới hạn người có thể mở link.

Tài liệu: [Vite 6 / GitHub Pages](https://v6.vite.dev/guide/static-deploy#github-pages).
