// script.js

// 监听通知发布表单提交事件
const noticeForm = document.getElementById("noticeForm");
noticeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const noticeTitle = document.getElementById("noticeTitle").value;
    const noticeContent = document.getElementById("noticeContent").value;
    // 这里可以将标题和内容发送到后端进行处理
    console.log("发布通知：", noticeTitle, noticeContent);
    // 清空表单
    this.reset();
});

// 监听日程发布表单提交事件
const scheduleForm = document.getElementById("scheduleForm");
scheduleForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const scheduleDate = document.getElementById("scheduleDate").value;
    const scheduleActivity = document.getElementById("scheduleActivity").value;
    // 这里可以将日期和活动发送到后端进行处理
    console.log("发布日程：", scheduleDate, scheduleActivity);
    // 清空表单
    this.reset();
});