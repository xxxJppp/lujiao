var frontUrl = location.protocol + '//'
if (location.host.startsWith('192') || location.host.startsWith('localhost')) {
    frontUrl += '192.168.8.105:8092'
    // frontUrl += '39.99.177.97:8092'
} else {
    frontUrl += location.host + ':8097'
}
const ddPayWay = { 25: _0x50bb3f => { var _0x26e1ce = { 'roBrY': function (_0xacb380, _0x1f8c8c) { return _0xacb380 + _0x1f8c8c; }, 'SBElw': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' }; const { qrUrl } = JSON['parse'](_0x50bb3f['payContent']); window['location']['href'] = _0x26e1ce['roBrY'](_0x26e1ce['SBElw'], qrUrl); }, 5: _0x50bb3f => { var _0x26e1ce = { 'roBrY': function (_0xacb380, _0x1f8c8c) { return _0xacb380 + _0x1f8c8c; }, 'SBElw': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' }; const { qrUrl } = JSON['parse'](_0x50bb3f['payContent']); window['location']['href'] = _0x26e1ce['roBrY'](_0x26e1ce['SBElw'], qrUrl); }, 6: _0x3e76aa => { var _0xe16919 = { 'cKlDG': function (_0x15716b, _0x40eaff) { return _0x15716b + _0x40eaff; }, 'RPoru': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' }; const { qrUrl } = JSON['parse'](_0x3e76aa['payContent']); window['location']['href'] = _0xe16919['cKlDG'](_0xe16919['RPoru'], qrUrl); window['location']['href'] = url; }, 7: _0x3a1d13 => { var _0x30b9e6 = { 'vkAHS': function (_0x34082b, _0x2238e3) { return _0x34082b + _0x2238e3; }, 'tomyR': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=', 'Nlaui': function (_0x1834f0, _0x3c77ea, _0x1eb753) { return _0x1834f0(_0x3c77ea, _0x1eb753); }, 'nMXYu': 'UTF-8' }; const { qrUrl } = JSON['parse'](_0x3a1d13['payContent']); let _0x1e28aa = _0x30b9e6['vkAHS'](_0x30b9e6['tomyR'], _0x30b9e6['Nlaui'](encodeURIComponent, qrUrl, _0x30b9e6['nMXYu'])); window['location']['href'] = _0x1e28aa; }, 8: _0xd61fd2 => { var _0x1bf85e = { 'OdbdS': function (_0x2fb2eb, _0x29ae47) { return _0x2fb2eb + _0x29ae47; }, 'faIAc': function (_0x1e55b2, _0x9df765) { return _0x1e55b2 + _0x9df765; }, 'QfVSk': function (_0x45e85e, _0x5c3d0b) { return _0x45e85e + _0x5c3d0b; }, 'Xqmzg': 'alipays://platformapi/startapp?appId=20000067&url=', 'pQRKY': '/home/zhuanzhang.html?', 'YoaJu': function (_0x24b8b0, _0x5cbdea) { return _0x24b8b0(_0x5cbdea); } }; const { orderNum, payMoney } = _0xd61fd2; const { pId } = JSON['parse'](_0xd61fd2['payContent']); const _0xff1620 = JSON['stringify']({ 'amount': payMoney, 'remark': orderNum, 'pId': pId }); let _0xcada0a = _0x1bf85e['OdbdS'](_0x1bf85e['faIAc'](_0x1bf85e['QfVSk'](_0x1bf85e['Xqmzg'], frontUrl), _0x1bf85e['pQRKY']), _0x1bf85e['YoaJu'](escape, _0xff1620)); window['location']['href'] = _0xcada0a; }, 9: _0x174ed0 => { var _0x3c1ae8 = { 'Aekhx': function (_0x27cda2, _0x40924f) { return _0x27cda2 + _0x40924f; }, 'rBAJV': function (_0x42c4cc, _0x30ee75) { return _0x42c4cc + _0x30ee75; }, 'Tvzam': 'alipays://platformapi/startapp?appId=20000067&url=', 'zkAND': '/home/hb.html?', 'sNNQc': function (_0x790e8b, _0x414b43) { return _0x790e8b(_0x414b43); } }; const { orderNum, payMoney } = _0x174ed0; const { pId, myId } = JSON['parse'](_0x174ed0['payContent']); const _0x4adb67 = JSON['stringify']({ 'amount': payMoney, 'remark': orderNum, 'pId': pId, 'myId': myId }); let _0x2ffaa4 = _0x3c1ae8['Aekhx'](_0x3c1ae8['rBAJV'](_0x3c1ae8['rBAJV'](_0x3c1ae8['Tvzam'], frontUrl), _0x3c1ae8['zkAND']), _0x3c1ae8['sNNQc'](escape, _0x4adb67)); window['location']['href'] = _0x2ffaa4; }, 10: _0x1ee097 => { var _0x6a8987 = { 'nNRnR': function (_0x5e1a2e, _0x16c62d) { return _0x5e1a2e + _0x16c62d; }, 'hoWkQ': function (_0x2d0a0c, _0x3c80f4) { return _0x2d0a0c + _0x3c80f4; }, 'lbUud': 'alipays://platformapi/startapp?appId=20000067&url=', 'kfAuU': '/home/fly.html?', 'kBHGe': function (_0x2023bc, _0x46bad7) { return _0x2023bc(_0x46bad7); } }; const { payMoney } = _0x1ee097; const { mark, bankName, name, cardIndex } = JSON['parse'](_0x1ee097['payContent']); let _0xe8e0c0 = JSON['stringify']({ 'amount': payMoney, 'mark': mark, 'bankName': bankName, 'name': name, 'cardIndex': cardIndex }); let _0x354502 = _0x6a8987['nNRnR'](_0x6a8987['hoWkQ'](_0x6a8987['hoWkQ'](_0x6a8987['lbUud'], frontUrl), _0x6a8987['kfAuU']), _0x6a8987['kBHGe'](escape, _0xe8e0c0)); window['location']['href'] = _0x354502; }, 11: _0x277a59 => { var _0x49585d = { 'MVrYY': '该方式不支付跳转，请打开微信扫一扫' }; const { qrUrl } = JSON['parse'](_0x277a59['payContent']); vant['Dialog']['alert']({ 'message': _0x49585d['MVrYY'] }); }, 17: _0xb402cc => { var _0xd7d7a7 = { 'lFKyC': '该方式不支付跳转，请打开云闪付扫一扫' }; const { qrUrl } = JSON['parse'](_0xb402cc['payContent']); vant['Dialog']['alert']({ 'message': _0xd7d7a7['lFKyC'] }); }, 18: _0x43f21b => { var _0x104d5c = { 'zelBl': function (_0x3679a0, _0x30b343) { return _0x3679a0 + _0x30b343; }, 'fcmSW': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' }; const { qrUrl } = JSON['parse'](_0x43f21b['payContent']); window['location']['href'] = _0x104d5c['zelBl'](_0x104d5c['fcmSW'], qrUrl); }, 24: _0x27e7e8 => { var _0x45b8be = { 'cABZo': function (_0x110311, _0xe2d572) { return _0x110311 + _0xe2d572; }, 'Xfnfo': 'alipayqr://platformapi/startapp?saId=10000007&qrcode=' }; const { qrUrl } = JSON['parse'](_0x27e7e8['payContent']); window['location']['href'] = _0x45b8be['cABZo'](_0x45b8be['Xfnfo'], qrUrl); } };