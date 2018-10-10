        //轮播
        var id = setInterval( function () {
            $('#arrRight').click();
        }, 2000 );
        // 1 鼠标放到wrap上，箭头 透明度 1
        $('.wrap').mouseover(function () {
            $('.arrow').css('opacity', 1);
            clearInterval( id );
        });
        // 2 鼠标离开wrap，箭头 透明度 0
        $('.wrap').mouseout(function () {
            $('.arrow').css('opacity', 0);
            id = setInterval( function () {
                $('#arrRight').click();
            }, 2000 );
        });

        var arr = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
        // 3 点击 下一张  把最后一个li的类样式，设置为第一个li的类样式，其它li的类样式依次类推
        $('#arrRight').click(function () {
            // 把数组中的最后一项，放到第一项
            var last = arr.pop();
            arr.unshift(last);
            console.log(arr);
            // 所有的li
            var $list = $('#slide li');
            // 遍历数组把数组中的每一项，设置为li的类样式
            for (var i = 0; i < arr.length; i++) {
                // $list[i]  DOM对象
                $($list[i]).removeClass().addClass(arr[i]);
            }
        });

        // 上一张
        // 把数组中的第一项，放到最后一项
        $('#arrLeft').click(function () {
            // 把数组中的第一项，放到最后一项
            var first = arr.shift();
            arr.push(first);
            console.log(arr);
            // 所有li
            var $list = $('#slide li');
            // 遍历数组，设置li的样式
            for (var i = 0; i < arr.length; i++) {
                // $list[i] DOM对象
                $list[i].className = arr[i];
            }
        });

        


/* 文字轮动 */

// 定义一个函数
function gundong() {
    // 第一遍
    setTimeout(" $('.liunk_top').text('Wishing you many years of joy and happiness.')", 1000);
    setTimeout(" $('.liunk_buttom').text('祝你永远欢乐和幸福')", 1000);
    // 第二遍
    setTimeout(" $('.liunk_top').text('May you have a long and loving life together.')", 2000);
    setTimeout(" $('.liunk_buttom').text('愿你们长久、热爱生活在一起。')", 2000);
    // 第三遍
    setTimeout(" $('.liunk_top').text('May the coming years, fill your lives with love and happiness.')", 3000);
    setTimeout(" $('.liunk_buttom').text('在未来的数年，将你的生命装满爱和快乐。')", 3000);
};

// 使用动画函数调用定义好的函数体
window.setInterval(gundong, 3000);

$('.lf li').mouseenter (function () {
    $(this).find('img').css('opacity', '1').parent().siblings().find('img').css('opacity', '0.5');
});

$('.lf li').mouseleave (function () {
     $('.lf li img').css('opacity', '1');
});

