# [เว็บนี้สร้างเพื่อเรียน Svetekit](https://jksandbox.vercel.app/)

เพื่อทำ Progressive Web Application สำหรับจัดการระบบต่างๆ ในร้านอาหาร ตั้งแต่ Menu, รับ Order, คิดราคา ฯลฯ โดยตั้งใจให้เป็น Open Source ให้ร้านอาหารนำไปใช้ได้ฟรี โดยร้านค้าสามารถแก้ไขส่วนต่างๆ ของแอป รวมถึง ราคา Menu โดยการแก้ไขค่าต่างๆใน Google Sheet ซึ่งใช้ง่าย และฟรี 

หากโปรแกรมนี้ทำได้ดี คงมีผู้ใช้งานเยอะ เพราะเสียแต่ค่า Hosting และ Domain name ซึ่งไม่แพง 

ผู้ร่วมพัฒนาจะมีชื่อร่วมเป็นผู้พัฒนา และ มีรายได้จากการติดตั้ง อบรม และดัดแปลงโปรแกรม หรือเขียน Extention ตามความต้องการของลูกค้า 
และจะเปิดให้นักพัฒนาทั่วไปเขียน Add-on นำมาขายในโครงการนี้ด้วย 

แต่ตอนนี้ผมยังไม่เก่งพอ ค่อยๆ เรียนรู้ทีละ Function ไปเรื่อยๆ ยินดีน้อมรับคำแนะนำและติชม
หรือจะร่วมพัฒนาด้วยกันก็ยินดียิ่งครับ

# สำหรับผู้สนใจ
โครงการนี้ใหม่มากๆ คิดจะทำมานาน และเริ่มเรียนและเริ่มโครงการเมื่อ 2024-09-20 19:13 อยากได้คนที่มีความสนใจทำใช้ความคิดเห็นของท่านให้เป็นประโยชน์กับผู้อื่น โดยการให้คำแนะนำ แสดงความคิดเห็น และช่วยคิด ผู้ที่มีความสนไม่ต้องเขียนโปรแกรมเป็น หรือทำเว็บเป็น แค่สนใจก็พอ เพราะก็เหมือนกับ โครงการ Open Source อื่นๆ ซึ่งสมาชิกเริ่มจากไม่เป็นอะไรเลย แต่ช่วยแนะนำกัน และสมาชิกทุกท่านจะเก่งในที่สุด ซึ่งมีหลายอย่างที่ช่วยได้ในตอนนี้คือพูดคุยกันใน Line Open Chat ซึ่งท่านไม่ต้องเปิดเผยตัวตนและตั้งชื่อได้ตามต้องการ [Line Open Chat Link ](https://line.me/ti/g2/vnilwl42_Bxrl7h3iks7WrXLBioli8kXfXXOAg?utm_source=invitation&utm_medium=link_copy&utm_campaign=default)
![jksandbox line open chat QR](https://github.com/user-attachments/assets/03f3e9be-f44c-4b2a-b427-d53b53f06df0)

- สนใจออกแบบโปรแกรมว่าโปรแกรมจะมีหน้าต่อย่างไร
- สนใจ Svelte และ Sveltekit ยังไม่ต้องเก่งก็ได้เราเรียนไปด้วยกัน
- สนใจทำเว็บ
- สนใจ Progressive Web App
- สนใจการจัดการโครงการพัฒนาโปรแกรม
- ฯลฯ

## ข้อคิดและการตัดสินใจ
- การเก็บข้อมูลใน Svelte จะใช้ Database และการเก็บ Setting ต่างๆ มักจะใช้ Json แต่เพื่อให้ลดการเขียนในส่วนของการติดต่อกับฐานขัอมูลและการกำหนดค่าของโปรแกรม และเป็นความสะดวกของร้านค้า เราจะใช้ Google Sheet ซึ่งร้านค้าสามารถนำข้อมูลมาทำรายงาน และ Mass update ต่างๆ ได้ง่าย แต่การเขียน Svelte ติดต่อกับ Google Sheet ยาก 
