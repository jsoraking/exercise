$(document).ready(function () {
  $('.fullpage-wrap').fullpage({
    //풀페이지
    navigation: true,
    afterLoad: function (origin) {
      console.log(origin);
    },
    //사용자가 구역을 떠나고 새로운 구역으로 이동하는 와중에 콜백
    onLeave: function (origin, destination, direction) {

    }

  });
});

