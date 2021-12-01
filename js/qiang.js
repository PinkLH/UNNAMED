$(document).ready(function () {
    var oDate = new Date();
    var nowTime = oDate.getTime(); //���ڵĺ�����
    oDate.setDate(oDate.getDate() + 1); // �趨��ֹʱ��Ϊ�ڶ���
    var targetDate = new Date(oDate.toLocaleDateString());
    run(targetDate);
});

function run(enddate) {
    getDate(enddate);
    setInterval("getDate('" + enddate + "')", 500);
}

function getDate(enddate) {
    var oDate = new Date(); //��ȡ���ڶ���

    var nowTime = oDate.getTime(); //���ڵĺ�����
    var enddate = new Date(enddate);
    var targetTime = enddate.getTime(); // ��ֹʱ��ĺ�����
    var second = Math.floor((targetTime - nowTime) / 1000); //��ֹʱ��������ڵ�����

    var day = Math.floor(second / 24 * 60 * 60); //�������ִ�������죻һ����24*60*60=86400�� ��
    second = second % 86400; //��������ʣ�µ�������
    var hour = Math.floor(second / 3600); //�������ִ���Сʱ��
    second %= 3600; //�������� ʣ�µ�������
    var minute = Math.floor(second / 60);
    second %= 60;
    var spanH = $('.se-txt')[0];
    var spanM = $('.se-txt')[1];
    var spanS = $('.se-txt')[2];

    spanH.innerHTML = tow(hour);
    spanM.innerHTML = tow(minute);
    spanS.innerHTML = tow(second);
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}