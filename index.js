const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('مرحبا بك في khand bot - سيرفر تجريبي');
});

app.post('/chat', (req, res) => {
  const message = req.body.message || '';
  let reply = 'آسف، لم أفهم سؤالك.';

  if (message.includes('بشرة دهنية')) {
    reply = 'أنصحك باستخدام المنتجات الخفيفة ذات التهوية العالية للبشرة الدهنية.';
  } else if (message.includes('قميص')) {
    reply = 'أفضل القمصان هي القطنية ذات الألوان الفاتحة للجو الصيفي.';
  } else if (message.includes('مرحباً')) {
    reply = 'مرحباً! كيف يمكنني مساعدتك اليوم؟';
  }

  res.json({ reply });
});

app.listen(port, () => {
  console.log(`khand bot server listening on port ${port}`);
});