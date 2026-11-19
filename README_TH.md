# CS240 Week 12 Assignment — Product Cart: React Router + Zustand

ผู้จัดทำ: ปณต ชินวิวัฒน์กุล / รหัสนักศึกษา 1680705991 / Section 227E

ต่อยอดจาก Week 11 โดยแบ่งเว็บเป็นหลายหน้าด้วย React Router และเปลี่ยนการเก็บตะกร้าเป็น Zustand + persist (localStorage)

## วิธีรัน
npm install
npm run dev

## Build / Deploy
npm run build จะได้โฟลเดอร์ dist
- Vercel: ใช้ vercel.json (root)
- Netlify: ใช้ public/_redirects

## Route
- / HomePage
- /cart CartPage
- /about AboutPage
- /product/:id ProductDetailPage
- * NotFoundPage
