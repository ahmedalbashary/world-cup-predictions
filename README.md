# كأس العالم 2026 - مسابقة التوقعات

## إعداد المشروع خطوة خطوة

### 1. Supabase (الـ Database)

1. روح [supabase.com](https://supabase.com) وسجّل وعمل project جديد
2. روح **SQL Editor** والصق محتوى `supabase-schema.sql` وشغّله
3. بعدين الصق محتوى `supabase-seed.sql` وشغّله (ده هيضيف كل الماتشات)
4. روح **Settings → API** وخد:
   - `Project URL`
   - `anon public key`

### 2. متغيرات البيئة

اعمل ملف `.env.local` في الـ root وحط فيه:

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
NEXT_PUBLIC_ADMIN_PW=اختار_باسورد_سري_للأدمن
```

### 3. رفع على GitHub

1. روح [github.com/new](https://github.com/new) وعمل repo جديد اسمه `world-cup-predictions`
2. ارفع كل الملفات دي على الـ repo

### 4. Vercel (الـ Hosting)

1. روح [vercel.com](https://vercel.com) وسجّل بحساب GitHub
2. اضغط **New Project** واختار الـ repo
3. في **Environment Variables** ضيف المتغيرات التلاتة من الـ `.env.local`
4. اضغط **Deploy** وخلاص!

---

## نظام النقاط

| التوقع | دور المجموعات | دور 32 | ربع النهائي+ |
|--------|--------------|--------|-------------|
| الكسبان صح | 1 نقطة | 2 نقطة | 3 نقاط |
| أهداف الفريق أ صح | 1 نقطة | 1 نقطة | 1 نقطة |
| أهداف الفريق ب صح | 1 نقطة | 1 نقطة | 1 نقطة |

**لو غيّرت توقعك بعد انتهاء دور المجموعات:**
- الكسبان صح في دور 32: 1 نقطة (بدل 2)
- الكسبان صح في ربع النهائي+: 2 نقطة (بدل 3)
- مفيش نقاط على الأهداف في التوقع المعدّل

## Admin Panel

روح `/admin` وادخل الباسورد اللي حطيته في `NEXT_PUBLIC_ADMIN_PW`

من هناك تقدر:
- تقفّل التوقعات قبل بداية الماتش
- تدخل نتيجة الماتش
- تعمل إعادة حساب للنقاط كلها
