// script.js

‎// عناصر HTML
const sleepBtn = document.getElementById('sleep-btn');
const wakeBtn = document.getElementById('wake-btn');
const statusDiv = document.getElementById('status');

‎// متغير لحفظ الحالة الحالية
let currentState = 'غير معروفة';

‎// تحديث الحالة وعرضها في الصفحة
function updateStatus(state) {
  currentState = state;
  const time = new Date().toLocaleTimeString('ar-SA');
  statusDiv.textContent = الحالة: ${state} (آخر تحديث: ${time});

‎  // تنبيه عند تغيير الحالة
  alert(`تم تحديث الحالة إلى: ${state}`);
}

‎// إضافة الأحداث للأزرار
sleepBtn.addEventListener('click', () => updateStatus('نايم'));
wakeBtn.addEventListener('click', () => updateStatus('صاحي'));