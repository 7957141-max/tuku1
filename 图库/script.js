document.addEventListener('DOMContentLoaded', function() {
    // 初始化网站数据
    const siteData = {
        emoji: [
            {
                name: "📓 Emoji大全",
                url: "www.emojiall.com/zh-hans",
                description: "Emoji表情符号词典"
            },
            {
                name: "🤖 AIEmoji",
                url: "ai-emoji.bettergogo.com",
                description: "自然语言搜索Emoji"
            },
            {
                name: "🎨 Emojis",
                url: "github.com/Pondorasti/emojis",
                description: "AI生成Slack表情符号"
            },
            {
                name: "📙 表情图标百科",
                url: "emojipedia.org/zh",
                description: "表情符号含义查询"
            },
            {
                name: "🎯 tryEmoji",
                url: "www.tryemoji.com",
                description: "AI表情符号生成"
            },
            {
                name: "📱 TikTok Emojis",
                url: "tiktok-emojis.com",
                description: "TikTok表情符号列表"
            },
            {
                name: "🎨 人工智能表情生成器",
                url: "emojis.alexandru.so",
                description: "AI生成表情符号"
            },
            {
                name: "🔍 SearchEmoji",
                url: "searchemoji.app/zh-hans",
                description: "多语言Emoji搜索引擎"
            },
            {
                name: "🎨 Emoji Generator",
                url: "www.emoji.is",
                description: "表情符号生成器"
            },
            {
                name: "✂️ Emoji Tool",
                url: "emojitool.com",
                description: "表情符号复制粘贴工具"
            },
            {
                name: "🎨 tryemoji",
                url: "github.com/leptonai/tryemoji",
                description: "AI表情符号艺术生成"
            },
            {
                name: "🍳 Emoji Kitchen",
                url: "emoji.supply/kitchen",
                description: "表情符号混合生成器"
            },
            {
                name: "🤖 Slack Emoji",
                url: "github.com/cbh123/emoji",
                description: "Slack表情符号制作"
            },
            {
                name: "🖼️ 表情符号转图像",
                url: "emoji.aranja.com",
                description: "表情符号转图片工具"
            },
            {
                name: "🔗 Emojied",
                url: "emojied.net",
                description: "Emoji短链接生成器"
            },
            {
                name: "📚 Emojipedia",
                url: "emojipedia.org",
                description: "表情符号百科全书"
            },
            {
                name: "🎨 Emojimix",
                url: "emojimix.app",
                description: "在线表情符号混合器"
            },
            {
                name: "🎨 Emoji Supply",
                url: "github.com/alcor/emoji-supply",
                description: "表情符号资源库"
            },
            {
                name: "📝 Emoji Cheat Sheet",
                url: "www.webfx.com/tools/emoji-cheat-sheet",
                description: "Emoji速查表"
            },
            {
                name: "🏠 Emoji Homepage",
                url: "emojihomepage.com",
                description: "表情符号复制粘贴"
            },
            {
                name: "😋 Get Emoji",
                url: "getemoji.com",
                description: "表情符号复制工具"
            },
            {
                name: "📋 Emoji Copy",
                url: "www.emojicopy.com",
                description: "表情符号复制粘贴键盘"
            },
            {
                name: "⌨️ Emoji Keyboard",
                url: "emojikeyboard.org",
                description: "在线表情符号键盘"
            },
            {
                name: "🔐 Txtmoji",
                url: "txtmoji.com",
                description: "文本转表情符号加密"
            },
            {
                name: "🖼️ Emoji Wallpaper",
                url: "emoji.supply/wallpaper",
                description: "表情符号壁纸生成器"
            }
        ],
        dynamic: [
            {
                name: "EZGIF",
                url: "ezgif.com/",
                description: "GIF编辑器和制作工具"
            },
            {
                name: "MNG GIF Lab",
                url: "www.mnggiflab.com/product/video-to-gif",
                description: "在线免费视频转GIF工具"
            },
            {
                name: "Video to GIF",
                url: "lyonbot.github.io/video-to-gif/",
                description: "视频转GIF工具"
            },
            {
                name: "MisGIF",
                url: "misgif.app/",
                description: "AI驱动的表情包生成"
            },
            {
                name: "Hot Coubs",
                url: "coub.com/hot",
                description: "视频模因平台"
            },
            {
                name: "闪萌",
                url: "www.weshineapp.com/",
                description: "中文GIF搜索引擎"
            },
            {
                name: "GIPHY",
                url: "giphy.com/",
                description: "GIF动画平台"
            },
            {
                name: "GIFER",
                url: "gifer.com/en/",
                description: "GIF下载平台"
            },
            {
                name: "Motionity",
                url: "www.motionity.app/",
                description: "在线动态图形编辑器"
            },
            {
                name: "VSGIF",
                url: "vsgif.com/",
                description: "搞笑GIF和表情包分享"
            },
            {
                name: "Discopixel",
                url: "discopixel.app/",
                description: "像素艺术动画工具"
            },
            {
                name: "Video2GIF",
                url: "video2gif.cc/",
                description: "MP4转GIF转换器"
            },
            {
                name: "GIF Kit",
                url: "gifkit.com/zh/",
                description: "GIF工具包"
            },
            {
                name: "Glitch Generator",
                url: "glitchgenerator.com",
                description: "故障风格GIF生成器"
            },
            {
                name: "ShapeShifter",
                url: "github.com/alexjlockwood/ShapeShifter",
                description: "SVG图标动画工具"
            },
            {
                name: "AI GIFs",
                url: "aigifs.vercel.app/",
                description: "AI生成GIF"
            },
            {
                name: "Aspose GIF搜索",
                url: "products.aspose.app/imaging/zh-hans/image-search/gif",
                description: "反向GIF图片搜索"
            },
            {
                name: "很牛帮",
                url: "hnbang.com/",
                description: "GIF动态图片大全"
            },
            {
                name: "GIF Run",
                url: "gifrun.com/",
                description: "YouTube视频转GIF"
            },
            {
                name: "Trangram",
                url: "www.trangram.com/",
                description: "图形动画工具"
            },
            {
                name: "GIFGIF",
                url: "gifgif.media.mit.edu/",
                description: "GIF情感分析工具"
            },
            {
                name: "GIF中文网",
                url: "www.gif.cn/",
                description: "GIF制作和表情包生成"
            },
            {
                name: "SOOGIF",
                url: "www.soogif.com/",
                description: "GIF制作和合成工具"
            },
            {
                name: "DIY斗图神器",
                url: "www.diydoutu.com/",
                description: "表情包制作工具"
            },
            {
                name: "Gifntext",
                url: "www.gifntext.com/",
                description: "GIF文字和图片编辑器"
            },
            {
                name: "MakeaGIF",
                url: "makeagif.com/categories",
                description: "GIF分类和制作"
            },
            {
                name: "Gickr",
                url: "gickr.com/",
                description: "快速GIF制作工具"
            },
            {
                name: "Gif-in-gif",
                url: "gif-in-gif.com/",
                description: "无限缩放动画生成"
            },
            {
                name: "Piskel",
                url: "www.piskelapp.com/",
                description: "在线像素动画编辑器"
            },
            {
                name: "Motion Table",
                url: "foxcodex.html.xdomain.jp/",
                description: "动画表格工具"
            },
            {
                name: "GKA",
                url: "github.com/gkajs/gka",
                description: "帧动画生成工具"
            },
            {
                name: "eBaum's World",
                url: "www.ebaumsworld.com/",
                description: "搞笑图片和视频"
            },
            {
                name: "Bloggif",
                url: "zh.bloggif.com/",
                description: "GIF幻灯片制作"
            },
            {
                name: "GIF Cap",
                url: "gifcap.dev/",
                description: "屏幕录制转GIF"
            },
            {
                name: "动次",
                url: "dongci.kawo.com/",
                description: "视频转GIF工具"
            },
            {
                name: "GIF Shift",
                url: "gifshift.xyz/",
                description: "GIF特效工具"
            },
            {
                name: "GIF5工具网",
                url: "www.gif5.net/",
                description: "高清GIF制作工具"
            },
            {
                name: "MakeSweet",
                url: "makesweet.com/",
                description: "3D动画制作"
            },
            {
                name: "LoonaPix",
                url: "www.loonapix.com/",
                description: "照片特效工具"
            },
            {
                name: "Wick Editor",
                url: "www.wickeditor.com",
                description: "动画编辑器"
            },
            {
                name: "Rive",
                url: "rive.app/",
                description: "交互式动画工具"
            },
            {
                name: "Synfig",
                url: "www.synfig.org/",
                description: "开源动画软件"
            },
            {
                name: "Tumult Hype",
                url: "tumult.com/hype/",
                description: "动画制作工具"
            }
        ],
        wallpaper: [
            {
                name: "Alpha Coders",
                url: "alphacoders.com",
                description: "壁纸、艺术、摄影、GIF等资源"
            },
            {
                name: "暖糖壁纸",
                url: "www.nuantang.net",
                description: "电脑桌面壁纸 高清全屏"
            },
            {
                name: "WallpapersCraft",
                url: "wallpaperscraft.com",
                description: "高清桌面壁纸和背景"
            },
            {
                name: "Notes Art",
                url: "notes.art",
                description: "iPhone笔记艺术探索"
            },
            {
                name: "WallpaperWaifu",
                url: "wallpaperwaifu.com",
                description: "免费动态壁纸"
            },
            {
                name: "Gratisography",
                url: "gratisography.com",
                description: "免费高分辨率照片"
            },
            {
                name: "Konachan",
                url: "konachan.net",
                description: "动漫壁纸"
            },
            {
                name: "Wallhaven",
                url: "wallhaven.cc",
                description: "壁纸分享平台"
            },
            {
                name: "WSupercars",
                url: "www.wsupercars.com",
                description: "超级跑车壁纸"
            },
            {
                name: "花猫壁纸",
                url: "huamaobizhi.com",
                description: "年轻人专属壁纸平台"
            },
            {
                name: "Digital Blasphemy",
                url: "digitalblasphemy.com",
                description: "3D壁纸"
            },
            {
                name: "麦田艺术",
                url: "www.nbfox.com",
                description: "世界名画高清下载"
            },
            {
                name: "iPhone壁纸",
                url: "iphoneswallpapers.com",
                description: "iPhone系列壁纸"
            },
            {
                name: "哲风壁纸",
                url: "haowallpaper.com",
                description: "4K高清壁纸"
            },
            {
                name: "美图131",
                url: "www.meitu131.com",
                description: "美女图片和壁纸"
            },
            {
                name: "微软设计",
                url: "wallpapers.microsoft.design",
                description: "微软官方壁纸"
            },
            {
                name: "Vladstudio",
                url: "vlad.studio/wallpapers",
                description: "创意壁纸"
            },
            {
                name: "惜染图库",
                url: "hefollo.com",
                description: "图片资源库"
            },
            {
                name: "拾光壁纸",
                url: "snake.timeline.ink/home",
                description: "简洁壁纸网站"
            },
            {
                name: "壁纸湖网",
                url: "bizihu.com",
                description: "壁纸收藏平台"
            },
            {
                name: "一梦幽黎",
                url: "www.ymyouli.com",
                description: "壁纸分享"
            },
            {
                name: "Wallls",
                url: "wallls.com",
                description: "励志桌面壁纸"
            },
            {
                name: "Embraer",
                url: "embraer.com/global/en/media",
                description: "媒体画廊"
            },
            {
                name: "极简壁纸",
                url: "bz.zzzmh.cn",
                description: "4K超高清壁纸"
            },
            {
                name: "Dynamic Wallpaper Club",
                url: "dynamicwallpaper.club",
                description: "动态壁纸俱乐部"
            },
            {
                name: "Random Animal Generator",
                url: "www.randomanimalgenerator.top",
                description: "随机动物生成器"
            },
            {
                name: "美图集",
                url: "photo.ihansen.org",
                description: "高质量图片下载"
            },
            {
                name: "Wallpaper Cave",
                url: "wallpapercave.com",
                description: "壁纸分享平台"
            },
            {
                name: "RPIF",
                url: "www.lpi.usra.edu/library/LPI-RPIF",
                description: "行星图像设施"
            },
            {
                name: "Nastol",
                url: "www.nastol.com.ua",
                description: "桌面壁纸"
            }
        ],
        psd: [
            {
                name: "Resource Boy",
                url: "resourceboy.com",
                description: "免费图形设计资源"
            },
            {
                name: "Recraft",
                url: "www.recraft.ai",
                description: "AI设计工具"
            },
            {
                name: "Mockuuups Studio",
                url: "mockuuups.studio",
                description: "3400+模型生成器"
            },
            {
                name: "PSD Boom",
                url: "psdboom.com",
                description: "PSD图形设计元素和模板"
            },
            {
                name: "PSD Repo",
                url: "psdrepo.com",
                description: "12800+ Photoshop模板"
            },
            {
                name: "Rico'site",
                url: "ricocc.com",
                description: "设计师个人网站"
            },
            {
                name: "PSD Keys",
                url: "psdkeys.com",
                description: "Photoshop素材下载"
            },
            {
                name: "IMGBIN",
                url: "imgbin.com",
                description: "透明PNG图片下载"
            },
            {
                name: "Anthony Boyd Graphics",
                url: "www.anthonyboyd.graphics",
                description: "图形设计资源"
            },
            {
                name: "LS Graphics",
                url: "www.ls.graphics/free-mockups",
                description: "免费模型资源"
            },
            {
                name: "My Photoshop Brushes",
                url: "myphotoshopbrushes.com",
                description: "Photoshop笔刷下载"
            },
            {
                name: "Brusheezy",
                url: "www.brusheezy.com",
                description: "免费Photoshop笔刷"
            },
            {
                name: "Freepik",
                url: "www.freepik.com",
                description: "免费矢量图、照片和PSD"
            },
            {
                name: "World License Plates",
                url: "www.worldlicenseplates.com",
                description: "世界车牌图库"
            },
            {
                name: "Car Concepts AI",
                url: "www.carconceptsai.com",
                description: "汽车贴膜AI设计"
            },
            {
                name: "FreeImages",
                url: "www.freeimages.com/cn/psd",
                description: "免费PSD模板下载"
            }
        ],
        imgbed: [
            {
                name: "IPFS图床",
                url: "cdn.ipfsscan.io",
                description: "IPFS分布式图床"
            },
            {
                name: "Telegraph-Image",
                url: "im.gurl.eu.org",
                description: "免费图床服务"
            },
            {
                name: "公开照片",
                url: "public.photos",
                description: "公开照片分享平台"
            },
            {
                name: "VGY.me",
                url: "vgy.me",
                description: "简单图片托管服务"
            },
            {
                name: "敖武的图床",
                url: "playground.z.wiki/img-cloud/index.html",
                description: "免费图片上传和外链服务"
            },
            {
                name: "路过图床",
                url: "imgse.com",
                description: "专业图片外链服务"
            },
            {
                name: "免费图床",
                url: "www.picb.cc",
                description: "无限制保存,CDN加速"
            },
            {
                name: "OSS King",
                url: "www.ossking.com",
                description: "长期维护的图床服务"
            },
            {
                name: "IM.GE",
                url: "im.ge",
                description: "免费图片托管分享"
            },
            {
                name: "Telegraph-Image",
                url: "likunqi.top",
                description: "免费图床服务"
            },
            {
                name: "免费图床",
                url: "lvse.eu.org",
                description: "基础图床服务"
            },
            {
                name: "PicX",
                url: "lllyin.github.io/lyin/index.html#/upload",
                description: "图床神器"
            },
            {
                name: "SM.MS",
                url: "sm.ms",
                description: "简单免费图像托管"
            },
            {
                name: "16图床",
                url: "111666.best",
                description: "永久免费无需登录"
            },
            {
                name: "Postimages",
                url: "postimages.org",
                description: "免费图片托管上传"
            },
            {
                name: "聚合图床",
                url: "www.superbed.cn",
                description: "一键分发多处备份"
            },
            {
                name: "Meee图床",
                url: "meee.com.tw",
                description: "快速上传工具"
            },
            {
                name: "PicList",
                url: "piclist.cn",
                description: "图片管理工具"
            },
            {
                name: "CloudFlare-ImgBed",
                url: "github.com/MarSeventh/CloudFlare-ImgBed",
                description: "基于CloudFlare的图床"
            },
            {
                name: "骤雨重山图床",
                url: "wp-cdn.4ce.cn",
                description: "专业图床服务"
            }
        ],
        material: [
            {
                name: "Color4Bg",
                url: "www.color4bg.com/zh-hans/",
                description: "酷炫抽象动态背景生成器"
            },
            {
                name: "科迪福尔",
                url: "codioful.com/",
                description: "多色CSS渐变生成器"
            },
            {
                name: "LogoMVP",
                url: "logomvp.com/",
                description: "SaaS Logo生成器"
            },
            {
                name: "Optical Toys",
                url: "optical.toys/",
                description: "光学玩具效果生成器"
            },
            {
                name: "Background Generator",
                url: "bggenerator.com/",
                description: "随机背景图片生成器"
            },
            {
                name: "UI Notes",
                url: "uinotes.com/",
                description: "UI设计灵感库"
            },
            {
                name: "Vector.me",
                url: "cn.vector.me/",
                description: "免费插图搜索引擎"
            },
            {
                name: "BEIZ images",
                url: "www.beiz.jp/",
                description: "免费背景素材下载"
            },
            {
                name: "壁纸样机生成器",
                url: "mjcn.club/",
                description: "壁纸样机生成工具"
            },
            {
                name: "多设备模型生成器",
                url: "techsini.com/multi-mockup/index.php",
                description: "多设备网站模型生成"
            },
            {
                name: "Scatterjar",
                url: "scatterjar.com/",
                description: "免费食物照片"
            },
            {
                name: "Iwaria",
                url: "iwaria.com/",
                description: "非洲高质量照片"
            },
            {
                name: "UI Goodies",
                url: "uigoodies.com/",
                description: "设计资源工具目录"
            },
            {
                name: "Lorem Picsum",
                url: "picsum.photos/",
                description: "随机图片生成器"
            },
            {
                name: "大英博物馆",
                url: "www.britishmuseum.org/",
                description: "博物馆图片资源"
            },
            {
                name: "卢浮宫",
                url: "www.louvre.fr/",
                description: "博物馆图片资源"
            },
            {
                name: "高图网",
                url: "www.gaoimg.com/",
                description: "免费无版权高清图片"
            },
            {
                name: "365PSD",
                url: "365psd.com/",
                description: "PSD和矢量图资源"
            },
            {
                name: "Freebbble",
                url: "freebbble.com/",
                description: "Dribbble设计资源下载"
            },
            {
                name: "Freebiesbug",
                url: "freebiesbug.com/",
                description: "设计开发免费资源"
            }
        ],
        png: [
            {
                name: "免抠图片网",
                url: "www.miankoutupian.com",
                description: "免抠素材、透明背景图片、PNG图片素材"
            },
            {
                name: "VHV",
                url: "www.vhv.rs",
                description: "数百万免费透明PNG图片"
            },
            {
                name: "FindPng",
                url: "www.findpng.com",
                description: "免费在线AI Png制作工具、背景去除器"
            },
            {
                name: "Bg-patterns",
                url: "bg-patterns.com",
                description: "背景图案分发和创建网站"
            },
            {
                name: "PNGDirs",
                url: "www.pngdirs.com",
                description: "空白透明背景免抠PNG图片素材"
            },
            {
                name: "Icons8",
                url: "icons8.com",
                description: "免费图标、音乐、照片、矢量图"
            },
            {
                name: "Chamjo",
                url: "chamjo.design",
                description: "应用、游戏和网站设计灵感"
            },
            {
                name: "PNG素材网",
                url: "www.pngsucai.com",
                description: "免费高清透明PNG素材资源"
            },
            {
                name: "海记",
                url: "app.haikei.app",
                description: "设计工具"
            },
            {
                name: "PNGIMG",
                url: "pngimg.com",
                description: "10万+免费PNG图片"
            },
            {
                name: "Browser Logos",
                url: "github.com/alrra/browser-logos",
                description: "高分辨率Web浏览器徽标"
            },
            {
                name: "DWPNG",
                url: "dwpng.com",
                description: "免费透明PNG图片下载"
            },
            {
                name: "KissPNG",
                url: "www.cleanpng.com",
                description: "PNG图片资源"
            },
            {
                name: "SVG Silh",
                url: "svgsilh.com",
                description: "免费SVG图片和图标"
            },
            {
                name: "Reshot",
                url: "www.reshot.com",
                description: "免费照片资源"
            },
            {
                name: "高校标志库",
                url: "github.com/lovefc/china_school_badge",
                description: "全国高校标志字体图标库"
            },
            {
                name: "PNGHERO",
                url: "pnghero.com",
                description: "免费透明PNG图片"
            },
            {
                name: "Snipstock",
                url: "snipstock.com",
                description: "免费PNG和PSD格式抠图"
            }
        ],
        photography: [
            {
                name: "蜂鸟网",
                url: "www.fengniao.com/",
                description: "专业摄影网站"
            },
            {
                name: "新摄影",
                url: "www.nphoto.net/news/list/06/",
                description: "摄影资讯网站"
            },
            {
                name: "500px",
                url: "500px.com/popular",
                description: "国际摄影社区"
            },
            {
                name: "500px摄影社区",
                url: "500px.com.cn/community/discover?t=rating",
                description: "中国摄影社区"
            },
            {
                name: "色影无忌",
                url: "ww.xitek.com/",
                description: "摄影器材评测"
            },
            {
                name: "色影无忌论坛",
                url: "forum.xitek.com/forum.php",
                description: "摄影交流论坛"
            },
            {
                name: "National Geographic",
                url: "www.nationalgeographic.com/",
                description: "国家地理杂志"
            },
            {
                name: "国家地理中文网",
                url: "www.ngchina.com.cn/",
                description: "国家地理中文版"
            },
            {
                name: "中国国家地理网",
                url: "www.dili360.com/",
                description: "地理摄影网站"
            },
            {
                name: "Leonid Afremov",
                url: "pics4print.wordpress.com/",
                description: "艺术家作品集"
            },
            {
                name: "Michael Kenna",
                url: "www.michaelkenna.com/",
                description: "摄影师作品集"
            },
            {
                name: "New Old Stock",
                url: "nos.twnsnd.co/",
                description: "老照片收藏"
            },
            {
                name: "Luke Stephenson",
                url: "www.lukestephenson.com/",
                description: "摄影师作品集"
            },
            {
                name: "IPPAWARDS",
                url: "www.ippawards.com/",
                description: "iPhone摄影奖"
            },
            {
                name: "Camarts",
                url: "camarts.app/",
                description: "摄影应用"
            },
            {
                name: "秋影随行",
                url: "qiuliang.com/",
                description: "摄影教程"
            },
            {
                name: "峰鸟网摄影后期",
                url: "academy.fengniao.com/list_969.html",
                description: "后期教程"
            },
            {
                name: "单反模拟器",
                url: "www.howzhi.com/camera/play",
                description: "相机模拟器"
            },
            {
                name: "索尼风景图",
                url: "www.sony.net/united/clock/",
                description: "风景摄影"
            },
            {
                name: "LittleBigWorld",
                url: "www.youtube.com/user/LittleBigWorld/videos#0",
                description: "微缩摄影"
            }
        ],
        icon: [
            {
                name: "Game-icons.net",
                url: "game-icons.net/",
                description: "4149个免费SVG和PNG图标"
            },
            {
                name: "Weather Icons",
                url: "erikflowers.github.io/weather-icons/",
                description: "222个受Font Awesome启发的天气图标"
            },
            {
                name: "Icon Horse",
                url: "icon.horse/",
                description: "图标搜索引擎"
            },
            {
                name: "useAnimations",
                url: "useanimations.com/",
                description: "微动画库"
            },
            {
                name: "CSS.gg",
                url: "css.gg/",
                description: "700+可定制的CSS图标"
            },
            {
                name: "Glyphs",
                url: "glyphs.fyi/",
                description: "完整的图标设计系统"
            },
            {
                name: "icongo",
                url: "icongo.github.io/",
                description: "SVG图标搜索"
            },
            {
                name: "igoutu",
                url: "igoutu.cn/",
                description: "免费图标、剪贴画、照片和音乐"
            },
            {
                name: "iconLibrary",
                url: "iconlibrary.framer.website/",
                description: "Framer图标库"
            },
            {
                name: "Ionic",
                url: "ionic.io/",
                description: "企业应用开发平台"
            },
            {
                name: "3dicons",
                url: "3dicons.co/",
                description: "开源3D图标库"
            },
            {
                name: "Pictogram2",
                url: "pictogram2.com/",
                description: "免费矢量人物象形图"
            },
            {
                name: "SVG Loaders",
                url: "magecdn.com/tools/svg-loaders",
                description: "开源SVG加载图标"
            },
            {
                name: "Fluenticons",
                url: "fluenticons.co/",
                description: "Fluent设计系统图标"
            },
            {
                name: "Iconbuddy",
                url: "iconbuddy.app/",
                description: "18万+开源图标"
            },
            {
                name: "Toools.design",
                url: "www.toools.design/",
                description: "1000+设计资源存档"
            },
            {
                name: "Iconic",
                url: "iconic.app/",
                description: "像素级完美图标"
            },
            {
                name: "Axmax",
                url: "axmax.cn/",
                description: "Axure图标库"
            },
            {
                name: "Phosphor Icons",
                url: "phosphoricons.com/",
                description: "灵活的开源图标集"
            },
            {
                name: "Fluent UI System Icons",
                url: "github.com/microsoft/fluentui-system-icons",
                description: "Microsoft Fluent系统图标"
            }
        ],
        illustration: [
            {
                name: "Ultima",
                url: "ultima.storytale.io",
                description: "750+免费插画"
            },
            {
                name: "Pixels Market",
                url: "pixels.market",
                description: "15000+免费插画下载"
            },
            {
                name: "illlustrations",
                url: "illlustrations.co",
                description: "开源插画套件"
            },
            {
                name: "Vectorcraftr",
                url: "vectorcraftr.com",
                description: "免费SVG插画库"
            },
            {
                name: "Pictographic",
                url: "pictographic.io",
                description: "插画素材"
            },
            {
                name: "遗产类型公司",
                url: "heritagetype.com",
                description: "插画素材"
            },
            {
                name: "Ilus AI",
                url: "ilus.ai",
                description: "AI插画生成器"
            },
            {
                name: "Open Peeps",
                url: "openpeeps.com",
                description: "手绘插画库"
            },
            {
                name: "CocoMaterial",
                url: "cocomaterial.com",
                description: "可可材料插画"
            },
            {
                name: "Humaaans",
                url: "humaaans.com",
                description: "混合匹配插画库"
            },
            {
                name: "Transhumans",
                url: "transhumans.xyz",
                description: "开源朋克科幻艺术集"
            },
            {
                name: "Open Doodles",
                url: "opendoodles.com",
                description: "免费手绘插画"
            },
            {
                name: "アボガド6",
                url: "avogado6.com",
                description: "插画素材"
            },
            {
                name: "Artvee",
                url: "artvee.com",
                description: "艺术插画"
            },
            {
                name: "松散绘图",
                url: "loosedrawing.com",
                description: "插画素材"
            },
            {
                name: "時短だ",
                url: "jitanda.com",
                description: "插画素材网站"
            },
            {
                name: "Bon Design",
                url: "bon.design",
                description: "市售免费插画素材"
            },
            {
                name: "GRAFOLIO",
                url: "grafolio.naver.com",
                description: "创作者平台"
            },
            {
                name: "POIPIKU",
                url: "poipiku.com",
                description: "插画盒子"
            },
            {
                name: "IllustrationX",
                url: "illustrationx.com",
                description: "插画代理"
            }
        ],
        stockphoto: [
            {
                name: "StockCake",
                url: "stockcake.com",
                description: "免费图片素材"
            },
            {
                name: "Lummi Photos",
                url: "lummi.ai",
                description: "AI图片生成"
            },
            {
                name: "PIXNIO",
                url: "pixnio.com",
                description: "公共领域图片"
            },
            {
                name: "Piqsels",
                url: "piqsels.com",
                description: "免版税照片"
            },
            {
                name: "开放宇宙",
                url: "openverse.org",
                description: "公开许可媒体搜索"
            },
            {
                name: "Public Work",
                url: "public.work",
                description: "公共作品"
            },
            {
                name: "cc0图片网",
                url: "cc0.cn",
                description: "免费商用图片"
            },
            {
                name: "Romain Laurent",
                url: "romain-laurent.com",
                description: "摄影师作品"
            },
            {
                name: "Pexels",
                url: "pexels.com",
                description: "免费图片素材"
            },
            {
                name: "StockSnap",
                url: "stocksnap.io",
                description: "免费商用照片"
            },
            {
                name: "Burst",
                url: "burst.shopify.com",
                description: "商业用途图片"
            },
            {
                name: "Foodiesfeed",
                url: "foodiesfeed.com",
                description: "美食图片"
            },
            {
                name: "OGimage",
                url: "ogimage.gallery",
                description: "精选图片"
            },
            {
                name: "Picography",
                url: "picography.co",
                description: "免费照片"
            },
            {
                name: "FreePhotos",
                url: "freephotos.cc",
                description: "免版税图片"
            },
            {
                name: "Bucketlistly",
                url: "bucketlistly.blog/photos",
                description: "旅行照片"
            },
            {
                name: "Picjumbo",
                url: "picjumbo.com",
                description: "免费图片素材"
            },
            {
                name: "SplitShire",
                url: "splitshire.com",
                description: "免费商用照片"
            },
            {
                name: "Kaboompics",
                url: "kaboompics.com",
                description: "免费图片"
            },
            {
                name: "Skitterphoto",
                url: "skitterphoto.com",
                description: "公共领域图片"
            }
        ]
    };

    // 获取DOM元素
    const categories = document.querySelectorAll('.category');
    const currentCategory = document.getElementById('current-category');
    const siteGrids = {
        emoji: document.getElementById('emoji-sites'),
        dynamic: document.getElementById('dynamic-sites'),
        wallpaper: document.getElementById('wallpaper-sites'),
        psd: document.getElementById('psd-sites'),
        imgbed: document.getElementById('imgbed-sites'),
        material: document.getElementById('material-sites'),
        png: document.getElementById('png-sites'),
        photography: document.getElementById('photography-sites'),
        icon: document.getElementById('icon-sites'),
        illustration: document.getElementById('illustration-sites'),
        stockphoto: document.getElementById('stockphoto-sites')
    };
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    // 二维码弹窗相关元素
    const modal = document.getElementById('qrcode-modal');
    const contactBtn = document.getElementById('contact-btn');
    const footerContact = document.getElementById('footer-contact');
    const closeBtn = document.querySelector('.close');

    // 函数：创建网站卡片
    function createSiteCard(site) {
        return `
            <div class="site-card">
                <div class="site-content">
                    <div class="site-name">${site.name}</div>
                    <div class="site-url">${site.url}</div>
                    <div class="site-desc">${site.description}</div>
                    <a href="https://${site.url}" target="_blank" class="site-link">访问网站</a>
                </div>
            </div>
        `;
    }

    // 函数：渲染网站列表
    function renderSites(category) {
        const grid = siteGrids[category];
        const sites = siteData[category];
        
        grid.innerHTML = '';
        
        sites.forEach(site => {
            grid.innerHTML += createSiteCard(site);
        });
    }

    // 函数：切换分类
    function switchCategory(category) {
        // 隐藏所有网站列表
        Object.values(siteGrids).forEach(grid => {
            grid.style.display = 'none';
        });
        
        // 显示选中的网站列表
        siteGrids[category].style.display = 'grid';
        
        // 更新分类标题
        let icon = '';
        let title = '';
        
        switch(category) {
            case 'emoji':
                icon = '<i class="far fa-smile"></i>';
                title = 'Emoji表情';
                break;
            case 'dynamic':
                icon = '<i class="fas fa-images"></i>';
                title = '动态图片';
                break;
            case 'wallpaper':
                icon = '<i class="far fa-image"></i>';
                title = '高清壁纸';
                break;
            case 'psd':
                icon = '<i class="fas fa-object-group"></i>';
                title = 'PSD素材';
                break;
            case 'imgbed':
                icon = '<i class="fas fa-cloud-upload-alt"></i>';
                title = '图床工具';
                break;
            case 'material':
                icon = '<i class="fas fa-palette"></i>';
                title = '素材纹理';
                break;
            case 'png':
                icon = '<i class="far fa-file-image"></i>';
                title = 'PNG素材';
                break;
            case 'photography':
                icon = '<i class="fas fa-camera"></i>';
                title = '摄影资源';
                break;
            case 'icon':
                icon = '<i class="fas fa-icons"></i>';
                title = '图标资源';
                break;
            case 'illustration':
                icon = '<i class="fas fa-paint-brush"></i>';
                title = '插图素材';
                break;
            case 'stockphoto':
                icon = '<i class="fas fa-photo-video"></i>';
                title = '图片素材';
                break;
        }
        
        currentCategory.innerHTML = `${icon} ${title}`;
        
        // 更新分类按钮样式
        categories.forEach(cat => {
            cat.classList.remove('active');
            if (cat.dataset.category === category) {
                cat.classList.add('active');
            }
        });
    }

    // 函数：搜索网站
    function searchSites() {
        const query = searchInput.value.toLowerCase().trim();
        if (!query) return;
        
        let results = [];
        
        // 在所有分类中搜索
        Object.keys(siteData).forEach(category => {
            const matchedSites = siteData[category].filter(site => 
                site.name.toLowerCase().includes(query) || 
                site.url.toLowerCase().includes(query) || 
                site.description.toLowerCase().includes(query)
            );
            
            results = results.concat(matchedSites.map(site => ({
                ...site,
                category
            })));
        });
        
        // 清空并显示搜索结果
        Object.values(siteGrids).forEach(grid => {
            grid.style.display = 'none';
        });
        
        siteGrids.emoji.style.display = 'grid';
        siteGrids.emoji.innerHTML = '';
        
        if (results.length === 0) {
            siteGrids.emoji.innerHTML = '<div class="no-results">没有找到匹配的结果</div>';
        } else {
            results.forEach(site => {
                siteGrids.emoji.innerHTML += createSiteCard(site);
            });
        }
        
        currentCategory.innerHTML = `<i class="fas fa-search"></i> 搜索结果: ${query}`;
        
        // 清除分类按钮的选中状态
        categories.forEach(cat => {
            cat.classList.remove('active');
        });
    }

    // 函数：显示二维码弹窗
    function showQRCodeModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }

    // 函数：关闭二维码弹窗
    function closeQRCodeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // 恢复背景滚动
    }

    // 函数：打开二维码页面
    function openQRCodePage() {
        window.open('contact.html', '_blank');
    }

    // 初始化：渲染所有分类的网站
    Object.keys(siteData).forEach(category => {
        renderSites(category);
    });

    // 设置默认显示的分类
    document.querySelector('.category[data-category="emoji"]').classList.add('active');
    switchCategory('emoji');

    // 事件监听：分类切换
    categories.forEach(category => {
        category.addEventListener('click', function() {
            const categoryName = this.dataset.category;
            switchCategory(categoryName);
        });
    });

    // 事件监听：搜索
    searchBtn.addEventListener('click', searchSites);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchSites();
        }
    });

    // 事件监听：显示二维码弹窗
    contactBtn.addEventListener('click', function(e) {
        // 检查是否支持弹窗
        if (window.innerWidth <= 480) {
            // 在小屏幕设备上直接打开新页面
            openQRCodePage();
        } else {
            // 在大屏幕设备上显示弹窗
            showQRCodeModal();
        }
    });
    
    footerContact.addEventListener('click', function(e) {
        e.preventDefault();
        if (window.innerWidth <= 480) {
            openQRCodePage();
        } else {
            showQRCodeModal();
        }
    });

    // 在弹窗中添加"在新窗口中打开"链接
    const qrcodeContainer = document.querySelector('.qrcode-container');
    if (qrcodeContainer) {
        const openNewWindowLink = document.createElement('a');
        openNewWindowLink.href = 'contact.html';
        openNewWindowLink.target = '_blank';
        openNewWindowLink.className = 'open-qrcode-page';
        openNewWindowLink.textContent = '在新窗口中打开';
        openNewWindowLink.style.display = 'inline-block';
        openNewWindowLink.style.marginTop = '10px';
        openNewWindowLink.style.color = 'var(--primary-color)';
        openNewWindowLink.style.fontSize = '14px';
        qrcodeContainer.appendChild(openNewWindowLink);
    }

    // 事件监听：关闭二维码弹窗
    closeBtn.addEventListener('click', closeQRCodeModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeQRCodeModal();
        }
    });

    // 按ESC键关闭弹窗
    window.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeQRCodeModal();
        }
    });
}); 