jQuery(document).ready(function( $ ) {


    //选择文件显示上传成功
    $("#file").change(function(e){
     /* $('.show-file').val("文件上传成功");*/
      var name = e.currentTarget.files[0].name;
      $('.show-file').val(name + ' 文件上传成功');
    });
    var isEmpty = 5;
    //点击提交按钮
  $('.submit-btn').click(function () {
      //判断，如果input没有输入值的时候就不能提交
      $('#input-des input').each(function () {
        if($(this).val() != ''){
          --isEmpty;
        }
      })
      console.log(isEmpty);
      if(isEmpty==0){
        $("#submit-BP").css("display","none");
        $("#submit-success").css("display","block");
      }else{
        alert('信息请填写完整！')
      }
      isEmpty = 5;
    })


   /* //了解更多
    $('.read-more').click(function () {
        $(".no1").css("display","none");
        $(".no2").css("display","block");
    });

    //新闻中心tab栏
    $('#myTab a:first').tab('show');
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    })

    //合作伙伴--执行轮播
    $(document).ready(function(){
        $('#myCarousel').carousel({interval:3000});//每隔5秒自动轮播

        //切换产品类别
      /!*  $('#oCarousel').carousel({interval:false});*!/

        $(".left").click(function(){
            $("#oCarousel").carousel('prev');
        });

        $(".right").click(function(){
            $("#oCarousel").carousel('next');
        });

    });

    //导航滚动添加active类
    $(window).scroll(function(){
        // console.log(2);
        // console.log($('#recruit').offset().top - document.documentElement.scrollTop);  // dom顶部距离
        // console.log($('#recruit').offset().top - document.documentElement.scrollTop + $('#rearuit').height());
        red('about');
        red('products');
        red('news');
        red('partners');
        red('recruit');
    })

    function red(dom){
        var top = $('#'+dom).offset().top - document.documentElement.scrollTop - 72;
        var bottom = $('#'+dom).offset().top - document.documentElement.scrollTop + $('#'+dom).height() + 72;
        // console.log(top);
        // console.log(bottom);
        if(top <= 0 && bottom >= 0){
            $('.'+dom).addClass('menu-active');
        }else{
            $('.'+dom).removeClass('menu-active')
        }
    }*/
    // Hero rotating texts
    $("#hero .rotating").Morphext({
    animation: "flipInX",
    separator: ",",
    speed: 3000
    });

    // Initiate the wowjs
    new WOW().init();

    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
        animation: {opacity:'show'},
        speed: 400
    });

    // Mobile Navigation
    if( $('#nav-menu-container').length ) {
      var $mobile_nav = $('#nav-menu-container').clone().prop({ id: 'mobile-nav'});
      $mobile_nav.find('> ul').attr({ 'class' : '', 'id' : '' });
      $('body').append( $mobile_nav );
      $('body').prepend( '<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>' );
      $('body').append( '<div id="mobile-body-overly"></div>' );
      $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

      $(document).on('click', '.menu-has-children i', function(e){
          $(this).next().toggleClass('menu-item-active');
          $(this).nextAll('ul').eq(0).slideToggle();
          $(this).toggleClass("fa-chevron-up fa-chevron-down");
      });

      $(document).on('click', '#mobile-nav-toggle', function(e){
          $('body').toggleClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').toggle();
      });

      $(document).click(function (e) {
          var container = $("#mobile-nav, #mobile-nav-toggle");
          if (!container.is(e.target) && container.has(e.target).length === 0) {
             if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }
          }
      });
    } else if ( $("#mobile-nav, #mobile-nav-toggle").length ) {
      $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    // Stick the header at top on scroll
    $("#header").sticky({topSpacing:0, zIndex: '50'});

    // Smoth scroll on page hash links
    $('a[href*="#"]:not([href="#"])').on('click', function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length) {

              var top_space = 0;

              if( $('#header').length ) {
                top_space = $('#header').outerHeight();
              }

              $('html, body').animate({
                  scrollTop: target.offset().top - top_space
              }, 1500, 'easeInOutExpo');

              if ( $(this).parents('.nav-menu').length ) {
                $('.nav-menu .menu-active').removeClass('menu-active');
                $(this).closest('li').addClass('menu-active');
              }

              if ( $('body').hasClass('mobile-nav-active') ) {
                  $('body').removeClass('mobile-nav-active');
                  $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                  $('#mobile-body-overly').fadeOut();
              }

              return false;
          }
      }
    });

    // Back to top button
    $(window).scroll(function() {

      if ($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }

    });

    $('.back-to-top').click(function(){
      $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
      return false;
    });

});