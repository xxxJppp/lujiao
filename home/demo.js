const baseUrl = 'http://192.168.8.105:8092/backend'
Date.prototype.Format = function (fmt) { //author: meizz   
  var o = {
    "M+": this.getMonth() + 1,                 //月份   
    "d+": this.getDate(),                    //日   
    "h+": this.getHours(),                   //小时   
    "m+": this.getMinutes(),                 //分   
    "s+": this.getSeconds(),                 //秒   
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
    "S": this.getMilliseconds()             //毫秒   
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt))
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

function chooseAmount(num) {
  $('#amount_val').val(num)
}
function getUserID(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] == variable) { return pair[1]; }
  }
  return (false);
}
function validateAmount() {
  if ($('#amount_val').val() === "") {
    $.alert('请先输入或选择充值金额')
    return false
  } else {
    return true
  }
}
function createOrder(payWay, callback) {
  $.ajax({
    type: "POST",
    url: `${baseUrl}/order/create`,
    data:
      JSON.stringify(
        {
          money: $('#amount_val').val(),
          payWay
        }),
    error: function (XHR, textStatus, errorThrown) {

    },
    success: function (data, textStatus) {
      callback(data.orderNum)
    },
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "token": decodeURI(getUserID('url')),
    }
  })
}
function countdown() {
  $('#status').removeClass('none')
  let time = new Date().getTime()
  let fiveMinsTime = 60 * 5
  setInterval(function () {
    fiveMinsTime = fiveMinsTime - 1
    $('#countdown').text(fiveMinsTime + '秒')
  }, 1000)
}
// https://qr.alipay.com/fkx03562pfglokkqkpg3afa?t=1574131936724
$('.ali-methods').on('click', function () {
  var buttons1 = [
    {
      text: '请选择支付通道',
      label: true
    },
    {
      text: '当面付',
      onClick: function () {
        // let app_id = '2019112069268641'
        // let param = {
        //   app_id: '2019112069268641',
        //   method: 'alipay.trade.precreate',
        //   charset: 'utf-8',
        //   sign_type: 'RSA2',
        //   sign: '',
        //   timestamp: new Date().format('yyyy-MM-dd HH:mm:ss'),
        //   version: '1.0',
        //   notify_url: '',
        //   biz_content: {

        //   }
        // }
        // $.ajax({
        //   url: "https://openapi.alipay.com/gateway.do",    //请求的url地址   
        //   dataType: "json",   //返回格式为json    
        //   async: true, //请求是否异步，默认为异步，这也是ajax重要特性    
        //   data: { "id": "value" },    //参数值    
        //   type: "GET",   //请求方式 
        // })
      }
    },
    {
      text: '(跳转)个人付款-用户手输金额',
      onClick: function () {
        createOrder('支付宝', function () {
          $.showPreloader('订单创建中...请稍后')
          let orderNo = ''
          setTimeout(() => {
            $.hidePreloader();
            $('#orderNo').val('ES2342')
            document.getElementById('orderNo').select()
            let result = document.execCommand('copy');
            orderNo = 'ES2342'
            countdown()
          }, 700)
          $.modal({
            title: '注意！',
            text: `
              <span>1. 请输入<b>准确金额</b></span><br/>
              <span>2. 请在备注中输入订单号:<b>${orderNo}</b><br/>
              (已复制订单号，直接在支付宝中粘贴即可)</span><br/>
              <span style="color:red">否则无法到账！!!</span>
            `,
            buttons: [
              {
                text: '支付',
                onClick: function () {
                  // 辉：无
                  let url = 'alipayqr://platformapi/startapp?saId=10000007&qrcode=https://qr.alipay.com/fkx03502qacq8cbmglhjdea?t=1574131918077'
                  // 鹏：0.01
                  // let url = 'alipayqr://platformapi/startapp?saId=10000007&qrcode=https://qr.alipay.com/fkx089790ri7t8y4qu8tde4'
                  window.location.href = url
                }
              }
            ]
          })
        })
      }
    },
    {
      text: '(跳转)个人付款-自动生成金额',
      onClick: function () {
        // let qrurl = 'https://qr.alipay.com/fkx089790ri7t8y4qu8tde4'
        // let qrurl = 'https://qr.alipay.com/fkx03936zlrnefzbooeiwe8'
        let qrurl = 'https://qr.alipay.com/bax02107ixjtebepd3j740d1'
        $.modal({
          title: '注意！(demo金额都为0.01)',
          text: `
            <span>此方法在某些机型、支付版版本上会出现“<b>暂不支持此种方式，请在支付宝内打开操作</b>”</span><br/>
            <span>如果无法支付:<br/>
            1.请截图保存该页面<br/>
            2.打开支付宝扫一扫<br/>
            3.点击右上角相册选择保存的二维码支付</span><br/>
            <img id="qrcode" src='https://tool.oschina.net/action/qrcode/generate?data=${encodeURIComponent(qrurl)}&output=image%2Fgif&error=L&type=0&margin=0&size=4&1574136205967'/>
          `,
          buttons: [
            {
              text: '跳转支付',
              onClick: function () {
                // 辉：无
                // let url = 'alipayqr://platformapi/startapp?saId=10000007&qrcode=HTTPS://QR.ALIPAY.COM/FKX03295LG3MONLF40T42A?t=1574131918077'
                // 鹏：0.01
                let url = 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' + qrurl
                window.location.href = url
              }
            },
            {
              text: '取消',
              onClick: function () {
              }
            }
          ]
        })
      }
    },
    {
      text: '(跳转)个人转账-自动生成金额备注',
      onClick: function () {
        if (!validateAmount()) {
          return false
        }
        $.showPreloader('订单创建中...请稍后')
        setTimeout(function () {
          $.hidePreloader();
          let uid = '2088502115132635'
          let amount = $('#amount_val').val()
          let remark = 'EU39135'
          // 坑：支付宝中只能拿到url中第一个参数
          // todo：需要在此处创建订单，在支付宝url中获取订单信息
          // let url = 'alipays://platformapi/startapp?appId=20000067&url=http://192.168.0.103:5500/zhuanzhang.html?uid=' + uid + '&amount=' + amount + '&remark=' + remark
          let url = 'alipays://platformapi/startapp?appId=20000067&url=http://192.168.8.104:5500/zhuanzhang.html?amount=' + amount
          window.location.href = url
        }, 1000);
      }
    },
    {
      text: '(跳转)个人红包-自动生成金额备注',
      onClick: function () {
        if (!validateAmount()) {
          return false
        }
        // alipays://platformapi/startapp?appId=20000067&url=http://192.168.8.104:5500/hb.html
        $.showPreloader('订单创建中...请稍后')
        setTimeout(function () {
          $.hidePreloader();
          let amount = $('#amount_val').val()
          // 坑：支付宝中只能拿到url中第一个参数
          // todo：需要在此处创建订单，在支付宝url中获取订单信息
          // let url = 'alipays://platformapi/startapp?appId=20000067&url=http://192.168.0.103:5500/zhuanzhang.html?uid=' + uid + '&amount=' + amount + '&remark=' + remark
          let url = 'alipays://platformapi/startapp?appId=20000067&url=http://192.168.8.104:5500/hb.html?amount=' + amount
          window.location.href = url
        }, 1000);
      }
    },
    {
      text: '(跳转)银行卡-隐藏卡号',
      onClick: function () {
        if (!validateAmount()) {
          return false
        }
        $.showPreloader('订单创建中...请稍后')
        setTimeout(function () {
          $.hidePreloader();
          let amount = $('#amount_val').val()
          let url = 'alipays://platformapi/startapp?appId=20000067&url=http://192.168.8.104:5500/fly.html?amount=' + amount
          window.location.href = url
        }, 1000);
      }
    }
  ];
  var buttons2 = [
    {
      text: '取消',
    }
  ];
  var groups = [buttons1, buttons2];
  $.actions(groups);
})

$('.wx-methods').on('click', function () {
  $.toast("暂无可用通道");
})

$('.b-methods').on('click', function () {
  $.toast("通道开发中...敬请期待");
})

