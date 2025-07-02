# khand-bot

مشروع بوت دردشة بسيط مع Express.js لمحاكاة بوت دردشة عربي بسيط.

## تشغيل المشروع

```bash
npm install
npm run dev
```

## API

- GET `/` : رسالة ترحيبية.
- POST `/chat` : إرسال رسالة JSON بصيغة `{ "message": "نص الرسالة" }` ويرد عليها البوت.