function generateRandomString(length) {
    var randomBytes = new Uint8Array(length);

    for (var i = 0; i < length; i++) {
        // 生成一个在 [0, 255] 范围内的随机整数
        var randomByte = Math.floor(Math.random() * 256);

        // 将随机整数存储到 Uint8Array 中
        randomBytes[i] = randomByte;
    }
    var f = [];
    for (w = 0; w < randomBytes.length; w++) {
        var W = Math.abs(randomBytes[w] % 32);
        f.push(String.fromCharCode(W + (9 >= W ? 48 : 55)))
    }

    return f.join("").replace(/[0-9]/g, function(r) {
        return String.fromCharCode(Math.floor(2.5 * parseInt(r) + 65))
    }) +  "-0";
}

function vd(f, r, dtck) {
    var W = 20;
    W = f.length - W;
    0 < W && f.splice(0, W);
    W = n(dtck);
    for (var H = [], wa = W ? "".concat(W, "$") : "", Cb = 0; Cb < f.length; Cb++) {
        var Pb = f[Cb];
        "-" !== Pb.D && H.push("".concat(wa).concat(Pb.frameId, "h").concat(Pb.D))
    }
    f = H.join("p");
    // f || (pg && (Pc(!0, "a", w),
    f += "".concat(W, "$").concat(eLeZf(), "h-");
    f += "v".concat(r);
    r = f + "e0";
    return r;
}

function Zc(f, r) {
    return isNaN(f) || isNaN(r) ? Math.floor(33 * Math.random()) : Math.floor(Math.random() * (r - f + 1)) + f
}

function eLeZf(v) {
    var Zf = 6E8;
    var Le = Math.round((new Date).getTime());
    return Le % Zf + "_" + parseInt(Zc(0, 1E3) + "");
}

function ea(f) {
    return (fa(f) || "") + ""
}

function fa(f) {
    var r;
    return null !== (r = ec[f]) && void 0 !== r ? r : Dd[f]
}

function n(f) {
    return nc(f).serverId
}

function nc(f) {
    var r, w = {}, W = {
        sessionId: "",
        serverId: "",
        overloadState: 0,
        appState: w
    }, H = f.split("_");
    if (2 < H.length && 0 === H.length % 2) {
        f = +H[1];
        if (isNaN(f) || 3 > f)
            return W;
        f = {};
        for (var wa = 2; wa < H.length; wa++) {
            var Cb = H[wa];
            0 === Cb.indexOf("app-3A") ? w[Cb.substring(6).toLowerCase()] = +H[wa + 1] : f[Cb] = H[wa + 1];
            wa++
        }
        f.sn ? (H = f.sn,
            H = H.length === 32 || 12 >= H.length ? H : "") : H = "hybrid";
        W.sessionId = H;
        if (f.srv) {
            a: {
                H = f.srv.replace("-2D", "-");
                if (!isNaN(+H) && (wa = parseInt(H),
                -99 <= wa && 99 >= wa))
                    break a;
                H = ""
            }
            W.serverId = H
        }
        H = +f.ol;
        1 === H && undefined;
        0 <= H && 2 >= H && (W.overloadState = H);
        f = +f.prv;
        isNaN(f) || (W.privacyState = 1 > f || 4 < f ? 1 : f);
        f = null === (r = ea("app")) || void 0 === r ? void 0 : r.toLowerCase();
        r = w[f];
        isNaN(r) || 0 !== r || undefined
    }
    return W
}

function genDtpc(dtck) {
    var r = generateRandomString(32);
    return vd([], r, dtck);
}

/**
 * 这里的配置是从网站爬去重来
 * 配置可能是通过解密后的结果
 * 或者是直接网站返回
 * 主要用到app字段
 */
var ec = {
    "reportUrl": "/rb_bf45148ltg",
    "initializedModules": "7NVVfgqrux",
    "csu": "ruxitagentjs",
    "dataDtConfig": "#CONFIGSTRING#|auto=#AUTO#|domain=#DOMAIN#|rid=RID_#REQUEST_ID#|rpid=#RESPONSE_ID#|app=#APP#",
    "legacy": "1",
    "featureHash": "ICA7NVfgqrux",
    "agentLocation": "https://www.freecharge.in",
    "buildNumber": "10287240325103108",
    "rid": "RID_-1267691233",
    "rpid": "1120914298",
    "domain": "freecharge.in",
    "app": "ea7c4b59f27d43eb",
    "cuc": "5mn2r1ab",
    "mel": "100000",
    "dpvc": "1",
    "ssv": "4",
    "lastModification": "1712646803822",
    "tp": "500,50,0",
    "rdnt": "1",
    "uxrgce": "1",
    "bp": "3",
    "agentUri": "/ruxitagentjs_ICA7NVfgqrux_10287240325103108.js",
    "cooO": "true",
    "pVO": "false"
};