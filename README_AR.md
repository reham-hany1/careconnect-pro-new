# CareConnect Pro — دليل التشغيل
نسخة متعددة الصفحات بالعربية والإنجليزية، بتصميم أبيض وتركواز. تتضمن Firebase Authentication وFirestore وFirebase Cloud Messaging وCloud Function للتذكير.

## الصفحات
index.html (تسجيل الدخول/إنشاء حساب)، dashboard.html، appointments.html، doctors.html، records.html، notifications.html، profile.html، help.html.

## إعداد لازم قبل الاستخدام
1. أنشئي مشروعًا في https://console.firebase.google.com/ وأضيفي Web App.
2. فعّلي Authentication > Email/Password وأنشئي Firestore.
3. ضعي إعدادات Web App في `js/firebase-config.js` وكذلك `firebase-messaging-sw.js`.
4. ضعي VAPID public key في `js/config.js`.
5. انشري قواعد `firestore.rules` من Firebase Console.
6. انشري Cloud Function داخل `functions/` باستخدام Firebase CLI (`firebase deploy --only functions`). يتطلب ذلك إعداد مشروع Firebase وقد يتطلب تفعيل Cloud Scheduler/الفوترة وفق شروط Google الحالية.
7. ارفعي ملفات الواجهة إلى GitHub Pages. Pages يستضيف الواجهة فقط؛ وظائف الخلفية تنشر بشكل منفصل.

Push Notifications تحتاج HTTPS، موافقة المستخدم، إعداد FCM وخدمة الخلفية. لا يمكن ضمان وصول الإشعار إذا كان الجهاز مطفأ أو غير متصل. اختبري بحساب وموعد تجريبيين، ولا تضعي معلومات صحية حساسة في الإشعارات. بيانات الأطباء في الدليل أمثلة وليست حقيقية. CareConnect منظم مواعيد وليس خدمة طبية.
